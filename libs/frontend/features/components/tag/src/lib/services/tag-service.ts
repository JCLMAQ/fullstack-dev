import { concatOp, httpMutation, HttpMutationOptions } from '@angular-architects/ngrx-toolkit';
import { HttpClient, HttpParams, httpResource, HttpResourceRef } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { TagCategories } from '@db/prisma/frontend';
import { ENVIRONMENT_TOKEN } from '@fe/tokens';
import { CreateTagDto, TagListItem, TagListQueryOptions, TagListResponse, TagMutationResult, UpdateTagDto } from '../models/tag.models';

@Injectable({
  providedIn: 'root',
})
export class TagService {
  private readonly http = inject(HttpClient);
  private readonly environment = inject(ENVIRONMENT_TOKEN);

  private get apiPrefix(): string {
    const prefix = this.environment.API_BACKEND_PREFIX ?? '';
    return prefix.replace(/^\//, '').replace(/\/$/, '');
  }

  private get baseUrl(): string {
    return `${this.apiPrefix}/tags`;
  }

  getTagsResource(params: () => TagListQueryOptions): HttpResourceRef<TagListItem[]> {
    return httpResource<TagListItem[]>(() => ({
      url: this.baseUrl,
      method: 'GET',
      params: this.buildParams(params()),
    }), {
      defaultValue: [],
      parse: (response) => this.parseTagListResponse(response),
    });
  }

  getTagCategoriesResource(params?: { includeDeleted?: boolean; published?: boolean; isPublic?: boolean }): HttpResourceRef<TagCategories[]> {
    const options = params ?? {};
    const httpParams = this.buildParams({
      includeDeleted: options.includeDeleted,
      published: options.published,
      isPublic: options.isPublic,
    });

    return httpResource<TagCategories[]>(() => ({
      url: `${this.baseUrl}/categories`,
      method: 'GET',
      params: httpParams,
    }), {
      defaultValue: [],
    });
  }

  createTagMutation(options: Partial<HttpMutationOptions<CreateTagDto, TagMutationResult>>) {
    return httpMutation<CreateTagDto, TagMutationResult>({
      ...options,
      request: (payload: CreateTagDto) => ({
        url: this.baseUrl,
        method: 'POST',
        body: payload,
      }),
      operator: concatOp,
    });
  }

  updateTagMutation(options: Partial<HttpMutationOptions<{ id: number; payload: UpdateTagDto }, TagMutationResult>>) {
    return httpMutation<{ id: number; payload: UpdateTagDto }, TagMutationResult>({
      ...options,
      request: ({ id, payload }) => ({
        url: `${this.baseUrl}/${id}`,
        method: 'PUT',
        body: payload,
      }),
      operator: concatOp,
    });
  }

  softDeleteMutation(options: Partial<HttpMutationOptions<{ id: number }, TagMutationResult>>) {
    return httpMutation<{ id: number }, TagMutationResult>({
      ...options,
      request: ({ id }) => ({
        url: `${this.baseUrl}/${id}`,
        method: 'DELETE',
      }),
      operator: concatOp,
    });
  }

  hardDeleteMutation(options: Partial<HttpMutationOptions<{ id: number }, TagMutationResult>>) {
    return httpMutation<{ id: number }, TagMutationResult>({
      ...options,
      request: ({ id }) => ({
        url: `${this.baseUrl}/${id}/permanent`,
        method: 'DELETE',
      }),
      operator: concatOp,
    });
  }

  private buildParams(options?: TagListQueryOptions): HttpParams {
    let params = new HttpParams();
    if (!options) return params;

    if (typeof options.skip === 'number') params = params.set('skip', String(options.skip));
    if (typeof options.take === 'number') params = params.set('take', String(options.take));
    if (options.search) params = params.set('search', options.search);
    if (typeof options.categoryId === 'number') params = params.set('categoryId', String(options.categoryId));
    if (typeof options.mainTagId === 'number') params = params.set('mainTagId', String(options.mainTagId));
    if (options.includeDeleted !== undefined) params = params.set('includeDeleted', String(options.includeDeleted));
    if (options.published !== undefined) params = params.set('published', String(options.published));
    if (options.isPublic !== undefined) params = params.set('isPublic', String(options.isPublic));

    return params;
  }

  private parseTagListResponse(response: unknown): TagListItem[] {
    if (Array.isArray(response)) {
      return response as TagListItem[];
    }

    const list = response as TagListResponse | undefined;
    return list?.data ?? [];
  }
}
