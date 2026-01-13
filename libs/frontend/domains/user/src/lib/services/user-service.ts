import { HttpClient, HttpParams, httpResource } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Address, Organization, User } from '@db/prisma';
import { ENVIRONMENT_TOKEN } from '@fe/tokens';
import { firstValueFrom } from 'rxjs';
import { UserWithRelations } from '../models/user-model';

type SortOrder = 'asc' | 'desc';
type OrderBy = 'email' | 'firstName' | 'lastName' | 'createdAt';

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
	private readonly environment = inject(ENVIRONMENT_TOKEN);
	private readonly resourceFactory = (httpResource as unknown) as (
		config: { loader: () => unknown; default?: unknown }
	) => unknown;

	private get apiPrefix(): string {
		const prefix = this.environment.API_BACKEND_PREFIX ?? '';
		return prefix.replace(/^\//, '').replace(/\/$/, '');
	}

	private get baseUrl(): string {
		return `${this.apiPrefix}/users`;
	}

	// --------------------
	// Promise-based methods
	// --------------------

	async listUsers(options?: UsersQueryOptions): Promise<UserWithRelations[]> {
		const params = this.buildParams(options);
		const url = this.baseUrl;
    // const url =`${this.baseUrl}/alluserswlinks`; // Custom endpoint to get all users with all links
		return await firstValueFrom(this.http.get<UserWithRelations[]>(url, { params }));
	}

	async getUserById(id: string): Promise<User> {
		if (!id) throw new Error('id requis');
		const url = `${this.baseUrl}/${encodeURIComponent(id)}`;
		return await firstValueFrom(this.http.get<User>(url));
	}

	async getUserByEmail(email: string): Promise<User> {
		if (!email) throw new Error('email requis');
		const url = `${this.baseUrl}/email/${encodeURIComponent(email)}`;
		return await firstValueFrom(this.http.get<User>(url));
	}

  async getUserAddresses(userId: string): Promise<Address[]> {
    if (!userId) throw new Error('userId requis');
    const url = `${this.baseUrl}/${encodeURIComponent(userId)}/addresses`;
    return await firstValueFrom(this.http.get<Address[]>(url));
  }

	async getUserOrganizations(id: string): Promise<Organization[]> {
		if (!id) throw new Error("l'id utilisateur est requis");
		const url = `${this.baseUrl}/${encodeURIComponent(id)}/organizations`;
		return await firstValueFrom(this.http.get<Organization[]>(url));
	}

	async getUserFollowers(id: string): Promise<User[]> {
		if (!id) throw new Error('id requis');
		const url = `${this.baseUrl}/${encodeURIComponent(id)}/followers`;
		return await firstValueFrom(this.http.get<User[]>(url));
	}

	async getUserFollowing(id: string): Promise<User[]> {
		if (!id) throw new Error('id requis');
		const url = `${this.baseUrl}/${encodeURIComponent(id)}/following`;
		return await firstValueFrom(this.http.get<User[]>(url));
	}

	async createUser(userData: Partial<User>): Promise<User> {
		if (!userData || !userData.email) throw new Error("données utilisateur invalides");
		const url = this.baseUrl;
		return await firstValueFrom(this.http.post<User>(url, userData));
	}

	async updateUser(id: string, userData: Partial<User>): Promise<User> {
		if (!id) throw new Error('id requis');
		const url = `${this.baseUrl}/${encodeURIComponent(id)}`;
		return await firstValueFrom(this.http.put<User>(url, userData));
	}

	async deleteUser(id: string): Promise<User> {
		if (!id) throw new Error('id requis');
		const url = `${this.baseUrl}/${encodeURIComponent(id)}`;
		return await firstValueFrom(this.http.delete<User>(url));
	}

	async softDeleteUser(id: string): Promise<User> {
		if (!id) throw new Error('id requis');
		const url = `${this.baseUrl}/${encodeURIComponent(id)}/soft-delete`;
		return await firstValueFrom(this.http.patch<User>(url, {}));
	}

	// --------------------
	// httpResource helpers (signal-friendly)
	// --------------------

	usersResource(options?: UsersQueryOptions): unknown {
		const url = this.buildUrlWithQuery(this.baseUrl, options);
		// Note: httpResource API is available on Angular v21.
		// We return `unknown` to avoid leaking internal types while enabling signal-friendly consumption.
		return this.resourceFactory({
			loader: () => this.http.get<User[]>(url),
			default: [],
		});
	}

	userByIdResource(id: string): unknown {
		if (!id) throw new Error('id requis');
		const url = `${this.baseUrl}/${encodeURIComponent(id)}`;
		return this.resourceFactory({
			loader: () => this.http.get<User>(url),
			default: null,
		});
	}

	userOrganizationsResource(id: string): unknown {
		if (!id) throw new Error("l'id utilisateur est requis");
		const url = `${this.baseUrl}/${encodeURIComponent(id)}/organizations`;
		return this.resourceFactory({
			loader: () => this.http.get<Organization[]>(url),
			default: [],
		});
	}

	userFollowersResource(id: string): unknown {
		if (!id) throw new Error('id requis');
		const url = `${this.baseUrl}/${encodeURIComponent(id)}/followers`;
		return this.resourceFactory({
			loader: () => this.http.get<User[]>(url),
			default: [],
		});
	}

	userFollowingResource(id: string): unknown {
		if (!id) throw new Error('id requis');
		const url = `${this.baseUrl}/${encodeURIComponent(id)}/following`;
		return this.resourceFactory({
			loader: () => this.http.get<User[]>(url),
			default: [],
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

