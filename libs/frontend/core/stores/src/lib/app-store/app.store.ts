import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { IAM_AUTH_TOKEN, withAuthSync } from '@fe/shared';
import { signalStore, withProps, withState } from '@ngrx/signals';
import { withAppAuthFeatures } from '../store-features/authentication-features/authentication.features';
import { withDictionariesFeatures } from '../store-features/dictionaries-features/dictionaries.features';
import { initialAppSlice } from './app.slice';

export const AppStore= signalStore(
  { providedIn: 'root' },
  withState(initialAppSlice),
  withProps(() => ({
    _authService: inject(IAM_AUTH_TOKEN),
    _router: inject(Router),
    _snackbar: inject(MatSnackBar),
    // _testService: inject(LocalStorageTestService),
    // _dictionaries: inject(DICTIONARIES_TOKEN)
  })),

  // withComputed((store) => ({
  //   user: computed(() => store._authService.user()),
  //   authToken: computed(() => store._authService.authToken()),
  // })),
withDevtools('AppStore'),
// withStorageSync('user-store' ),
// withMethods((store) => ({
//       // 🔍 Debug method to check localStorage state
//       debugLocalStorage: () => {
//         console.log('🔍 === DEBUG LOCALSTORAGE ===');
//         const allKeys = Object.keys(localStorage);
//         console.log(`📊 Total keys: ${allKeys.length}`);
//         allKeys.forEach(key => {
//           const value = localStorage.getItem(key);
//           const size = value ? value.length : 0;
//           console.log(`  - ${key}: ${size} chars`);
//           if (key.includes('dashboard') || key.includes('app') || key.includes('user') || key.includes('auth')) {
//             console.log(`    Value preview: ${value?.substring(0, 100)}...`);
//           }
//         });
//         console.log('🔍 =========================');
//       },

      // login: async (email: string, password: string) => {

      //   try {
      //     if (!email || !password) {
      //       store._snackbar.open('Enter an email and password.', 'Close', {
      //         verticalPosition: 'top',
      //         horizontalPosition: 'right',
      //       });
      //       return;
      //     }

      //     const loginResponse = await store._authService.login(email, password);
      //     console.log('🔐 Login response:', loginResponse);

      //     // Le service IamAuth gère déjà la sauvegarde dans localStorage
      //     // On synchronise juste l'état du store
      //     const user = store._authService.user();
      //     const authToken = store._authService.authToken();

      //     console.log('👤 User from service:', user);
      //     console.log('🔐 Auth token from service:', authToken ? '***' : 'undefined');

      //     patchState(store, {
      //       user: user,
      //       authToken: authToken,
      //     });

      //     store._router.navigate(['/dashboard']);
      //   } catch (error) {
      //     store._snackbar.open('Invalid email or password', 'Close', {
      //       verticalPosition: 'top',
      //       horizontalPosition: 'right',
      //     });
      //     console.error(error);
      //     // Optional: track error
      //   }
      // },

      // logout: async () => {
      //   await store._authService.logout();

      //   // Le service IamAuth gère déjà la suppression du localStorage
      //   // On synchronise juste l'état du store
      //   patchState(store, {
      //     user: undefined,
      //     authToken: undefined
      //   });

      //   console.log('🚪 User logged out - Store cleared');
      //   store._router.navigate(['pages/home']);
      // },

      // // 🧪 Test method for localStorage cleanup validation
      // testLogoutCleanup: async () => {
      //   console.log('🧪 Testing localStorage cleanup...');

      //   // Peupler les données de test
      //   store._testService.populateTestData();

      //   // Exécuter le logout via le service d'authentification
      //   await store._authService.logout();

      //   // Réinitialiser l'état du store
      //   patchState(store, {
      //     user: undefined,
      //     authToken: undefined
      //   });

      //   // Valider le nettoyage
      //   await new Promise(resolve => setTimeout(resolve, 100)); // Attendre un peu
      //   const result = store._testService.validateCleanup();

      //   if (result.success) {
      //     store._snackbar.open('✅ Logout cleanup test PASSED', 'Close', {
      //       verticalPosition: 'top',
      //       horizontalPosition: 'right',
      //       duration: 3000
      //     });
      //   } else {
      //     store._snackbar.open(
      //       `❌ Logout cleanup test FAILED - ${result.remainingKeys.length} keys remaining`,
      //       'Close',
      //       {
      //         verticalPosition: 'top',
      //         horizontalPosition: 'right',
      //         duration: 5000
      //       }
      //     );
      //     console.error('Remaining keys:', result.remainingKeys);
      //   }

      //   // Naviguer vers la page d'accueil
      //   store._router.navigate(['pages/home']);

      //   return result;
      // },

      // register: async (
      //   email: string,
      //   password: string,
      //   confirmPassword: string,
      // ) => {
      //   try {
      //     if (!email || !password || !confirmPassword) {
      //       store._snackbar.open(
      //         'Enter an email and password + confirm password.',
      //         'Close',
      //         {
      //           verticalPosition: 'top',
      //           horizontalPosition: 'right',
      //         },
      //       );
      //       return;
      //     }

      //     // const response =
      //     await store._authService.register(email, password, confirmPassword);
      //     store._snackbar.open('Registration done', 'Close', {
      //       verticalPosition: 'top',
      //       horizontalPosition: 'right',
      //     });
      //     // Optional: track success
      //     console.log('AppStore user computed: ', store.user());
      //     console.log('AppStore authToken computed:  ', store.authToken());


      //     store._router.navigate(['/auth/login']);
      //   } catch (error) {
      //     store._snackbar.open(
      //       'Invalid email, password or confirm password',
      //       'Close',
      //       {
      //         verticalPosition: 'top',
      //         horizontalPosition: 'right',
      //       },
      //     );
      //     console.error(error);
      //     // Optional: track error
      //   }
      // },
    // })),

  // Auth part
  withAppAuthFeatures(), // Add: login(), logout(), register()

  // Languages part
  withDictionariesFeatures(), // Add  selectedLanguage, possibleLanguages, selectedDictionary, changeLanguage()

  // 🔄 Synchronisation avec service d'authentification (Option 2 - Recommandée)
  withAuthSync(), // Synchronise avec IamAuth localStorage, évite la duplication
);
