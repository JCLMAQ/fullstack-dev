import { HttpClient, httpResource } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ENVIRONMENT_TOKEN } from '@fe/tokens';
import { Observable } from 'rxjs';
import type {
  CreateTranslationDto,
  Translation,
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
   * Build API endpoint with proper prefix
   */
  #buildEndpoint(path: string): string {
    const prefix = this.#environment.API_BACKEND_PREFIX ?? '';
    const normalizedPrefix = prefix.replace(/^\//, '').replace(/\/$/, '');
    return `${normalizedPrefix}/translations${path}`;
  }

  /**
   * Get all translations with optional filters
   */
  getAllResource(params?: {
    wordId?: number;
    languageId?: number;
    text?: string;
  }) {
    const endpoint = this.#buildEndpoint('');
    return httpResource<Translation[]>(() => ({
      url: endpoint,
      method: 'GET',
      params,
    }));
  }

  /**
   * Get translation by ID
   */
  getByIdResource(id: number) {
    const endpoint = this.#buildEndpoint(`/${id}`);
    return httpResource<Translation>(() => ({
      url: endpoint,
      method: 'GET',
    }));
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
}
