import { concatOp, httpMutation, HttpMutationOptions } from '@angular-architects/ngrx-toolkit';
import { HttpClient, HttpParams, httpResource, HttpResourceRef } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { TodoWithRelations } from '@db/prisma/frontend';
import { ENVIRONMENT_TOKEN } from '@fe/tokens';
import { z } from 'zod';

const TodoSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string().nullable().optional(),
  ownerId: z.string(),
  createdAt: z.preprocess((arg) => (typeof arg === 'string' ? new Date(arg) : arg), z.date()),
  updatedAt: z.preprocess((arg) => (typeof arg === 'string' ? new Date(arg) : arg), z.date()),
});

const TodoListSchema = z.array(TodoSchema);

type SortOrder = 'asc' | 'desc';
type OrderBy = 'email' | 'firstName' | 'lastName' | 'createdAt';

export type TodosQueryOptions = {
	skip?: number;
	take?: number;
	search?: string;
	orderBy?: OrderBy;
	sortOrder?: SortOrder;
};

@Injectable({
  providedIn: 'root',
})
export class TodoService {

  private readonly http = inject(HttpClient);
  private readonly environment = inject(ENVIRONMENT_TOKEN);

  // API config
  private get apiPrefix(): string {
		const prefix = this.environment.API_BACKEND_PREFIX ?? '';
		return prefix.replace(/^\//, '').replace(/\/$/, '');
	}

	get baseUrl(): string {
		return `${this.apiPrefix}/todos/by-user`;
  }

  // Helper pour parser les réponses avec Zod
  private parseResponse<T>(schema: z.ZodType<T>, data: unknown): T {
    const result = schema.safeParse(data);
    if (!result.success) {
      console.error('❌ Zod Validation Error:', result.error);
      throw new Error('Data validation failed from API');
    }
    return result.data;
  }

  // Using httpResource for automatic caching, loading state, and error handling in the store
  getTodosByUserIdOrOrgIdResource(ownerId: string, orgId?: string[] | null): HttpResourceRef<TodoWithRelations[]> {
    let params = new HttpParams().set('ownerId', ownerId);
    const url = this.baseUrl;
    if (orgId) {
      orgId.forEach((id) => {
        params = params.append('orgId', id);
      });
    }
    return httpResource<TodoWithRelations[]>(() => ({
      url,
      method: 'GET',
      params,
    }), {
      defaultValue: [],
      // Utilisation du mapping pour valider et transformer les données avec Zod
      parse: (data) => this.parseResponse(TodoListSchema, data) as TodoWithRelations[]
    });
  }
  getTodosByOrgIdResource(orgId: string): HttpResourceRef<TodoWithRelations[]> {
    const params = new HttpParams().set('orgId', orgId);
    const url = this.baseUrl;
    return httpResource<TodoWithRelations[]>(() => ({
      url,
      method: 'GET',
      params,
    }), {
      defaultValue: [],
      parse: (data) => this.parseResponse(TodoListSchema, data) as TodoWithRelations[]
    });
  }

  getTodoByIdResource(id: string): HttpResourceRef<TodoWithRelations | null> {
    const url = `${this.apiPrefix}/todos/${id}`;
    return httpResource<TodoWithRelations | null>(() => ({
      url,
      method: 'GET',
    }), {
      defaultValue: null,
      parse: (data) => data ? this.parseResponse(TodoSchema, data) as TodoWithRelations : null
    });
  }

  createSaveTodoMutation(options: Partial<HttpMutationOptions<TodoWithRelations, TodoWithRelations>>) {
    const url = `${this.apiPrefix}/todos/save`;
    return httpMutation({
      ...options,
      request: (todo: TodoWithRelations) => ({
        url: url,
        method: 'POST',
        body: todo,
      }),
      operator: concatOp
    });
  }

  createSoftDeleteMutation(options: Partial<HttpMutationOptions<{ id: string }, { message: string; todo: TodoWithRelations }>>) {
    const apiPrefix = this.apiPrefix;
    return httpMutation({
      ...options,
      request: (data: { id: string }) => ({
        url: `${apiPrefix}/todos/${data.id}`,
        method: 'DELETE',
      }),
      operator: concatOp
    });
  }

  createHardDeleteMutation(options: Partial<HttpMutationOptions<{ id: string }, { message: string; todo: TodoWithRelations }>>) {
    const apiPrefix = this.apiPrefix;
    return httpMutation({
      ...options,
      request: (data: { id: string }) => ({
        url: `${apiPrefix}/todos/${data.id}/permanent`,
        method: 'DELETE',
      }),
      operator: concatOp
    });
  }

  // Fetch with query options for pagination, search, and sorting
  getTodosWithQueriesResource(options?: TodosQueryOptions): HttpResourceRef<TodoWithRelations[]> {
    const url = `${this.apiPrefix}/todos`;
    const params = this.buildParams(options);
    return httpResource<TodoWithRelations[]>(() => ({
      url,
      method: 'GET',
      params,
    }), {
      defaultValue: [],
      parse: (data) => this.parseResponse(TodoListSchema, data) as TodoWithRelations[]
    });
  }

    private buildParams(options?: TodosQueryOptions): HttpParams {
		let params = new HttpParams();
		if (!options) return params;
		const { skip, take, search, orderBy, sortOrder } = options;
		if (typeof skip === 'number') params = params.set('skip', String(skip));
		if (typeof take === 'number') params = params.set('take', String(take));
		if (search) params = params.set('search', search);
		if (orderBy) params = params.set('orderBy', orderBy);
		if (sortOrder) params = params.set('sortOrder', sortOrder);
		return params;
	}

}
