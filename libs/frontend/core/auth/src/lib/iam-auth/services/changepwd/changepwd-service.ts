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
  private readonly pathUrl = `${this.apiPrefix}/authentication/changepwd`;

  async changePassword(oldPassword: string, newPassword: string, verifyPassword: string, userEmail: string): Promise<{ message: string }> {
    const apiPrefix = this.environment.API_BACKEND_PREFIX?.replace(/^\//, '').replace(/\/$/, '');
        const pathUrl = `${apiPrefix}/authentication/changepwd`;

        console.log('🔐 Attempting password change:', { oldPassword, newPassword, verifyPassword });

//         {
//            "userId": "string",
// 	          "email": "user01@test.be",
//            "oldPassword": "test011",
//            "newPassword" : "test01",
// 	          "verifyPassword" : "test01"
// }

        const changePassword$ = this.httpClient.post<ILoginResponse>(`${pathUrl}`, {
          email: userEmail,
          oldPassword,
          newPassword,
          verifyPassword
        });

        const changePwdResponse = await firstValueFrom(changePassword$);
              console.log('✅ Password changed:', changePwdResponse );

              return { message: 'Password changed successfully.' };
  }

  async sendEmailForgotPwd(email: string): Promise<{ success: boolean; message: string }> {
    const apiPrefix = this.environment.API_BACKEND_PREFIX?.replace(/^\//, '').replace(/\/$/, '');
        const pathUrl = `${apiPrefix}/authentication/forgotpwd`;

        console.log('🔐 Attempting forgot password email sending:', email);

        const sendEmailForgotPwd$ = this.httpClient.post<ILoginResponse>(`${pathUrl}`, {
          email,
        });

        const changePwdResponse = await firstValueFrom(sendEmailForgotPwd$);
              console.log('✅ sendEmailForgotPwd sended:', changePwdResponse );

              return { success: true, message: 'Email sent successfully.' };

  }
}
