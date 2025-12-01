import { Component, computed, DestroyRef, effect, ElementRef, inject, input, output, signal, viewChild } from '@angular/core';
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
  readonly showAllImages = signal(false);
  readonly selectedImages = signal<Image[]>([]);
  readonly uploadLoading = signal(false);
  readonly allImages = signal<Image[]>([]);
  readonly loading = signal(false);
  private readonly abortController = new AbortController();

  // Computed
  readonly availableImages = computed(() => {
    const all = this.allImages();
    const showAll = this.showAllImages();

    if (showAll) {
      return all;
    } else {
      return all.filter(img => img.tags?.includes('carousel'));
    }
  });

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

    // Effect pour charger les images au démarrage
    effect(() => {
      this.loadImages();
    });

    // Annuler le resource lors de la destruction
    this.destroyRef.onDestroy(() => {
      this.abortController.abort();
    });
  }

  private async loadImages(): Promise<void> {
    const currentUser = this.userStorage.user();
    if (!currentUser) {
      console.warn('⚠️ Cannot load images: user not authenticated');
      this.allImages.set([]);
      return;
    }

    this.loading.set(true);

    try {
      const images = await this.imageService.getImages({
        take: 100,
        orderBy: 'createdAt',
      });
      this.allImages.set(images || []);
    } catch (err) {
      console.error('Error loading images:', err);
      this.allImages.set([]);

      const errorObj = err as { status?: number; message?: string; statusText?: string };
      if (errorObj.status === 401) {
        console.error('❌ 401 Unauthorized: User token may be invalid or expired');
      }
    } finally {
      this.loading.set(false);
    }
  }

  private reloadImages(): void {
    this.loadImages();
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

  toggleSelectAll(): void {
    const hasSelection = this.selectedImages().length > 0;

    if (hasSelection) {
      this.selectedImages.set([]);
      this.snackBar.open(
        this.translate.instant('CAROUSEL_CONFIG.ALL_DESELECTED'),
        this.translate.instant('MESSAGES.CLOSE'),
        { duration: 2000 }
      );
    } else {
      const available = this.availableImages();
      this.selectedImages.set([...available]);
      this.snackBar.open(
        this.translate.instant('CAROUSEL_CONFIG.ALL_SELECTED'),
        this.translate.instant('MESSAGES.CLOSE'),
        { duration: 2000 }
      );
    }
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
        return this.imageService.updateImage(image.id, { tags });
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

  async toggleCarouselTagForSelected(): Promise<void> {
    const selected = this.selectedImages();
    if (selected.length === 0) {
      return;
    }

    try {
      // Pour chaque image sélectionnée, toggler le tag carousel
      const updatePromises = selected.map(image => {
        const currentTags = image.tags || [];
        const hasCarouselTag = currentTags.includes('carousel');

        const tags = hasCarouselTag
          ? currentTags.filter(tag => tag !== 'carousel')
          : [...currentTags, 'carousel'];

        return this.imageService.updateImage(image.id, { tags });
      });

      await Promise.all(updatePromises);

      // Compter combien d'images avaient le tag avant
      const withCarouselTag = selected.filter(img => img.tags?.includes('carousel')).length;
      const addedCount = selected.length - withCarouselTag;
      const removedCount = withCarouselTag;

      const messageKey = addedCount > 0
        ? 'CAROUSEL_CONFIG.CAROUSEL_TAG_ADDED'
        : 'CAROUSEL_CONFIG.CAROUSEL_TAG_REMOVED';

      this.snackBar.open(
        this.translate.instant(messageKey, { count: addedCount > 0 ? addedCount : removedCount }),
        this.translate.instant('MESSAGES.CLOSE'),
        { duration: 3000 }
      );

      // Recharger la liste et vider la sélection
      this.reloadImages();
      this.selectedImages.set([]);
    } catch (error) {
      console.error('Erreur lors du toggle du tag carousel:', error);
      this.snackBar.open(
        this.translate.instant('CAROUSEL_CONFIG.ERROR_TOGGLING_TAG'),
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
        });

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

    this.imageService.updateImage(image.id, { isPublic: !image.isPublic })
      .then((updatedImage: Image) => {
        // Mettre à jour l'image localement
        Object.assign(image, { isPublic: updatedImage.isPublic });
        this.snackBar.open(
          updatedImage.isPublic
            ? 'Image rendue publique'
            : 'Image rendue privée',
          this.translate.instant('MESSAGES.CLOSE'),
          { duration: 2000 }
        );
      })
      .catch((error: unknown) => {
        console.error('Erreur lors de la mise à jour du statut:', error);
        this.snackBar.open(
          'Erreur lors de la mise à jour',
          this.translate.instant('MESSAGES.CLOSE'),
          { duration: 3000 }
        );
      });
  }
}
