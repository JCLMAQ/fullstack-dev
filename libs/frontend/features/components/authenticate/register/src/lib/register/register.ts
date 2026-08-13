
import { JsonPipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, computed, effect, inject, resource, signal, untracked } from '@angular/core';
import { apply, ChildFieldContext, debounce, email as emailValidator, form, FormField, required, schema, submit, validateAsync } from '@angular/forms/signals';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
// import { IamAuth } from '@fe/auth'
import { IAM_AUTH_TOKEN } from '@fe/auth';
import { FieldError, passwordDifferentFromEmail, PasswordMatch, PasswordStrength, passwordWithConfirmSchema } from '@fe/signalform-utilities';
import { AppStore } from '@fe/stores';
import { TranslatePipe } from '@ngx-translate/core';

// Register Credentials model
export interface RegisterFormModel {
  email: string;
  password: string;
  confirmPassword: string;
}

@Component({
  selector: 'lib-register',
  imports: [
    MatFormFieldModule,
    MatInput,
    MatIcon,
    MatButtonModule,
    FormField,
    FieldError,
    PasswordStrength,
    PasswordMatch,
    MatCardModule,
    TranslatePipe,
    JsonPipe,
    // MatFormFieldStatusDirective
  ],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register {

  _authService = inject(IAM_AUTH_TOKEN);
  _appStore = inject(AppStore);
  // private registerService = inject(RegisterService);
  private router = inject(Router);
  private snackBar = inject(MatSnackBar);

  // Signal d'état UI
  hidePassword = signal(true);
  hideConfirmPassword = signal(true);
  isSubmitting = signal(false);

  // Signal Forms: état du modèle
  registerCredentials = signal<RegisterFormModel>({
    email: '',
    password: '',
    confirmPassword: ''
  });

  private emailForCheck = signal('');

  private emailCheckResource = resource({
    loader: async ({ abortSignal }) => {
      const email = this.emailForCheck();

      if (!email || !email.includes('@')) {
        return false;
      }

      if (abortSignal?.aborted) {
        return false;
      }

      try {
        return await this._authService.emailCheck(email);
      } catch (error) {
        if (abortSignal?.aborted) {
          return false;
        }
        throw error;
      }
    }
  });

  // Schéma de validation avec accès au service
  private registerSchema = schema<RegisterFormModel>((path) => {
    required(path.email, { message: 'REGISTER.emailRequired' });
    emailValidator(path.email, { message: 'REGISTER.emailInvalid' });

    // Validation: le mot de passe ne doit pas être identique à l'email
    apply(path, passwordDifferentFromEmail);

    apply(path, passwordWithConfirmSchema);

    debounce(path.email, 500); // 0.5 seconde de debounce avant validation asynchrone

    validateAsync(path.email, {
      params: (email: ChildFieldContext<string>) => email.value(),
      factory: () => this.emailCheckResource,
        onSuccess: (isRegistered: boolean) =>
          isRegistered
            ? {
                kind: 'email-already-registered',
                message: 'REGISTER.emailAlreadyRegistered'
              }
            : undefined,
        onError: (error: unknown) => {
          if (error instanceof DOMException && error.name === 'AbortError') {
            return undefined;
          }

          if (error instanceof HttpErrorResponse && error.status === 0) {
            const progressEvent = error.error as ProgressEvent | null;
            if (progressEvent?.type === 'abort') {
              return undefined;
            }
          }

          return {
            kind: 'email-check-failed',
            message: 'REGISTER.emailCheckFailed'
          };
        }
    });
  });

  // Signal Form avec schéma de validation
  // registerForm = form(this.registerCredentials, this.registerSchema);
  registerForm = form<RegisterFormModel>(this.registerCredentials, this.registerSchema);

  // Résumé d'état du formulaire
  formSummary = computed(() => {
    const form = this.registerForm();
    return {
      isValid: untracked(() => form.valid()),
      hasErrors: untracked(() => form.invalid()),
      emailValid: untracked(() => this.registerForm.email().valid()),
      canSubmit: untracked(() => form.valid())
    };
  });

  // Informations de débogage du formulaire
  debugInfo = computed(() => ({
    formStatus: this.registerForm().valid() ? 'VALID' : 'INVALID',
    formValue: this.registerCredentials(),
    emailValue: this.registerForm.email().value(),
    passwordValue: (this.registerForm.password().value() || '').replace(/./g, '*'),
    confirmPasswordValue: (this.registerForm.confirmPassword().value() || '').replace(/./g, '*'),
    isValid: this.registerForm().valid(),
    errors: {
      email: this.registerForm.email().errors(),
      password: this.registerForm.password().errors(),
      confirmPassword: this.registerForm.confirmPassword().errors()
    }
  }));

  constructor() {
    this.loadDraft();

    effect(() => {
      const email = this.registerForm.email().value();
      this.emailForCheck.set(email);
      if (email && email.includes('@')) {
        this.emailCheckResource.reload();
      }
    });

    // Sauvegarde automatique du brouillon quand l'email change
    effect(() => {
      const email = this.registerForm.email().value();
      if (email.length > 0) {
        untracked(() => this.saveDraft());
      }
    });
  }

submitForm() { // Register the user
  console.log('🎯 [submitForm] Fonction appelée');
  submit(this.registerForm, async (form) => {
    console.log('🔵 [submitForm] Inside submit callback');
    try {
      // The form() gives you the latest value
      const { email, password, confirmPassword } = form().value();

      // Détection de la langue du navigateur avec fallback 'en'
      const browserLang = typeof navigator !== 'undefined' ? navigator.language?.split('-')[0] : undefined;
      const supportedLangs = ['en', 'fr', 'de', 'nl'];
      const languageCode = browserLang && supportedLangs.includes(browserLang) ? browserLang : 'en';

      console.log('📤 [Submit] Envoi de la requête d\'inscription pour:', email, 'avec langue:', languageCode);

      const result = await this._authService.registerIamAuth(email, password, confirmPassword, languageCode);

      console.log('📤 [Submit] Inscription réussie pour:', email, 'Result:', result);

      localStorage.removeItem('register-draft');

      // Afficher le message de succès
      this.snackBar.open(
        result.message || 'Inscription réussie ! Vous pouvez maintenant vous connecter.',
        'Fermer',
        {
          duration: 5000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
        }
      );

      // Rediriger vers la page de login après un court délai
      setTimeout(() => {
        this.router.navigate(['/auth/login']);
      }, 1500);

      console.log('✅ [submitForm] Retour undefined (succès)');
      return undefined;
    } catch (serverError) {
        console.error('❌ [Submit] Échec de l\'inscription:', serverError);
        // On failure, return a ValidationError to be displayed on the form
        return {
          kind: 'server_error',
          message: 'REGISTER.registrationFailed',
          field: form.email
        };
    }
  });
  console.log('🎯 [submitForm] Après submit()');
}

  login() {
    this.router.navigate(['auth/login']);
  }

  cancel() {
    this.router.navigate(['/pages/home']);
  }

  resetForm() {
    // Réinitialise tous les champs du formulaire d'un coup
    this.registerCredentials.set({
      email: '',
      password: '',
      confirmPassword: ''
    });
    this.registerForm.email().reset();
    this.registerForm.password().reset();
    this.registerForm.confirmPassword().reset();
    localStorage.removeItem('register-draft');
  }

  // Sauvegarde automatique du brouillon avec Signal Forms
  private saveDraft() {
    const email = this.registerForm.email().value();
    if (email.length > 0) {
      const draft = {
        email,
        timestamp: new Date().toISOString()
      };
      localStorage.setItem('register-draft', JSON.stringify(draft));
    }
  }

  // Charger le brouillon sauvegardé
  private loadDraft() {
    const saved = localStorage.getItem('register-draft');
    if (saved) {
      try {
        const draft = JSON.parse(saved);
        if (draft.email) {
          this.registerCredentials.update(u => ({ ...u, email: draft.email }));
        }
      } catch (error) {
        console.warn('Could not load draft:', error);
      }
    }
  }
}
