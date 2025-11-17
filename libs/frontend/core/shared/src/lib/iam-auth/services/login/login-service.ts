import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
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
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private httpClient = inject(HttpClient);
  private tokenStorage = inject(TokenStorageService);
  private userStorage = inject(UserStorageService);
  private userFetchService = inject(UserFetchService);

  /**
   * 🔐 LOGIN avec endpoint IAM
   * IAM: POST /api/authentication/sign-in ✅
   */
  async login(email: string, password: string): Promise<ILoginResponse> {
    const pathUrl = 'api/authentication/sign-in';

    const login$ = this.httpClient.post<ILoginResponse>(`${pathUrl}`, {
      email,
      password,
    });

    const response = await firstValueFrom(login$);

    this.tokenStorage.setToken(response.accessToken);

    const userLogged = await this.userFetchService.fetchUser();
    if (userLogged) {
      this.userStorage.setUser(userLogged);
    }

    console.log('✅ User logged in (IAM):', userLogged);
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
    try {
      const response = await firstValueFrom(
        this.httpClient.post<{ success: boolean; message: string }>(
          `api/authentication/check-credentials/${email}`,
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
