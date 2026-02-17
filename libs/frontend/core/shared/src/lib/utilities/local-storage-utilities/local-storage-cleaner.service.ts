import { Injectable } from '@angular/core';

/**
 * 🧹 Service utilitaire pour le nettoyage du localStorage
 *
 * Centralise la logique de nettoyage des données utilisateur lors du logout
 * pour éviter la persistance de données sensibles entre les sessions.
 */
@Injectable({
  providedIn: 'root'
})
export class LocalStorageCleanerService {

  /**
   * Nettoie toutes les données liées à l'utilisateur lors du logout
   */
  clearAllUserData(): void {
    console.log('🧹 Starting complete localStorage cleanup...');

    this.clearAuthenticationData();
    this.clearApplicationData();
    this.clearDashboardData();
    this.clearTemporaryData();
    this.clearPrefixedData();

    console.log('✅ Complete localStorage cleanup finished');
  }

  /**
   * Supprime les données d'authentification
   */
  private clearAuthenticationData(): void {
    const authKeys = [
      'user',
      'authJwtToken',
      'refreshToken',
      'loginAttempts'
    ];

    this.removeKeys(authKeys, '🔐 Auth');
  }

  /**
   * Supprime les données principales de l'application
   */
  private clearApplicationData(): void {
    const appKeys = [
      'appstore',
      'selectedLanguage',
      'dictionaries',
      'userPreferences',
      'theme',
      'settings'
    ];

    this.removeKeys(appKeys, '📱 App');
  }

  /**
   * Supprime les données du dashboard
   */
  private clearDashboardData(): void {
    const dashboardKeys = [
      'dashboardWidgets',
      'dashboardWidgetsOrder',
      'dashboardLayout',
      'dashboardPreferences'
    ];

    this.removeKeys(dashboardKeys, '📊 Dashboard');
  }

  /**
   * Supprime les données temporaires et de cache
   */
  private clearTemporaryData(): void {
    const tempKeys = [
      'register-draft',
      'tempData',
      'cache',
      'sessionData',
      'formDrafts'
    ];

    this.removeKeys(tempKeys, '⏱️ Temp');
  }

  /**
   * Supprime toutes les clés avec des préfixes spécifiques
   */
  private clearPrefixedData(): void {
    const prefixesToClear = [
      'user_',
      'app_',
      'dashboard_',
      'widget_',
      'temp_',
      'cache_',
      'session_'
    ];

    const allKeys = Object.keys(localStorage);
    let removedCount = 0;

    allKeys.forEach(key => {
      if (prefixesToClear.some(prefix => key.startsWith(prefix))) {
        localStorage.removeItem(key);
        removedCount++;
        console.log(`🗑️ [Prefixed] Removed: ${key}`);
      }
    });

    if (removedCount > 0) {
      console.log(`🧹 Removed ${removedCount} prefixed keys`);
    }
  }

  /**
   * Utilitaire pour supprimer une liste de clés
   */
  private removeKeys(keys: string[], category: string): void {
    let removedCount = 0;

    keys.forEach(key => {
      if (localStorage.getItem(key)) {
        localStorage.removeItem(key);
        removedCount++;
        console.log(`🗑️ [${category}] Removed: ${key}`);
      }
    });

    if (removedCount > 0) {
      console.log(`${category} cleanup: ${removedCount} items removed`);
    }
  }

  /**
   * Méthode pour nettoyer sélectivement certaines catégories
   */
  clearSpecificCategory(category: 'auth' | 'app' | 'dashboard' | 'temp'): void {
    switch (category) {
      case 'auth':
        this.clearAuthenticationData();
        break;
      case 'app':
        this.clearApplicationData();
        break;
      case 'dashboard':
        this.clearDashboardData();
        break;
      case 'temp':
        this.clearTemporaryData();
        break;
    }
  }

  /**
   * Méthode de debug pour lister toutes les clés localStorage
   */
  debugListAllKeys(): void {
    const allKeys = Object.keys(localStorage);
    console.log('🔍 All localStorage keys:', allKeys);
    allKeys.forEach(key => {
      const value = localStorage.getItem(key);
      const size = value ? value.length : 0;
      console.log(`  - ${key}: ${size} chars`);
    });
  }
}
