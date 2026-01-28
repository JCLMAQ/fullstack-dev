import { effect, Injectable, signal } from '@angular/core';
import { User } from '@db/prisma/frontend';

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
    console.log('🏗️ UserStorageService constructor called');
    this.loadUserFromStorage();

    // Effect pour synchroniser automatiquement avec localStorage
    effect(() => {
      const user = this.user();
      console.log('🔄 User signal changed in effect:', user?.email || 'undefined');

      if (user) {
        this.saveToLocalStorage(user);
      } else {
        this.removeFromLocalStorage();
      }
    });
  }

  private loadUserFromStorage(): void {
    const json = localStorage.getItem(USER_STORAGE_KEY);
    console.log('📖 Loading user from localStorage:', json ? 'found' : 'not found');

    if (json) {
      try {
        const user = JSON.parse(json);
        this.#userSignal.set(user);
        console.log('👤 User loaded from localStorage:', user.email);
      } catch (error) {
        console.error('❌ Error parsing user from localStorage:', error);
        localStorage.removeItem(USER_STORAGE_KEY);
      }
    } else {
      console.log('ℹ️ No user in localStorage');
    }
  }

  private saveToLocalStorage(user: User): void {
    try {
      const userJson = JSON.stringify(user);
      console.log('💾 Attempting to save user to localStorage...');
      console.log('📦 User data to save:', {
        email: user.email,
        id: user.id,
        keysCount: Object.keys(user).length
      });

      localStorage.setItem(USER_STORAGE_KEY, userJson);

      // Vérification immédiate
      const savedValue = localStorage.getItem(USER_STORAGE_KEY);
      if (savedValue) {
        const parsed = JSON.parse(savedValue);
        console.log('✅ User successfully saved to localStorage');
        console.log('🔍 Verification - Keys in localStorage:', Object.keys(parsed));
      } else {
        console.error('❌ Failed to save user - localStorage.getItem returned null');
      }
    } catch (error) {
      console.error('❌ Error saving user to localStorage:', error);
    }
  }

  private removeFromLocalStorage(): void {
    localStorage.removeItem(USER_STORAGE_KEY);
    console.log('🗑️ User removed from localStorage (via effect)');
  }

  setUser(user: User): void {
    console.log('👤 setUser() called with:', {
      email: user.email,
      id: user.id,
      keysCount: Object.keys(user).length,
      allKeys: Object.keys(user)
    });

    // Vérifier que l'objet user est valide
    if (!user || typeof user !== 'object') {
      console.error('❌ Invalid user object passed to setUser:', user);
      return;
    }

    this.#userSignal.set(user);
    console.log('🔄 Signal updated');

    // Sauvegarde immédiate en plus de l'effect
    this.saveToLocalStorage(user);
  }

  updateUser(userData: Partial<User>): void {
    const currentUser = this.user();
    if (currentUser) {
      const updatedUser = { ...currentUser, ...userData };
      console.log('🔄 Updating user:', updatedUser.email);
      this.#userSignal.set(updatedUser);
      // Sauvegarde immédiate en plus de l'effect
      this.saveToLocalStorage(updatedUser);
    } else {
      console.warn('⚠️ Cannot update user: no current user');
    }
  }

  clearUser(): void {
    console.log('🗑️ Clearing user');
    this.#userSignal.set(undefined);
    // Suppression immédiate (l'effect se déclenchera aussi mais c'est OK)
    this.removeFromLocalStorage();
  }
}
