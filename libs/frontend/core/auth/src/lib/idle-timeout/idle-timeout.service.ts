import { Injectable, effect, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppStore } from '@fe/stores';
import { ENVIRONMENT_TOKEN, type Environment } from '@fe/tokens';
import { LogoutService } from '../iam-auth/services/logout/logout-service';
import { TokenStorageService } from '../iam-auth/services/token-storage/token-storage-service';
import { UserStorageService } from '../iam-auth/services/user-storage/user-storage-service';
import { IdleWarningDialog, IdleWarningDialogData } from '../idle-timeout/idle-warning-dialog/idle-warning-dialog';

// Valeurs par défaut (fallback)
const DEFAULT_INACTIVITY_LIMIT_MS = 15 * 60 * 1000; // 15 min
const DEFAULT_WARNING_DURATION_MS = 1 * 60 * 1000; // 1 min

@Injectable({ providedIn: 'root' })
export class IdleTimeoutService {
  private lastActivity = signal(Date.now());
  private warningDialogRef: any = null;
  private warningTimeout: any = null;
  private logoutTimeout: any = null;
  private isLoggedOut = false;

  private readonly tokenStorage = inject(TokenStorageService);
  private readonly userStorage = inject(UserStorageService);
  private readonly router = inject(Router);
  private readonly dialog = inject(MatDialog);
  private readonly logoutService = inject(LogoutService);
  private readonly appStore = inject(AppStore);
  private readonly environment = inject(ENVIRONMENT_TOKEN) as Environment;

  // Configurable via ENV
  private readonly enableTimeout: boolean;
  private readonly inactivityLimitMs: number;
  private readonly warningDurationMs: number;


  constructor() {
    // Lecture config via ENVIRONMENT_TOKEN (fourni par l'app)
    const env = this.environment;
    this.enableTimeout = env.SESSION_TIMEOUT_ENABLE === 1;
    this.inactivityLimitMs = Number(env.SESSION_TIMEOUT) > 0 ? Number(env.SESSION_TIMEOUT) * 1000 : DEFAULT_INACTIVITY_LIMIT_MS;
    this.warningDurationMs = Number(env.SESSION_TIMEOUT_REMINDER) > 0 ? Number(env.SESSION_TIMEOUT_REMINDER) * 1000 : DEFAULT_WARNING_DURATION_MS;

    if (this.enableTimeout) {
      this.initListeners();
      this.startTimers();

      // Observer les changements de token/utilisateur pour (re)démarrer le service
      // Ceci démarre les timers lorsque l'utilisateur se connecte après
      // l'instanciation du service (cas où App démarre avant le store).
      effect(() => {
        const token = this.tokenStorage.authToken();
        const user = this.userStorage.user();

        // Si un token et un utilisateur sont présents, (re)initialise le service
        if (token && user) {
          if (this.isLoggedOut) {
            console.log('🔄 Détection de reconnexion - Réinitialisation du service d\'inactivité');
          }
          this.reset();
        }
      });
    }
  }

  private initListeners() {
    const reset = () => this.resetTimers();
    window.addEventListener('mousemove', reset);
    window.addEventListener('keydown', reset);
    window.addEventListener('mousedown', reset);
    window.addEventListener('touchstart', reset);
    window.addEventListener('scroll', reset);
  }

  private resetTimers() {
    if (this.isLoggedOut || !this.userStorage.user()) return;
    this.lastActivity.set(Date.now());
    this.closeWarning();
    this.startTimers();
  }

  private startTimers() {
    if (this.isLoggedOut || !this.userStorage.user()) return;
    this.clearTimers();
    const timeToWarning = this.inactivityLimitMs - this.warningDurationMs;
    this.warningTimeout = setTimeout(() => this.showWarning(), timeToWarning);
    this.logoutTimeout = setTimeout(() => this.logout(), this.inactivityLimitMs);
  }

  private clearTimers() {
    if (this.warningTimeout) clearTimeout(this.warningTimeout);
    if (this.logoutTimeout) clearTimeout(this.logoutTimeout);
  }

  private showWarning() {
    if (this.isLoggedOut || !this.userStorage.user()) return;
    if (this.warningDialogRef) return;
    this.warningDialogRef = this.dialog.open(IdleWarningDialog, {
      disableClose: true,
      width: '420px',
      maxWidth: '90vw',
      data: { remaining: Math.floor(this.warningDurationMs / 1000) } satisfies IdleWarningDialogData,
    });
    this.warningDialogRef.afterClosed().subscribe((result: 'stay' | undefined) => {
      this.warningDialogRef = null;
      if (this.isLoggedOut) return; // Ne jamais relancer logout si déjà déconnecté
      if (result === 'stay') {
        this.resetTimers();
      } else {
        this.logout();
      }
    });
  }

  private closeWarning() {
    if (this.warningDialogRef) {
      this.warningDialogRef.close('stay');
      this.warningDialogRef = null;
    }
  }

  private async logout() {
    this.isLoggedOut = true;
    this.clearTimers();
    this.closeWarning();
    // Use AppStore.logout() to ensure in-memory store is reset as well
    try {
      // TS4111: use bracket access because logout is provided via store feature index signature
      const fn = (this.appStore as any)['logout'];
      if (typeof fn === 'function') {
        await fn.call(this.appStore);
      } else {
        throw new Error('AppStore.logout is not a function');
      }
    } catch (err) {
      // Fallback to logout service if AppStore.logout fails for any reason
      console.error('IdleTimeout: AppStore.logout failed, falling back to logoutService.logoutComplet', err);
      await this.logoutService.logoutComplet();
    }
    // Affiche un feedback UX après déconnexion automatique
    if (!this.warningDialogRef) {
      this.warningDialogRef = this.dialog.open(IdleWarningDialog, {
        disableClose: true,
        width: '420px',
        maxWidth: '90vw',
        data: { remaining: 0, loggedOut: true } satisfies IdleWarningDialogData,
      });
      this.warningDialogRef.afterClosed().subscribe(() => {
        this.warningDialogRef = null;
        this.router.navigate(['/auth/login']);
      });
    } else {
      // Si déjà ouvert, juste naviguer après fermeture
      this.warningDialogRef.afterClosed().subscribe(() => {
        this.warningDialogRef = null;
        this.router.navigate(['/auth/login']);
      });
    }
  }

  /**
   * Réinitialise le service après une reconnexion
   * À appeler après un login réussi pour réactiver la détection d'inactivité
   */
  public reset(): void {
    this.isLoggedOut = false;
    this.clearTimers();
    this.closeWarning();
    if (this.enableTimeout && this.userStorage.user()) {
      this.lastActivity.set(Date.now());
      this.startTimers();
    }
  }
}
