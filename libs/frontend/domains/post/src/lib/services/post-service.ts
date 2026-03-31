import { concatOp, httpMutation, HttpMutationOptions } from '@angular-architects/ngrx-toolkit';
import { HttpParams, httpResource, HttpResourceRef } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { PostWithRelations } from '@db/prisma/frontend';
import { parseResponse } from '@fe/shared';
import { ENVIRONMENT_TOKEN } from '@fe/tokens';
import { z } from 'zod';

const PostSchema = z.object({
  id: z.string(),
  numSeq: z.number(),
  createdAt: z.preprocess((arg) => (typeof arg === 'string' ? new Date(arg) : arg), z.date()),
  updatedAt: z.preprocess((arg) => (typeof arg === 'string' ? new Date(arg) : arg), z.date()),
  published: z.boolean(),
  isDeleted: z.number().optional(),
  isDeletedDT: z.preprocess((arg) => (typeof arg === 'string' ? new Date(arg) : arg), z.date()).nullable().optional(),
  isPublic: z.boolean(),
  ownerId: z.string(),
  orgId: z.string().nullable().optional(),
  orderPost: z.number().nullable().optional(),
  title: z.string(),
  content: z.string().nullable().optional(),
  owner: z.unknown().nullable().optional(),
  org: z.unknown().nullable().optional(),
  groups: z.array(z.unknown()).optional().default([]),
  Users: z.array(z.unknown()).optional().default([]),
  LikedBys: z.array(z.unknown()).optional().default([]),
  Comments: z.array(z.unknown()).optional().default([]),
  Categories: z.array(z.unknown()).optional().default([]),
  Images: z.array(z.unknown()).optional().default([]),
  Files: z.array(z.unknown()).optional().default([]),
  Tags: z.array(z.unknown()).optional().default([]),
});

const PostListSchema = z.array(PostSchema);

type SortOrder = 'asc' | 'desc';
type OrderBy = 'title' | 'createdAt' | 'updatedAt' | 'numSeq';

export type PostsQueryOptions = {
  skip?: number;
  take?: number;
  search?: string;
  orderBy?: OrderBy;
  sortOrder?: SortOrder;
  ownerId?: string;
  orgId?: string;
  published?: boolean;
  isPublic?: boolean;
};

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private readonly environment = inject(ENVIRONMENT_TOKEN);

  private get apiPrefix(): string {
    const prefix = this.environment.API_BACKEND_PREFIX ?? '';
    return prefix.replace(/^\//, '').replace(/\/$/, '');
  }

  get baseUrl(): string {
    return `${this.apiPrefix}/posts`;
  }

  getPostsByUserIdOrOrgIdResource(ownerId: string, orgId?: string[] | null): HttpResourceRef<PostWithRelations[]> {
    let params = new HttpParams().set('ownerId', ownerId);
    const url = this.baseUrl;
    if (orgId) {
      orgId.forEach((id) => {
        params = params.append('orgId', id);
      });
    }
    return httpResource<PostWithRelations[]>(() => ({
      url,
      method: 'GET',
      params,
    }), {
      defaultValue: [],
      parse: (data) => parseResponse(PostListSchema, data) as PostWithRelations[],
    });
  }

  getPostByIdResource(id: string): HttpResourceRef<PostWithRelations | null> {
    const url = `${this.apiPrefix}/posts/${encodeURIComponent(id)}`;
    return httpResource<PostWithRelations | null>(() => ({
      url,
      method: 'GET',
    }), {
      defaultValue: null,
      parse: (data) => (data ? parseResponse(PostSchema, data) as PostWithRelations : null),
    });
  }

  createSavePostMutation(options: Partial<HttpMutationOptions<PostWithRelations, PostWithRelations>>) {
    const apiPrefix = this.apiPrefix;
    return httpMutation({
      ...options,
      request: (post: PostWithRelations) => {
        const ownerId = post.ownerId ?? (post as any).owner?.id;
        if (!ownerId) {
          throw new Error('ownerId is required');
        }

        const orgId = post.orgId ?? (post as any).org?.id ?? null;

        const basePayload: Record<string, unknown> = {
          title: post.title,
          content: post.content ?? null,
          published: post.published ?? true,
          isPublic: post.isPublic ?? false,
          orderPost: post.orderPost ?? null,
        };

        if (post.id) {
          const updatePayload: Record<string, unknown> = { ...basePayload };
          if (orgId) {
            updatePayload.org = { connect: { id: orgId } };
          } else if (orgId === null) {
            updatePayload.org = { disconnect: true };
          }

          return {
            url: `${apiPrefix}/posts/${post.id}`,
            method: 'PUT',
            body: updatePayload,
          };
        }

        const createPayload: Record<string, unknown> = {
          ...basePayload,
          owner: { connect: { id: ownerId } },
        };

        if (orgId) {
          createPayload.org = { connect: { id: orgId } };
        }

        return {
          url: `${apiPrefix}/posts`,
          method: 'POST',
          body: createPayload,
        };
      },
      operator: concatOp,
    });
  }

  softDeleteMutation(options: Partial<HttpMutationOptions<{ id: string }, PostWithRelations>>) {
    const apiPrefix = this.apiPrefix;
    return httpMutation({
      ...options,
      request: (data: { id: string }) => ({
        url: `${apiPrefix}/posts/${data.id}`,
        method: 'DELETE',
      }),
      operator: concatOp,
    });
  }

  hardDeleteMutation(options: Partial<HttpMutationOptions<{ id: string }, PostWithRelations>>) {
    const apiPrefix = this.apiPrefix;
    return httpMutation({
      ...options,
      request: (data: { id: string }) => ({
        url: `${apiPrefix}/posts/${data.id}/permanent`,
        method: 'DELETE',
      }),
      operator: concatOp,
    });
  }

  getPostsWithQueriesResource(options?: PostsQueryOptions): HttpResourceRef<PostWithRelations[]> {
    const url = `${this.apiPrefix}/posts`;
    const params = this.buildParams(options);
    return httpResource<PostWithRelations[]>(() => ({
      url,
      method: 'GET',
      params,
    }), {
      defaultValue: [],
      parse: (data) => parseResponse(PostListSchema, data) as PostWithRelations[],
    });
  }

  private buildParams(options?: PostsQueryOptions): HttpParams {
    let params = new HttpParams();
    if (!options) return params;
    const { skip, take, search, orderBy, sortOrder, ownerId, orgId, published, isPublic } = options;
    if (typeof skip === 'number') params = params.set('skip', String(skip));
    if (typeof take === 'number') params = params.set('take', String(take));
    if (search) params = params.set('search', search);
    if (orderBy) params = params.set('orderBy', orderBy);
    if (sortOrder) params = params.set('sortOrder', sortOrder);
    if (ownerId) params = params.set('ownerId', ownerId);
    if (orgId) params = params.set('orgId', orgId);
    if (published !== undefined) params = params.set('published', String(published));
    if (isPublic !== undefined) params = params.set('isPublic', String(isPublic));
    return params;
  }
}
