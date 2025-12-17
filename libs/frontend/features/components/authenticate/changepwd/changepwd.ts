import { JsonPipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Field, form } from '@angular/forms/signals';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { FieldError } from '@fe/signalform-utilities';
import { changePasswordSchema } from './changepwd-schema';

export type ChangePasswordForm = {
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
  ],
  templateUrl: './changepwd.html',
  styleUrl: './changepwd.scss',
})
export class Changepwd {
  private readonly router = inject(Router);

  protected readonly hideOldPassword = signal(true);
  protected readonly hideNewPassword = signal(true);
  protected readonly hideConfirmPassword = signal(true);

  protected readonly changePasswordData = signal<ChangePasswordForm>({
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

  protected backhome(): void {
    this.router.navigate(['pages/home']);
  }
}

