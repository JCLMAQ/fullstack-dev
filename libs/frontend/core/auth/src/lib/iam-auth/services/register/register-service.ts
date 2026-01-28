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
    // Todo  refactor with httpResource
  private environment = inject(ENVIRONMENT_TOKEN);

  /**
   * Détecte la langue du navigateur sans dépendance à TranslateService
   * pour éviter les dépendances circulaires avec les intercepteurs HTTP
   */
  private getBrowserLanguage(): string {
    if (typeof navigator !== 'undefined' && navigator.language) {
      const browserLang = navigator.language.split('-')[0]; // 'en-US' → 'en'
      const supportedLangs = ['en', 'fr', 'de', 'nl'];
      return supportedLangs.includes(browserLang) ? browserLang : 'en';
    }
    return 'en';
  }

  /**
   * 📝 REGISTER avec endpoint IAM
   * IAM: POST /api/authentication/register-extended ✅
   */
  async register(
    email: string,
    password: string,
    confirmPassword: string,
    languageCode?: string,
  ): Promise<IRegisterResponse> {
    const apiPrefix = this.environment.API_BACKEND_PREFIX?.replace(/^\//, '').replace(/\/$/, '');
    const pathUrl = `${apiPrefix}/authentication/register-extended`;

    // Déterminer la langue: paramètre > navigateur > défaut 'en'
    const userLanguage = languageCode || this.getBrowserLanguage();

    const payload = {
      email,
      password,
      verifyPassword: confirmPassword,
      languageCode: userLanguage,
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
