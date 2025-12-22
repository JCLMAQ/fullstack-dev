import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ENVIRONMENT_TOKEN } from '@fe/tokens';
import { firstValueFrom } from 'rxjs';
import { ILoginResponse } from '../../../models/auth.model';


@Injectable({
  providedIn: 'root'
})
export class ChangePwdService {

  private readonly httpClient = inject(HttpClient);
  private readonly environment = inject(ENVIRONMENT_TOKEN);
  private readonly apiPrefix = this.environment.API_BACKEND_PREFIX?.replace(/^\//, '').replace(/\/$/, '');
  private readonly pathUrl = `${this.apiPrefix}/authentication/change-password`;

  async changePassword(oldPassword: string, newPassword: string, verifyPassword: string): Promise<{ message: string }> {
    const apiPrefix = this.environment.API_BACKEND_PREFIX?.replace(/^\//, '').replace(/\/$/, '');
        // const pathUrl = `${apiPrefix}/authentication/change-password`;

        console.log('🔐 Attempting password change:', { oldPassword, newPassword, verifyPassword });

        const changePassword$ = this.httpClient.post<ILoginResponse>(`${this.pathUrl}`, {
          oldPassword,
          newPassword,
          verifyPassword
        });

        try {
          const changePwdResponse = await firstValueFrom(changePassword$);
          console.log('✅ Password changed:', changePwdResponse );
          return { message: 'Password changed successfully.' };
        } catch (error: unknown) {
          console.error('❌ Error changing password:', error);

          if (error && typeof error === 'object' && 'status' in error) {
            const httpError = error as { status: number };
            if (httpError.status === 401) {
              throw new Error('Votre session a expiré. Veuillez vous reconnecter pour changer votre mot de passe.');
            }
          }

          throw error;
        }
  }

  async verifyOldPassword(oldPassword: string, userEmail: string): Promise<boolean> {
    const apiPrefix = this.environment.API_BACKEND_PREFIX?.replace(/^\//,  '').replace(/\/$/,  '');
    const pathUrl = `${apiPrefix}/authentication/verify-password`;

    console.log('🔐 Verifying old password for:', userEmail);

    const verifyPassword$ = this.httpClient.post<{ valid: boolean }>(`${pathUrl}`, {
      email: userEmail,
      password: oldPassword
    });

    const response = await firstValueFrom(verifyPassword$);
    console.log('✅ Password verification:', response.valid);

    return response.valid;
  }
  async sendEmailForgotPwd(email: string): Promise<{ success: boolean; message: string }> {
    const apiPrefix = this.environment.API_BACKEND_PREFIX?.replace(/^\//, '').replace(/\/$/, '');
        const pathUrl = `${apiPrefix}/authentication/forgot-password`;

        console.log('🔐 Attempting forgot password email sending:', email);

        const sendEmailForgotPwd$ = this.httpClient.post<ILoginResponse>(`${pathUrl}`, {
          email,
        });

        const changePwdResponse = await firstValueFrom(sendEmailForgotPwd$);
              console.log('✅ sendEmailForgotPwd sended:', changePwdResponse );

              return { success: true, message: 'Email sent successfully.' };

  }
}
