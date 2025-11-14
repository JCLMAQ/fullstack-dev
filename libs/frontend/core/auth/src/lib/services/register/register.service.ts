// import { httpResource } from '@angular/common/http';
// import { Injectable, signal } from '@angular/core';
// import { User } from '../../types/auth.types';

// @Injectable({
//   providedIn: 'root'
// })
// export class RegisterService {
//   private userToRegister = signal<User | null>(null);
//   private registerEndPoint = 'register-extended';

//   // ⚠️ EXPERIMENTAL: httpResource
//   // httpResource prend une fonction qui retourne la requête complète
//   private registrationResource = httpResource(() => {
//     const user = this.userToRegister();
//     if (!user) return undefined;

//     return {
//       url: 'api/authentication/' + this.registerEndPoint,
//       method: 'POST',
//       body: user,
//     };
//   });

//   // Accès aux états du resource
//   get isLoading() {
//     return this.registrationResource.isLoading();
//   }

//   get error() {
//     return this.registrationResource.error();
//   }

//   get result() {
//     return this.registrationResource.value();
//   }

//   // Méthode pour déclencher l'enregistrement
//   register(user: User): void {
//     this.userToRegister.set(user);
//   }
// }





import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { User } from '../../types/auth.types';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private httpClient = inject(HttpClient);

  // Méthode moderne utilisant lastValueFrom au lieu de toPromise()
  async register(user: User): Promise<User> {
    try {
      return await lastValueFrom(this.userRegister(user));
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Registration failed';
      throw new Error(errorMessage);
    }
  }

  // Version Observable pour plus de flexibilité
  registerObservable(user: User): Observable<User> {
    return this.userRegister(user);
  }

  private userRegister(user: User): Observable<User> {
    // 🆕 MIGRATION VERS ENDPOINT IAM
    // ANCIEN: return this.httpClient.post<User>('api/auths/auth/registerwithpwd', user)
    return this.httpClient.post<User>('api/authentication/register-extended', user);
  }
}
