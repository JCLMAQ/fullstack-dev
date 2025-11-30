import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ENVIRONMENT_TOKEN, IAM_AUTH_TOKEN, type Environment } from '@fe/shared';
import {
  patchState,
  signalStoreFeature,
  SignalStoreFeature,
  withMethods,
  withProps
} from '@ngrx/signals';
import { firstValueFrom } from 'rxjs';

/* tslint:disable:object-literal-type */
export function withAppAuthFeatures(): SignalStoreFeature {
  return signalStoreFeature(
    withProps(() => ({
      _authService: inject(IAM_AUTH_TOKEN),
      _router: inject(Router),
      _snackbar: inject(MatSnackBar),
      _httpClient: inject(HttpClient),
    })),
     // withComputed((store) => ({
  //   user: computed(() => store._authService.user()),
  //   authToken: computed(() => store._authService.authToken()),
  // })),
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
          await store._authService.login(email, password);
          store._router.navigate(['/pages/home']);
        } catch (error) {
          store._snackbar.open('Invalid email or password', 'Close', {
            verticalPosition: 'top',
            horizontalPosition: 'right',
          });
          console.error(error);
        }
      },

      logout: async () => {
        await store._authService.logout();
        store._router.navigate(['pages/home']);
      },
      loginAsAdmin: async () => {
        await store._authService.loginAsAdmin();
      },
      hasAdminRole: () => {
        return store._authService.hasAdminRole();
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
      /**
       * Met à jour l'image de profil de l'utilisateur via une URL
       * @param userId - ID de l'utilisateur
       * @param photoUrl - Nouvelle URL de l'image
       */
      updateUserProfileImage: async (userId: string, photoUrl: string) => {
        try {
          const currentUser = store._authService.user();
          if (!currentUser) {
            store._snackbar.open('Utilisateur non connecté', 'Close', {
              verticalPosition: 'top',
              horizontalPosition: 'right',
            });
            return;
          }

          // Construction dynamique de l'URL backend
          const environment = inject(ENVIRONMENT_TOKEN) as Environment;
          const apiBaseUrl = environment.API_BACKEND_URL?.replace(/\/$/, '');
          const apiPrefix = environment.API_BACKEND_PREFIX?.replace(/^\//, '').replace(/\/$/, '');
          const userUrl = `${apiBaseUrl}/${apiPrefix}/users/${userId}`;

          // Appeler l'API pour mettre à jour l'utilisateur
          await firstValueFrom(
            store._httpClient.put<{ id: string; photoUrl: string }>(userUrl, {
              photoUrl: photoUrl
            })
          );

          // Mettre à jour l'utilisateur local avec la nouvelle image
          const updatedUserData = {
            ...currentUser,
            photoUrl: photoUrl
          };

          // Mettre à jour le store avec les nouvelles données
          patchState(store, {
            user: updatedUserData,
          });

          // Mettre à jour le service d'authentification
          store._authService.updateUserData(updatedUserData);

          store._snackbar.open('Image de profil mise à jour avec succès', 'Close', {
            verticalPosition: 'top',
            horizontalPosition: 'right',
          });

          return updatedUserData;

        } catch (error) {
          console.error('Erreur lors de la mise à jour de l\'image de profil:', error);
          store._snackbar.open(
            'Erreur lors de la mise à jour de l\'image de profil',
            'Close',
            {
              verticalPosition: 'top',
              horizontalPosition: 'right',
            },
          );
          throw error;
        }
      },

      /**
       * Upload et met à jour l'image de profil de l'utilisateur
       * @param file - Fichier image à uploader
       * @param userId - ID de l'utilisateur
       */
      uploadAndUpdateProfileImage: async (file: File, userId: string) => {
        try {
          const currentUser = store._authService.user();
          if (!currentUser) {
            store._snackbar.open('Utilisateur non connecté', 'Close', {
              verticalPosition: 'top',
              horizontalPosition: 'right',
            });
            return;
          }

          // Construction dynamique de l'URL backend
          const environment = inject(ENVIRONMENT_TOKEN) as Environment;
          const apiBaseUrl = environment.API_BACKEND_URL?.replace(/\/$/, '');
          const apiPrefix = environment.API_BACKEND_PREFIX?.replace(/^\//, '').replace(/\/$/, '');
          const uploadUrl = `${apiBaseUrl}/${apiPrefix}/upload/avatar`;
          const userUrl = `${apiBaseUrl}/${apiPrefix}/users/${userId}`;

          // 1. Upload l'image via l'endpoint avatar
          const formData = new FormData();
          formData.append('avatar', file);
          formData.append('uploadedById', userId);
          formData.append('profileUserId', userId);

          const uploadResponse = await firstValueFrom(
            store._httpClient.post<{ data: { storageUrl: string; id: string } }>(uploadUrl, formData)
          );

          const newPhotoUrl = uploadResponse.data.storageUrl;

          // 2. Mettre à jour l'utilisateur avec la nouvelle URL
          await firstValueFrom(
            store._httpClient.put<{ id: string; photoUrl: string }>(userUrl, {
              photoUrl: newPhotoUrl
            })
          );

          // 3. Mettre à jour l'état local
          const updatedUserData = {
            ...currentUser,
            photoUrl: newPhotoUrl
          };

          patchState(store, {
            user: updatedUserData,
          });

          store._authService.updateUserData(updatedUserData);

          store._snackbar.open('Image de profil uploadée et mise à jour avec succès', 'Close', {
            verticalPosition: 'top',
            horizontalPosition: 'right',
          });

          return updatedUserData;

        } catch (error) {
          console.error('Erreur lors de l\'upload de l\'image de profil:', error);
          store._snackbar.open(
            'Erreur lors de l\'upload de l\'image de profil',
            'Close',
            {
              verticalPosition: 'top',
              horizontalPosition: 'right',
            },
          );
          throw error;
        }
      },

      /**
       * Rafraîchit les données de l'utilisateur depuis le serveur
       */
      refreshUserData: async () => {
        try {
          const updatedUser = await store._authService.fetchUser();
          if (updatedUser) {
            patchState(store, {
              user: updatedUser,
            });
          }
        } catch (error) {
          console.error('Erreur lors du rafraîchissement des données utilisateur:', error);
        }
      },
    })),
  );
}
