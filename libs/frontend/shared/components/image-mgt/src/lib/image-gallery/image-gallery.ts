import { CommonModule } from '@angular/common';
import { Component, computed, inject, input, output, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Image } from '@db/prisma';
import { TranslateModule } from '@ngx-translate/core';
import { ImageViewerComponent } from '../image-viewer/image-viewer';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'lib-image-gallery',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatChipsModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    TranslateModule
  ],
  template: `
    <div class="image-gallery">
      <!-- Header avec actions globales -->
      <div class="gallery-header" *ngIf="showActions()">
        <div class="gallery-actions">
          <button mat-raised-button color="primary" (click)="selectAll()">
            {{ 'IMAGE_GALLERY.SELECT_ALL' | translate }}
          </button>
          <button mat-raised-button (click)="clearSelection()" [disabled]="selectedImages().length === 0">
            {{ 'IMAGE_GALLERY.CLEAR_SELECTION' | translate }}
          </button>
          <button mat-raised-button color="warn" (click)="deleteSelected()" [disabled]="selectedImages().length === 0">
            {{ 'IMAGE_GALLERY.DELETE_SELECTED' | translate }} ({{ selectedImages().length }})
          </button>
        </div>
        <div class="gallery-info">
          {{ images().length }} {{ 'IMAGE_GALLERY.IMAGES_TOTAL' | translate }}
          <span *ngIf="selectedImages().length > 0">
            - {{ selectedImages().length }} {{ 'IMAGE_GALLERY.SELECTED' | translate }}
          </span>
        </div>
      </div>

      <!-- Chargement -->
      <div class="loading-container" *ngIf="loading()">
        <mat-progress-spinner diameter="50"></mat-progress-spinner>
        <p>{{ 'IMAGE_GALLERY.LOADING' | translate }}</p>
      </div>

      <!-- Galerie d'images -->
      <div class="gallery-grid" *ngIf="!loading() && images().length > 0">
        <div
          class="image-card"
          *ngFor="let image of images(); trackBy: trackByImageId"
          [class.selected]="isSelected(image.id)"
          (click)="onImageClick(image)"
        >
          <!-- Checkbox de sélection -->
          <div class="selection-overlay" *ngIf="selectionMode()">
            <mat-icon class="selection-icon">
              {{ isSelected(image.id) ? 'check_circle' : 'radio_button_unchecked' }}
            </mat-icon>
          </div>

          <!-- Miniature de l'image -->
          <div class="image-container">
            <img
              [src]="image.thumbnailUrl || image.storageUrl || '/assets/images/placeholder.png'"
              [alt]="image.altText || image.originalName"
              class="image-thumbnail"
              (error)="onImageError($event)"
              loading="lazy"
            />

            <!-- Overlay avec informations -->
            <div class="image-overlay">
              <div class="image-info">
                <span class="image-name">{{ image.originalName }}</span>
                <span class="image-size">{{ formatFileSize(image.fileSize) }}</span>
                <span class="image-dimensions" *ngIf="image.width && image.height">
                  {{ image.width }}x{{ image.height }}
                </span>
              </div>

              <!-- Actions sur l'image -->
              <div class="image-actions">
                <button mat-mini-fab
                        color="primary"
                        (click)="viewImage(image, $event)"
                        matTooltip="{{ 'IMAGE_GALLERY.VIEW' | translate }}">
                  <mat-icon>visibility</mat-icon>
                </button>

                <button mat-mini-fab
                        [matMenuTriggerFor]="imageMenu"
                        (click)="$event.stopPropagation()"
                        matTooltip="{{ 'IMAGE_GALLERY.MORE_ACTIONS' | translate }}">
                  <mat-icon>more_vert</mat-icon>
                </button>

                <!-- Menu d'actions -->
                <mat-menu #imageMenu="matMenu">
                  <button mat-menu-item (click)="editImage(image)">
                    <mat-icon>edit</mat-icon>
                    <span>{{ 'IMAGE_GALLERY.EDIT' | translate }}</span>
                  </button>
                  <button mat-menu-item (click)="downloadImage(image)">
                    <mat-icon>download</mat-icon>
                    <span>{{ 'IMAGE_GALLERY.DOWNLOAD' | translate }}</span>
                  </button>
                  <button mat-menu-item (click)="copyImageUrl(image)">
                    <mat-icon>link</mat-icon>
                    <span>{{ 'IMAGE_GALLERY.COPY_URL' | translate }}</span>
                  </button>
                  <mat-divider></mat-divider>
                  <button mat-menu-item (click)="deleteImage(image)" class="delete-action">
                    <mat-icon>delete</mat-icon>
                    <span>{{ 'IMAGE_GALLERY.DELETE' | translate }}</span>
                  </button>
                </mat-menu>
              </div>
            </div>
          </div>

          <!-- Tags -->
          <div class="image-tags" *ngIf="image.tags && image.tags.length > 0">
            <mat-chip-set>
              <mat-chip *ngFor="let tag of image.tags.slice(0, 3)">{{ tag }}</mat-chip>
              <mat-chip *ngIf="image.tags.length > 3">+{{ image.tags.length - 3 }}</mat-chip>
            </mat-chip-set>
          </div>

          <!-- Statut de publication -->
          <div class="image-status">
            <mat-icon [class]="image.isPublic ? 'public' : 'private'"
                      [matTooltip]="image.isPublic ? ('IMAGE_GALLERY.PUBLIC' | translate) : ('IMAGE_GALLERY.PRIVATE' | translate)">
              {{ image.isPublic ? 'public' : 'lock' }}
            </mat-icon>
          </div>
        </div>
      </div>

      <!-- Message si aucune image -->
      <div class="empty-state" *ngIf="!loading() && images().length === 0">
        <mat-icon class="empty-icon">image</mat-icon>
        <h3>{{ 'IMAGE_GALLERY.NO_IMAGES' | translate }}</h3>
        <p>{{ 'IMAGE_GALLERY.NO_IMAGES_DESCRIPTION' | translate }}</p>
      </div>
    </div>
  `,
  styleUrl: './image-gallery.scss'
})
export class ImageGalleryComponent {
  private dialog = inject(MatDialog);
  private snackBar = inject(MatSnackBar);
  private imageService = inject(ImageService);

  // Inputs
  images = input<Image[]>([]);
  selectionMode = input<boolean>(false);
  showActions = input<boolean>(true);
  loading = input<boolean>(false);

  // Outputs
  imageSelected = output<Image>();
  imageDeleted = output<Image>();
  imagesDeleted = output<Image[]>();
  selectionChanged = output<Image[]>();

  // State
  selectedImages = signal<Image[]>([]);

  // Computed
  selectedImageIds = computed(() => this.selectedImages().map(img => img.id));

  trackByImageId(index: number, image: Image): string {
    return image.id;
  }

  isSelected(imageId: string): boolean {
    return this.selectedImageIds().includes(imageId);
  }

  onImageClick(image: Image): void {
    if (this.selectionMode()) {
      this.toggleSelection(image);
    } else {
      this.viewImage(image);
    }
  }

  toggleSelection(image: Image): void {
    const currentSelection = this.selectedImages();
    const isCurrentlySelected = this.isSelected(image.id);

    if (isCurrentlySelected) {
      const newSelection = currentSelection.filter(img => img.id !== image.id);
      this.selectedImages.set(newSelection);
    } else {
      this.selectedImages.set([...currentSelection, image]);
    }

    this.selectionChanged.emit(this.selectedImages());
  }

  selectAll(): void {
    this.selectedImages.set([...this.images()]);
    this.selectionChanged.emit(this.selectedImages());
  }

  clearSelection(): void {
    this.selectedImages.set([]);
    this.selectionChanged.emit([]);
  }

  viewImage(image: Image, event?: Event): void {
    event?.stopPropagation();

    const dialogRef = this.dialog.open(ImageViewerComponent, {
      data: {
        image,
        images: this.images()
      },
      maxWidth: '90vw',
      maxHeight: '90vh',
      panelClass: 'image-viewer-dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result?.action === 'delete') {
        this.deleteImage(result.image);
      }
    });
  }

  editImage(image: Image): void {
    // TODO: Ouvrir le dialogue d'édition
    this.snackBar.open('Fonctionnalité d\'édition à implémenter', 'Fermer', { duration: 3000 });
  }

  downloadImage(image: Image): void {
    if (image.storageUrl) {
      const link = document.createElement('a');
      link.href = image.storageUrl;
      link.download = image.originalName;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }

  copyImageUrl(image: Image): void {
    if (image.storageUrl) {
      navigator.clipboard.writeText(image.storageUrl).then(() => {
        this.snackBar.open('URL copiée dans le presse-papiers', 'Fermer', { duration: 2000 });
      });
    }
  }

  deleteImage(image: Image): void {
    const dialogRef = this.snackBar.open(
      `Supprimer "${image.originalName}" ?`,
      'Confirmer',
      { duration: 5000 }
    );

    dialogRef.onAction().subscribe(() => {
      this.imageService.deleteImage(image.id).subscribe({
        next: () => {
          this.imageDeleted.emit(image);
          this.snackBar.open('Image supprimée avec succès', 'Fermer', { duration: 2000 });
        },
        error: (error) => {
          console.error('Erreur lors de la suppression:', error);
          this.snackBar.open('Erreur lors de la suppression', 'Fermer', { duration: 3000 });
        }
      });
    });
  }

  deleteSelected(): void {
    const selectedCount = this.selectedImages().length;
    const dialogRef = this.snackBar.open(
      `Supprimer ${selectedCount} image(s) sélectionnée(s) ?`,
      'Confirmer',
      { duration: 5000 }
    );

    dialogRef.onAction().subscribe(() => {
      const selectedIds = this.selectedImageIds();

      this.imageService.bulkDeleteImages(selectedIds).subscribe({
        next: () => {
          this.imagesDeleted.emit(this.selectedImages());
          this.clearSelection();
          this.snackBar.open(`${selectedCount} image(s) supprimée(s) avec succès`, 'Fermer', { duration: 2000 });
        },
        error: (error) => {
          console.error('Erreur lors de la suppression en lot:', error);
          this.snackBar.open('Erreur lors de la suppression', 'Fermer', { duration: 3000 });
        }
      });
    });
  }

  onImageError(event: Event): void {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = '/assets/images/placeholder.png';
  }

  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
}
