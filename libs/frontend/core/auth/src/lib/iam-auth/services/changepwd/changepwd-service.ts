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

  async sendEmailForgotPwd(email: string): Promise<{ message: string }> {
    const apiPrefix = this.environment.API_BACKEND_PREFIX?.replace(/^\//, '').replace(/\/$/, '');
        const pathUrl = `${apiPrefix}/authentication/forgot-password`;

        console.log('🔐 Attempting forgot password email sending:', email);

        const sendEmailForgotPwd$ = this.httpClient.post<ILoginResponse>(`${pathUrl}`, {
          email,
          password,
        });

        const loginResponse = await firstValueFrom(sendEmailForgotPwd$);
              console.log('✅ sendEmailForgotPwd sended:', {

              });

    // Simulate an API call to send a password reset email
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve({ message: `Password reset email sent to ${email}` });
    //   }, 1000);
    // });

    /*
    export interface AuthResponse {
      success: boolean;
      message: string;
}
    */
  }
}
