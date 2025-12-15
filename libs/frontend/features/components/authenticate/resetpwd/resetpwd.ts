
import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { AppState } from '@app/reducers';
import { Store } from '@ngrx/store';
import { AuthService } from '../services/auth.service';
import { MustMatch } from '../validators/mustMatch.validator';
import { createPasswordStrengthValidator } from '../validators/password-strength.validator';
// import { OnlyOneErrorPipe } from '../../pipes/only-one-error.pipe';

@Component({
  selector: 'lib-resetpwd',
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
  templateUrl: './resetpwd.html',
  styleUrl: './resetpwd.scss',
})
export class Resetpwd {

    hidePassword = true;
    hideConfirmPassword = true;

    resetpwdForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router:Router,
    private store: Store<AppState>
  ) {
    const formOptions: AbstractControlOptions = { validators: MustMatch('newPassword', 'confirmNewPassword') };
    this.resetpwdForm = fb.group({
      newPassword: ['', [
        Validators.required,
        Validators.minLength(8),
        createPasswordStrengthValidator(),
        ]],
      confirmNewPassword: ['', [Validators.required]]
    },
    formOptions );
  }

  get newPassword() {
    return this.resetpwdForm.controls['newPassword'];
}

get confirmNewPassword() {
  return this.resetpwdForm.controls['confirmNewPassword'];
}

  resetPwd() {

  }

  backhome() {
    this.router.navigate(['home']);
  }
}
