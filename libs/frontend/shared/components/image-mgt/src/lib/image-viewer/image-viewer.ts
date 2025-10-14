import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Image } from '@db/prisma';
import { TranslateModule } from '@ngx-translate/core';

export interface ImageViewerData {
  image: Image;
  images?: Image[];
}

@Component({
  selector: 'lib-image-viewer',
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    TranslateModule
  ],
  template: `
    <div class="image-viewer">
      <!-- Header avec actions -->
      <div class="viewer-header" mat-dialog-title>
        <div class="image-title">
          <h2>{{ currentImage().originalName }}</h2>
          <p class="image-details">
            {{ formatFileSize(currentImage().fileSize) }}
            <span *ngIf="currentImage().width && currentImage().height">
              • {{ currentImage().width }}x{{ currentImage().height }}
            </span>
            <span *ngIf="currentImage().mimeType">
              • {{ currentImage().mimeType }}
            </span>
          </p>
        </div>

        <div class="viewer-actions">
          <!-- Navigation si plusieurs images -->
          <div class="navigation" *ngIf="hasMultipleImages()">
            <button mat-icon-button
                    (click)="previousImage()"
                    [disabled]="currentIndex() === 0"
                    matTooltip="{{ 'IMAGE_VIEWER.PREVIOUS' | translate }}">
              <mat-icon>chevron_left</mat-icon>
            </button>
            <span class="image-counter">{{ currentIndex() + 1 }} / {{ totalImages() }}</span>
            <button mat-icon-button
                    (click)="nextImage()"
                    [disabled]="currentIndex() === totalImages() - 1"
                    matTooltip="{{ 'IMAGE_VIEWER.NEXT' | translate }}">
              <mat-icon>chevron_right</mat-icon>
            </button>
          </div>

          <!-- Actions sur l'image -->
          <button mat-icon-button
                  (click)="downloadImage()"
                  matTooltip="{{ 'IMAGE_VIEWER.DOWNLOAD' | translate }}">
            <mat-icon>download</mat-icon>
          </button>

          <button mat-icon-button
                  (click)="copyImageUrl()"
                  matTooltip="{{ 'IMAGE_VIEWER.COPY_URL' | translate }}">
            <mat-icon>link</mat-icon>
          </button>

          <button mat-icon-button
                  (click)="toggleZoom()"
                  matTooltip="{{ isZoomed() ? ('IMAGE_VIEWER.ZOOM_OUT' | translate) : ('IMAGE_VIEWER.ZOOM_IN' | translate) }}">
            <mat-icon>{{ isZoomed() ? 'zoom_out' : 'zoom_in' }}</mat-icon>
          </button>

          <button mat-icon-button
                  (click)="deleteImage()"
                  color="warn"
                  matTooltip="{{ 'IMAGE_VIEWER.DELETE' | translate }}">
            <mat-icon>delete</mat-icon>
          </button>

          <button mat-icon-button
                  mat-dialog-close
                  matTooltip="{{ 'IMAGE_VIEWER.CLOSE' | translate }}">
            <mat-icon>close</mat-icon>
          </button>
        </div>
      </div>

      <!-- Contenu de l'image -->
      <div class="viewer-content" mat-dialog-content>
        <div class="image-container"
             [class.zoomed]="isZoomed()"
             (click)="toggleZoom()">

          <!-- Chargement -->
          <div class="loading-overlay" *ngIf="imageLoading()">
            <mat-progress-spinner diameter="50"></mat-progress-spinner>
          </div>

          <!-- Image principale -->
          <img
            [src]="currentImage().storageUrl || '/assets/images/placeholder.png'"
            [alt]="currentImage().altText || currentImage().originalName"
            class="main-image"
            [class.zoomed]="isZoomed()"
            (load)="onImageLoad()"
            (error)="onImageError($event)"
            (click)="$event.stopPropagation()"
          />
        </div>
      </div>

      <!-- Footer avec métadonnées -->
      <div class="viewer-footer" mat-dialog-actions>
        <div class="image-metadata">
          <!-- Description -->
          <div class="metadata-item" *ngIf="currentImage().description">
            <strong>{{ 'IMAGE_VIEWER.DESCRIPTION' | translate }}:</strong>
            <span>{{ currentImage().description }}</span>
          </div>

          <!-- Texte alternatif -->
          <div class="metadata-item" *ngIf="currentImage().altText">
            <strong>{{ 'IMAGE_VIEWER.ALT_TEXT' | translate }}:</strong>
            <span>{{ currentImage().altText }}</span>
          </div>

          <!-- Tags -->
          <div class="metadata-item" *ngIf="currentImage().tags && currentImage().tags.length > 0">
            <strong>{{ 'IMAGE_VIEWER.TAGS' | translate }}:</strong>
            <span class="tags">{{ currentImage().tags.join(', ') }}</span>
          </div>

          <!-- Dates -->
          <div class="metadata-dates">
            <div class="metadata-item">
              <strong>{{ 'IMAGE_VIEWER.UPLOADED' | translate }}:</strong>
              <span>{{ formatDate(currentImage().createdAt) }}</span>
            </div>
            <div class="metadata-item" *ngIf="currentImage().updatedAt !== currentImage().createdAt">
              <strong>{{ 'IMAGE_VIEWER.MODIFIED' | translate }}:</strong>
              <span>{{ formatDate(currentImage().updatedAt) }}</span>
            </div>
          </div>

          <!-- Statut -->
          <div class="metadata-item">
            <strong>{{ 'IMAGE_VIEWER.STATUS' | translate }}:</strong>
            <span [class]="currentImage().isPublic ? 'public' : 'private'">
              {{ currentImage().isPublic ? ('IMAGE_VIEWER.PUBLIC' | translate) : ('IMAGE_VIEWER.PRIVATE' | translate) }}
            </span>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './image-viewer.scss'
})
export class ImageViewerComponent {
  private dialogRef = inject(MatDialogRef<ImageViewerComponent>);
  private data = inject<ImageViewerData>(MAT_DIALOG_DATA);
  private snackBar = inject(MatSnackBar);

  // State
  currentIndex = signal(0);
  isZoomed = signal(false);
  imageLoading = signal(true);

  // Data
  images = signal<Image[]>(this.data.images || [this.data.image]);

  // Computed
  currentImage = signal<Image>(this.data.image);
  totalImages = signal(this.images().length);
  hasMultipleImages = signal(this.images().length > 1);

  constructor() {
    // Trouver l'index de l'image actuelle
    const initialIndex = this.images().findIndex(img => img.id === this.data.image.id);
    if (initialIndex !== -1) {
      this.currentIndex.set(initialIndex);
    }

    // Écouter les touches du clavier
    this.setupKeyboardNavigation();
  }

  private setupKeyboardNavigation(): void {
    const handleKeyPress = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          this.previousImage();
          break;
        case 'ArrowRight':
          event.preventDefault();
          this.nextImage();
          break;
        case 'Escape':
          event.preventDefault();
          this.dialogRef.close();
          break;
        case 'Delete':
          event.preventDefault();
          this.deleteImage();
          break;
        case ' ':
          event.preventDefault();
          this.toggleZoom();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    // Nettoyage lors de la fermeture
    this.dialogRef.afterClosed().subscribe(() => {
      document.removeEventListener('keydown', handleKeyPress);
    });
  }

  previousImage(): void {
    if (this.currentIndex() > 0) {
      const newIndex = this.currentIndex() - 1;
      this.currentIndex.set(newIndex);
      this.currentImage.set(this.images()[newIndex]);
      this.imageLoading.set(true);
      this.isZoomed.set(false);
    }
  }

  nextImage(): void {
    if (this.currentIndex() < this.totalImages() - 1) {
      const newIndex = this.currentIndex() + 1;
      this.currentIndex.set(newIndex);
      this.currentImage.set(this.images()[newIndex]);
      this.imageLoading.set(true);
      this.isZoomed.set(false);
    }
  }

  toggleZoom(): void {
    this.isZoomed.set(!this.isZoomed());
  }

  downloadImage(): void {
    const image = this.currentImage();
    if (image.storageUrl) {
      const link = document.createElement('a');
      link.href = image.storageUrl;
      link.download = image.originalName;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      this.snackBar.open('Téléchargement démarré', 'Fermer', { duration: 2000 });
    }
  }

  copyImageUrl(): void {
    const image = this.currentImage();
    if (image.storageUrl) {
      navigator.clipboard.writeText(image.storageUrl).then(() => {
        this.snackBar.open('URL copiée dans le presse-papiers', 'Fermer', { duration: 2000 });
      }).catch(() => {
        this.snackBar.open('Erreur lors de la copie', 'Fermer', { duration: 2000 });
      });
    }
  }

  deleteImage(): void {
    const dialogRef = this.snackBar.open(
      `Supprimer "${this.currentImage().originalName}" ?`,
      'Confirmer',
      { duration: 5000 }
    );

    dialogRef.onAction().subscribe(() => {
      this.dialogRef.close({
        action: 'delete',
        image: this.currentImage()
      });
    });
  }

  onImageLoad(): void {
    this.imageLoading.set(false);
  }

  onImageError(event: Event): void {
    this.imageLoading.set(false);
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

  formatDate(date: Date | string): string {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return new Intl.DateTimeFormat('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(dateObj);
  }
}
