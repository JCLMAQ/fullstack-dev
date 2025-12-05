import { inject, Injectable } from '@angular/core';
import { IamAuth } from '../iam-auth/iam-auth';
import { IRegisterResponse } from '../models/auth.model';

@Injectable({ providedIn: 'root' })
export class RegisterService {
  private iamAuth = inject(IamAuth);

  async register(email: string, password: string, confirmPassword: string): Promise<IRegisterResponse> {
    return this.iamAuth.register(email, password, confirmPassword);
  }
}
