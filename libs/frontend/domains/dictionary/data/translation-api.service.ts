import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ENVIRONMENT_TOKEN } from '@fe/tokens';
import { Observable } from 'rxjs';
import type {
  Translation,
  CreateTranslationDto,
  UpdateTranslationDto,
} from '../models';

/**
 * Service for interacting with Translation API endpoints
 */
@Injectable({
  providedIn: 'root',
})
export class TranslationApiService {
  readonly #http = inject(HttpClient);
  readonly #environment = inject(ENVIRONMENT_TOKEN);

  /**
   * Get all translations with optional filters
   */
  getAll(params?: {
    wordId?: number;
    languageId?: number;
    text?: string;
  }): Observable<Translation[]> {
    const endpoint = this.#buildEndpoint('');
    return this.#http.get<Translation[]>(endpoint, { params: params as any });
  }

  /**
   * Get translation by ID
   */
  getById(id: number): Observable<Translation> {
    const endpoint = this.#buildEndpoint(`/${id}`);
    return this.#http.get<Translation>(endpoint);
  }

  /**
   * Create a new translation
   */
  create(dto: CreateTranslationDto): Observable<Translation> {
    const endpoint = this.#buildEndpoint('');
    return this.#http.post<Translation>(endpoint, dto);
  }

  /**
   * Update a translation
   */
  update(id: number, dto: UpdateTranslationDto): Observable<Translation> {
    const endpoint = this.#buildEndpoint(`/${id}`);
    return this.#http.patch<Translation>(endpoint, dto);
  }

  /**
   * Delete a translation
   */
  delete(id: number): Observable<Translation> {
    const endpoint = this.#buildEndpoint(`/${id}`);
    return this.#http.delete<Translation>(endpoint);
  }

  /**
   * Build API endpoint with proper prefix
   */
  #buildEndpoint(path: string): string {
    const prefix = this.#environment.API_BACKEND_PREFIX ?? '';
    const normalizedPrefix = prefix.replace(/^\//, '').replace(/\/$/, '');
    return `${normalizedPrefix}/translations${path}`;
  }
}
