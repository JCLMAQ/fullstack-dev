import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ENVIRONMENT_TOKEN } from '@fe/tokens';
import { Observable } from 'rxjs';
import type {
  Word,
  CreateWordDto,
  UpdateWordDto,
  DictioEntryType,
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
   * Get all words with optional filters
   */
  getAll(params?: {
    skip?: number;
    take?: number;
    slug?: string;
    type?: DictioEntryType;
  }): Observable<Word[]> {
    const endpoint = this.#buildEndpoint('');
    return this.#http.get<Word[]>(endpoint, { params: params as any });
  }

  /**
   * Get word by ID
   */
  getById(id: number): Observable<Word> {
    const endpoint = this.#buildEndpoint(`/${id}`);
    return this.#http.get<Word>(endpoint);
  }

  /**
   * Get word by slug
   */
  getBySlug(slug: string): Observable<Word> {
    const endpoint = this.#buildEndpoint(`/slug/${slug}`);
    return this.#http.get<Word>(endpoint);
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

  /**
   * Build API endpoint with proper prefix
   */
  #buildEndpoint(path: string): string {
    const prefix = this.#environment.API_BACKEND_PREFIX ?? '';
    const normalizedPrefix = prefix.replace(/^\//, '').replace(/\/$/, '');
    return `${normalizedPrefix}/words${path}`;
  }
}
