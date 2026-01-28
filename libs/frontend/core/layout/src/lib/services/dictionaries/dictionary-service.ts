import { inject, Injectable } from '@angular/core';
import type { Dictionary } from '@fe/models';
import { AppStore } from '@fe/stores';
import { TranslateService } from '@ngx-translate/core';

/**
 * Service for dictionary operations
 * Now delegates to AppStore which loads dictionaries from API
 */
@Injectable({
  providedIn: 'root',
})
export class DictionaryService {
  readonly ngxtranslateService = inject(TranslateService);
  readonly #appStore = inject(AppStore);

  /**
   * Get available language codes
   */
  get languages(): string[] {
    return Object.keys(this.#appStore._dictionaries());
  }

  /**
   * Get dictionary for a specific language
   */
  getDictionary(language: string): Dictionary {
    const dictionaries = this.#appStore._dictionaries();

    if (!this.languages.includes(language)) {
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
