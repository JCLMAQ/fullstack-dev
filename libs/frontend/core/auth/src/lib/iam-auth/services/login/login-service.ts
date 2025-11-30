import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ENVIRONMENT_TOKEN } from '@fe/shared';
import { firstValueFrom } from 'rxjs';
import { ILoginResponse } from '../../../models/auth.model';
import { TokenStorageService } from '../token-storage/token-storage-service';
import { UserFetchService } from '../user-fetch/user-fetch-service';
import { UserStorageService } from '../user-storage/user-storage-service';

/**
 * 🔐 Service de connexion
 *
 * Responsabilités :
 * - Authentification des utilisateurs
 * - Gestion du token après login
 * - Récupération et stockage du profil utilisateur
 */

// TODO: remplacer les adresse hardcodées par des constantes ou configuration
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private httpClient = inject(HttpClient);
  private tokenStorage = inject(TokenStorageService);
  private userStorage = inject(UserStorageService);
  private userFetchService = inject(UserFetchService);
  private environment = inject(ENVIRONMENT_TOKEN);

  /**
   * 🔐 LOGIN avec endpoint IAM
   * IAM: POST /api/authentication/sign-in ✅
   */
  async login(email: string, password: string): Promise<ILoginResponse> {
    const apiPrefix = this.environment.API_BACKEND_PREFIX?.replace(/^\//, '').replace(/\/$/, '');
    const pathUrl = `${apiPrefix}/authentication/sign-in`;

    console.log('🔐 Attempting login for:', email);

    const login$ = this.httpClient.post<ILoginResponse>(`${pathUrl}`, {
      email,
      password,
    });

    const response = await firstValueFrom(login$);
    console.log('✅ Login response received:', {
      hasAccessToken: !!response.accessToken,
      hasRefreshToken: !!response.refreshToken
    });

    // 1. Stocker le token
    this.tokenStorage.setToken(response.accessToken);
    console.log('🔐 Token stored');

    // 2. Récupérer le profil utilisateur
    console.log('👤 Fetching user profile...');
    const userLogged = await this.userFetchService.fetchUser();

    if (userLogged) {
      console.log('👤 User fetched successfully:', userLogged);
      console.log('📋 User object keys:', Object.keys(userLogged));
      console.log('📋 User data:', JSON.stringify(userLogged, null, 2));

      // 3. Stocker l'utilisateur complet
      this.userStorage.setUser(userLogged);
      console.log('✅ User stored in UserStorageService');
    } else {
      console.error('❌ Failed to fetch user profile');
    }

    return response;
  }

  /**
   * ✅ VÉRIFICATION CREDENTIALS avec endpoint IAM
   * IAM: POST /api/authentication/check-credentials/:email ✅
   */
  async checkUserCredentials(
    email: string,
    password: string,
  ): Promise<boolean> {
    const apiPrefix = this.environment.API_BACKEND_PREFIX?.replace(/^\//, '').replace(/\/$/, '');
    const pathUrl = `${apiPrefix}check-credentials/${email}`;
    try {
      const response = await firstValueFrom(

        this.httpClient.post<{ success: boolean; message: string }>(
          `${pathUrl}`,
          { password },
        ),
      );

      return response.success;
    } catch (error) {
      console.error('❌ Error checking credentials:', error);
      return false;
    }
  }
}
