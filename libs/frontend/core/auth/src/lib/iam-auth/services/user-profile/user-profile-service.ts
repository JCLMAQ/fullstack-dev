import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ENVIRONMENT_TOKEN } from '@fe/tokens';
import { firstValueFrom } from 'rxjs';
import { UserStorageService } from '../user-storage/user-storage-service';
// import { AppStore } from '@fe/stores';

/**
 * 📸 Service de gestion du profil utilisateur
 *
 * Responsabilités :
 * - Mise à jour de la photo de profil
 * - Autres opérations sur le profil (futures extensions)
 */
@Injectable({
  providedIn: 'root',
})
export class UserProfileService {
  private httpClient = inject(HttpClient);
  private userStorage = inject(UserStorageService);
  private environment = inject(ENVIRONMENT_TOKEN);
  // private appStore = inject(AppStore);

  /**
   * 📸 Mettre à jour la photo de profil
   */
  async updateUserPhoto(photoUrl: string): Promise<{
    success: boolean;
    message: string;
    photoUrl?: string;
  }> {
    // Construction dynamique de l'URL backend selon la config d'environnement
    const apiBaseUrl = this.environment.API_BACKEND_URL?.replace(/\/$/, '');
    const apiPrefix = this.environment.API_BACKEND_PREFIX?.replace(/^\//, '').replace(/\/$/, '');
    const pathUrl = `${apiBaseUrl}/${apiPrefix}/authentication/update-photo`;

    try {
      console.log('📤 Updating user photo:', { photoUrl });

      const response = await firstValueFrom(
        this.httpClient.put<{
          success: boolean;
          message: string;
          photoUrl?: string;
        }>(`${pathUrl}`, { photoUrl }),
      );

      console.log('✅ Photo update response:', response);

      if (response.success && response.photoUrl) {
        this.userStorage.updateUser({ photoUrl: response.photoUrl });
        console.log('🔄 User photo updated locally');
      }

      return response;
    } catch (error) {
      console.error('❌ Error updating photo:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      return {
        success: false,
        message: `Failed to update photo: ${errorMessage}`,
      };
    }
  }
}
