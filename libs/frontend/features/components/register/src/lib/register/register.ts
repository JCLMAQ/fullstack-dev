
import { JsonPipe } from '@angular/common';
import { Component, computed, effect, inject, resource, signal, untracked } from '@angular/core';
import { apply, customError, debounce, email as emailValidator, Field, form, required, schema, validate } from '@angular/forms/signals';
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

  // Email debounced signal pour le resource
  private emailForCheck = signal('');

  // Resource créé dans le contexte d'injection
  private emailCheckResource = resource({
    loader: async ({ abortSignal }) => {
      const email = this.emailForCheck();
      console.log('🔄 [EmailCheck Resource] Loader appelé avec email:', email);

      if (!email || !email.includes('@')) {
        console.log('⏭️  [EmailCheck Resource] Email invalide ou vide, skip validation');
        return false;
      }

      // Vérifier si la requête a été annulée
      if (abortSignal?.aborted) {
        console.log('🚫 [EmailCheck Resource] Requête annulée');
        return false;
      }

      try {
        console.log('🌐 [EmailCheck Resource] Appel API emailCheck...');
        const exists = await this.registerService.emailCheck(email);
        console.log('✅ [EmailCheck Resource] Résultat API:', exists ? 'Email déjà utilisé' : 'Email disponible');
        return exists;
      } catch (error) {
        // Ignorer les erreurs d'annulation
        if (abortSignal?.aborted) {
          console.log('🚫 [EmailCheck Resource] Requête annulée pendant l\'appel');
          return false;
        }
        console.error('❌ [EmailCheck Resource] Erreur:', error);
        throw error;
      }
    }
  });

  // Schéma de validation avec accès au service
  private registerSchema = schema<RegisterFormModel>((path) => {
    required(path.email, { message: 'REGISTER.emailRequired' });
    emailValidator(path.email, { message: 'REGISTER.emailInvalid' });
    apply(path, passwordWithConfirmSchema);
    apply(path, PasswordisDifferentFromEmail);
    debounce(path.email, 500); // 0.5 seconde de debounce avant validation asynchrone
// Validation synchrone utilisant le resource créé plus haut
    validate(path.email, (field) => {
      const exists = this.emailCheckResource.value();
      const error = this.emailCheckResource.error();
      const pending = this.emailCheckResource.isLoading();

      console.log('🔍 [Email Validation] État:', {
        email: field.value(),
        exists,
        error: error ? 'Erreur API' : null,
        pending
      });

      if (pending) {
        console.log('⏳ [Email Validation] Validation en cours...');
        // Validation en cours, pas d'erreur à afficher
        return null;
      }

      if (error) {
        console.error('❌ [Email Validation] Erreur lors de la vérification:', error);
        return customError({
          kind: 'email-check-failed',
          message: 'REGISTER.emailCheckFailed'
        });
      }

      if (exists) {
        console.warn('⚠️  [Email Validation] Email déjà enregistré');
        return customError({
          kind: 'email-already-registered',
          message: 'REGISTER.emailAlreadyRegistered'
        });
      }

      console.log('✅ [Email Validation] Email disponible');
      return null;
    });

  });

  // Signal Form avec schéma de validation
  // registerForm = form(this.registerCredentials, this.registerSchema);
  registerForm = form<RegisterFormModel>(this.registerCredentials, this.registerSchema);

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
  formSummary = computed(() => {
    const form = this.registerForm();
    return {
      isValid: untracked(() => form.valid()),
      hasErrors: untracked(() => form.invalid()),
      passwordMatch: this.passwordsMatch(),
      emailValid: untracked(() => this.registerForm.email().valid()),
      passwordStrong: this.passwordStrength().score >= 3,
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

    // Met à jour emailForCheck quand l'email change
    effect(() => {
      const email = this.registerForm.email().value();
      console.log('📝 [Effect] Email modifié:', email);
      this.emailForCheck.set(email);
      console.log('🔄 [Effect] emailForCheck mis à jour, trigger du resource');
    });

    // Déclenche explicitement le rechargement du resource quand emailForCheck change
    effect(() => {
      const email = this.emailForCheck();
      if (email && email.includes('@')) {
        console.log('🔁 [Effect] Reload resource pour email:', email);
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

  async register() {
    console.log('🚀 [Submit] Tentative de soumission du formulaire');
    console.log('📋 [Submit] État du formulaire:', {
      valid: this.registerForm().valid(),
      emailValid: this.registerForm.email().valid(),
      emailErrors: this.registerForm.email().errors(),
      passwordValid: this.registerForm.password().valid(),
      confirmPasswordValid: this.registerForm.confirmPassword().valid()
    });

    if (!this.registerForm().valid()) {
      console.warn('⚠️  [Submit] Formulaire invalide, marquage des champs');
      this.registerForm.email().markAsTouched();
      this.registerForm.password().markAsTouched();
      this.registerForm.confirmPassword().markAsTouched();
      return;
    }

    this.isSubmitting.set(true);
    console.log('⏳ [Submit] Soumission en cours...');

    try {
      const { email, password, confirmPassword } = this.registerCredentials();
      console.log('📤 [Submit] Envoi de la requête d\'inscription pour:', email);

      if (email && password && confirmPassword) {
        const result = await this.registerService.register(email, password, confirmPassword);
        console.log('✅ [Submit] Inscription réussie:', result);
        localStorage.removeItem('register-draft');
      }
    } catch (error) {
      console.error('❌ [Submit] Échec de l\'inscription:', error);
    } finally {
      this.isSubmitting.set(false);
      console.log('🏁 [Submit] Fin de la soumission');
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
