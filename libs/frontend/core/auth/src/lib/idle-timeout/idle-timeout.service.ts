import { Injectable, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppStore } from '@fe/stores';
import { ENVIRONMENT_DATA } from 'apps/frontend/app-jcm/environments/environment';
import { LogoutService } from '../iam-auth/services/logout/logout-service';
import { TokenStorageService } from '../iam-auth/services/token-storage/token-storage-service';
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
  private readonly router = inject(Router);
  private readonly dialog = inject(MatDialog);
  private readonly logoutService = inject(LogoutService);
  private readonly appStore = inject(AppStore);

  // Configurable via ENV
  private readonly enableTimeout: boolean;
  private readonly inactivityLimitMs: number;
  private readonly warningDurationMs: number;


  constructor() {
    // Lecture config depuis ENVIRONMENT_DATA
    const env = ENVIRONMENT_DATA;
    this.enableTimeout =  env.SESSION_TIMEOUT_ENABLE === 1;
    this.inactivityLimitMs = Number(env.SESSION_TIMEOUT) > 0 ? Number(env.SESSION_TIMEOUT) * 1000 : DEFAULT_INACTIVITY_LIMIT_MS;
    this.warningDurationMs = Number(env.SESSION_TIMEOUT_REMINDER) > 0 ? Number(env.SESSION_TIMEOUT_REMINDER) * 1000 : DEFAULT_WARNING_DURATION_MS;

    if (this.enableTimeout) {
      this.initListeners();
      this.startTimers();
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
    if (this.isLoggedOut || !this.appStore.user()) return;
    this.lastActivity.set(Date.now());
    this.closeWarning();
    this.startTimers();
  }

  private startTimers() {
    if (this.isLoggedOut || !this.appStore.user()) return;
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
    if (this.isLoggedOut || !this.appStore.user()) return;
    if (this.warningDialogRef) return;
    this.warningDialogRef = this.dialog.open(IdleWarningDialog, {
      disableClose: true,
      width: '420px',
      maxWidth: '90vw',
      data: { remaining: Math.floor(this.warningDurationMs / 1000) } satisfies IdleWarningDialogData,
    });
    this.warningDialogRef.afterClosed().subscribe((result: 'stay' | undefined) => {
      this.warningDialogRef = null;
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
    await this.appStore['logout']();
    // Affiche un feedback UX après déconnexion automatique
    this.dialog.open(IdleWarningDialog, {
      disableClose: true,
      width: '420px',
      maxWidth: '90vw',
      data: { remaining: 0, loggedOut: true } satisfies IdleWarningDialogData,
    });
    // Correction: redirige vers /auth/login
    this.router.navigate(['/auth/login']);
  }
}
