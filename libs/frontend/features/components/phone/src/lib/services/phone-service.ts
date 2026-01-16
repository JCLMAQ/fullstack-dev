
import { concatOp, httpMutation, HttpMutationOptions } from '@angular-architects/ngrx-toolkit';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Phone } from '@db/prisma';
import { ENVIRONMENT_TOKEN } from '@fe/tokens';
import { firstValueFrom } from 'rxjs';

export type MutationSettings<Params, Result> = Omit<
  HttpMutationOptions<Params, Result>,
  'request'
>;

@Injectable({ providedIn: 'root' })
export class PhoneService {
  private readonly http = inject(HttpClient);
  private readonly environment = inject(ENVIRONMENT_TOKEN);

  private get apiPrefix(): string {
		const prefix = this.environment.API_BACKEND_PREFIX ?? '';
		return prefix.replace(/^\//, '').replace(/\/$/, '');
	}

	private get baseUrl(): string {
		return `${this.apiPrefix}/phones`;
  }

  getAllPhones(): Promise<Phone[]> {
    return firstValueFrom(
      this.http.get<{ data: Phone[]; total: number }>(this.baseUrl)
    ).then(response => response.data);
  }

  getPhoneById(id: string): Promise<Phone> {
    return firstValueFrom(this.http.get<Phone>(`${this.baseUrl}/${id}`));
  }

  getPhonesByUserId(userId: string): Promise<Phone[]> {
    return firstValueFrom(this.http.get<Phone[]>(`${this.baseUrl}/user/${userId}`));
  }

  getPhonesByUserEmail(email: string): Promise<Phone[]> {
    return firstValueFrom(this.http.get<Phone[]>(`${this.baseUrl}/user-email/${encodeURIComponent(email)}`));
  }

  createSaveMutation(options: Partial<HttpMutationOptions<Phone, Phone>>) {
    return httpMutation({
      ...options,
      request: (phone) => {
        // On attend que phone contienne un userId (string)
        // On adapte le payload pour Prisma: user: { connect: { id: ... } }
        type PhoneWithUserId = Phone & { userId?: string };
        const { userId, ...rest } = phone as PhoneWithUserId;
        return {
          url: this.baseUrl,
          method: 'POST',
          body: {
            ...rest,
            user: userId ? { connect: { id: userId } } : undefined,
          },
        };
      },
      operator: concatOp
    });
  }
  createDeleteMutation(options: Partial<HttpMutationOptions<string, { id: string }>>) {
    return httpMutation({
      ...options,
      request: (id: string) => ({
        url: `${this.baseUrl}/${id}`,
        method: 'DELETE',
      }),
      operator: concatOp
    });
  }

}
