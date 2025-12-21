import { JsonPipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Field, form } from '@angular/forms/signals';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { FieldError, PasswordMatch, PasswordStrength } from '@fe/signalform-utilities';
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
}

