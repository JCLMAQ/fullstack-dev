import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Todo } from '@db/prisma/frontend';
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

  private get apiPrefix(): string {
		const prefix = this.environment.API_BACKEND_PREFIX ?? '';
		return prefix.replace(/^\//, '').replace(/\/$/, '');
	}

	private get baseUrl(): string {
		return `${this.apiPrefix}/todos`;
  }
  getTodosByUserIdOrOrgId(ownerId: string, orgId?: string | null): Promise<Todo[]> {
    let params = new HttpParams().set('ownerId', ownerId);
    if (orgId) {
      params = params.set('orgId', orgId);
    }
    return firstValueFrom(this.http.get<{ data: Todo[] }>(this.baseUrl, { params })).then((res) => res.data);
  }
  getTodosByOrgId(orgId?: string | null): Promise<Todo[]> {
    let params = new HttpParams();
    if (orgId) {
      params = params.set('orgId', orgId);
    }
    return firstValueFrom(this.http.get<{ data: Todo[] }>(this.baseUrl, { params })).then((res) => res.data);
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

	private buildUrlWithQuery(baseUrl: string, options?: TodosQueryOptions): string {
		const params = this.buildParams(options);
		const query = params.toString();
		return query ? `${baseUrl}?${query}` : baseUrl;
	}
}
