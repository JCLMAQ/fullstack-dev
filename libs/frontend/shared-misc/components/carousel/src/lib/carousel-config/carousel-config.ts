import { Component, computed, DestroyRef, effect, ElementRef, inject, input, output, resource, signal, viewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import type { Image } from '@db/prisma';
import { UserStorageService } from '@fe/auth';
import { ImageService } from '@fe/image-mgt';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'lib-carousel-config',
  imports: [
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    TranslateModule,
  ],
  templateUrl: './carousel-config.html',
  styleUrl: './carousel-config.scss'
})
export class CarouselConfig {
  private readonly imageService = inject(ImageService);
  private readonly userStorage = inject(UserStorageService);
  private readonly snackBar = inject(MatSnackBar);
  private readonly translate = inject(TranslateService);
  private readonly destroyRef = inject(DestroyRef);

  // ViewChild pour l'input file
  readonly fileInput = viewChild<ElementRef<HTMLInputElement>>('fileInput');

  // Inputs
  readonly initialImages = input<Image[]>([]);

  // Outputs
  readonly save = output<Image[]>();
  readonly closed = output<void>();

  // State - Utilisation de resource pour charger les images
  private readonly refreshTrigger = signal(0);
  private readonly abortController = new AbortController();

  readonly imagesResource = resource({
    loader: async ({ abortSignal }) => {
      // Lire le signal pour créer une dépendance réactive
      this.refreshTrigger();

      // Vérifier si l'opération est annulée
      if (abortSignal.aborted) {
        throw new Error('Operation aborted');
      }

      // ⚠️ Vérifier l'authentification avant de charger les images
      const currentUser = this.userStorage.user();
      if (!currentUser) {
        console.warn('⚠️ Cannot load images: user not authenticated');
        return [];
      }

      // Dépendance sur le mode d'affichage
      const showAll = this.showAllImages();

      try {
        const images = showAll
          ? await this.imageService
              .getImages({
                take: 100,
                orderBy: 'createdAt',
              })
              .toPromise()
          : await this.imageService
              .getImagesByTags(['carousel'], {
                take: 50,
                orderBy: 'createdAt',
              })
              .toPromise();
        return images || [];
      } catch (err) {
        // Convertir les erreurs HTTP en Error pour resource()
        if (err instanceof Error) {
          throw err;
        }
        const errorObj = err as { status?: number; message?: string; statusText?: string };
        const errorMessage = errorObj.message || errorObj.statusText || `HTTP Error ${errorObj.status || 'Unknown'}`;

        // Log spécifique pour 401
        if (errorObj.status === 401) {
          console.error('❌ 401 Unauthorized: User token may be invalid or expired');
        }

        throw new Error(errorMessage);
      }
    }
  });

  readonly selectedImages = signal<Image[]>([]);
  readonly uploadLoading = signal(false);
  readonly showAllImages = signal(false);

  // Computed
  readonly availableImages = computed(() => this.imagesResource.value() ?? []);
  readonly loading = computed(() => this.imagesResource.isLoading() || this.uploadLoading());
  readonly selectedImageIds = computed(() =>
    this.selectedImages().map((img) => img.id)
  );

  constructor() {
    // Effect pour initialiser les images sélectionnées depuis l'input
    effect(() => {
      const initial = this.initialImages();
      if (initial.length > 0) {
        this.selectedImages.set([...initial]);
      }
    });

    // Annuler le resource lors de la destruction
    this.destroyRef.onDestroy(() => {
      this.abortController.abort();
    });
  }

  private reloadImages(): void {
    this.refreshTrigger.update(v => v + 1);
  }

  getImageUrl(image: Image): string {
    return this.imageService.getFullImageUrl(image, true);
  }

  isSelected(imageId: string): boolean {
    return this.selectedImageIds().includes(imageId);
  }

  toggleImageSelection(image: Image): void {
    const currentSelection = this.selectedImages();
    const isCurrentlySelected = this.isSelected(image.id);

    if (isCurrentlySelected) {
      this.selectedImages.set(
        currentSelection.filter((img) => img.id !== image.id)
      );
    } else {
      this.selectedImages.set([...currentSelection, image]);
    }
  }

  onSave(): void {
    this.save.emit(this.selectedImages());
  }

  onCancel(): void {
    this.closed.emit();
  }

  onClearSelection(): void {
    this.selectedImages.set([]);
  }

  selectAll(): void {
    this.selectedImages.set([...this.availableImages()]);
    this.snackBar.open(
      this.translate.instant('CAROUSEL_CONFIG.ALL_SELECTED'),
      this.translate.instant('MESSAGES.CLOSE'),
      { duration: 2000 }
    );
  }

  async removeCarouselTagFromSelected(): Promise<void> {
    const selected = this.selectedImages();
    if (selected.length === 0) {
      return;
    }

    try {
      // Pour chaque image sélectionnée, retirer le tag carousel
      const updatePromises = selected.map(image => {
        const tags = (image.tags || []).filter(tag => tag !== 'carousel');
        return this.imageService.updateImage(image.id, { tags }).toPromise();
      });

      await Promise.all(updatePromises);

      this.snackBar.open(
        this.translate.instant('CAROUSEL_CONFIG.CAROUSEL_TAG_REMOVED', { count: selected.length }),
        this.translate.instant('MESSAGES.CLOSE'),
        { duration: 3000 }
      );

      // Recharger la liste et vider la sélection
      this.reloadImages();
      this.selectedImages.set([]);
    } catch (error) {
      console.error('Erreur lors de la suppression du tag carousel:', error);
      this.snackBar.open(
        this.translate.instant('CAROUSEL_CONFIG.ERROR_REMOVING_TAG'),
        this.translate.instant('MESSAGES.CLOSE'),
        { duration: 3000 }
      );
    }
  }

  toggleLibraryMode(): void {
    this.showAllImages.update(v => !v);
    this.selectedImages.set([]);
  }

  removeFromSelection(image: Image): void {
    const currentSelection = this.selectedImages();
    this.selectedImages.set(currentSelection.filter((img) => img.id !== image.id));

    this.snackBar.open(
      this.translate.instant('CAROUSEL_CONFIG.IMAGE_REMOVED'),
      this.translate.instant('MESSAGES.CLOSE'),
      { duration: 2000 }
    );
  }

  onUploadImages(): void {
    const input = this.fileInput()?.nativeElement;
    if (input) {
      input.click();
    }
  }

  async onFileSelected(event: Event): Promise<void> {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) {
      return;
    }

    const user = this.userStorage.user();
    console.log('🔍 Upload - User:', user ? `ID: ${user.id}, Email: ${user.email}` : 'Not found');

    if (!user) {
      this.snackBar.open(
        this.translate.instant('CAROUSEL_CONFIG.ERROR_NO_USER'),
        this.translate.instant('MESSAGES.CLOSE'),
        { duration: 3000 }
      );
      return;
    }

    this.uploadLoading.set(true);
    const files = input.files;
    console.log('📤 Uploading', files.length, 'files for user:', user.id);

    try {
      // Upload des fichiers avec Promise
      const images = await this.imageService
        .uploadMultipleFiles(files, {
          uploadedById: user.id,
          isPublic: true,
          tags: ['carousel'],
        })
        .toPromise();

      if (!images) {
        throw new Error('No images returned from upload');
      }

      console.log('✅ Upload successful:', images.length, 'images');
      this.uploadLoading.set(false);

      // Recharger la liste des images
      this.reloadImages();

      // Ajouter automatiquement les nouvelles images à la sélection
      const currentSelection = this.selectedImages();
      this.selectedImages.set([...currentSelection, ...images]);

      this.snackBar.open(
        this.translate.instant('CAROUSEL_CONFIG.UPLOAD_SUCCESS', { count: images.length }),
        this.translate.instant('MESSAGES.CLOSE'),
        { duration: 3000 }
      );

      // Réinitialiser l'input
      input.value = '';
    } catch (err: unknown) {
      console.error('❌ Error uploading images:', err);
      const errorObj = err as { status?: number; statusText?: string; message?: string; error?: unknown };
      console.error('❌ Error details:', {
        status: errorObj.status,
        statusText: errorObj.statusText,
        message: errorObj.message,
        error: errorObj.error
      });

      this.uploadLoading.set(false);

      let errorMessage = this.translate.instant('CAROUSEL_CONFIG.ERROR_UPLOAD');

      // Message d'erreur spécifique pour 401
      if (errorObj.status === 401) {
        errorMessage = this.translate.instant('CAROUSEL_CONFIG.ERROR_UNAUTHORIZED');
      }

      this.snackBar.open(
        errorMessage,
        this.translate.instant('MESSAGES.CLOSE'),
        { duration: 5000 }
      );
      input.value = '';
    }
  }

  togglePublicStatus(image: Image, event: Event): void {
    event.stopPropagation();

    this.imageService.updateImage(image.id, { isPublic: !image.isPublic }).subscribe({
      next: (updatedImage) => {
        // Mettre à jour l'image localement
        Object.assign(image, { isPublic: updatedImage.isPublic });
        this.snackBar.open(
          updatedImage.isPublic
            ? 'Image rendue publique'
            : 'Image rendue privée',
          this.translate.instant('MESSAGES.CLOSE'),
          { duration: 2000 }
        );
      },
      error: (error) => {
        console.error('Erreur lors de la mise à jour du statut:', error);
        this.snackBar.open(
          'Erreur lors de la mise à jour',
          this.translate.instant('MESSAGES.CLOSE'),
          { duration: 3000 }
        );
      }
    });
  }
}
