import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '@db/prisma';
import { firstValueFrom } from 'rxjs';

/**
 * 🆕 SERVICE D'INSCRIPTION IAM - Migration AUTHS → IAM
 *
 * Remplace l'ancien register.service.ts qui utilisait l'endpoint AUTHS
 * Utilise maintenant l'endpoint IAM /api/authentication/register-extended
 */
@Injectable({
  providedIn: 'root',
})
export class IamRegisterService {
  private httpClient = inject(HttpClient);
  private registerEndPoint = 'api/authentication/register-extended';

  /**
   * 📝 USER REGISTER avec nouvel endpoint IAM
   * AUTHS: POST /api/auths/auth/registerwithpwd
   * IAM:   POST /api/authentication/register-extended ✅
   *
   * @param user - Les données de l'utilisateur à enregistrer
   * @returns Promise avec la réponse d'enregistrement
   */
  async register(user: User): Promise<User> {
    console.log('🔄 Registering User (IAM):', { email: user.email });

    try {
      const response = await firstValueFrom(
        this.httpClient.post<User>(this.registerEndPoint, user)
      );

      console.log('✅ Registration successful (IAM):', response);
      return response;
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Registration failed';
      console.error('❌ Registration failed (IAM):', errorMessage);
      throw new Error(errorMessage);
    }
  }

  /**
   * Version Observable pour plus de flexibilité si nécessaire
   */
  registerObservable(user: User) {
    return this.httpClient.post<User>(this.registerEndPoint, user);
  }
}



// import { httpResource } from '@angular/common/http';
// import { Injectable, signal } from '@angular/core';
// import { User } from '@db/prisma';

// /**
//  * 🆕 SERVICE D'INSCRIPTION IAM - Migration AUTHS → IAM
//  *
//  * Remplace l'ancien register.service.ts qui utilisait l'endpoint AUTHS
//  * Utilise maintenant l'endpoint IAM /api/authentication/register-extended
//  *
//  * ⚠️ EXPERIMENTAL: Utilise httpResource (Angular 19+)
//  */
// @Injectable({
//   providedIn: 'root',
// })
// export class IamRegisterService {
//   private userToRegister = signal<User | null>(null);
//   private registerEndPoint = 'api/authentication/register-extended';

//   /**
//    * ⚠️ EXPERIMENTAL: httpResource
//    * Se déclenche automatiquement quand userToRegister change
//    *
//    * 📝 USER REGISTER avec nouvel endpoint IAM
//    * AUTHS: POST /api/auths/auth/registerwithpwd
//    * IAM:   POST /api/authentication/register-extended ✅
//    */
//   private registrationResource = httpResource(() => {
//     const user = this.userToRegister();
//     if (!user) return undefined;

//     return {
//       url: this.registerEndPoint,
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

//   /**
//    * Déclenche l'enregistrement d'un nouvel utilisateur
//    * L'appel HTTP se fait automatiquement via httpResource
//    */
//   register(user: User): void {
//     this.userToRegister.set(user);
//   }
// }

// /* Exemple d'utilisation dans un composant:

// constructor(private iamRegister: IamRegisterService) {}

// onRegister(user: User) {
//   this.iamRegister.register(user);

//   // Accès à l'état
//   effect(() => {
//     if (this.iamRegister.result()) {
//       console.log('Succès!', this.iamRegister.result());
//     }
//     if (this.iamRegister.error()) {
//       console.error('Erreur:', this.iamRegister.error());
//     }
//   });
// }s

// */
