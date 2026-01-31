import { httpResource } from '@angular/common/http';
import { computed, inject, Injectable } from '@angular/core';
import { ENVIRONMENT_TOKEN } from '@fe/tokens';
import type { DictionariesResponse, Word, WordWithTranslations } from '../models';

/**
 * Service for loading dictionaries from API
 * Provides optimized endpoints for loading all translations grouped by language
 */
@Injectable({
  providedIn: 'root',
})
export class DictionaryApiService {

  readonly #environment = inject(ENVIRONMENT_TOKEN);

  /**
   * Build API endpoint for dictionaries controller
   */
  #buildEndpoint(path: string): string {
    const prefix = this.#environment.API_BACKEND_PREFIX ?? '';
    const normalizedPrefix = prefix.replace(/^\//, '').replace(/\/$/, '');
    return `${normalizedPrefix}/dictionaries${path}`;
  }

  /**
   * Build API endpoint for words controller
   */
  #buildWordsEndpoint(path: string): string {
    const prefix = this.#environment.API_BACKEND_PREFIX ?? '';
    const normalizedPrefix = prefix.replace(/^\//, '').replace(/\/$/, '');
    return `${normalizedPrefix}/words${path}`;
  }

  /**
   * Reactive URL signal for dictionaries endpoint
   * Used by httpResource for automatic loading
   */
  readonly dictionariesUrl = computed(() => this.#buildEndpoint('/all'));

  /**
   * Signal-based resource for all dictionaries grouped by language code
   * Usage: this.dictionariesResource.data() for current value, .loading(), .error()
   */
readonly dictionariesResource = httpResource<DictionariesResponse>(
  () => ({ url: this.dictionariesUrl() }),
  { defaultValue: { dictionaries: {}, languages: [] }}
);

  /**
   * Signal resource for a specific language dictionary
   * Usage: this.dictionaryResourceByLanguage(languageCode).data() / .loading() / .error()
   */
  dictionaryResourceByLanguage(languageCode: string) {
    return httpResource<Record<string, string>>(
      () => ({ url: this.#buildEndpoint(`/${languageCode}`) }),
      {
        defaultValue: {}
      }
    );
  }

  /**
   * Signal resource for all translations of a specific word
   * Usage: this.wordTranslationsResource(slug).data() / .loading() / .error()
   */
  wordTranslationsResource(slug: string) {
    return httpResource<WordWithTranslations>(
      () => ({ url: this.#buildEndpoint(`/word/${slug}/translations`) }),
      {
        defaultValue: { slug, type: '', translations: {} }
      }
    );
  }

  /**
   * Signal resource for all words with their translations (for caching/offline)
   * Usage: this.wordsResource.data() / .loading() / .error()
   */
  readonly wordsResource = httpResource<Word[]>(
    () => ({ url: this.#buildWordsEndpoint('') }),
    {
      defaultValue: []
    }
  );


}
