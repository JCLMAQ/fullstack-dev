import { effect, Injectable, signal } from '@angular/core';

const AUTH_TOKEN_STORAGE_KEY = 'authJwtToken';
const REFRESH_TOKEN_STORAGE_KEY = 'refreshJwtToken';

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
  #refreshTokenSignal = signal<string | undefined>(undefined);
  refreshToken = this.#refreshTokenSignal.asReadonly();

  constructor() {
    console.log('🏗️ TokenStorageService constructor called');
    this.loadTokenFromStorage();
    this.loadRefreshTokenFromStorage();
    // Effect pour synchroniser automatiquement le refreshToken avec localStorage
    effect(() => {
      const refreshToken = this.refreshToken();
      console.log('🔄 RefreshToken signal changed in effect:', refreshToken ? '***' : 'undefined');
      if (refreshToken) {
        this.saveRefreshToLocalStorage(refreshToken);
      } else {
        this.removeRefreshFromLocalStorage();
      }
    });
    // Effect pour synchroniser automatiquement le authToken avec localStorage
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
  private loadRefreshTokenFromStorage(): void {
    const storedRefreshToken = localStorage.getItem(REFRESH_TOKEN_STORAGE_KEY);
    console.log('📖 Loading refreshToken from localStorage:', storedRefreshToken ? 'found' : 'not found');
    if (storedRefreshToken) {
      this.#refreshTokenSignal.set(storedRefreshToken);
    } else {
      console.log('ℹ️ No refreshToken in localStorage');
    }
  }

  private saveRefreshToLocalStorage(token: string): void {
    try {
      localStorage.setItem(REFRESH_TOKEN_STORAGE_KEY, token);
      const savedValue = localStorage.getItem(REFRESH_TOKEN_STORAGE_KEY);
      if (savedValue) {
        console.log('✅ RefreshToken successfully saved to localStorage');
      } else {
        console.error('❌ Failed to save refreshToken - localStorage.getItem returned null');
      }
    } catch (error) {
      console.error('❌ Error saving refreshToken to localStorage:', error);
    }
  }

  private removeRefreshFromLocalStorage(): void {
    localStorage.removeItem(REFRESH_TOKEN_STORAGE_KEY);
    console.log('🗑️ RefreshToken removed from localStorage (via effect)');
  }
  setRefreshToken(token: string): void {
    if (!token || typeof token !== 'string') {
      console.error('❌ Invalid refreshToken passed to setRefreshToken:', token);
      return;
    }
    this.#refreshTokenSignal.set(token);
    this.saveRefreshToLocalStorage(token);
  }

  clearRefreshToken(): void {
    this.#refreshTokenSignal.set(undefined);
    this.removeRefreshFromLocalStorage();
  }

  // --- FIN des méthodes refreshToken ---

  // Le second effect doit être dans le constructeur !

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
