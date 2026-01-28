import { computed, inject, Injectable } from '@angular/core';
import type { Dictionary } from '@fe/models';
import { AppStore } from '@fe/stores';
import { TranslateService } from '@ngx-translate/core';

/**
 * Service for dictionary operations
 * Now delegates to AppStore which loads dictionaries from API via httpResource
 */
@Injectable({
  providedIn: 'root',
})
export class DictionaryService {
  readonly ngxtranslateService = inject(TranslateService);
  readonly #appStore = inject(AppStore);

  /**
   * Get available language codes (reactive computed)
   */
  readonly languages = computed(() =>
    Object.keys(this.#appStore.dictionariesValue())
  );

  /**
   * Get dictionary for a specific language
   */
  getDictionary(language: string): Dictionary {
    const dictionaries = this.#appStore.dictionariesValue();

    if (!this.languages().includes(language)) {
      throw new Error(`Language ${language} not found in dictionaries`);
    }

    this.ngxtranslateService.use(language);
    return dictionaries[language] || {};
  }

  /**
   * Get current selected dictionary
   */
  get currentDictionary(): Dictionary {
    return this.#appStore.selectedDictionary() || {};
  }
}
