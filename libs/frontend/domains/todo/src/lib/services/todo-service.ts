import { concatOp, httpMutation, HttpMutationOptions } from '@angular-architects/ngrx-toolkit';
import { HttpClient, HttpParams, httpResource, HttpResourceRef } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { TodoWithRelations } from '@db/prisma';
import { ENVIRONMENT_TOKEN } from '@fe/tokens';
import { firstValueFrom } from 'rxjs';

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

  // Using httpResource

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
    });
  }

  createSaveTodoMutation(options: Partial<HttpMutationOptions<TodoWithRelations, TodoWithRelations>>) {
    const url = `${this.apiPrefix}/todos`;
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

  // todosResource(options?: TodosQueryOptions): HttpResourceRef<TodoWithRelations[]> {
  //   return httpResource<TodoWithRelations[]>(() => ({
  //     url: this.baseUrl,
  //     method: 'GET',
  //     params: this.buildParams(options),
  //   }), {
  //     defaultValue: [],
  //   });
  // }

  // todoByIdResource(id: string): HttpResourceRef<TodoWithRelations | null> {
  //   if (!id) throw new Error('id requis');
	// 	const url = `${this.baseUrl}/${encodeURIComponent(id)}`;
  //   return httpResource<TodoWithRelations | null>(() => ({
  //     url,
  //     method: 'GET',
  //   }), {
  //     defaultValue: null,
  //   });
  // }


  // get todos - classic way
  // Get todos for one user, with optional orgId filter
  async getTodosByUserIdOrOrgId(ownerId: string, orgId?: string | null): Promise<TodoWithRelations[]> {
    let params = new HttpParams().set('ownerId', ownerId);
    const url = this.baseUrl;
    if (orgId) {
      params = params.set('orgId', orgId);
    }
    return await firstValueFrom(this.http.get<{ data: TodoWithRelations[] }>(url, { params })).then((res) => res.data);
  }
  // Get todos for an org, without ownerId filter
  async getTodosByOrgId(orgId: string): Promise<TodoWithRelations[]> {
    const params = new HttpParams().set('orgId', orgId);
    const url = this.baseUrl;
    return await firstValueFrom(this.http.get<{ data: TodoWithRelations[] }>(url, { params })).then((res) => res.data);
  }
}
