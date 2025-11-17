import { effect, Injectable, signal } from '@angular/core';
import { User } from '@db/prisma';

const USER_STORAGE_KEY = 'user';

/**
 * 👤 Service de gestion de l'utilisateur
 *
 * Responsabilités :
 * - Stockage des données utilisateur en mémoire (signal)
 * - Synchronisation avec localStorage
 * - Mise à jour partielle ou complète des données
 * - Accesseurs en lecture seule
 */
@Injectable({
  providedIn: 'root',
})
export class UserStorageService {
  #userSignal = signal<User | undefined>(undefined);
  user = this.#userSignal.asReadonly();

  constructor() {
    this.loadUserFromStorage();

    // Effect pour synchroniser automatiquement avec localStorage
    effect(() => {
      const user = this.user();
      if (user) {
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
      }
    });
  }

  /**
   * Charger l'utilisateur depuis localStorage
   */
  private loadUserFromStorage(): void {
    const json = localStorage.getItem(USER_STORAGE_KEY);
    if (json) {
      const user = JSON.parse(json);
      this.#userSignal.set(user);
      console.log('👤 User loaded:', user.email);
    }
  }

  /**
   * Définir un nouvel utilisateur
   */
  setUser(user: User): void {
    this.#userSignal.set(user);
  }

  /**
   * Mettre à jour partiellement l'utilisateur
   */
  updateUser(userData: Partial<User>): void {
    const currentUser = this.user();
    if (currentUser) {
      this.#userSignal.set({ ...currentUser, ...userData });
    }
  }

  /**
   * Supprimer l'utilisateur
   */
  clearUser(): void {
    this.#userSignal.set(undefined);
    localStorage.removeItem(USER_STORAGE_KEY);
  }
}
