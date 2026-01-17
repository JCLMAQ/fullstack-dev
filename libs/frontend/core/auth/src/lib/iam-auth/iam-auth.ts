



import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Organization, User } from '@db/prisma/browser';
import { ILoginResponse, IRegisterResponse } from '../models/auth.model';
import { ChangePwdService } from './services/changepwd/changepwd-service';
import { LoginService } from './services/login/login-service';
import { RegisterService } from './services/register/register-service';
import { ResetPwdService } from './services/resetpwd/resetpwd-service';
import { TokenStorageService } from './services/token-storage/token-storage-service';
import { UserFetchService } from './services/user-fetch/user-fetch-service';
import { UserProfileService } from './services/user-profile/user-profile-service';
import { UserStorageService } from './services/user-storage/user-storage-service';

/**
 * 🆕 SERVICE IAM MODERNE - Facade Pattern
 *
 * Ce service sert de point d'entrée unique pour toutes les opérations IAM
 * en déléguant les responsabilités à des services spécialisés :
 *
 * - 🔐 TokenStorageService : Gestion du JWT
 * - 👤 UserStorageService : Gestion des données utilisateur
 * - 🔑 LoginService : Authentification et vérification des credentials
 * - 📝 RegisterService : Inscription des nouveaux utilisateurs
 * - 🔄 UserFetchService : Récupération et rafraîchissement du profil
 * - 📸 UserProfileService : Mise à jour du profil (photo, etc.)
 *
 * Avantages :
 * - ✅ Séparation des responsabilités (SRP)
 * - ✅ Testabilité améliorée
 * - ✅ Code modulaire et maintenable
 * - ✅ Réutilisabilité des services
 */

@Injectable({
  providedIn: 'root',
})
export class IamAuth {
  /**
   * 🔄 Rafraîchir le token d'accès via le refreshToken
   */
  async refreshToken(): Promise<{ accessToken: string; refreshToken: string }> {
    const refreshToken = this.getRefreshToken();
    if (!refreshToken) {
      throw new Error('Aucun refreshToken disponible');
    }
    const response = await this.loginService.refreshToken(refreshToken);
    this.tokenStorage.setToken(response.accessToken);
    this.tokenStorage.setRefreshToken(response.refreshToken);
    return response;
  }

  /**
   * Gestion du refreshToken (stockage, accès, suppression)
   */
  setRefreshToken(token: string): void {
    this.tokenStorage.setRefreshToken(token);
  }

  getRefreshToken(): string | undefined {
    // refreshToken est une propriété signal, il faut l'appeler comme une fonction
    return this.tokenStorage.refreshToken();
  }

  clearRefreshToken(): void {
    this.tokenStorage.clearRefreshToken();
  }

  /**
   * Accès au token d'accès (getter/setter)
   */
  getAccessToken(): string | undefined {
    return this.tokenStorage.authToken();
  }

  setAccessToken(token: string): void {
    this.tokenStorage.setToken(token);
  }
  private router = inject(Router);
  // private appStore = inject(AppStore);
  // private injector = inject(Injector);

  // private localStorageCleaner = inject(LocalStorageCleanerService);

  // 🔧 Services spécialisés injectés
  private loginService = inject(LoginService);
  private registerService = inject(RegisterService);
  private userFetchService = inject(UserFetchService);
  private tokenStorage: TokenStorageService = inject(TokenStorageService);
  private userStorage = inject(UserStorageService);
  private profileService = inject(UserProfileService);
  private changePwdService = inject(ChangePwdService);
  private resetPasswordService = inject(ResetPwdService);

  // État d'authentification (compatibilité)
  private authenticated = false;
  private adminRole = false;
  userSignal = signal<User | null>(null);

  constructor() {
    // console.log('🚀 IamAuth initialized (Facade Pattern)');
    // console.log('👤 User loaded:', this.userSignal()?.email || 'undefined');
    // console.log('🔐 Token loaded:', this.authTokenAppStore() ? '***' : 'undefined');
  }


  /**
   * Déconnexion complète de l'utilisateur
   */
  logout(): void {
    this.tokenStorage.clearToken();
    this.tokenStorage.clearRefreshToken();
    this.userStorage.clearUser();
    this.logoutAsUserOrAdmin();
    this.adminRole = false;
    this.userSignal.set(null);
    // Redirection éventuelle ou autres actions post-logout
  }

  /**
   * 🔐 LOGIN avec nouvel endpoint IAM
   * IAM: POST /api/authentication/sign-in ✅
   */
  async loginIamAuth(email: string, password: string):
    Promise<ILoginResponse & { user: User | null } & { organizations: Organization[] }> {
    // Toujours réinitialiser le flag admin lors d'un login classique
    // this.adminRole = false;
    const response = await this.loginService.login(email, password);
    this.loginAsUser(); // authenticated = true
    this.userSignal.set(response.user);
    return response;
  }

  async fetchUserOrganizationsIamAuth(userId?: string, currentUser?: User): Promise<Organization[] | null> {
    if (!currentUser && userId) {
      return null;
    }
    try {
      const organizations = await this.userFetchService.fetchUserOrganizations(userId, currentUser);
      console.log('✅ Organizations fetched successfully:', organizations);
      return organizations;
    } catch (error) {
      console.error('❌ Error fetching organizations:', error);
      return null;
    }
  }

  /**
   * 📝 REGISTER avec nouvel endpoint IAM
   * IAM: POST /api/authentication/register-extended ✅
   */
  async registerIamAuth(
    email: string,
    password: string,
    confirmPassword: string,
  ): Promise<IRegisterResponse> {
    const response = await this.registerService.register(email, password, confirmPassword);
    return response
  }

  async emailCheck(email: string): Promise<boolean> {
    return  await this.registerService.emailCheck(email);
  }

  async sendEmailForgotPwdIamAuth(email: string): Promise<{ success: boolean; message: string }> {
    return await this.changePwdService.sendEmailForgotPwd(email);
  }

  async resetPasswordIamAuth(newPassword: string, verifyPassword: string, token: string ): Promise<{ success: boolean; message: string }> {
    return this.resetPasswordService.resetPasswordWithToken(newPassword, verifyPassword, token);
  }


  /**
   * 🚪 LOGOUT
   */
  // async logout(): Promise<void> {
  //   // this.localStorageCleaner.clearAllUserData();
  //   this.tokenStorage.clearToken();
  //   this.userStorage.clearUser();
  //   this.logoutAsUserOrAdmin();
  //   // Correction : forcer le flag admin à false explicitement
  //   this.adminRole = false;
  //   // console.log('🧹 Complete logout');
  //   // console.log('👤 User after logout:', this.userSignal()?.email || 'undefined');
  //   // console.log('🔐 isLoggedIn after logout:', this.isLoggedIn());
  //   // console.log('🛡️ adminRole after logout:', this.adminRole);
  // }

  /**
   * 📸 Mise à jour de la photo de profil
   */
  async updateUserPhoto(photoUrl: string): Promise<{
    success: boolean;
    message: string;
    photoUrl?: string;
  }> {
    return this.profileService.updateUserPhoto(photoUrl);
  }

  /**
   * Met à jour les données utilisateur localement
   */
  updateUserData(userData: User): void {
    this.userStorage.updateUser(userData);
  }

  async fetchUser(): Promise<User | null> {
    return this.userFetchService.fetchUser();
  }

  /**
   * ✅ Vérification des credentials
   */
  async checkUserCredentials(email: string, password: string): Promise<boolean> {
    return this.loginService.checkUserCredentials(email, password);
  }

  /**
   * 🔄 Actualiser le profil utilisateur
   */
  async refreshUserProfile(): Promise<User | null> {
    return this.userFetchService.refreshUserProfile();
  }

  // === MÉTHODES COMPATIBILITÉ (identiques à auth.service.ts) ===

  isAuthenticated() {
    return this.authenticated;
  }

  loginAsUser() {
    this.authenticated = true;
  }

  loginAsAdmin() {
    this.authenticated = true;
    this.adminRole = true;
  }

  hasAdminRole() {
    return this.adminRole;
  }

  logoutAsUserOrAdmin() {
    this.authenticated = false;
    this.adminRole = false;
  }
}
