import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Image } from '@db/prisma/browser';

export interface ImageTagEditorData {
  image: Image;
}

@Component({
  selector: 'lib-image-tag-editor',
  imports: [
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSlideToggleModule
  ],
  template: `
    <h2 mat-dialog-title>Gérer les tags</h2>

    <mat-dialog-content>
      <div class="mb-4">
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">
          Image: <strong>{{ data.image.originalName }}</strong>
        </p>
      </div>

      <mat-form-field class="w-full" appearance="outline">
        <mat-label>Tags</mat-label>
        <mat-chip-grid #chipGrid>
          @for (tag of tags(); track tag) {
            <mat-chip-row
              (removed)="removeTag(tag)"
              [class]="tag === 'carousel' ? 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200' : ''"
            >
              {{ tag }}
              <button matChipRemove>
                <mat-icon>cancel</mat-icon>
              </button>
            </mat-chip-row>
          }
        </mat-chip-grid>
        <input
          placeholder="Ajouter un tag..."
          [matChipInputFor]="chipGrid"
          [matChipInputSeparatorKeyCodes]="separatorKeysCodes"
          (matChipInputTokenEnd)="addTag($event)"
        />
      </mat-form-field>

      <div class="mt-4">
        <mat-slide-toggle
          [(ngModel)]="isPublic"
          color="primary"
        >
          <div class="flex items-center gap-2">
            <mat-icon>{{ isPublic() ? 'public' : 'lock' }}</mat-icon>
            <span>{{ isPublic() ? 'Image publique' : 'Image privée' }}</span>
          </div>
        </mat-slide-toggle>
      </div>

      <div class="mt-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
        <p class="text-xs text-gray-600 dark:text-gray-400 mb-2">
          <mat-icon class="text-xs align-middle mr-1">info</mat-icon>
          Astuce: Le tag "carousel" permet d'afficher l'image dans le carousel de la page d'accueil.
        </p>
      </div>
    </mat-dialog-content>

    <mat-dialog-actions align="end">
      <button mat-button (click)="cancel()">Annuler</button>
      <button mat-raised-button color="primary" (click)="save()">Enregistrer</button>
    </mat-dialog-actions>
  `,
  styles: [`
    mat-dialog-content {
      min-width: 400px;
      padding: 20px;
    }
  `]
})
export class ImageTagEditorComponent {
  readonly dialogRef = inject(MatDialogRef<ImageTagEditorComponent>);
  readonly data = inject<ImageTagEditorData>(MAT_DIALOG_DATA);

  readonly tags = signal<string[]>([...(this.data.image.tags || [])]);
  readonly isPublic = signal<boolean>(this.data.image.isPublic ?? true);
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  addTag(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value && !this.tags().includes(value)) {
      this.tags.update(tags => [...tags, value]);
    }

    if (event.chipInput) {
      event.chipInput.clear();
    }
  }

  removeTag(tag: string): void {
    this.tags.update(tags => tags.filter(t => t !== tag));
  }

  cancel(): void {
    this.dialogRef.close();
  }

  save(): void {
    this.dialogRef.close({
      tags: this.tags(),
      isPublic: this.isPublic()
    });
  }
}
