import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { IRegisterResponse } from '../../../models/auth.model';

/**
 * 📝 Service d'enregistrement
 *
 * Responsabilités :
 * - Enregistrement de nouveaux utilisateurs
 * - Validation des données d'inscription
 */
@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private httpClient = inject(HttpClient);

  /**
   * 📝 REGISTER avec endpoint IAM
   * IAM: POST /api/authentication/register-extended ✅
   */
  async register(
    email: string,
    password: string,
    confirmPassword: string,
  ): Promise<IRegisterResponse> {
    const pathUrl = 'api/authentication/register-extended';

    const payload = {
      email,
      password,
      verifyPassword: confirmPassword,
    };

    console.log('📝 Registering User (IAM):', payload);

    const register$ = this.httpClient.post<IRegisterResponse>(
      `${pathUrl}`,
      payload,
    );
    const response = await firstValueFrom(register$);

    console.log('✅ Registration successful (IAM):', response);
    return response;
  }
}
