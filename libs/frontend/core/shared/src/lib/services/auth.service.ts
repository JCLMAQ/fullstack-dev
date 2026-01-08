import { inject, Injectable } from '@angular/core';
import { IamAuth } from '@fe/core/auth';
import { from, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly iamAuth = inject(IamAuth);

  getAccessToken(): string | undefined {
    return this.iamAuth.getAccessToken();
  }

  setAccessToken(token: string): void {
    this.iamAuth.setAccessToken(token);
  }

  getRefreshToken(): string | undefined {
    return this.iamAuth.getRefreshToken();
  }

  setRefreshToken(token: string): void {
    this.iamAuth.setRefreshToken(token);
  }

  refreshToken(): Observable<{ accessToken: string; refreshToken: string }> {
    return from(this.iamAuth.refreshToken());
  }

  logout(): void {
    this.iamAuth.logout();
  }
}
