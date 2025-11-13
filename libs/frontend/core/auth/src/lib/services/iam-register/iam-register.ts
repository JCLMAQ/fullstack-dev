import { httpResource } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { User } from '@db/prisma';

/**
 * 🆕 SERVICE D'INSCRIPTION IAM - Migration AUTHS → IAM
 *
 * Remplace l'ancien register.service.ts qui utilisait l'endpoint AUTHS
 * Utilise maintenant l'endpoint IAM /api/authentication/register-extended
 *
 * ⚠️ EXPERIMENTAL: Utilise httpResource (Angular 19+)
 */
@Injectable({
  providedIn: 'root',
})
export class IamRegisterService {
  private userToRegister = signal<User | null>(null);
  private registerEndPoint = 'api/authentication/register-extended';

  /**
   * ⚠️ EXPERIMENTAL: httpResource
   * Se déclenche automatiquement quand userToRegister change
   *
   * 📝 USER REGISTER avec nouvel endpoint IAM
   * AUTHS: POST /api/auths/auth/registerwithpwd
   * IAM:   POST /api/authentication/register-extended ✅
   */
  private registrationResource = httpResource(() => {
    const user = this.userToRegister();
    if (!user) return undefined;

    return {
      url: this.registerEndPoint,
      method: 'POST',
      body: user,
    };
  });

  // Accès aux états du resource
  get isLoading() {
    return this.registrationResource.isLoading();
  }

  get error() {
    return this.registrationResource.error();
  }

  get result() {
    return this.registrationResource.value();
  }

  /**
   * Déclenche l'enregistrement d'un nouvel utilisateur
   * L'appel HTTP se fait automatiquement via httpResource
   */
  register(user: User): void {
    this.userToRegister.set(user);
  }
}
