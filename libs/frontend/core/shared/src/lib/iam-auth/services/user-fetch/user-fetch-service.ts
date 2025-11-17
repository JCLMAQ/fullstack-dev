import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '@db/prisma';
import { jwtDecode } from 'jwt-decode';
import { firstValueFrom } from 'rxjs';
import { IJwt } from '../../../models/auth.model';
import { TokenStorageService } from '../token-storage/token-storage-service';
import { UserStorageService } from '../user-storage/user-storage-service';

/**
 * 👤 Service de récupération du profil utilisateur
 *
 * Responsabilités :
 * - Récupération du profil utilisateur depuis l'API
 * - Rafraîchissement du profil utilisateur
 * - Gestion des erreurs et fallback JWT
 */
@Injectable({
  providedIn: 'root',
})
export class UserFetchService {
  private httpClient = inject(HttpClient);
  private tokenStorage = inject(TokenStorageService);
  private userStorage = inject(UserStorageService);

  /**
   * 👤 FETCH USER avec endpoint IAM
   * IAM: GET /api/authentication/profile ✅
   */
  async fetchUser(): Promise<User | null> {
    const pathUrl = 'api/authentication/profile';
    const authToken = this.tokenStorage.authToken();

    if (!authToken) {
      console.log('⚠️ No auth token found');
      return null;
    }

    try {
      const response = await firstValueFrom(
        this.httpClient.get<{ user: User; fullName: string }>(`${pathUrl}`),
      );
      console.log('👤 Profile fetched:', response);
      return response.user;
    } catch (error) {
      console.error('❌ Error fetching user:', error);

      // Fallback : utiliser les infos du JWT
      const decodedJwt: IJwt = jwtDecode(authToken);
      console.log('⚠️ Fallback - Decoded JWT:', decodedJwt);
      return null;
    }
  }

  /**
   * 🔄 Actualiser le profil utilisateur
   */
  async refreshUserProfile(): Promise<void> {
    try {
      const updatedUser = await this.fetchUser();
      if (updatedUser) {
        this.userStorage.setUser(updatedUser);
        console.log('🔄 Profile refreshed:', updatedUser);
      }
    } catch (error) {
      console.error('⚠️ Error refreshing profile:', error);
    }
  }
}
