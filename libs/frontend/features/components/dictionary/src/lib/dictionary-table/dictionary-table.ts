import { Component, computed, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { AppStore } from '@fe/stores';
import { Word } from '../models';

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
  readonly words = this.store['words'];
  readonly languages = this.store['languages'];
  readonly entryTypes = this.store['entryTypes'];

  readonly filter = signal('');
  readonly pageSize = signal(20);
  readonly pageIndex = signal(0);

  readonly filteredWords = computed(() => {
    const f = this.filter().toLowerCase();
    return this.words().filter((w: Word) =>
      w.slug.toLowerCase().includes(f) ||
      (w.translations?.some((t) => t.text.toLowerCase().includes(f)) ?? false)
    );
  });

  onEdit(word: Word) {
    // this.store.editWord(word);
  }

  onDelete(word: Word) {
    // this.store.deleteWord(word);
  }

  onVirtualDelete(word: Word) {
    // this.store.virtualDeleteWord(word);
  }
}
