import { effect, Injectable, signal } from '@angular/core';

const AUTH_TOKEN_STORAGE_KEY = 'authJwtToken';

/**
 * 🔐 Service de stockage du token
 *
 * Responsabilités :
 * - Gestion du token JWT avec signal
 * - Synchronisation automatique avec localStorage
 * - Accesseur en lecture seule
 */
@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  #authTokenSignal = signal<string | undefined>(undefined);
  authToken = this.#authTokenSignal.asReadonly();

  constructor() {
    console.log('🏗️ TokenStorageService constructor called');
    this.loadTokenFromStorage();

    // Effect pour synchroniser automatiquement avec localStorage
    effect(() => {
      const authToken = this.authToken();
      console.log('🔄 Token signal changed in effect:', authToken ? '***' : 'undefined');

      if (authToken) {
        this.saveToLocalStorage(authToken);
      } else {
        this.removeFromLocalStorage();
      }
    });
  }

  private loadTokenFromStorage(): void {
    const storedToken = localStorage.getItem(AUTH_TOKEN_STORAGE_KEY);
    console.log('📖 Loading token from localStorage:', storedToken ? 'found' : 'not found');

    if (storedToken) {
      console.log('🔄 Loading auth token from localStorage');
      this.#authTokenSignal.set(storedToken);
    } else {
      console.log('ℹ️ No token in localStorage');
    }
  }

  private saveToLocalStorage(token: string): void {
    try {
      console.log('💾 Attempting to save token to localStorage...');
      localStorage.setItem(AUTH_TOKEN_STORAGE_KEY, token);

      // Vérification immédiate
      const savedValue = localStorage.getItem(AUTH_TOKEN_STORAGE_KEY);
      if (savedValue) {
        console.log('✅ Token successfully saved to localStorage');
      } else {
        console.error('❌ Failed to save token - localStorage.getItem returned null');
      }
    } catch (error) {
      console.error('❌ Error saving token to localStorage:', error);
    }
  }

  private removeFromLocalStorage(): void {
    localStorage.removeItem(AUTH_TOKEN_STORAGE_KEY);
    console.log('🗑️ Token removed from localStorage (via effect)');
  }

  setToken(token: string): void {
    console.log('🔐 setToken() called');

    if (!token || typeof token !== 'string') {
      console.error('❌ Invalid token passed to setToken:', token);
      return;
    }

    this.#authTokenSignal.set(token);
    console.log('🔄 Token signal updated');

    // Sauvegarde immédiate en plus de l'effect
    this.saveToLocalStorage(token);
  }

  clearToken(): void {
    console.log('🗑️ Clearing token');
    this.#authTokenSignal.set(undefined);
    // Suppression immédiate (l'effect se déclenchera aussi mais c'est OK)
    this.removeFromLocalStorage();
  }
}
