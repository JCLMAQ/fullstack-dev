import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { apply, Field, form, required, schema } from '@angular/forms/signals';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatFormField, MatLabel, MatSuffix } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { FieldError, passwordWithConfirmSchema } from '@fe/signalform-utilities';
import type { Environment } from '@fe/tokens';
import { ENVIRONMENT_TOKEN } from '@fe/tokens';
import { TranslateModule } from '@ngx-translate/core';


interface ResetPasswordResponse {
  success: boolean;
  message: string;
}

interface ResetPasswordCredentials {
  password: string;
  confirmPassword: string;
}

const resetPasswordSchema = schema<ResetPasswordCredentials>((path) => {
  required(path.password, { message: 'RESETPWD.passwordRequired' });
  required(path.confirmPassword, { message: 'RESETPWD.confirmPasswordRequired' });
  apply(path, passwordWithConfirmSchema);
});


@Component({
  selector: 'lib-resetpwd',
  imports: [
    MatCard,
    MatCardContent,
    Field,
    MatFormField,
    MatLabel,
    MatInput,
    MatButton,
    MatIcon,
    MatSuffix,
    MatProgressSpinner,
    FieldError,
    JsonPipe,
    TranslateModule
  ],
  templateUrl: './resetpwd.html',
  styleUrl: './resetpwd.scss',
})

export class Resetpwd implements OnInit {

  private readonly router: Router = inject(Router);
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  private readonly http: HttpClient = inject(HttpClient);
  private readonly snackBar: MatSnackBar = inject(MatSnackBar);
  private readonly environment: Environment = inject<Environment>(ENVIRONMENT_TOKEN);

  protected readonly hidePassword = signal(true);
  protected readonly hideConfirmPassword = signal(true);
  protected readonly isLoading = signal(false);
  protected readonly token = signal<string | null>(null);
  protected readonly tokenValid = signal(false);

  // Signal Form state
  protected readonly resetCredentials = signal<ResetPasswordCredentials>({
    password: '',
    confirmPassword: ''
  });

  // SChema de validation des mots de passe

  // Signal Form avec validation schema
  protected readonly resetpwdForm = form(this.resetCredentials, resetPasswordSchema);


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

  resetPwd(): void {
    if (this.resetpwdForm().valid() && this.token()) {
      this.isLoading.set(true);
      const apiPrefix = this.environment.API_BACKEND_PREFIX?.replace(/^\//, '').replace(/\/$/, '');
      const apiUrl = `${apiPrefix}/authentication/reset-password/${this.token()}`;

      const formData = this.resetCredentials();
      const payload = {
        newPassword: formData.password,
        verifyPassword: formData.confirmPassword
      };

      this.http.post<ResetPasswordResponse>(apiUrl, payload).subscribe({
        next: (response: ResetPasswordResponse) => {
          this.isLoading.set(false);
          if (response.success) {
            this.showSuccess(response.message || 'Mot de passe réinitialisé avec succès');
            setTimeout(() => this.router.navigate(['/auth/login']), 2000);
          } else {
            this.showError(response.message || 'Erreur lors de la réinitialisation');
          }
        },
        error: (error: unknown) => {
          this.isLoading.set(false);
          console.error('Error resetting password:', error);
          this.showError('Erreur lors de la réinitialisation du mot de passe');
        }
      });
    }
  }

  resetForm() {
    // Réinitialise tous les champs du formulaire
    this.resetpwdForm.password().reset();
    this.resetpwdForm.confirmPassword().reset();
  }

  cancel(): void {
    this.router.navigate(['/auth/login']);
  }

  backhome(): void {
    this.router.navigate(['/auth/login']);
  }

  // Password strength (indicateur visuel de robustesse du mot de passe  )
  passwordStrength = computed(() => {
    const pwd = this.resetpwdForm.password().value();
    if (!pwd) return { score: 0, label: 'Very Weak', color: 'red' };
    let strength = -1;
    if (pwd.length >= 8) strength++;
    if (/[a-z]/.test(pwd)) strength++; // Minuscule
    if (/[A-Z]/.test(pwd)) strength++; // Majuscule
    if (/[0-9]/.test(pwd)) strength++; // Chiffre
    if (/[^A-Za-z0-9]/.test(pwd)) strength++; // Caractère spécial
    if (strength > 4  ) strength = 4;
    return {
      score: strength+1,
      label: ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong'][strength] || 'Very Weak',
      color: ['red', 'orange', 'yellow', 'lightgreen', 'green'][strength] || 'red'
    };
  });

  // Vérification de la correspondance des mots de passe pour l'indicateur visuel
  passwordsMatch = computed(() => {
    const pwd = this.resetpwdForm.password().value();
    const confirmPwd = this.resetpwdForm.confirmPassword().value();
    return pwd.length > 0 && confirmPwd.length > 0 && pwd === confirmPwd;
  });

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

