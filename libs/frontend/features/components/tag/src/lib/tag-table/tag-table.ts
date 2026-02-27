import { ChangeDetectionStrategy, Component, computed, effect, inject, input, signal } from '@angular/core';
import { form, FormField, min, required, schema, validate } from '@angular/forms/signals';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule, Sort } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TagCategories } from '@db/prisma/frontend';
import { ConfirmDialogService } from '@fe/messages';
import { FieldError } from '@fe/signalform-utilities';
import type { CreateTagDto, TagListItem, UpdateTagDto } from '../models/tag.models';
import { TagService } from '../services/tag-service';
import { TagStore } from '../store/tag-store';
import { TagSubtableDialog } from '../tag-subtable-dialog/tag-subtable-dialog';

type TagFormData = {
  name: string;
  tagCategoriesId: number | null;
  position: number;
  color: string;
};

const COLOR_PALETTE: ReadonlyArray<{ label: string; value: string }> = [
  { label: 'Rouge', value: '#ef4444' },
  { label: 'Orange', value: '#f97316' },
  { label: 'Ambre', value: '#f59e0b' },
  { label: 'Vert', value: '#22c55e' },
  { label: 'Sarcelle', value: '#14b8a6' },
  { label: 'Bleu', value: '#3b82f6' },
  { label: 'Indigo', value: '#6366f1' },
  { label: 'Violet', value: '#8b5cf6' },
  { label: 'Rose', value: '#ec4899' },
  { label: 'Ardoise', value: '#64748b' },
];

const tagSchema = schema<TagFormData>((path) => {
  required(path.name);
  required(path.tagCategoriesId);
  min(path.position, 0);
  validate(path.color, (field) => {
    const value = field.value().trim();
    if (!value) return null;
    const isValid = /^#[0-9a-fA-F]{6}$/.test(value);
    return isValid ? null : { kind: 'pattern', message: 'Format attendu: #RRGGBB' };
  });
});

const searchSchema = schema<{ search: string }>(() => {});

@Component({
  selector: 'lib-tag-table',
  imports: [
    FormField,
    FieldError,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    MatTooltipModule,
  ],
  templateUrl: './tag-table.html',
  styleUrl: './tag-table.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagTable {
  readonly mainTagId = input<number | null>(null);
  readonly title = input<string | null>(null);

  protected readonly store = inject(TagStore);
  private readonly confirmDialog = inject(ConfirmDialogService);
  private readonly dialog = inject(MatDialog);
  private readonly tagService = inject(TagService);

  protected readonly categoriesResource = this.tagService.getTagCategoriesResource({
    includeDeleted: false,
    published: true,
    isPublic: true,
  });

  protected readonly categories = computed<TagCategories[]>(() => this.categoriesResource.value() ?? []);

  protected readonly displayedColumns = computed(() => [
    'name',
    'color',
    'category',
    'position',
    'subTagCount',
    'usageCount',
    'actions',
  ]);

  protected readonly editingId = signal<number | null>(null);
  protected readonly addingNew = signal(false);

  protected readonly editState = signal<TagFormData>({ name: '', tagCategoriesId: null, position: 0, color: '' });
  protected readonly addState = signal<TagFormData>({ name: '', tagCategoriesId: null, position: 0, color: '' });
  protected readonly editForm = form(this.editState, tagSchema);
  protected readonly addForm = form(this.addState, tagSchema);

  protected readonly colorPalette = COLOR_PALETTE;
  protected readonly defaultColor = COLOR_PALETTE[0]?.value ?? '#000000';

  protected readonly searchState = signal<{ search: string }>({ search: '' });
  protected readonly searchForm = form(this.searchState, searchSchema);

  protected readonly tags = this.store.paginatedItems;
  protected readonly totalCount = this.store.totalCount;
  protected readonly isLoading = this.store.isLoading;
  protected readonly pageSize = this.store.pageSize;

  constructor() {
    effect(() => {
      this.store.setMainTagId(this.mainTagId());
    });

    effect((onCleanup) => {
      const { search } = this.searchState();

      if (!search) {
        this.store.updateFilter('');
        this.store.setPage(0);
        return;
      }

      const timer = setTimeout(() => {
        this.store.updateFilter(search);
        this.store.setPage(0);
      }, 250);

      onCleanup(() => clearTimeout(timer));
    });
  }

  protected isEditing(tag: TagListItem): boolean {
    return this.editingId() === tag.id;
  }

  protected startAdd(): void {
    this.addingNew.set(true);
    this.addState.set({ name: '', tagCategoriesId: null, position: 0, color: '' });
  }

  protected cancelAdd(): void {
    this.addingNew.set(false);
    this.addState.set({ name: '', tagCategoriesId: null, position: 0, color: '' });
  }

  protected saveAdd(): void {
    if (!this.addForm().valid()) {
      this.addForm().focusBoundControl();
      return;
    }

    const formValue = this.addState();
    const payload: CreateTagDto = {
      name: formValue.name.trim(),
      tagCategoriesId: Number(formValue.tagCategoriesId),
      position: Number(formValue.position ?? 0),
      color: this.normalizeColor(formValue.color),
      mainTagId: this.mainTagId(),
      published: true,
      isPublic: true,
    };

    this.store.createTag(payload);
    this.cancelAdd();
  }

  protected startEdit(tag: TagListItem): void {
    this.editingId.set(tag.id);
    this.editState.set({
      name: tag.name ?? '',
      tagCategoriesId: tag.tagCategoriesId ?? null,
      position: Number(tag.position ?? 0),
      color: tag.color ?? '',
    });
  }

  protected cancelEdit(): void {
    this.editingId.set(null);
    this.editState.set({ name: '', tagCategoriesId: null, position: 0, color: '' });
  }

  protected saveEdit(tag: TagListItem): void {
    if (!this.editForm().valid()) {
      this.editForm().focusBoundControl();
      return;
    }

    const formValue = this.editState();
    const payload: UpdateTagDto = {
      name: formValue.name.trim(),
      tagCategoriesId: Number(formValue.tagCategoriesId),
      position: Number(formValue.position ?? 0),
      color: this.normalizeColor(formValue.color),
      mainTagId: this.mainTagId(),
    };

    this.store.updateTag({ id: tag.id, payload });
    this.cancelEdit();
  }

  protected confirmDelete(tag: TagListItem, permanent: boolean): void {
    this.confirmDialog.confirmDelete(permanent).subscribe((result) => {
      if (!result) return;
      if (permanent) {
        this.store.hardDeleteTag({ id: tag.id });
      } else {
        this.store.softDeleteTag({ id: tag.id });
      }
    });
  }

  protected openSubTags(tag: TagListItem): void {
    this.dialog.open(TagSubtableDialog, {
      data: {
        tagId: tag.id,
        tagName: tag.name,
      },
      width: '900px',
      maxWidth: '95vw',
    });
  }

  protected onPageChange(event: PageEvent): void {
    this.store.setPagination(event.pageIndex, event.pageSize);
  }

  protected onSortChange(sort: Sort): void {
    this.store.setCurrentSort(sort);
  }

  protected clearSearch(): void {
    this.searchState.set({ search: '' });
  }

  protected setAddColor(value: string): void {
    this.setColorField(this.addForm.color(), value);
  }

  protected clearAddColor(): void {
    this.setColorField(this.addForm.color(), '');
  }

  protected setEditColor(value: string): void {
    this.setColorField(this.editForm.color(), value);
  }

  protected clearEditColor(): void {
    this.setColorField(this.editForm.color(), '');
  }

  private setColorField(field: ReturnType<typeof this.addForm.color>, value: string): void {
    field.value.set(value);
    field.markAsDirty();
    field.markAsTouched();
  }

  private normalizeColor(value: string | null | undefined): string | null {
    if (!value) return null;
    const trimmed = value.trim();
    if (!trimmed) return null;
    return trimmed.toLowerCase();
  }
}
