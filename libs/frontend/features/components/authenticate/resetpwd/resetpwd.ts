
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { apply, Field, form } from '@angular/forms/signals';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { passwordWithConfirmSchema } from '@fe/signalform-utilities';
import type { Environment } from '@fe/tokens';
import { ENVIRONMENT_TOKEN } from '@fe/tokens';
interface ResetPasswordResponse {
  success: boolean;
  message: string;
}

interface ResetPasswordForm {
  password: string;
  confirmPassword: string;
}

@Component({
  selector: 'lib-resetpwd',
  imports: [
    MatCardModule,
    Field,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './resetpwd.html',
  styleUrl: './resetpwd.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class Resetpwd implements OnInit {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly http = inject(HttpClient);
  private readonly snackBar = inject(MatSnackBar);
  private readonly environment = inject<Environment>(ENVIRONMENT_TOKEN);

  protected readonly hidePassword = signal(true);
  protected readonly hideConfirmPassword = signal(true);
  protected readonly isLoading = signal(false);
  protected readonly token = signal<string | null>(null);
  protected readonly tokenValid = signal(false);

  // Signal Form state
  protected readonly formState = signal<ResetPasswordForm>({
    password: '',
    confirmPassword: ''
  });

  // Signal Form avec validation schema
  protected readonly resetpwdForm = form(this.formState, (path) => [
    apply(path, passwordWithConfirmSchema)
  ]);

  ngOnInit(): void {
    // Récupérer le token depuis les query params
    this.route.queryParams.subscribe(params => {
      const token = params['token'];
      if (token) {
        this.token.set(token);
        this.verifyToken(token);
      } else {
        this.showError('Token de réinitialisation manquant');
        this.router.navigate(['/auth/login']);
      }
    });
  }

  private verifyToken(token: string): void {
    this.isLoading.set(true);
    const apiPrefix = this.environment.API_BACKEND_PREFIX?.replace(/^\//, '').replace(/\/$/, '');
    const apiUrl = `${apiPrefix}/authentication/reset-password/${token}`;

    this.http.get<{ valid: boolean; message: string }>(apiUrl).subscribe({
      next: (response) => {
        this.isLoading.set(false);
        if (response.valid) {
          this.tokenValid.set(true);
        } else {
          this.showError(response.message);
          setTimeout(() => this.router.navigate(['/auth/forgotpwd']), 3000);
        }
      },
      error: (error) => {
        this.isLoading.set(false);
        console.error('Error verifying token:', error);
        this.showError('Erreur lors de la vérification du token');
        setTimeout(() => this.router.navigate(['/auth/forgotpwd']), 3000);
      }
    });
  }

  resetPwd(): void {
    if (this.resetpwdForm().valid() && this.token()) {
      this.isLoading.set(true);
      const apiPrefix = this.environment.API_BACKEND_PREFIX?.replace(/^\//, '').replace(/\/$/, '');
      const apiUrl = `${apiPrefix}/authentication/reset-password/${this.token()}`;

      const formData = this.formState();
      const payload = {
        newPassword: formData.password,
        verifyPassword: formData.confirmPassword
      };

      this.http.post<ResetPasswordResponse>(apiUrl, payload).subscribe({
        next: (response) => {
          this.isLoading.set(false);
          if (response.success) {
            this.showSuccess(response.message || 'Mot de passe réinitialisé avec succès');
            setTimeout(() => this.router.navigate(['/auth/login']), 2000);
          } else {
            this.showError(response.message || 'Erreur lors de la réinitialisation');
          }
        },
        error: (error) => {
          this.isLoading.set(false);
          console.error('Error resetting password:', error);
          this.showError('Erreur lors de la réinitialisation du mot de passe');
        }
      });
    }
  }

  backhome(): void {
    this.router.navigate(['/auth/login']);
  }

  private showError(message: string): void {
    this.snackBar.open(message, 'Fermer', {
      duration: 5000,
      panelClass: ['error-snackbar']
    });
  }

  private showSuccess(message: string): void {
    this.snackBar.open(message, 'Fermer', {
      duration: 3000,
      panelClass: ['success-snackbar']
    });
  }
}

