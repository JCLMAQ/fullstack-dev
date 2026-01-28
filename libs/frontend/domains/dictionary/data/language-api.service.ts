import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ENVIRONMENT_TOKEN } from '@fe/tokens';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import type {
    CreateLanguageDto,
    Language,
    UpdateLanguageDto,
} from '../models';

/**
 * Service for interacting with Language API endpoints
 */
@Injectable({
  providedIn: 'root',
})
export class LanguageApiService {
  readonly #http = inject(HttpClient);
  readonly #environment = inject(ENVIRONMENT_TOKEN);

  /**
   * Get all languages
   */
  getAll(): Observable<Language[]> {
    const endpoint = this.#buildEndpoint('');
    return this.#http.get<Language[]>(endpoint).pipe(
      catchError((error) => {
        console.error('❌ Failed to load languages:', error);
        return throwError(() => error);
      })
    );
  }

  /**
   * Get available language codes
   */
  getAvailableLanguageCodes(): Observable<string[]> {
    return this.getAll().pipe(
      map((languages) => languages.map((lang) => lang.code)),
      catchError(() => {
        console.warn('⚠️ Failed to load languages, using fallback');
        return of(['en', 'fr', 'de', 'nl']); // Fallback to default
      })
    );
  }

  /**
   * Get language by ID
   */
  getById(id: number): Observable<Language> {
    const endpoint = this.#buildEndpoint(`/${id}`);
    return this.#http.get<Language>(endpoint);
  }

  /**
   * Get language by code
   */
  getByCode(code: string): Observable<Language> {
    const endpoint = this.#buildEndpoint(`/code/${code}`);
    return this.#http.get<Language>(endpoint);
  }

  /**
   * Create a new language
   */
  create(dto: CreateLanguageDto): Observable<Language> {
    const endpoint = this.#buildEndpoint('');
    return this.#http.post<Language>(endpoint, dto);
  }

  /**
   * Update a language
   */
  update(id: number, dto: UpdateLanguageDto): Observable<Language> {
    const endpoint = this.#buildEndpoint(`/${id}`);
    return this.#http.patch<Language>(endpoint, dto);
  }

  /**
   * Delete a language
   */
  delete(id: number): Observable<Language> {
    const endpoint = this.#buildEndpoint(`/${id}`);
    return this.#http.delete<Language>(endpoint);
  }

  /**
   * Build API endpoint with proper prefix
   */
  #buildEndpoint(path: string): string {
    const prefix = this.#environment.API_BACKEND_PREFIX ?? '';
    const normalizedPrefix = prefix.replace(/^\//, '').replace(/\/$/, '');
    return `${normalizedPrefix}/languages${path}`;
  }
}
