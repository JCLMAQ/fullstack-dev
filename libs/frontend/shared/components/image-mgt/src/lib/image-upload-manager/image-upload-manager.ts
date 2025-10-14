import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, input, output, signal, viewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBar } from '@angular/material/snack-bar';
import type { Image } from '@db/prisma';
import { TranslateModule } from '@ngx-translate/core';
import { ImageService } from '../services/image.service';

interface FileData {
  file: File;
  preview: string;
  dimensions?: { width: number; height: number };
  uploading?: boolean;
  progress?: number;
}

@Component({
  selector: 'lib-image-upload-manager',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    TranslateModule
  ],
  template: `
    <mat-card class="upload-manager">
      <mat-card-header>
        <mat-card-title>{{ 'IMAGE_UPLOAD.TITLE' | translate }}</mat-card-title>
        <mat-card-subtitle *ngIf="multiple()">
          {{ 'IMAGE_UPLOAD.MULTIPLE_DESCRIPTION' | translate }}
        </mat-card-subtitle>
      </mat-card-header>

      <mat-card-content>
        <!-- Zone de drop -->
        <div class="drop-zone"
             [class.dragover]="isDragOver()"
             [class.has-files]="selectedFiles().length > 0"
             (dragover)="onDragOver($event)"
             (dragleave)="onDragLeave($event)"
             (drop)="onFileDrop($event)"
             (click)="openFileDialog()"
             (keyup.enter)="openFileDialog()"
             (keyup.space)="openFileDialog()"
             tabindex="0"
             role="button"
             [attr.aria-label]="'IMAGE_UPLOAD.DROP_ZONE_TITLE' | translate">

          <input type="file"
                 #fileInput
                 [accept]="acceptedTypes"
                 [multiple]="multiple()"
                 (change)="onFileSelect($event)"
                 style="display: none;">

          <div class="drop-content" *ngIf="selectedFiles().length === 0">
            <mat-icon class="upload-icon">cloud_upload</mat-icon>
            <h3>{{ 'IMAGE_UPLOAD.DROP_ZONE_TITLE' | translate }}</h3>
            <p>{{ 'IMAGE_UPLOAD.DROP_ZONE_DESCRIPTION' | translate }}</p>
            <button mat-raised-button color="primary" type="button">
              {{ 'IMAGE_UPLOAD.BROWSE_FILES' | translate }}
            </button>
          </div>

          <!-- Aperçu des fichiers sélectionnés -->
          <div class="files-preview" *ngIf="selectedFiles().length > 0">
            <div class="file-item" *ngFor="let fileData of selectedFiles(); trackBy: trackByFileName">
              <div class="file-preview">
                <img [src]="fileData.preview" [alt]="fileData.file.name" class="thumbnail">
              </div>

              <div class="file-info">
                <span class="file-name">{{ fileData.file.name }}</span>
                <span class="file-size">{{ formatFileSize(fileData.file.size) }}</span>
                <span class="file-dimensions" *ngIf="fileData.dimensions">
                  {{ fileData.dimensions.width }}x{{ fileData.dimensions.height }}
                </span>
              </div>

              <div class="file-actions">
                <button mat-icon-button
                        color="warn"
                        (click)="removeFile(fileData.file.name)"
                        [attr.aria-label]="'IMAGE_UPLOAD.REMOVE_FILE' | translate">
                  <mat-icon>close</mat-icon>
                </button>
              </div>

              <!-- Barre de progression pour ce fichier -->
              <mat-progress-bar
                *ngIf="fileData.uploading"
                mode="determinate"
                [value]="fileData.progress"
                class="file-progress">
              </mat-progress-bar>
            </div>
          </div>
        </div>

        <!-- Formulaire de métadonnées -->
        <form [formGroup]="metadataForm" class="metadata-form" *ngIf="selectedFiles().length > 0">
          <div class="form-row">
            <mat-form-field appearance="outline" class="flex-1">
              <mat-label>{{ 'IMAGE_UPLOAD.ALT_TEXT' | translate }}</mat-label>
              <input matInput formControlName="altText" [placeholder]="'IMAGE_UPLOAD.ALT_TEXT_PLACEHOLDER' | translate">
              <mat-hint>{{ 'IMAGE_UPLOAD.ALT_TEXT_HINT' | translate }}</mat-hint>
            </mat-form-field>

            <mat-form-field appearance="outline" class="flex-1">
              <mat-label>{{ 'IMAGE_UPLOAD.STORAGE_TYPE' | translate }}</mat-label>
              <mat-select formControlName="storageType">
                <mat-option value="local">{{ 'IMAGE_UPLOAD.STORAGE_LOCAL' | translate }}</mat-option>
                <mat-option value="s3">{{ 'IMAGE_UPLOAD.STORAGE_S3' | translate }}</mat-option>
                <mat-option value="cloudinary">{{ 'IMAGE_UPLOAD.STORAGE_CLOUDINARY' | translate }}</mat-option>
              </mat-select>
            </mat-form-field>
          </div>

          <mat-form-field appearance="outline" class="full-width">
            <mat-label>{{ 'IMAGE_UPLOAD.DESCRIPTION' | translate }}</mat-label>
            <textarea matInput
                      formControlName="description"
                      rows="3"
                      [placeholder]="'IMAGE_UPLOAD.DESCRIPTION_PLACEHOLDER' | translate">
            </textarea>
          </mat-form-field>

          <div class="form-row">
            <mat-form-field appearance="outline" class="flex-1">
              <mat-label>{{ 'IMAGE_UPLOAD.TAGS' | translate }}</mat-label>
              <mat-chip-grid #chipGrid>
                <mat-chip-row *ngFor="let tag of tags()"
                              (removed)="removeTag(tag)"
                              [removable]="true">
                  {{ tag }}
                  <button matChipRemove>
                    <mat-icon>cancel</mat-icon>
                  </button>
                </mat-chip-row>
              </mat-chip-grid>
              <input matInput
                     [matChipInputFor]="chipGrid"
                     (matChipInputTokenEnd)="addTag($event)"
                     [placeholder]="'IMAGE_UPLOAD.TAGS_PLACEHOLDER' | translate">
              <mat-hint>{{ 'IMAGE_UPLOAD.TAGS_HINT' | translate }}</mat-hint>
            </mat-form-field>

            <div class="form-switches">
              <mat-slide-toggle formControlName="isPublic">
                {{ 'IMAGE_UPLOAD.PUBLIC' | translate }}
              </mat-slide-toggle>
            </div>
          </div>

          <!-- Associations optionnelles -->
          <div class="associations" *ngIf="showAssociations()">
            <h4>{{ 'IMAGE_UPLOAD.ASSOCIATIONS' | translate }}</h4>

            <div class="form-row">
              <mat-form-field appearance="outline" *ngIf="associationType() === 'post' || !associationType()">
                <mat-label>{{ 'IMAGE_UPLOAD.POST_ID' | translate }}</mat-label>
                <input matInput formControlName="postId">
              </mat-form-field>

              <mat-form-field appearance="outline" *ngIf="associationType() === 'user' || !associationType()">
                <mat-label>{{ 'IMAGE_UPLOAD.USER_ID' | translate }}</mat-label>
                <input matInput formControlName="profileUserId">
              </mat-form-field>

              <mat-form-field appearance="outline" *ngIf="associationType() === 'organization' || !associationType()">
                <mat-label>{{ 'IMAGE_UPLOAD.ORG_ID' | translate }}</mat-label>
                <input matInput formControlName="orgId">
              </mat-form-field>
            </div>
          </div>
        </form>
      </mat-card-content>

      <mat-card-actions class="upload-actions">
        <button mat-button
                (click)="clearFiles()"
                [disabled]="selectedFiles().length === 0 || uploading()">
          {{ 'IMAGE_UPLOAD.CLEAR' | translate }}
        </button>

        <button mat-raised-button
                color="primary"
                (click)="uploadFiles()"
                [disabled]="selectedFiles().length === 0 || uploading() || metadataForm.invalid">
          <mat-icon *ngIf="uploading()">hourglass_empty</mat-icon>
          {{ uploading() ? ('IMAGE_UPLOAD.UPLOADING' | translate) : ('IMAGE_UPLOAD.UPLOAD' | translate) }}
        </button>
      </mat-card-actions>

      <!-- Barre de progression globale -->
      <mat-progress-bar
        *ngIf="uploading()"
        mode="determinate"
        [value]="overallProgress()"
        class="global-progress">
      </mat-progress-bar>
    </mat-card>
  `,
  styleUrl: './image-upload-manager.scss'
})
export class ImageUploadManagerComponent {
  private fb = inject(FormBuilder);
  private snackBar = inject(MatSnackBar);
  private imageService = inject(ImageService);

  // Inputs
  multiple = input<boolean>(true);
  associationType = input<string>('');
  showAssociations = input<boolean>(false);
  acceptedTypes = input<string>('image/*');
  maxFileSize = input<number>(10 * 1024 * 1024); // 10MB
  uploadedById = input<string>('');

  // Outputs
  filesUploaded = output<Image[]>();
  uploadProgress = output<number>();

  // ViewChild
  fileInput = viewChild<ElementRef>('fileInput');

  // State
  selectedFiles = signal<FileData[]>([]);
  isDragOver = signal<boolean>(false);
  uploading = signal<boolean>(false);
  overallProgress = signal<number>(0);
  tags = signal<string[]>([]);

  // Form
  metadataForm: FormGroup;

  constructor() {
    this.metadataForm = this.fb.group({
      altText: [''],
      description: [''],
      storageType: ['local', Validators.required],
      isPublic: [false],
      postId: [''],
      profileUserId: [''],
      orgId: ['']
    });
  }

  trackByFileName(index: number, fileData: FileData): string {
    return fileData.file.name;
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    this.isDragOver.set(true);
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    this.isDragOver.set(false);
  }

  onFileDrop(event: DragEvent): void {
    event.preventDefault();
    this.isDragOver.set(false);

    const files = Array.from(event.dataTransfer?.files || []);
    this.processFiles(files);
  }

  openFileDialog(): void {
    this.fileInput()?.nativeElement.click();
  }

  onFileSelect(event: Event): void {
    const input = event.target as HTMLInputElement;
    const files = Array.from(input.files || []);
    this.processFiles(files);
  }

  private processFiles(files: File[]): void {
    const validFiles = files.filter(file => this.validateFile(file));

    if (validFiles.length !== files.length) {
      const invalidCount = files.length - validFiles.length;
      this.snackBar.open(
        `${invalidCount} fichier(s) ignoré(s) (type ou taille non valide)`,
        'Fermer',
        { duration: 3000 }
      );
    }

    validFiles.forEach(file => this.addFile(file));
  }

  private validateFile(file: File): boolean {
    // Vérifier le type
    if (!file.type.startsWith('image/')) {
      return false;
    }

    // Vérifier la taille
    if (file.size > this.maxFileSize()) {
      return false;
    }

    return true;
  }

  private addFile(file: File): void {
    const reader = new FileReader();

    reader.onload = (e) => {
      const preview = e.target?.result as string;

      // Obtenir les dimensions de l'image
      const img = new Image();
      img.onload = () => {
        const fileData: FileData = {
          file,
          preview,
          dimensions: { width: img.width, height: img.height },
          uploading: false,
          progress: 0
        };

        const currentFiles = this.selectedFiles();
        if (!this.multiple() && currentFiles.length > 0) {
          this.selectedFiles.set([fileData]);
        } else {
          this.selectedFiles.set([...currentFiles, fileData]);
        }
      };
      img.src = preview;
    };

    reader.readAsDataURL(file);
  }

  removeFile(fileName: string): void {
    const currentFiles = this.selectedFiles();
    const filteredFiles = currentFiles.filter(fileData => fileData.file.name !== fileName);
    this.selectedFiles.set(filteredFiles);
  }

  clearFiles(): void {
    this.selectedFiles.set([]);
    this.overallProgress.set(0);
  }

  addTag(event: { value: string; chipInput: { clear(): void } }): void {
    const value = event.value?.trim();
    if (value) {
      const currentTags = this.tags();
      if (!currentTags.includes(value)) {
        this.tags.set([...currentTags, value]);
      }
    }
    event.chipInput.clear();
  }

  removeTag(tag: string): void {
    const currentTags = this.tags();
    const filteredTags = currentTags.filter(t => t !== tag);
    this.tags.set(filteredTags);
  }

  async uploadFiles(): Promise<void> {
    if (this.selectedFiles().length === 0 || this.uploading()) {
      return;
    }

    this.uploading.set(true);
    const uploadedImages: Image[] = [];
    const totalFiles = this.selectedFiles().length;
    let completedFiles = 0;

    const formData = this.metadataForm.value;
    const tags = this.tags();

    try {
      for (const fileData of this.selectedFiles()) {
        // Marquer ce fichier comme en cours d'upload
        fileData.uploading = true;
        fileData.progress = 0;

        const metadata = {
          ...formData,
          filename: fileData.file.name,
          originalName: fileData.file.name,
          mimeType: fileData.file.type,
          fileSize: fileData.file.size,
          width: fileData.dimensions?.width,
          height: fileData.dimensions?.height,
          tags: tags.length > 0 ? tags : undefined,
          uploadedById: this.uploadedById() || 'anonymous'
        };

        try {
          const uploadedImage = await this.imageService.uploadFile(fileData.file, metadata).toPromise();

          if (uploadedImage) {
            uploadedImages.push(uploadedImage);
            fileData.progress = 100;
          }
        } catch (error) {
          console.error(`Erreur upload ${fileData.file.name}:`, error);
          this.snackBar.open(
            `Erreur lors de l'upload de ${fileData.file.name}`,
            'Fermer',
            { duration: 3000 }
          );
        }

        completedFiles++;
        const progress = (completedFiles / totalFiles) * 100;
        this.overallProgress.set(progress);
        this.uploadProgress.emit(progress);
      }

      if (uploadedImages.length > 0) {
        this.filesUploaded.emit(uploadedImages);
        this.snackBar.open(
          `${uploadedImages.length} image(s) uploadée(s) avec succès`,
          'Fermer',
          { duration: 3000 }
        );

        // Nettoyer après succès
        this.clearFiles();
        this.resetForm();
      }

    } finally {
      this.uploading.set(false);
      this.overallProgress.set(0);
    }
  }

  private resetForm(): void {
    this.metadataForm.reset({
      storageType: 'local',
      isPublic: false
    });
    this.tags.set([]);
  }

  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
}
