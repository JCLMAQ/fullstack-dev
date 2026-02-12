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
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorIntl, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

import { form, FormField, required, schema } from '@angular/forms/signals';
import { MatSortModule, Sort } from '@angular/material/sort';
import { DictionaryPaginatorIntl } from '@fe/material';
import { ConfirmDialogService } from '@fe/messages';
import { TranslateService } from '@ngx-translate/core';
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
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatPaginatorModule,
    FormField,
    MatDialogModule,
  ],
  providers: [{ provide: MatPaginatorIntl, useClass: DictionaryPaginatorIntl }],
})
export class DictionaryTable {
  private readonly confirmDialog = inject(ConfirmDialogService);
  private readonly wordApiService = inject(WordApiService);
  private readonly translationApiService = inject(TranslationApiService);
  private readonly translate = inject(TranslateService);

  // State signals
  readonly words = signal<Word[]>([]);
  readonly translations = signal<Translation[]>([]);
  readonly languages = signal<Language[]>([]);
  readonly searchFilter = signal<string>('');
  readonly editingRowId = signal<number | null>(null);
  readonly addingNewRow = signal<boolean>(false);
  readonly translationEditState = signal<Record<number, string>>({});
  readonly newTranslationState = signal<Record<number, string>>({});
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

  readonly hasAtLeastOneTranslation = computed(() => {
    const translations = this.newTranslationState();
    return Object.values(translations).some((t) => t && t.trim().length > 0);
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
    this.confirmDialog
      .confirm({
        title: this.translate.instant('common.confirmationTitle'),
        message: this.translate.instant('common.confirmDeleteWord', { slug }),
        confirmText: this.translate.instant('common.delete'),
        cancelText: this.translate.instant('common.cancel'),
        confirmColor: 'warn',
      })
      .subscribe((result) => {
      if (result) {
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
    });
  }

  onVirtualDelete(id: number, slug: string): void {
    this.confirmDialog
      .confirm({
        title: this.translate.instant('common.confirmationTitle'),
        message: this.translate.instant('common.confirmMarkDeleteWord', { slug }),
        confirmText: this.translate.instant('common.mark'),
        cancelText: this.translate.instant('common.cancel'),
        confirmColor: 'warn',
      })
      .subscribe((result) => {
        if (result) {
          console.warn('Virtual delete not yet implemented');
        }
      });
  }

  onAdd(): void {
    this.addingNewRow.set(true);
    this.addState.set({ slug: '', type: DictioEntryType.WORD });
    this.newTranslationState.set({});
  }

  onCancelAdd(): void {
    this.addingNewRow.set(false);
    this.addState.set({ slug: '', type: DictioEntryType.WORD });
    this.newTranslationState.set({});
  }

  onSaveAdd(): void {
    if (!this.addForm().valid() || !this.hasAtLeastOneTranslation()) return;

    const formValue = this.addState();
    const dto: CreateWordDto = {
      slug: formValue.slug,
      type: formValue.type,
    };

    this.wordApiService.create(dto).subscribe(
      (newWord) => {
        this.words.set([...this.words(), newWord]);

        // Save translations for the new word
        const transState = this.newTranslationState();
        this.languages().forEach((lang) => {
          const text = transState[lang.id];
          if (text) {
            this.translationApiService
              .create({ text, languageId: lang.id, wordId: newWord.id })
              .subscribe((created) =>
                this.translations.update((ts) => [...ts, created])
              );
          }
        });

        this.addingNewRow.set(false);
        this.addState.set({ slug: '', type: DictioEntryType.WORD });
        this.newTranslationState.set({});
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

  updateNewTranslation(languageId: number, text: string): void {
    this.newTranslationState.update((state) => ({
      ...state,
      [languageId]: text,
    }));
  }

  // Sorting functionality can be added here in the future
  // 1. Add state for sorting
  protected readonly sortState = signal<Sort>({ active: 'id', direction: 'asc' });

  // 2. Implement the method called by the template
  protected onSortChange(sort: Sort) {
    this.sortState.set(sort);
  }

  // 3. Create a computed signal to sort the data
  protected readonly sortedWords = computed(() => {
    // Use your existing filteredWords signal as the source
    const words = this.filteredWords();
    const { active, direction } = this.sortState();

    if (!active || !direction) {
      return words;
    }

    const isAsc = direction === 'asc';

    return [...words].sort((a, b) => {
      switch (active) {
        case 'id':
          return this.compare(a.word?.id, b.word?.id, isAsc);
        case 'slug':
          return this.compare(a.word?.slug, b.word?.slug, isAsc);
        case 'type':
          return this.compare(a.word?.type, b.word?.type, isAsc);
        default:
          // Handle dynamic language columns (active is the language code)
          const lang = this.languages().find(l => l.code.toLowerCase() === active);
          if (lang) {
            // Use your existing getTranslationText method
            const valA = this.getTranslationText(a, lang.id);
            const valB = this.getTranslationText(b, lang.id);
            return this.compare(valA, valB, isAsc);
          }
          return 0;
      }
    });
  });

  // 4. Update your existing paginatedWords to use sortedWords() instead of filteredWords()
  protected readonly paginatedWords = computed(() => {
    const words = this.sortedWords(); // Changed from filteredWords()
    const startIndex = this.pageIndex() * this.pageSize();
    return words.slice(startIndex, startIndex + this.pageSize());
  });

  // 5. Helper method for comparison
  private compare(a: number | string | undefined, b: number | string | undefined, isAsc: boolean) {
    return (a ?? '' < (b ?? '') ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
