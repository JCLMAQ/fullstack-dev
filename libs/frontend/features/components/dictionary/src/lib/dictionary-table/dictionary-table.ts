
import { Component, computed, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { AppStore } from '@fe/stores';
import { DictioEntryType, Word } from '../models';

@Component({
  selector: 'lib-dictionary-table',
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormField,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
  ],
  templateUrl: './dictionary-table.html',
  styleUrl: './dictionary-table.scss',
})
export class DictionaryTable {

  private readonly store = inject(AppStore);

  // Accès à la valeur du dictionnaire courant (langue sélectionnée)
  readonly selectedLanguage = this.store['selectedLanguage'];
  readonly dictionariesValue = this.store['dictionariesValue'];

  // Liste des mots pour la langue sélectionnée
  // readonly words = computed(() => {
  //   const lang = this.selectedLanguage();
  //   const dicts = this.dictionariesValue()?.dictionaries ?? {};
  //   return dicts[lang] ?? [];
  // });

readonly words = computed(() => {
  const lang = this.selectedLanguage();
  const dicts = this.dictionariesValue()?.dictionaries ?? {};
  const entries = Object.entries(dicts[lang] ?? {});
  return entries.map(([slug, text], idx) => ({
    id: idx,
    slug,
    text,
    type: 'word' as DictioEntryType, // Remplace 'word' par la valeur par défaut de ton enum
    translations: [],
    createdAt: '',
    updatedAt: '',
    deletedAt: null,
    isDeleted: false,
  }));
});

  readonly filter = signal('');
  readonly pageSize = signal(10);
  readonly pageIndex = signal(0);

  readonly filteredWords = computed(() => {
    const f = this.filter().toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '');
    return this.words().filter((w: Word) => {
      const slug = (w.slug ?? '').toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '');
      // Word n'a pas de champ text, on ne filtre que sur slug et les traductions
      const matchWord = slug.includes(f);
      const matchTranslation = (w.translations?.some((t) => (t.text ?? '').toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '').includes(f)) ?? false);
      return matchWord || matchTranslation;
    });
  });

    // Pagination calculée
  readonly pagedWords = computed(() => {
    const all = this.filteredWords();
    const page = this.pageIndex();
    const size = this.pageSize();
    const start = page * size;
    return all.slice(start, start + size);
  });

  onPage(event: { pageIndex: number; pageSize: number }): void {
    this.pageIndex.set(event.pageIndex);
    this.pageSize.set(event.pageSize);
  }
  onEdit(word: Word) {
    // this.store.editWord(word);

  // S'assurer que la colonne 'translations' est présente
  displayedColumns = [
    'id',
    'slug',
    'type',
    'translations',
    'actions',
  ];

  onVirtualDelete(word: Word): void {
    // this.store.virtualDeleteWord(word);
  }
}
