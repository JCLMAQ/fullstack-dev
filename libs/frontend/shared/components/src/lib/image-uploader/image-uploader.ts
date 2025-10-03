import { Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateModule } from '@ngx-translate/core';
// import { I18nService } from '@fe/i18n';

// According: "Custom File Uploader Angular 18"
// https://medium.com/@paul.pietzko/custom-file-uploader-angular-18-ca566131f128

@Component({
  selector: 'lib-image-uploader',
  imports: [
    MatIcon,
    TranslateModule
  ],
   // providers: [
  //   I18nService,
  //   TranslateService
  // ],
  templateUrl: './image-uploader.html',
  styleUrl: './image-uploader.scss',
})
export class ImageUploader {

  private snackBar = inject(MatSnackBar);


  imageName = signal('');
  fileSize = signal(0);
  uploadProgress = signal(0);
  imagePreview = signal('');
  readonly fileInput = viewChild<ElementRef>('fileInput');
  selectedFile: File | null = null;
  uploadSuccess = false;
  uploadError = false;

  // Handler for file input change
  onFileChange(event: any): void {
    const file = event.target.files[0] as File | null;
    this.uploadFile(file);
  }

  // Handler for file drop
  onFileDrop(event: DragEvent): void {
    event.preventDefault();
    const file = event.dataTransfer?.files[0] as File | null;
    this.uploadFile(file);
  }

  // Prevent default dragover behavior
  onDragOver(event: DragEvent): void {
    event.preventDefault();
  }

  // Method to handle file upload
  uploadFile(file: File | null): void {
    if (file && file.type.startsWith('image/')) {
      this.selectedFile = file;
      this.fileSize.set(Math.round(file.size / 1024)); // Set file size in KB

      const reader = new FileReader();
      reader.onload = (e) => {
        this.imagePreview.set(e.target?.result as string); // Set image preview URL
      };
      reader.readAsDataURL(file);

      this.uploadSuccess = true;
      this.uploadError = false;
      this.imageName.set(file.name); // Set image name
    } else {
      this.uploadSuccess = false;
      this.uploadError = true;
      this.snackBar.open('Only image files are supported!', 'Close', {
        duration: 3000,
        panelClass: 'error',
      });
    }
  }

  // Method to remove the uploaded image
  removeImage(): void {
    this.selectedFile = null;
    this.imageName.set('');
    this.fileSize.set(0);
    this.imagePreview.set('');
    this.uploadSuccess = false;
    this.uploadError = false;
    this.uploadProgress.set(0);
  }

}
