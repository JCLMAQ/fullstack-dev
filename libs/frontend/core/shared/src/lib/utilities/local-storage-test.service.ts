import { Injectable } from '@angular/core';

/**
 * 🧪 Service utilitaire pour tester le nettoyage du localStorage
 *
 * Ce service permet de simuler des données dans localStorage
 * et de valider que le logout les supprime correctement.
 */
@Injectable({
  providedIn: 'root'
})
export class LocalStorageTestService {

  /**
   * Simule des données utilisateur dans localStorage pour tester le logout
   */
  populateTestData(): void {
    console.log('🧪 Populating test data in localStorage...');

    // Données d'authentification
    localStorage.setItem('user', JSON.stringify({
      id: 1,
      email: 'test@example.com',
      name: 'Test User'
    }));
    localStorage.setItem('authJwtToken', 'fake-jwt-token');

    // Données d'application
    localStorage.setItem('appstore', JSON.stringify({
      theme: 'dark',
      language: 'fr'
    }));
    localStorage.setItem('selectedLanguage', 'fr');
    localStorage.setItem('userPreferences', JSON.stringify({
      notifications: true
    }));

    // Données dashboard
    localStorage.setItem('dashboardWidgets', JSON.stringify([
      { id: 1, name: 'Widget 1' },
      { id: 2, name: 'Widget 2' }
    ]));
    localStorage.setItem('dashboardWidgetsOrder', JSON.stringify([1, 2]));

    // Données temporaires
    localStorage.setItem('register-draft', JSON.stringify({
      email: 'draft@example.com'
    }));
    localStorage.setItem('tempData', 'temporary-information');

    // Données avec préfixes
    localStorage.setItem('user_preference_theme', 'light');
    localStorage.setItem('app_config_debug', 'true');
    localStorage.setItem('dashboard_layout', 'grid');
    localStorage.setItem('widget_config_1', JSON.stringify({ size: 'large' }));

    console.log('✅ Test data populated');
    this.logCurrentState();
  }

  /**
   * Log l'état actuel du localStorage
   */
  logCurrentState(): void {
    console.log('📊 Current localStorage state:');
    const allKeys = Object.keys(localStorage);
    console.log(`  Total keys: ${allKeys.length}`);
    allKeys.forEach(key => {
      const value = localStorage.getItem(key);
      const size = value ? value.length : 0;
      console.log(`  - ${key}: ${size} chars`);
    });
  }

  /**
   * Vérifie si des données sensibles persistent après logout
   */
  validateCleanup(): { success: boolean; remainingKeys: string[] } {
    console.log('🔍 Validating localStorage cleanup...');

    const allKeys = Object.keys(localStorage);
    const sensitiveKeys = allKeys.filter(key => {
      return (
        key.includes('user') ||
        key.includes('auth') ||
        key.includes('dashboard') ||
        key.includes('app') ||
        key.includes('widget') ||
        key.includes('temp') ||
        key.includes('register') ||
        key.includes('preference')
      );
    });

    const success = sensitiveKeys.length === 0;

    if (success) {
      console.log('✅ Cleanup validation passed - no sensitive data found');
    } else {
      console.log('❌ Cleanup validation failed - sensitive data still present:');
      sensitiveKeys.forEach(key => {
        console.log(`  - ${key}: ${localStorage.getItem(key)?.substring(0, 50)}...`);
      });
    }

    return { success, remainingKeys: sensitiveKeys };
  }

  /**
   * Test complet : peuple les données, simule un logout, et valide le nettoyage
   */
  async runFullTest(logoutFn: () => Promise<void>): Promise<{ success: boolean; remainingKeys: string[] }> {
    console.log('🧪 === STARTING FULL LOCALSTORAGE CLEANUP TEST ===');

    // 1. Peupler les données de test
    this.populateTestData();

    // 2. Attendre un peu pour s'assurer que tout est en place
    await new Promise(resolve => setTimeout(resolve, 100));

    console.log('🔄 Executing logout...');

    // 3. Exécuter le logout
    try {
      await logoutFn();
    } catch (error) {
      console.error('❌ Error during logout:', error);
    }

    // 4. Attendre un peu pour s'assurer que le nettoyage est terminé
    await new Promise(resolve => setTimeout(resolve, 100));

    // 5. Valider le nettoyage
    const result = this.validateCleanup();

    console.log('🧪 === TEST COMPLETED ===');
    console.log(`Result: ${result.success ? '✅ PASSED' : '❌ FAILED'}`);

    return result;
  }
}
