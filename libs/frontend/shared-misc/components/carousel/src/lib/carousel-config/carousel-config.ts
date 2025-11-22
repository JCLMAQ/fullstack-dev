import { Component, computed, ElementRef, inject, input, output, signal, viewChild } from '@angular/core';
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

  // ViewChild pour l'input file
  readonly fileInput = viewChild<ElementRef<HTMLInputElement>>('fileInput');

  // Inputs
  readonly initialImages = input<Image[]>([]);

  // Outputs
  readonly save = output<Image[]>();
  readonly closed = output<void>();

  // State
  readonly loading = signal(false);
  readonly availableImages = signal<Image[]>([]);
  readonly selectedImages = signal<Image[]>([]);

  // Computed
  readonly selectedImageIds = computed(() =>
    this.selectedImages().map((img) => img.id)
  );

  constructor() {
    this.loadImages();
    // Initialize selected images from input
    if (this.initialImages().length > 0) {
      this.selectedImages.set([...this.initialImages()]);
    }
  }

  private loadImages(): void {
    this.loading.set(true);

    this.imageService
      .getImages({
        isPublic: true,
        take: 50,
        orderBy: 'createdAt',
      })
      .subscribe({
        next: (images) => {
          this.availableImages.set(images);
          this.loading.set(false);
        },
        error: (err) => {
          console.error('Error loading images:', err);
          this.loading.set(false);
        },
      });
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

  onUploadImages(): void {
    const input = this.fileInput()?.nativeElement;
    if (input) {
      input.click();
    }
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) {
      return;
    }

    const user = this.userStorage.user();
    if (!user) {
      this.snackBar.open(
        this.translate.instant('CAROUSEL_CONFIG.ERROR_NO_USER'),
        this.translate.instant('MESSAGES.CLOSE'),
        { duration: 3000 }
      );
      return;
    }

    this.loading.set(true);
    const files = input.files;

    // Upload des fichiers
    this.imageService
      .uploadMultipleFiles(files, {
        uploadedById: user.id,
        isPublic: true,
        tags: ['carousel'],
      })
      .subscribe({
        next: (images) => {
          this.loading.set(false);

          // Recharger la liste des images
          this.loadImages();

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
        },
        error: (err) => {
          console.error('Error uploading images:', err);
          this.loading.set(false);
          this.snackBar.open(
            this.translate.instant('CAROUSEL_CONFIG.ERROR_UPLOAD'),
            this.translate.instant('MESSAGES.CLOSE'),
            { duration: 5000 }
          );
          input.value = '';
        },
      });
  }
}
