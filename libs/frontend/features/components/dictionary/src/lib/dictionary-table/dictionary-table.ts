import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  signal
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

import { form, FormField, required, schema } from '@angular/forms/signals';
import {
  DictioEntryType,
  type CreateWordDto,
  type Language,
  type Translation,
  type UpdateWordDto,
  type Word,
} from '../models';
import {
  TranslationApiService,
  WordApiService,
} from '../services';

export interface WordWithTranslations {
  word: Word;
  translationsByLanguage: Map<number, Translation>;
}

const wordSchema = schema<CreateWordDto>((f) => {
  required(f.slug);
  required(f.type);
});

const searchSchema = schema<{ search: string }>(() => {});

@Component({
  selector: 'lib-dictionary-table',
  standalone: true,
  templateUrl: './dictionary-table.html',
  styleUrl: './dictionary-table.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatPaginatorModule,
    FormField
  ],
})
export class DictionaryTable {
  private readonly wordApiService = inject(WordApiService);
  private readonly translationApiService = inject(TranslationApiService);

  // State signals
  readonly words = signal<Word[]>([]);
  readonly translations = signal<Translation[]>([]);
  readonly languages = signal<Language[]>([]);
  readonly searchFilter = signal<string>('');
  readonly editingRowId = signal<number | null>(null);
  readonly addingNewRow = signal<boolean>(false);
  readonly translationEditState = signal<Record<number, string>>({});
  readonly pageIndex = signal<number>(0);
  readonly pageSize = signal<number>(10);

  // Forms
  readonly editState = signal<CreateWordDto>({ slug: '', type: DictioEntryType.WORD });
  readonly editForm = form(this.editState, wordSchema);
  readonly addState = signal<CreateWordDto>({ slug: '', type: DictioEntryType.WORD });
  readonly addForm = form(this.addState, wordSchema);
  readonly searchState = signal<{ search: string }>({ search: '' });
  readonly searchForm = form(this.searchState, searchSchema);

  // Type context for template
  element!: WordWithTranslations;

  // Resources - initialized in field initializer context
  private readonly wordsResource = this.wordApiService.getAll();
  private readonly translationsResource = this.translationApiService.getAllResource();

  // Computed properties
  readonly displayedColumns = computed(() => {
    const langColumns = this.languages().map((l) => l.code.toLowerCase());
    return ['id', 'slug', 'type', ...langColumns, 'actions'];
  });

  readonly wordsWithTranslations = computed(() => {
    const wordsArray = this.words();
    const translationsArray = this.translations();

    return wordsArray.map((word) => {
      const translationsByLanguage = new Map<number, Translation>();
      translationsArray
        .filter((t) => t.wordId === word.id)
        .forEach((t) => {
          translationsByLanguage.set(t.languageId, t);
        });

      return {
        word,
        translationsByLanguage,
      };
    });
  });

  readonly filteredWords = computed(() => {
    const filter = this.searchFilter().toLowerCase().trim();
    return this.wordsWithTranslations().filter((item) => {
      if (!filter) return true;
      const matchSlug = item.word.slug?.toLowerCase().includes(filter);
      const matchType = item.word.type?.toLowerCase().includes(filter);
      const matchTranslations = Array.from(item.translationsByLanguage.values()).some(
        (t) => t.text?.toLowerCase().includes(filter)
      );
      return matchSlug || matchType || matchTranslations;
    });
  });

  readonly paginatedWords = computed(() => {
    const filtered = this.filteredWords();
    const start = this.pageIndex() * this.pageSize();
    return filtered.slice(start, start + this.pageSize());
  });

  constructor() {
    // Setup effect to sync resource data to signals
    effect(() => {
      const wordsData = this.wordsResource.value();
      if (wordsData) {
        this.words.set(wordsData);
      }
    });

    effect(() => {
      const translationsData = this.translationsResource.value();
      if (translationsData) {
        this.translations.set(translationsData);
      }
    });

    // Extract unique languages when translations change
    effect(() => {
      const translationsData = this.translations();
      if (translationsData.length > 0) {
        // Extract unique languages from translations
        const uniqueLangs = new Map<number, Language>();
        translationsData.forEach((t) => {
          if (t.language && !uniqueLangs.has(t.language.id)) {
            uniqueLangs.set(t.language.id, t.language);
          }
        });
        this.languages.set(
          Array.from(uniqueLangs.values()).sort((a, b) =>
            a.code.localeCompare(b.code)
          )
        );
      }
    });

    // Sync search state to filter
    effect((onCleanup) => {
      const { search } = this.searchState();

      if (!search) {
        this.searchFilter.set(search);
        this.pageIndex.set(0);
        return;
      }

      const timer = setTimeout(() => {
        this.searchFilter.set(search);
        this.pageIndex.set(0);
      }, 300);

      onCleanup(() => clearTimeout(timer));
    });
  }

  onClearSearch(): void {
    this.searchState.set({ search: '' });
  }

  onEdit(word: Word): void {
    this.editingRowId.set(word.id);
    this.editState.set({
      slug: word.slug,
      type: word.type,
    });

    const translations = this.translations().filter((t) => t.wordId === word.id);
    const transState: Record<number, string> = {};
    this.languages().forEach((lang) => {
      const t = translations.find((tr) => tr.languageId === lang.id);
      transState[lang.id] = t?.text || '';
    });
    this.translationEditState.set(transState);
  }

  onCancelEdit(): void {
    this.editingRowId.set(null);
    this.editState.set({ slug: '', type: DictioEntryType.WORD });
    this.translationEditState.set({});
  }

  onSaveEdit(word: Word): void {
    if (!this.editForm().valid()) return;

    const formValue = this.editState();
    const dto: UpdateWordDto = {
      slug: formValue.slug,
      type: formValue.type,
    };

    this.wordApiService.update(word.id, dto).subscribe(
      (updatedWord) => {
        const wordIndex = this.words().findIndex((w) => w.id === word.id);
        if (wordIndex !== -1) {
          const updated = [...this.words()];
          updated[wordIndex] = updatedWord;
          this.words.set(updated);
        }
        this.editingRowId.set(null);
        this.editState.set({ slug: '', type: DictioEntryType.WORD });
        this.translationEditState.set({});
      },
      (error) => {
        console.error('Error updating word:', error);
      }
    );

    // Save Translations
    const transState = this.translationEditState();
    const currentTranslations = this.translations().filter(
      (t) => t.wordId === word.id
    );

    this.languages().forEach((lang) => {
      const newText = transState[lang.id];
      const existingTrans = currentTranslations.find(
        (t) => t.languageId === lang.id
      );

      if (existingTrans) {
        if (newText !== existingTrans.text) {
          this.translationApiService
            .update(existingTrans.id, {
              text: newText,
              languageId: lang.id,
              wordId: word.id,
            })
            .subscribe((updated) => {
              this.translations.update((ts) =>
                ts.map((t) => (t.id === updated.id ? updated : t))
              );
            });
        }
      } else if (newText) {
        this.translationApiService
          .create({ text: newText, languageId: lang.id, wordId: word.id })
          .subscribe((created) => this.translations.update((ts) => [...ts, created]));
      }
    });
  }

  onDelete(id: number, slug: string): void {
    if (!confirm(`Are you sure you want to permanently delete "${slug}"?`)) {
      return;
    }

    this.wordApiService.delete(id).subscribe(
      () => {
        this.words.set(this.words().filter((w) => w.id !== id));
        this.translations.set(
          this.translations().filter((t) => t.wordId !== id)
        );
      },
      (error) => {
        console.error('Error deleting word:', error);
      }
    );
  }

  onVirtualDelete(id: number, slug: string): void {
    if (!confirm(`Mark "${slug}" as deleted?`)) {
      return;
    }
    console.warn('Virtual delete not yet implemented');
  }

  onAdd(): void {
    this.addingNewRow.set(true);
    this.addState.set({ slug: '', type: DictioEntryType.WORD });
  }

  onCancelAdd(): void {
    this.addingNewRow.set(false);
    this.addState.set({ slug: '', type: DictioEntryType.WORD });
  }

  onSaveAdd(): void {
    if (!this.addForm().valid()) return;

    const formValue = this.addState();
    const dto: CreateWordDto = {
      slug: formValue.slug,
      type: formValue.type,
    };

    this.wordApiService.create(dto).subscribe(
      (newWord) => {
        this.words.set([...this.words(), newWord]);
        this.addingNewRow.set(false);
        this.addState.set({ slug: '', type: DictioEntryType.WORD });
      },
      (error) => {
        console.error('Error creating word:', error);
      }
    );
  }

  isEditing(word: Word): boolean {
    return this.editingRowId() === word.id;
  }

  isAddingNew(): boolean {
    return this.addingNewRow();
  }

  getTranslationText(
    item: WordWithTranslations | undefined,
    languageId: number
  ): string {
    return item?.translationsByLanguage?.get(languageId)?.text ?? '—';
  }

  onPageChange(event: PageEvent): void {
    this.pageIndex.set(event.pageIndex);
    this.pageSize.set(event.pageSize);
  }

  getSlugControl() {
    return this.editForm.slug;
  }

  getTypeControl() {
    return this.editForm.type;
  }

  updateTranslation(languageId: number, text: string): void {
    this.translationEditState.update((state) => ({
      ...state,
      [languageId]: text,
    }));
  }
}
