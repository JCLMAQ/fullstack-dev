import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ENVIRONMENT_TOKEN } from '@fe/tokens';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LogoutService {
  private httpClient = inject(HttpClient);
  private environment = inject(ENVIRONMENT_TOKEN);

  /**
   * Déconnexion côté backend (invalidation du token)
   * IAM: POST /api/authentication/sign-out ✅
   */
  async logoutBackend(refreshToken?: string): Promise<{ success: boolean; message?: string }> {
    const apiPrefix = this.environment.API_BACKEND_PREFIX?.replace(/^\/|\/$/g, '');
    const pathUrl = `${apiPrefix}/authentication/sign-out`;
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
