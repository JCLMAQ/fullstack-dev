import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ENVIRONMENT_TOKEN } from '@fe/tokens';
import { firstValueFrom } from 'rxjs';

interface ResetPasswordResponse {
  success: boolean;
  message: string;
}

/*
export interface AuthResponse {
  success: boolean;
  message: string;
}*/

@Injectable({
  providedIn: 'root'
})
export class ResetPwdService {

  private  httpClient = inject(HttpClient);
  private  environment = inject(ENVIRONMENT_TOKEN);

  private readonly apiPrefix = this.environment.API_BACKEND_PREFIX?.replace(/^\//, '').replace(/\/$/, '');
  private readonly pathUrl = `${this.apiPrefix}/authentication/reset-password`;

  async resetPasswordWithToken(newPassword: string, verifyPassword: string, token: string ): Promise<{ success: boolean; message: string }> {
    // const pathUrl = `${this.apiPrefix}/authentication/reset-password`;

        console.log('🔐 Attempting password reset:', { newPassword, verifyPassword, token });

        const resetPassword$ = this.httpClient.post<ResetPasswordResponse>(`${this.pathUrl}?token=${token}`, {
          newPassword,
          verifyPassword
        });

        const resetPwdResponse = await firstValueFrom(resetPassword$);

        console.log('✅ Password resetd:', resetPwdResponse );

      return { success: resetPwdResponse.success, message: resetPwdResponse.message };
  }

}
