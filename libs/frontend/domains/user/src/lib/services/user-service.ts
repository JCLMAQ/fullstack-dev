import { concatOp, httpMutation, HttpMutationOptions } from '@angular-architects/ngrx-toolkit';
import { HttpClient, HttpParams, httpResource, HttpResourceRef } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Address, Organization, UserWithRelations } from '@db/prisma/frontend';
import { ENVIRONMENT_TOKEN } from '@fe/tokens';

type SortOrder = 'asc' | 'desc';
type OrderBy = 'email' | 'firstName' | 'lastName' | 'createdAt';

// const UserListSchema = UserSChema.array();

export type UsersQueryOptions = {
	skip?: number;
	take?: number;
	search?: string;
	orderBy?: OrderBy;
	sortOrder?: SortOrder;
};

@Injectable({
	providedIn: 'root',
})
export class UserService {
	private readonly http = inject(HttpClient);
    // Todo  refactor with httpResource
	private readonly environment = inject(ENVIRONMENT_TOKEN);

	private get apiPrefix(): string {
		const prefix = this.environment.API_BACKEND_PREFIX ?? '';
		return prefix.replace(/^\//, '').replace(/\/$/, '');
	}

	private get baseUrl(): string {
		return `${this.apiPrefix}/users`;
	}

	// --------------------
	// httpResource helpers (signal-friendly)
	// --------------------

  // Gets
	getUsersResource(options?: UsersQueryOptions): HttpResourceRef<UserWithRelations[]> {
		const url = this.buildUrlWithQuery(this.baseUrl, options);
		return httpResource<UserWithRelations[]>(() => ({
			url,
			method: 'GET',
			params: this.buildParams(options),
		}), {
			defaultValue: [],
		});
	}

	getUserByIdResource(id: string): HttpResourceRef<UserWithRelations | null> {
		if (!id) throw new Error('id requis');
    const params = new HttpParams().set('userId', id);
    // const url = this.baseUrl;
		const url = `${this.baseUrl}/${encodeURIComponent(id)}`;
    return httpResource<UserWithRelations | null>(() => ({
      url,
      method: 'GET',
      params,
    }), {
      defaultValue: null,
    });
	}

  getUserByEmailResource(email: string): HttpResourceRef<UserWithRelations | null> {
		if (!email) throw new Error('email requis');
		const url = `${this.baseUrl}/email/${encodeURIComponent(email)}`;
    return httpResource<UserWithRelations | null>(() => ({
      url,
      method: 'GET',
    }), {
      defaultValue: null,
    });
	}


  getUserAddressesResource(userId: string): HttpResourceRef<Address[]> {
    if (!userId) throw new Error('userId requis');
    const url = `${this.baseUrl}/${encodeURIComponent(userId)}/addresses`;
    return httpResource<Address[]>(() => ({
      url,
      method: 'GET',
    }), {
      defaultValue: [],
    });
  }

	getUserOrganizationsResource(id: string): HttpResourceRef<Organization[]> {
		if (!id) throw new Error("l'id utilisateur est requis");
		const url = `${this.baseUrl}/${encodeURIComponent(id)}/organizations`;
    return httpResource<Organization[]>(() => ({
          url,
          method: 'GET',
        }), {
          defaultValue: [],
        });
	}

	getUserFollowersResource(id: string): HttpResourceRef<UserWithRelations[]> {
		if (!id) throw new Error('id requis');
		const url = `${this.baseUrl}/${encodeURIComponent(id)}/followers`;
		return httpResource<UserWithRelations[]>(() => ({
			url,
			method: 'GET',
		}), {
			defaultValue: [],
		});
	}

	getUserFollowingResource(id: string): HttpResourceRef<UserWithRelations[]> {
		if (!id) throw new Error('id requis');
		const url = `${this.baseUrl}/${encodeURIComponent(id)}/following`;
		return httpResource<UserWithRelations[]>(() => ({
			url,
			method: 'GET',
		}), {
			defaultValue: [],
		});
	}

  // --------------------
  // Mutations
	// --------------------
  createSaveUserMutation(options: Partial<HttpMutationOptions<UserWithRelations, UserWithRelations>>) {
    const url = `${this.baseUrl}/upsert`;
    return httpMutation({
      ...options,
      request: (user: UserWithRelations) => ({
        url: url,
        method: 'POST',
        body: user,
      }),
      operator: concatOp
    });
  }
  softDeleteUserMutation(options: Partial<HttpMutationOptions<{ id: string }, { message: string; user: UserWithRelations }>>) {
    const apiPrefix = this.apiPrefix;
    return httpMutation({
      ...options,
      request: (data: { id: string }) => ({
        url: `${apiPrefix}/users/${data.id}`,
        method: 'DELETE',
      }),
      operator: concatOp
    });
  }

    hardDeleteUserMutation(options: Partial<HttpMutationOptions<{ id: string }, { message: string; user: UserWithRelations }>>) {
      const apiPrefix = this.apiPrefix;
      return httpMutation({
        ...options,
        request: (data: { id: string }) => ({
          url: `${apiPrefix}/users/${data.id}/permanent`,
          method: 'DELETE',
        }),
        operator: concatOp
      });
    }

     // Fetch with query options for pagination, search, and sorting
      getUsersWithQueriesResource(options?: UsersQueryOptions): HttpResourceRef<UserWithRelations[]> {
        const url = `${this.apiPrefix}/users`; // Assuming the backend can handle query params for filtering, pagination, etc.
        const params = this.buildParams(options);
        return httpResource<UserWithRelations[]>(() => ({
          url,
          method: 'GET',
          params,
        }), {
          defaultValue: [],
        });
      }

	// --------------------
	// Utils
	// --------------------

	private buildParams(options?: UsersQueryOptions): HttpParams {
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

	private buildUrlWithQuery(baseUrl: string, options?: UsersQueryOptions): string {
		const params = this.buildParams(options);
		const query = params.toString();
		return query ? `${baseUrl}?${query}` : baseUrl;
	}


}

