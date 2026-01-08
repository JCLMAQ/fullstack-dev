
import { concatOp, httpMutation, HttpMutationOptions } from '@angular-architects/ngrx-toolkit';
import { HttpClient, httpResource } from '@angular/common/http';
import { inject, Signal } from '@angular/core';
import { Phone } from '@db/prisma';

export type MutationSettings<Params, Result> = Omit<
  HttpMutationOptions<Params, Result>,
  'request'
>;

export class PhoneService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = '/api/phones';

  getAllPhones() {
    return httpResource<Phone[]>(() => ({ url: this.baseUrl }));
  }

  // Détail d'un téléphone par ID
  getPhoneById(id: Signal<number>) {
    return httpResource<Phone>(() =>
        !id() ? undefined : {
              url: this.baseUrl, // `${this.baseUrl}/${id}`
              params: {
                id: id(),
              },
            },
    );
  };

  /** Liste des téléphones par userId */
  getPhonesByUserId(userId: Signal<string>) {
    return httpResource<Phone[]>(() =>
      !userId() ? undefined : {
            url: this.baseUrl,
            params: {
              userId: userId(),
            },
          },
    );
  };


  /** Liste des téléphones par email utilisateur */
  getPhonesByUserEmail(email: Signal<string>) {
    return httpResource<Phone[]>(() =>
      !email() ? undefined : {
        url: this.baseUrl,
        params: {
          userEmail: email(),
        },
      },
    );
  }

  createSaveMutation(options: Partial<HttpMutationOptions<Phone, Phone>>) {
    return httpMutation({
      ...options,
      request: (phone) => ({
        url: this.baseUrl,
        method: 'POST',
        body: phone,
      }),
      operator: concatOp
    });
  }
  createDeleteMutation(options: Partial<HttpMutationOptions<string, { id: string }>>) {
    return httpMutation({
      ...options,
      request: (id: string) => ({
        url: this.baseUrl,
        method: 'DELETE',
        body: { id },
      }),
      operator: concatOp
    });
  }

}
