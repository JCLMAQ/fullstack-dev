
import { concatOp, httpMutation, HttpMutationOptions } from '@angular-architects/ngrx-toolkit';
import { HttpClient, httpResource } from '@angular/common/http';
import { inject, Injectable, Signal } from '@angular/core';
import { Phone } from '@db/prisma';
import { ENVIRONMENT_TOKEN } from '@fe/tokens';

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

  getAllPhones() {
    return httpResource<Phone[]>(() => ({ url: this.baseUrl }));
  }

  // Détail d'un téléphone par ID
  getPhoneById(id: Signal<number>) {
    return httpResource<Phone>(() =>
      !id() ? undefined : {
        url: `${this.baseUrl}/${id()}`,
      }
    );
  }

  /** Liste des téléphones par userId */
  getPhonesByUserId(userId: Signal<string>) {
    return httpResource<Phone[]>(
      () =>
        !userId() ? undefined : {
          url: `${this.baseUrl}/user/${userId()}`,
        }
    );
  }


  /** Liste des téléphones par email utilisateur */
  getPhonesByUserEmail(email: Signal<string>) {
    return httpResource<Phone[]>(() =>
      !email() ? undefined : {
        url: `${this.baseUrl}/user-email/${encodeURIComponent(email())}`,
      }
    );
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
