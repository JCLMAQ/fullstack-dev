import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Organization, User } from '@db/prisma';
import { ILoginResponse, IRegisterResponse } from '../models/auth.model';
import { LoginService } from './services/login/login-service';
import { RegisterService } from './services/register/register-service';
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
  private router = inject(Router);
    // private appStore = inject(AppStore);
    // private injector = inject(Injector);

  // private localStorageCleaner = inject(LocalStorageCleanerService);

  // 🔧 Services spécialisés injectés
  private loginService = inject(LoginService);
  private registerService = inject(RegisterService);
  private userFetchService = inject(UserFetchService);
  private tokenStorage = inject(TokenStorageService);
  private userStorage = inject(UserStorageService);
  private profileService = inject(UserProfileService);


  // État d'authentification (compatibilité)
  private authenticated = false;
  private adminRole = false;
  userAppStore = signal<User | null>(null);

  constructor() {
    // console.log('🚀 IamAuth initialized (Facade Pattern)');
    console.log('👤 User loaded:', this.userAppStore()?.email || 'undefined');
    // console.log('🔐 Token loaded:', this.authTokenAppStore() ? '***' : 'undefined');
  }

  /**
   * 🔐 LOGIN avec nouvel endpoint IAM
   * IAM: POST /api/authentication/sign-in ✅
   */
  async login(email: string, password: string):
    Promise<ILoginResponse & { user: User | null } & { organizations: Organization[] }> {
    // Toujours réinitialiser le flag admin lors d'un login classique
    // this.adminRole = false;
    const response = await this.loginService.login(email, password);
    this.loginAsUser(); // authenticated = true
    this.userAppStore.set(response.user);
    return response;
  }
  /**
   *
   *
   */

  async fetchUserOrganizations(userId?: string, currentUser?: User): Promise<Organization[] | null> {

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
  async register(
    email: string,
    password: string,
    confirmPassword: string,
  ): Promise<IRegisterResponse> {
    return this.registerService.register(email, password, confirmPassword);
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
  //   // console.log('👤 User after logout:', this.userAppStore()?.email || 'undefined');
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
