import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable } from '@angular/core';
import { ENVIRONMENT_TOKEN } from '@fe/tokens';
import { catchError, map, Observable, of } from 'rxjs';
import type { Dictionaries, DictionariesResponse, Word, WordWithTranslations } from '../models';

/**
 * Service for loading dictionaries from API
 * Provides optimized endpoints for loading all translations grouped by language
 */
@Injectable({
  providedIn: 'root',
})
export class DictionaryApiService {
  readonly #http = inject(HttpClient);
    // Todo  refactor with httpResource
  readonly #environment = inject(ENVIRONMENT_TOKEN);

  /**
   * Reactive URL signal for dictionaries endpoint
   * Used by httpResource for automatic loading
   */
  readonly dictionariesUrl = computed(() => this.#buildEndpoint('/all'));

  /**
   * Load all dictionaries grouped by language code
   * Returns format compatible with existing DICTIONARIES_TOKEN: { en: {key: value}, fr: {key: value} }
   */
  loadAllDictionaries(): Observable<Dictionaries> {
    const endpoint = this.#buildEndpoint('/all');

    return this.#http.get<DictionariesResponse>(endpoint).pipe(
      map((response) => response.dictionaries),
      catchError((error) => {
        console.error('❌ Failed to load dictionaries from API:', error);
        // Return empty dictionaries on error
        return of({} as Dictionaries);
      })
    );
  }

  /**
   * Load dictionary for a specific language
   */
  loadDictionaryByLanguage(languageCode: string): Observable<Record<string, string>> {
    const endpoint = this.#buildEndpoint(`/${languageCode}`);

    return this.#http.get<Record<string, string>>(endpoint).pipe(
      catchError((error) => {
        console.error(`❌ Failed to load dictionary for ${languageCode}:`, error);
        return of({});
      })
    );
  }

  /**
   * Get all translations for a specific word
   */
  getWordTranslations(slug: string): Observable<WordWithTranslations> {
    const endpoint = this.#buildEndpoint(`/word/${slug}/translations`);
    return this.#http.get<WordWithTranslations>(endpoint);
  }

  /**
   * Load all words with their translations (for caching/offline)
   */
  loadAllWords(): Observable<Word[]> {
    const wordsEndpoint = this.#buildWordsEndpoint('');
    return this.#http.get<Word[]>(wordsEndpoint).pipe(
      catchError((error) => {
        console.error('❌ Failed to load words:', error);
        return of([]);
      })
    );
  }

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
}
