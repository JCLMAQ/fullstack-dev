import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ENVIRONMENT_TOKEN } from '@fe/tokens';
import { firstValueFrom, timeout } from 'rxjs';
import { IRegisterResponse } from '../../../models/auth.model';

/**
 * 📝 Service d'enregistrement
 *
 * Responsabilités :
 * - Enregistrement de nouveaux utilisateurs
 * - Validation des données d'inscription
 * Response: IRegisterResponse {
          success: boolean;
          message: string;
        }
 *
 *
 */
@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private httpClient = inject(HttpClient);
  private environment = inject(ENVIRONMENT_TOKEN);

  /**
   * 📝 REGISTER avec endpoint IAM
   * IAM: POST /api/authentication/register-extended ✅
   */
  async register(
    email: string,
    password: string,
    confirmPassword: string,
  ): Promise<IRegisterResponse> {
    const apiPrefix = this.environment.API_BACKEND_PREFIX?.replace(/^\//, '').replace(/\/$/, '');
    const pathUrl = `${apiPrefix}/authentication/register-extended`;

    const payload = {
      email,
      password,
      verifyPassword: confirmPassword,
    };

    console.log('📝 Registering User (IAM):', { url: pathUrl, payload });

    try {
      const register$ = this.httpClient.post<IRegisterResponse>(
        `${pathUrl}`,
        payload,
      ).pipe(
        timeout({ each: 30000, with: () => {
          throw new Error('Registration request timeout (30s)');
        }})
      );

      console.log('🔄 Waiting for registration response...');
      const response = await firstValueFrom(register$);
      console.log('📦 Response received:', response);

      console.log('✅ Registration successful (IAM) - register-service:', response);

      return response;
    } catch (error) {
      console.error('❌ Registration failed (IAM) - register-service:', {
        error,
        message: error instanceof Error ? error.message : 'Unknown error',
        status: (error as any)?.status,
        statusText: (error as any)?.statusText,
        body: (error as any)?.error
      });
      throw error;
    }
  }

    async emailCheck(email: string): Promise<boolean> {
      if (!email || typeof email !== 'string') return false;

        const apiPrefix = this.environment.API_BACKEND_PREFIX?.replace(/^\//, '').replace(/\/$/, '');
        const pathUrl = `${apiPrefix}/authentication/email-check`;

        const payload = { email};

        console.log('📝 [RegisterService] User email check unicity (IAM):', payload);

        const emailCheck$ = this.httpClient.post<boolean>(
          `${pathUrl}`,
          payload,
        );
        const response = await firstValueFrom(emailCheck$);

        console.log('✅ [RegisterService] Email check response (IAM):', {
          response,
          type: typeof response,
          isBoolean: typeof response === 'boolean',
          truthyValue: !!response
        });

        return response;

    }
}
