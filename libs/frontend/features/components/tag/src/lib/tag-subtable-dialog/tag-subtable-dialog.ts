import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { TagStore } from '../store/tag-store';
import { TagTable } from '../tag-table/tag-table';

type TagSubtableDialogData = {
  tagId: number;
  tagName: string;
};

@Component({
  selector: 'lib-tag-subtable-dialog',
  imports: [MatButtonModule, MatDialogModule, MatIconModule, TagTable],
  templateUrl: './tag-subtable-dialog.html',
  styleUrl: './tag-subtable-dialog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TagStore],
})
export class TagSubtableDialog {
  private readonly dialogRef = inject(MatDialogRef<TagSubtableDialog>);
  protected readonly data = inject(MAT_DIALOG_DATA) as TagSubtableDialogData;

  protected close(): void {
    this.dialogRef.close();
  }
}
