import { JsonPipe } from '@angular/common';
import { Component, effect, inject, OnDestroy, signal } from '@angular/core';
import { Field, form } from '@angular/forms/signals';
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
import { changePasswordSchema } from './changepwd-schema';

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
  private debounceTimer: ReturnType<typeof setTimeout> | null = null;

  protected readonly hideOldPassword = signal(true);
  protected readonly hideNewPassword = signal(true);
  protected readonly hideConfirmPassword = signal(true);
  protected readonly isSubmitting = signal(false);
  protected readonly isVerifyingOldPassword = signal(false);
  protected readonly oldPasswordError = signal<string | null>(null);
  protected readonly changePasswordData = signal<ChangePasswordModel>({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  protected readonly changepwdForm = form(
    this.changePasswordData,
    changePasswordSchema
  );

  constructor() {
    // Validation asynchrone de l'ancien mot de passe avec debounce
    effect(() => {
      const oldPassword = this.changepwdForm.oldPassword().value();
      const isTouched = this.changepwdForm.oldPassword().touched();
      const isDirty = this.changepwdForm.oldPassword().dirty();

      // Annuler le timer précédent
      if (this.debounceTimer) {
        clearTimeout(this.debounceTimer);
        this.debounceTimer = null;
      }

      // Réinitialiser l'erreur si le champ est vide
      if (!oldPassword) {
        this.oldPasswordError.set(null);
        return;
      }

      // Valider seulement si le champ a été touché/modifié et contient au moins 8 caractères
      if ((isTouched || isDirty) && oldPassword && oldPassword.length >= 8) {
        // Appliquer un debounce de 500ms
        this.debounceTimer = setTimeout(() => {
          this.verifyOldPasswordAsync(oldPassword);
        }, 500);
      }
    });
  }

  private async verifyOldPasswordAsync(oldPassword: string): Promise<void> {
    this.isVerifyingOldPassword.set(true);
    this.oldPasswordError.set(null);

    try {
      console.log('🔐 Verifying old password...');
      const userEmail: string = this.appStore['userEmail'](); // À remplacer par l'email réel

      const isValid = await this.changePwdService.verifyOldPassword(oldPassword, userEmail);

      if (!isValid) {
        this.oldPasswordError.set('signalFormError.invalidOldPassword');
      }
    } catch (error) {
      console.error('Error verifying old password:', error);
      this.oldPasswordError.set('signalFormError.verificationError');
    } finally {
      this.isVerifyingOldPassword.set(false);
    }
  }

  protected changePwd(): void {
    const formState = this.changepwdForm();
    if (!formState.valid()) {
      formState.markAsTouched();
      return;
    }

    // Vérifier si une validation async est en cours ou s'il y a une erreur
    if (this.isVerifyingOldPassword()) {
      console.log('Validation en cours, veuillez patienter...');
      return;
    }

    if (this.oldPasswordError()) {
      console.log('L\'ancien mot de passe n\'est pas valide');
      return;
    }

    const formValue = formState.value();
    console.log('Change password:', formValue);
    // TODO: Implement password change logic
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

