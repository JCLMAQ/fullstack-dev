import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { User } from '@db/prisma/browser';
import { ENVIRONMENT_TOKEN } from '@fe/tokens';
import { firstValueFrom } from 'rxjs';
import { TokenStorageService } from '../token-storage/token-storage-service';
import { UserStorageService } from '../user-storage/user-storage-service';

@Injectable({
  providedIn: 'root',
})
export class LogoutService {
    private tokenStorage = inject(TokenStorageService);
    private userStorage = inject(UserStorageService);
    // Signal utilisateur à réinitialiser (optionnel, à injecter si besoin)
    public userSignal: ReturnType<typeof signal<User | null>> | undefined;

    /**
     * Déconnexion complète (backend + frontend)
     */
    async logoutComplet(refreshToken?: string, userSignal?: ReturnType<typeof signal<User | null>>): Promise<void> {
      await this.logoutBackend(refreshToken);
      this.tokenStorage.clearToken();
      this.tokenStorage.clearRefreshToken();
      this.userStorage.clearUser();
      // Suppression des flags d'authentification du localStorage
      localStorage.removeItem('authenticated');
      localStorage.removeItem('adminRole');
      if (userSignal) userSignal.set(null);
    }
  private httpClient = inject(HttpClient);
  private environment = inject(ENVIRONMENT_TOKEN);

  /**
   * Déconnexion côté backend (invalidation du token)
   * IAM: POST /api/authentication/sign-out ✅
   */
  async logoutBackend(refreshToken?: string): Promise<{ success: boolean; message?: string }> {
    const apiPrefix = this.environment.API_BACKEND_PREFIX?.replace(/^\/|\/$/g, '');
    const pathUrl = `${apiPrefix}/authentication/logout`;
    // Vérifie la présence d'un token avant d'appeler l'API
    const token = this.tokenStorage.authToken();
    if (!token) {
      return { success: true, message: 'No token, logout already done client-side.' };
    }
    try {
      const response$ = this.httpClient.post<{ success: boolean; message?: string }>(
        pathUrl,
        refreshToken ? { refreshToken } : {},
      );
      return await firstValueFrom(response$);
    } catch (error) {
      return { success: false, message: (error as Error).message };
    }
  }
}
