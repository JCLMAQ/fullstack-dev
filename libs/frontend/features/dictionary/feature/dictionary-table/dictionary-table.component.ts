import { Component, computed, signal } from '@angular/core';
import { Word } from '../../data/models/dictionary.model';
import { injectDictionaryStore } from '../../data/store/dictionary.store';

@Component({
  selector: 'dictionary-table',
  templateUrl: './dictionary-table.component.html',
  styleUrls: ['./dictionary-table.component.scss'],
})
export class DictionaryTableComponent {
  private readonly store = injectDictionaryStore();
  readonly words = this.store.words;
  readonly languages = this.store.languages;
  readonly entryTypes = this.store.entryTypes;

  readonly filter = signal('');
  readonly pageSize = signal(20);
  readonly pageIndex = signal(0);

  readonly filteredWords = computed(() => {
    const f = this.filter().toLowerCase();
    return this.words().filter(w =>
      w.text.toLowerCase().includes(f) ||
      w.translations.some(t => t.text.toLowerCase().includes(f))
    );
  });

  onEdit(word: Word) {
    this.store.editWord(word);
  }

  onDelete(word: Word) {
    this.store.deleteWord(word);
  }

  onVirtualDelete(word: Word) {
    this.store.virtualDeleteWord(word);
  }
}
