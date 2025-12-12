
import { JsonPipe } from '@angular/common';
import { Component, computed, effect, inject, signal } from '@angular/core';
import { apply, email as emailValidator, Field, form, required, schema } from '@angular/forms/signals';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { Router } from '@angular/router';
import { RegisterService } from '@fe/auth';
// import { IamAuth } from '@fe/auth'
import { FieldError, PasswordisDifferentFromEmail, passwordWithConfirmSchema } from '@fe/signalform-utilities';
import { TranslateModule } from '@ngx-translate/core';


// Register Credentials model
export interface RegisterFormModel {
  email: string;
  password: string;
  confirmPassword: string;
}

// Validation personnalisée pour la correspondance des mots de passe
const registerSchema = schema<RegisterFormModel>((path) => {
  required(path.email, { message: 'REGISTER.emailRequired' });
  emailValidator(path.email, { message: 'REGISTER.emailInvalid' });
  // Validation custom pour la correspondance des mots de passe
  // passwordWithConfirmSchema = schema<{ password: string; confirmPassword: string }
  apply(path, passwordWithConfirmSchema );
  apply(path, PasswordisDifferentFromEmail );
  // validateAsync(path.email, {
  //   params: (email: ChildFieldContext<string>) => email.value(),
  //   factory: (params: Signal<string | undefined>) =>
  //     resource({
  //       // 👇 Params contains the `email` signal and is used to trigger the resource
  //       params,
  //       // the loader makes an HTTP call to check if the email is already registered
  //       loader: async (loaderParams: ResourceLoaderParams<string | undefined>) =>
  //         // returns true if the email is already registered
  //         await this.registerService.isRegistered(loaderParams.params)
  //     }),
  //     // 👇 This is called with the result of the resource
  //     onSuccess: (response: { isRegistered: boolean }) =>
  //       response.isRegistered
  //         ? {
  //             kind: 'email-already-registered',
  //             message: 'Email is already registered'
  //           }
  //         : undefined,
  //     // 👇 This is called if the resource fails
  //     onError: () =>
  //       ({
  //         kind: 'email-check-failed',
  //         message: 'Could not verify if the email is already registered'
  //       })
  // });

});

@Component({
  selector: 'lib-register',
  imports: [
    MatFormFieldModule,
    MatInput,
    MatIcon,
    MatButtonModule,
    Field,
    FieldError,
    MatCardModule,
    TranslateModule,
    JsonPipe
  ],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register {

  private registerService = inject(RegisterService);
  private router = inject(Router);

  // Signal d'état UI
  hidePassword = signal(true);
  isSubmitting = signal(false);

  // Signal Forms: état du modèle
  registerCredentials = signal<RegisterFormModel>({
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Signal Form avec schéma de validation
  registerForm = form(this.registerCredentials, registerSchema);

  // Password strength (indicateur visuel de robustesse du mot de passe  )
  passwordStrength = computed(() => {
    const pwd = this.registerForm.password().value();
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
    const pwd = this.registerForm.password().value();
    const confirmPwd = this.registerForm.confirmPassword().value();
    return pwd.length > 0 && confirmPwd.length > 0 && pwd === confirmPwd;
  });

  // Résumé d'état du formulaire
  formSummary = computed(() => ({
    isValid: this.registerForm().valid(),
    hasErrors: this.registerForm().invalid(),
    passwordMatch: this.passwordsMatch(),
    emailValid: this.registerForm.email().valid(),
    passwordStrong: this.passwordStrength().score >= 3,
    canSubmit: this.registerForm().valid()
  }));

  // Debug info (dev only)
  debugInfo = computed(() => ({
    formStatus: this.registerForm().valid() ? 'VALID' : 'INVALID',
    formValue: this.registerCredentials(),
    emailValue: this.registerForm.email().value(),
    passwordValue: (this.registerForm.password().value() || '').replace(/./g, '*'),
    confirmPasswordValue: (this.registerForm.confirmPassword().value() || '').replace(/./g, '*'),
    passwordStrength: this.passwordStrength(),
    isValid: this.registerForm().valid(),
    errors: {
      email: this.registerForm.email().errors(),
      password: this.registerForm.password().errors(),
      confirmPassword: this.registerForm.confirmPassword().errors()
    }
  }));

  constructor() {
    this.loadDraft();
    // Sauvegarde automatique du brouillon quand l'email change
    effect(() => {
      const email = this.registerForm.email().value();
      if (email.length > 0 && this.registerForm.email().valid()) {
        this.saveDraft();
      }
    });
  }

  async register() {
    if (!this.registerForm().valid()) {
      this.registerForm.email().markAsTouched();
      this.registerForm.password().markAsTouched();
      this.registerForm.confirmPassword().markAsTouched();
      return;
    }
    this.isSubmitting.set(true);
    try {
      const { email, password, confirmPassword } = this.registerCredentials();
      if (email && password && confirmPassword) {
        const result = await this.registerService.register(email, password, confirmPassword);
        localStorage.removeItem('register-draft');
      }
    } catch (error) {
      console.error('Registration failed:', error);
    } finally {
      this.isSubmitting.set(false);
    }
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
