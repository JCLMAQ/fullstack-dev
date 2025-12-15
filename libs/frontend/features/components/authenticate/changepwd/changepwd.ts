import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from 'express';

@Component({
  selector: 'lib-changepwd',
  imports: [
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    JsonPipe,
    // OnlyOneErrorPipe
  ],
  templateUrl: './changepwd.html',
  styleUrl: './changepwd.scss',
})
export class Changepwd {

   // changepwdForm: FormGroup;
  hidePassword = true;
  hidePassword2 = true;
  hidePassword3 = true;

  changepwdForm!: FormGroup;


  constructor(
      private fb:FormBuilder,
      private auth: AuthService,
      private router:Router,
      private store: Store<AppState>) {
      const formOptions: AbstractControlOptions = { validators: [ MustMatch('newPassword', 'verifyPassword'), MustNotMatch('oldPassword', 'newPassword') ]};
      this.changepwdForm = fb.group({
          oldPassword: ['', [
          Validators.required,
          Validators.minLength(8),]],
          newPassword: ['', [
            Validators.required,
            Validators.minLength(8),
            createPasswordStrengthValidator(),
            ]],
          verifyPassword: ['', [Validators.required]]
      }, formOptions);

  }

  get oldPassword() {
    return this.changepwdForm.get('oldPassword');
  }

  get newPassword() {
    return this.changepwdForm.get('newPassword');
  }

  get verifyPassword() {
    return this.changepwdForm.get('verifyPassword');
  }

  changePwd() {}

  backhome() {
    this.router.navigate(['pages/home']);
  }
}

