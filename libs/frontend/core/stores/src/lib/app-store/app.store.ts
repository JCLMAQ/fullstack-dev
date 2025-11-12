import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { IAM_AUTH_TOKEN } from '@fe/tokens';
import { patchState, signalStore, withHooks, withMethods, withProps, withState } from '@ngrx/signals';
import { withDictionariesFeatures } from '../store-features/dictionaries-features/dictionaries.features';
import { initialAppSlice } from './app.slice';

export const AppStore= signalStore(
  { providedIn: 'root' },
  withState(initialAppSlice),
  withProps(() => ({
    _authService: inject(IAM_AUTH_TOKEN),
    _router: inject(Router),
    _snackbar: inject(MatSnackBar),
    // _dictionaries: inject(DICTIONARIES_TOKEN)
  })),

  // withComputed((store) => ({
  //   user: computed(() => store._authService.user()),
  //   authToken: computed(() => store._authService.authToken()),
  // })),
withDevtools('AppStore'),
withMethods((store) => ({
      login: async (email: string, password: string) => {

        try {
          if (!email || !password) {
            store._snackbar.open('Enter an email and password.', 'Close', {
              verticalPosition: 'top',
              horizontalPosition: 'right',
            });
            return;
          }

          const loginResponse = await store._authService.login(email, password);
          console.log('🔐 Login response:', loginResponse);

          // Le service IamAuth gère déjà la sauvegarde dans localStorage
          // On synchronise juste l'état du store
          const user = store._authService.user();
          const authToken = store._authService.authToken();

          console.log('👤 User from service:', user);
          console.log('🔐 Auth token from service:', authToken ? '***' : 'undefined');

          patchState(store, {
            user: user,
            authToken: authToken,
          });

          store._router.navigate(['/dashboard']);
        } catch (error) {
          store._snackbar.open('Invalid email or password', 'Close', {
            verticalPosition: 'top',
            horizontalPosition: 'right',
          });
          console.error(error);
          // Optional: track error
        }
      },

      logout: async () => {
        await store._authService.logout();

        // Le service IamAuth gère déjà la suppression du localStorage
        // On synchronise juste l'état du store
        patchState(store, {
          user: undefined,
          authToken: undefined
        });

        console.log('🚪 User logged out - Store cleared');
        store._router.navigate(['pages/home']);
      },

      register: async (
        email: string,
        password: string,
        confirmPassword: string,
      ) => {
        try {
          if (!email || !password || !confirmPassword) {
            store._snackbar.open(
              'Enter an email and password + confirm password.',
              'Close',
              {
                verticalPosition: 'top',
                horizontalPosition: 'right',
              },
            );
            return;
          }

          // const response =
          await store._authService.register(email, password, confirmPassword);
          store._snackbar.open('Registration done', 'Close', {
            verticalPosition: 'top',
            horizontalPosition: 'right',
          });
          // Optional: track success
          console.log('AppStore user computed: ', store.user());
          console.log('AppStore authToken computed:  ', store.authToken());


          store._router.navigate(['/auth/login']);
        } catch (error) {
          store._snackbar.open(
            'Invalid email, password or confirm password',
            'Close',
            {
              verticalPosition: 'top',
              horizontalPosition: 'right',
            },
          );
          console.error(error);
          // Optional: track error
        }
      },

      // Méthode utilitaire pour forcer la synchronisation depuis localStorage
      syncFromStorage: () => {
        const user = store._authService.user();
        const authToken = store._authService.authToken();

        console.log('🔄 Syncing AppStore from localStorage');
        console.log('👤 User from storage:', user);
        console.log('🔐 Auth token from storage:', authToken ? '***' : 'undefined');

        patchState(store, {
          user: user,
          authToken: authToken,
        });
      },
    })),

  // Auth part
  // withAppAuthFeatures(), // Add: login(), logout(), register()

  // Languages part
  withDictionariesFeatures(), // Add  selectedLanguage, possibleLanguages, selectedDictionary, changeLanguage()

  // Initialize store with data from localStorage on startup
  withHooks({
    onInit(store) {
      // Restore user and auth token from service (which loads from localStorage)
      const user = store._authService.user();
      const authToken = store._authService.authToken();

      if (user || authToken) {
        console.log('🔄 Initializing AppStore with data from localStorage');
        console.log('👤 User:', user);
        console.log('🔐 Auth Token:', authToken ? '***' : 'undefined');

        patchState(store, {
          user: user,
          authToken: authToken,
        });
      }
    },
  }),
);
