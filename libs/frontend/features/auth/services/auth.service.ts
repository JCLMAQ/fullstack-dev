import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);

  private readonly accessToken = signal<string | null>(this.getToken('accessToken'));
  private readonly refreshToken = signal<string | null>(this.getToken('refreshToken'));

  readonly isAuthenticated: Signal<boolean> = computed(() => !!this.accessToken());

  private getToken(key: 'accessToken' | 'refreshToken'): string | null {
    return localStorage.getItem(key);
  }

  private setToken(key: 'accessToken' | 'refreshToken', value: string) {
    localStorage.setItem(key, value);
    if (key === 'accessToken') this.accessToken.set(value);
    if (key === 'refreshToken') this.refreshToken.set(value);
  }

  private clearTokens() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    this.accessToken.set(null);
    this.refreshToken.set(null);
  }

  getAccessToken(): string | null {
    return this.accessToken();
  }

  getRefreshToken(): string | null {
    return this.refreshToken();
  }

  setTokens(tokens: AuthTokens) {
    this.setToken('accessToken', tokens.accessToken);
    this.setToken('refreshToken', tokens.refreshToken);
  }

  async login(email: string, password: string): Promise<void> {
    try {
      const tokens = await this.http.post<AuthTokens>(`/api/auth/sign-in`, { email, password }).toPromise();
      if (tokens) this.setTokens(tokens);
    } catch (err) {
      this.clearTokens();
      throw err;
    }
  }

  async refreshTokens(): Promise<void> {
    const refreshToken = this.getRefreshToken();
    if (!refreshToken) throw new Error('No refresh token');
    try {
      const tokens = await this.http.post<AuthTokens>(`/api/auth/refresh-tokens`, { refreshToken }).toPromise();
      if (tokens) this.setTokens(tokens);
    } catch (err) {
      this.clearTokens();
      throw err;
    }
  }

  logout() {
    this.clearTokens();
    this.router.navigate(['/login']);
  }
}
