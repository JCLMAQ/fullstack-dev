import { JsonPipe } from '@angular/common';
import { Component, computed, inject, resource, ResourceLoaderParams, Signal, signal } from '@angular/core';
import { ChildFieldContext, customError, Field, form, minLength, pattern, required, schema, validate, validateAsync } from '@angular/forms/signals';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { ChangePwdService } from '@fe/auth';
import { FieldError, PasswordMatch, PasswordStrength } from '@fe/signalform-utilities';
import { AppStore } from '@fe/stores';
import { TranslateModule } from '@ngx-translate/core';

export type ChangePasswordModel = {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
};

@Component({
  selector: 'lib-changepwd',
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    JsonPipe,
    Field,
    FieldError,
    PasswordStrength,
    PasswordMatch,
    TranslateModule,
    JsonPipe
  ],
  templateUrl: './changepwd.html',
  styleUrl: './changepwd.scss',
})
export class Changepwd {
  private readonly router = inject(Router);
  private readonly changePwdService = inject(ChangePwdService);
  private readonly appStore = inject(AppStore);

  protected readonly hideOldPassword = signal(true);
  protected readonly hideNewPassword = signal(true);
  protected readonly hideConfirmPassword = signal(true);
  protected readonly isSubmitting = signal(false);

  protected readonly changePasswordData = signal<ChangePasswordModel>({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  // Schéma avec validation asynchrone de l'ancien mot de passe
  private readonly extendedSchema = schema<ChangePasswordModel>((path) => [
    // Validation de l'ancien mot de passe
    required(path.oldPassword, { message: 'signalFormError.passwordRequired' }),
    minLength(path.oldPassword, 8, {
      message: 'signalFormError.passwordMinLength',
    }),

    // Validation du nouveau mot de passe
    required(path.newPassword, { message: 'signalFormError.passwordRequired' }),
    minLength(path.newPassword, 8, {
      message: 'signalFormError.passwordMinLength',
    }),
    pattern(
      path.newPassword,
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      {
        message: 'signalFormError.passwordPattern',
      }
    ),

    // Validation du mot de passe de confirmation
    required(path.confirmPassword, {
      message: 'signalFormError.confirmPasswordRequired',
    }),

    // Validation que les mots de passe correspondent
    validate(path, ({ valueOf }) => {
      const newPassword = valueOf(path.newPassword);
      const confirmPassword = valueOf(path.confirmPassword);

      if (
        newPassword &&
        confirmPassword &&
        newPassword !== confirmPassword
      ) {
        return customError({
          kind: 'passwordsMismatch',
          message: 'signalFormError.passwordMismatch',
        });
      }
      return null;
    }),

    // Validation que le nouveau mot de passe est différent de l'ancien
    validate(path, ({ valueOf }) => {
      const oldPassword = valueOf(path.oldPassword);
      const newPassword = valueOf(path.newPassword);

      if (oldPassword && newPassword && oldPassword === newPassword) {
        return customError({
          kind: 'samePassword',
          message: 'signalFormError.newPasswordMustBeDifferent',
        });
      }
      return null;
    }),

    // Ajouter la validation asynchrone pour oldPassword
    validateAsync(path.oldPassword, {
      params: (oldPassword: ChildFieldContext<string>) => oldPassword.value(),
      factory: (params: Signal<string | undefined>) =>
        resource({
          params,
          loader: async (loaderParams: ResourceLoaderParams<string | undefined>) => {
            const password = loaderParams.params;
            const user = this.appStore.user();
            const email = user && typeof user === 'object' && 'email' in user
              ? (user as { email?: string }).email
              : undefined;

            if (!password || password.length < 8 || !email) {
              return null;
            }

            return await (this.changePwdService as ChangePwdService).verifyOldPassword(password, email);
          }
        }),
      onSuccess: (isValid: boolean | null) =>
        (isValid === null || isValid)
          ? undefined
          : customError({
              kind: 'invalid-old-password',
              message: 'signalFormError.invalidOldPassword'
            }),
      onError: () =>
        customError({
          kind: 'verification-error',
          message: 'signalFormError.verificationError'
        })
    }),
  ]);

  // Schéma étendu avec validation asynchrone
  protected readonly changepwdForm = form(
    this.changePasswordData,
    this.extendedSchema
  );

  // État de validation calculé
  protected readonly isValidating = computed(() =>
    this.changepwdForm.oldPassword().pending()
  );

  protected async changePwd(): Promise<void> {
    const formState = this.changepwdForm();
    if (!formState.valid()) {
      formState.markAsTouched();
      return;
    }

    // Vérifier si une validation async est en cours
    if (this.changepwdForm.oldPassword().pending()) {
      console.log('⏳ Validation en cours, veuillez patienter...');
      return;
    }

    const formValue = formState.value();
    console.log('✅ Change password:', formValue);
    // TODO: Implement password change logic
      await (this.changePwdService as ChangePwdService).changePassword(
        formValue.oldPassword,
        formValue.newPassword,
        formValue.confirmPassword
      );
      // this.resetForm();
      // this.backhome() ;
  }

  cancel(): void {
    this.backhome();
  }

  resetForm(): void {
    this.changePasswordData.set({
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    })
    this.changepwdForm().reset();
  }
  protected backhome(): void {
    this.router.navigate(['pages/home']);
  }
}

