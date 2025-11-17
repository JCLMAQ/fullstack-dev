import { effect, inject } from '@angular/core';
import { IamAuth } from '@fe/core/auth';
import {
    patchState,
    signalStoreFeature,
    SignalStoreFeature,
    withHooks,
} from '@ngrx/signals';

/**
 * 🔐 Feature NgRx Signals pour synchroniser le store avec le service d'authentification
 *
 * Cette feature :
 * - Initialise le store avec les données du service IamAuth au démarrage
 * - Synchronise automatiquement les changements du service vers le store
 * - Évite la duplication : utilise la gestion localStorage du service IamAuth
 *
 * @example
 * ```typescript
 * export const MyStore = signalStore(
 *   withState({ user: undefined, authToken: undefined }),
 *   withAuthSync(), // 🚀 Synchronisation automatique
 * );
 * ```
 */
export function withAuthSync(): SignalStoreFeature {
  return signalStoreFeature(
    withHooks({
      onInit(store) {
        const authService = inject(IamAuth);

        // 1️⃣ Initialisation : récupérer les données du service au démarrage
        const user = authService.user();
        const authToken = authService.authToken();

        if (user || authToken) {
          console.log('🔄 [withAuthSync] Initializing store with auth data');
          console.log('👤 User:', user?.email || 'undefined');
          console.log('🔐 Auth Token:', authToken ? '***' : 'undefined');

          patchState(store, {
            user: user,
            authToken: authToken,
          });
        }

        // 2️⃣ Synchronisation : écouter les changements du service
        effect(() => {
          const currentUser = authService.user();
          const currentToken = authService.authToken();

          console.log('🔄 [withAuthSync] Service changed - syncing to store');

          patchState(store, {
            user: currentUser,
            authToken: currentToken,
          });
        });
      },
    }),
  );
}
