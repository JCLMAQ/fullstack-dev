import { Component, computed, inject, input, linkedSignal, output, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Image } from '@db/prisma/browser';
import { TranslateModule } from '@ngx-translate/core';
import { ImageTagEditorComponent } from '../image-tag-editor/image-tag-editor';
import { ImageViewerComponent } from '../image-viewer/image-viewer';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'lib-image-gallery',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatChipsModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDividerModule,
    TranslateModule
  ],
  templateUrl: './image-gallery.html',
  styleUrl: './image-gallery.scss'
})
export class ImageGalleryComponent {
  private dialog = inject(MatDialog);
  private snackBar = inject(MatSnackBar);
  private imageService = inject(ImageService);

  // Inputs
  images = input<Image[]>([]);
  imagesSignal = linkedSignal(this.images);
  selectionMode = input<boolean>(false);
  showActions = input<boolean>(true);
  loading = input<boolean>(false);

  // Outputs
  imageSelected = output<Image>();
  imageDeleted = output<Image>();
  imagesDeleted = output<Image[]>();
  selectionChanged = output<Image[]>();
  imageUpdated = output<Image>();

  // State
  selectedImages = signal<Image[]>([]);

  // Computed
  selectedImageIds = computed(() => this.selectedImages().map(img => img.id));

  trackByImageId(index: number, image: Image): string {
    return image.id;
  }

  getImageUrl(image: Image): string {
    return this.imageService.getFullImageUrl(image);
  }

  hasSelectedImages(): boolean {
    return this.selectedImages().length > 0;
  }

  getSelectedCount(): number {
    return this.selectedImages().length;
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
    this.selectedImages.set([...this.imagesSignal()]);
    this.selectionChanged.emit(this.selectedImages());
  }

  clearSelection(): void {
    this.selectedImages.set([]);
    this.selectionChanged.emit([]);
  }

  deselectAll(): void {
    this.clearSelection();
  }

  downloadSelected(): void {
    const selectedImages = this.selectedImages();
    if (selectedImages.length === 0) {
      this.snackBar.open('Aucune image sélectionnée', 'Fermer', { duration: 2000 });
      return;
    }

    selectedImages.forEach((image, index) => {
      const url = this.getImageUrl(image);
      if (url) {
        setTimeout(() => {
          const link = document.createElement('a');
          link.href = url;
          link.download = image.originalName;
          link.target = '_blank';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }, index * 100); // Délai pour éviter de bloquer le navigateur
      }
    });

    this.snackBar.open(
      `Téléchargement de ${selectedImages.length} image(s) en cours...`,
      'Fermer',
      { duration: 3000 }
    );
  }

  viewImage(image: Image, event?: Event): void {
    event?.stopPropagation();

    const dialogRef = this.dialog.open(ImageViewerComponent, {
      data: {
        image,
        images: this.imagesSignal()
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

  editImage(): void {
    // TODO: Ouvrir le dialogue d'édition
    this.snackBar.open('Fonctionnalité d\'édition à implémenter', 'Fermer', { duration: 3000 });
  }

  downloadImage(image: Image): void {
    const imageUrl = this.getImageUrl(image);
    if (imageUrl) {
      const link = document.createElement('a');
      link.href = imageUrl;
      link.download = image.originalName;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }

  copyImageUrl(image: Image): void {
    const imageUrl = this.getImageUrl(image);
    if (imageUrl) {
      navigator.clipboard.writeText(imageUrl).then(() => {
        this.snackBar.open('URL copiée dans le presse-papiers', 'Fermer', { duration: 2000 });
      });
    }
  }

  deleteImage(image: Image): void {
    // Demander confirmation avec choix du type de suppression
    if (confirm(`Voulez-vous supprimer définitivement "${image.originalName}" ?\n\nOui = Suppression définitive (fichier inclus)\nAnnuler = Suppression temporaire (soft delete)`)) {
      // Suppression définitive (hard delete)
      this.imageService.deleteImage(image.id, false)
        .then(() => {
          this.imageDeleted.emit(image);
          this.snackBar.open('Image supprimée définitivement avec succès', 'Fermer', { duration: 2000 });
        })
        .catch((error: unknown) => {
          console.error('Erreur lors de la suppression:', error);
          this.snackBar.open('Erreur lors de la suppression', 'Fermer', { duration: 3000 });
        });
    } else {
      // L'utilisateur a cliqué sur Annuler, on ne fait rien ou on fait un soft delete si on veut
      // Pour l'instant, on ne fait rien si annulé
      return;
    }
  }

  deleteSelected(): void {
    const selectedCount = this.selectedImages().length;

    if (confirm(`Voulez-vous supprimer définitivement ${selectedCount} image(s) ?\n\nOui = Suppression définitive (fichiers inclus)\nAnnuler = Annuler l'opération`)) {
      const selectedIds = this.selectedImageIds();

      // Suppression définitive (hard delete)
      this.imageService.bulkDeleteImages(selectedIds, false)
        .then(() => {
          this.imagesDeleted.emit(this.selectedImages());
          this.clearSelection();
          this.snackBar.open(`${selectedCount} image(s) supprimée(s) définitivement avec succès`, 'Fermer', { duration: 2000 });
        })
        .catch((error: unknown) => {
          console.error('Erreur lors de la suppression en lot:', error);
          this.snackBar.open('Erreur lors de la suppression', 'Fermer', { duration: 3000 });
        });
    }
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

  openTagEditor(image: Image, event: Event): void {
    event.stopPropagation();

    const dialogRef = this.dialog.open(ImageTagEditorComponent, {
      data: { image },
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.updateImage(image, result);
      }
    });
  }

  toggleCarouselTag(image: Image, event: Event): void {
    event.stopPropagation();
    const tags = image.tags || [];
    const hasCarouselTag = tags.includes('carousel');

    const updatedTags = hasCarouselTag
      ? tags.filter(t => t !== 'carousel')
      : [...tags, 'carousel'];

    this.updateImage(image, { tags: updatedTags });
  }

  togglePublicStatus(image: Image, event: Event): void {
    event.stopPropagation();
    this.updateImage(image, { isPublic: !image.isPublic });
  }

  hasCarouselTag(image: Image): boolean {
    return image.tags?.includes('carousel') ?? false;
  }

  private updateImage(image: Image, updates: { tags?: string[], isPublic?: boolean }): void {
    this.imageService.updateImage(image.id, updates)
      .then((updatedImage: Image) => {
        this.imageUpdated.emit(updatedImage);
        this.snackBar.open('Image mise à jour avec succès', 'Fermer', { duration: 2000 });
      })
      .catch((error: unknown) => {
        console.error('Erreur lors de la mise à jour:', error);
        const errorMsg = (error as any)?.error?.message || (error as any)?.message || 'Erreur inconnue';
        this.snackBar.open(`Erreur: ${errorMsg}`, 'Fermer', { duration: 5000 });
      });
  }
}
