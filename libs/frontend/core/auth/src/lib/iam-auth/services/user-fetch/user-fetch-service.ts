import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Organization, User } from '@db/prisma/browser';
import { ENVIRONMENT_TOKEN } from '@fe/tokens';
import { jwtDecode } from 'jwt-decode';
import { firstValueFrom } from 'rxjs';
import { IJwt } from '../../../models/auth.model';
import { TokenStorageService } from '../token-storage/token-storage-service';
import { UserStorageService } from '../user-storage/user-storage-service';

/**
 * 🔄 Service de récupération utilisateur
 *
 * Responsabilités :
 * - Récupération du profil utilisateur depuis l'API
 * - Rafraîchissement des données utilisateur
 * - Fallback sur les données JWT si API échoue
 */
@Injectable({
  providedIn: 'root',
})
export class UserFetchService {
  private httpClient = inject(HttpClient);
    // Todo  refactor with httpResource
  private tokenStorage = inject(TokenStorageService);
  private userStorage = inject(UserStorageService);
  private environment = inject(ENVIRONMENT_TOKEN);

  /**
   * 👤 FETCH USER avec endpoint IAM
   * IAM: GET /api/authentication/profile ✅
   */
  async fetchUser(userId?: string): Promise<User | null> {
    const apiPrefix = this.environment.API_BACKEND_PREFIX?.replace(/^\//, '').replace(/\/$/, '');
    const pathUrl = `${apiPrefix}/authentication/profile`;

    const authToken = this.tokenStorage.authToken();

    console.log('🔍 Fetching user profile...');
    console.log('🔐 Auth token present:', !!authToken);

    if (!authToken) {
      console.warn('⚠️ No auth token found');
      return null;
    }

    try {
      const response = await firstValueFrom(
        this.httpClient.get<{ user: User; fullName: string }>(`${pathUrl}`),
      );

      console.log('✅ Profile fetched successfully');
      console.log('📋 Response structure:', Object.keys(response));
      console.log('👤 User data:', response.user);
      console.log('📋 User keys:', Object.keys(response.user));

      return response.user;
    } catch (error) {
      console.error('❌ Error fetching user:', error);

      // Fallback : utiliser les infos du JWT
      try {
        const decodedJwt: IJwt = jwtDecode(authToken);
        console.log('⚠️ Fallback - Decoded JWT:', decodedJwt);
        console.warn('⚠️ Using JWT fallback - limited user data available');

        // Si vous voulez créer un User partiel depuis le JWT :
        //return { id: decodedJwt.sub, email: decodedJwt.email, ... } as User;

        return null;
      } catch (jwtError) {
        console.error('❌ Error decoding JWT:', jwtError);
        return null;
      }
    }
  }

  /**
   * 🔄 Actualiser le profil utilisateur
   */
  async refreshUserProfile(): Promise<User | null> {
    try {
      console.log('🔄 Refreshing user profile...');
      const updatedUser = await this.fetchUser();

      if (updatedUser) {
        this.userStorage.setUser(updatedUser);

        console.log('✅ Profile refreshed and stored:', updatedUser.email);
        return updatedUser;
      } else {
        console.warn('⚠️ No user data to refresh');
      }
    } catch (error) {
      console.error('❌ Error refreshing profile:', error);
      return null;
    }
    return null;
  }

  async fetchUserOrganizations(userId?: string, user?: User): Promise<Organization[] | null> {
    const apiPrefix = this.environment.API_BACKEND_PREFIX?.replace(/^\//, '').replace(/\/$/, '');
    // const user = await this.fetchUser();

    if (!user && !userId) {
      return null;
    }
    let id = userId ?? user?.id;
    let orgsUrl = '';
    if (id) {
      orgsUrl = `${apiPrefix}/users/${encodeURIComponent(id)}/organizations`;
    } else {
      return null;
    }

    try {
      const organizations = await firstValueFrom(
        this.httpClient.get<Organization[]>(orgsUrl)
      );
      return organizations;
    } catch {
      return null;
    }
  }

}
