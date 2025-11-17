import { Injectable, signal, effect } from '@angular/core';

const AUTH_TOKEN_STORAGE_KEY = 'authJwtToken';

/**
 * 🔐 Service de gestion du token JWT
 * 
 * Responsabilités :
 * - Stockage du token en mémoire (signal)
 * - Synchronisation avec localStorage
 * - Accesseurs en lecture seule
 */
@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  #authTokenSignal = signal<string | undefined>(undefined);
  authToken = this.#authTokenSignal.asReadonly();

  constructor() {
    // Charger le token depuis localStorage
    const storedToken = localStorage.getItem(AUTH_TOKEN_STORAGE_KEY);
    if (storedToken) {
      console.log('🔄 Loading auth token from localStorage');
      this.#authTokenSignal.set(storedToken);
    }

    // Effect pour synchroniser automatiquement avec localStorage
    effect(() => {
      const authToken = this.authToken();
      if (authToken) {
        localStorage.setItem(AUTH_TOKEN_STORAGE_KEY, authToken);
      }
    });
  }

  /**
   * Définir un nouveau token
   */
  setToken(token: string): void {
    this.#authTokenSignal.set(token);
  }

  /**
   * Supprimer le token
   */
  clearToken(): void {
    this.#authTokenSignal.set(undefined);
    localStorage.removeItem(AUTH_TOKEN_STORAGE_KEY);
  }
}
