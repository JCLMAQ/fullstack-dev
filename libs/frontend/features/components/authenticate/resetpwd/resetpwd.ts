import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { apply, Field, form, schema, SchemaPath } from '@angular/forms/signals';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatFormField, MatLabel, MatSuffix } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { IAM_AUTH_TOKEN } from '@fe/auth';
import { MatFormFieldStatusDirective } from '@fe/directives';
import { FieldError, PasswordMatch, PasswordStrength, passwordWithConfirmSchema } from '@fe/signalform-utilities';
import type { Environment } from '@fe/tokens';
import { ENVIRONMENT_TOKEN } from '@fe/tokens';
import { TranslateModule } from '@ngx-translate/core';

interface ResetPasswordCredentials {
  password: string;
  confirmPassword: string;
}

const resetPasswordSchema = schema<ResetPasswordCredentials>((path: SchemaPath<ResetPasswordCredentials>) => {
  apply(path, passwordWithConfirmSchema);
});


@Component({
  selector: 'lib-resetpwd',
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatFormField,
    Field,
    MatFormField,
    MatLabel,
    MatInput,
    MatButton,
    MatIcon,
    MatSuffix,
    MatProgressSpinner,
    FieldError,
    PasswordStrength,
    PasswordMatch,
    JsonPipe,
    TranslateModule,
    MatFormFieldStatusDirective

  ],
  templateUrl: './resetpwd.html',
  styleUrl: './resetpwd.scss',
})

export class Resetpwd implements OnInit {

  private  router: Router = inject(Router);
  private  route: ActivatedRoute = inject(ActivatedRoute);
  private  http: HttpClient = inject(HttpClient);
  private  snackBar: MatSnackBar = inject(MatSnackBar);
  private  environment: Environment = inject<Environment>(ENVIRONMENT_TOKEN);

  _authService = inject(IAM_AUTH_TOKEN);

  // Signal d'état UI
  hidePassword = signal(true);
  hideConfirmPassword = signal(true);
  isLoading = signal(false);
  token = signal<string | null>(null);
  tokenValid = signal(false);

  // Signal Form state
  protected readonly resetCredentials = signal<ResetPasswordCredentials>({
    password: '',
    confirmPassword: ''
  });

  // SChema de validation des mots de passe

  // Signal Form avec validation schema
  resetpwdForm = form<ResetPasswordCredentials>(this.resetCredentials, resetPasswordSchema);

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
      next: (response: { valid: boolean; message: string }) => {
        this.isLoading.set(false);
        if (response.valid) {
          this.tokenValid.set(true);
        } else {
          this.showError(response.message);
          setTimeout(() => this.router.navigate(['/auth/forgotpwd']), 3000);
        }
      },
      error: (error: unknown) => {
        this.isLoading.set(false);
        console.error('Error verifying token:', error);
        this.showError('Erreur lors de la vérification du token');
        setTimeout(() => this.router.navigate(['/auth/forgotpwd']), 3000);
      }
    });
  }

  async submitForm() {
    console.log('🎯 [submitForm] Fonction appelée');
    console.log('🎯 [submitForm] Form valid:', this.resetpwdForm().valid());
    console.log('🎯 [submitForm] Form errors:', this.resetpwdForm().errors());

    if (!this.resetpwdForm().valid()) {
      console.log('❌ [submitForm] Form is invalid');
      this.showError('Veuillez corriger les erreurs du formulaire');
      return;
    }

    try {
      const token = this.token();
      if (!token) {
        console.log('❌ [submitForm] No token available');
        this.showError('Token de réinitialisation manquant');
        return;
      }

      const { password, confirmPassword } = this.resetpwdForm().value();
      console.log('🔵 [submitForm] Starting password reset');
      console.log('  - Token:', token);
      console.log('  - Password length:', password.length);

      this.isLoading.set(true);
      const response = await this._authService.resetPasswordIamAuth(password, confirmPassword, token);
      this.isLoading.set(false);

      console.log('📦 [submitForm] Response received:', response);

      if (response.success) {
        this.showSuccess(response.message || 'Mot de passe réinitialisé avec succès');
        setTimeout(() => this.router.navigate(['/auth/login']), 3000);
      } else {
        this.showError(response.message || 'Une erreur s\'est produite lors de la réinitialisation du mot de passe');
      }

      console.log('🟢 [submitForm] Form is valid, proceeding to reset password');
    } catch (error) {
      this.isLoading.set(false);
      console.error('❌ [submitForm] Error during form submission:', error);
      this.showError('RESETPWD.resetFailed');
    }
  }

  resetForm() {
    // Réinitialise tous les champs du formulaire
    this.resetCredentials.set({
      password: '',
      confirmPassword: ''
    });
    this.resetpwdForm.password().reset();
    this.resetpwdForm.confirmPassword().reset();
  }

  cancel(): void {
    this.router.navigate(['/auth/login']);
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

