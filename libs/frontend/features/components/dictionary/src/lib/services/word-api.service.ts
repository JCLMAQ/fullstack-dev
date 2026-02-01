  /**
   * Adapter pour compatibilité store: getAllResource
   */

import { HttpClient, httpResource, HttpResourceRef } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ENVIRONMENT_TOKEN } from '@fe/tokens';
import { Observable } from 'rxjs';
import type {
  CreateWordDto,
  DictioEntryType,
  UpdateWordDto,
  Word,
} from '../models';

/**
 * Service for interacting with Word API endpoints
 */
@Injectable({
  providedIn: 'root',
})
export class WordApiService {
  readonly #http = inject(HttpClient);
  readonly #environment = inject(ENVIRONMENT_TOKEN);

  /**
   * Build API endpoint with proper prefix
   */
  #buildEndpoint(path: string): string {
    const prefix = this.#environment.API_BACKEND_PREFIX ?? '';
    const normalizedPrefix = prefix.replace(/^\//, '').replace(/\/$/, '');
    return `${normalizedPrefix}/words${path}`;
  }

  /*product = httpResource<Product>(() => ({
  url: 'https://api.example.com/products/search',
  method: 'POST',
  body: { query: 'laptop' },
  headers: { 'X-Custom-Header': 'MyValue' },
  params: { limit: '10' }
}));


  */
  getAllResource(params?: {
    skip?: number;
    take?: number;
    slug?: string;
    type?: DictioEntryType;
  }) {
    return this.getAll(params);
  }
  /**
   * Get all words with optional filters
   */
  getAll(params?: {
    skip?: number;
    take?: number;
    slug?: string;
    type?: DictioEntryType;
  }): HttpResourceRef<Word[] | undefined> {
    const endpoint = this.#buildEndpoint('');
    return httpResource<Word[]>(() => ({
      url: endpoint,
      method: 'GET',
      params,
    }));
  }

  /**
   * Get word by ID
   */
  getById(id: number): HttpResourceRef<Word | undefined> {
    const endpoint = this.#buildEndpoint(`/${id}`);
    return httpResource<Word>(() => ({
      url: endpoint,
      method: 'GET',
    }));
  }

  /**
   * Get word by slug
   */
  getBySlug(slug: string): HttpResourceRef<Word | undefined> {
    const endpoint = this.#buildEndpoint(`/slug/${slug}`);
    return httpResource<Word>(() => ({
      url: endpoint,
      method: 'GET',
    }));
  }

  /**
   * Create a new word
   */
  create(dto: CreateWordDto): Observable<Word> {
    const endpoint = this.#buildEndpoint('');
    return this.#http.post<Word>(endpoint, dto);
  }

  /**
   * Update a word
   */
  update(id: number, dto: UpdateWordDto): Observable<Word> {
    const endpoint = this.#buildEndpoint(`/${id}`);
    return this.#http.patch<Word>(endpoint, dto);
  }

  /**
   * Delete a word
   */
  delete(id: number): Observable<Word> {
    const endpoint = this.#buildEndpoint(`/${id}`);
    return this.#http.delete<Word>(endpoint);
  }


}
