import { JsonPipe } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { Field, form } from '@angular/forms/signals';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { FieldError } from '@fe/signalform-utilities';
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
    JsonPipe,
    Field,
    FieldError,
    TranslateModule,
    JsonPipe
  ],
  templateUrl: './changepwd.html',
  styleUrl: './changepwd.scss',
})
export class Changepwd {
  private readonly router = inject(Router);

  protected readonly hideOldPassword = signal(true);
  protected readonly hideNewPassword = signal(true);
  protected readonly hideConfirmPassword = signal(true);
  protected readonly isSubmitting = signal(false);
  protected readonly changePasswordData = signal<ChangePasswordModel>({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  protected readonly changepwdForm = form(
    this.changePasswordData,
    changePasswordSchema
  );

  protected changePwd(): void {
    const formState = this.changepwdForm();
    if (!formState.valid()) {
      formState.markAsTouched();
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

  passwordStrength = computed(() => {
    const pwd = this.changepwdForm.newPassword().value();
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
    const pwd = this.changepwdForm.newPassword().value();
    const confirmPwd = this.changepwdForm.confirmPassword().value();
    return pwd.length > 0 && confirmPwd.length > 0 && pwd === confirmPwd;
  });
}

