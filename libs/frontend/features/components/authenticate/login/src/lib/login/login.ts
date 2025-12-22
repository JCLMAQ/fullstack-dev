import { Component, inject, signal } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { apply, email, Field, form, required, schema, submit } from '@angular/forms/signals';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { Router } from '@angular/router';
import { MatFormFieldStatusDirective } from '@fe/directives';
import { FieldError, strongPasswordSchema } from '@fe/signalform-utilities';
import { AppStore } from '@fe/stores';
import { TranslateModule } from '@ngx-translate/core';
interface LoginUser {
  email: string;
  password: string;
}

const loginUserSchema = schema<LoginUser>((path) => {
  apply(path.password, strongPasswordSchema);
  required(path.email, { message: 'LOGIN.emailRequired' });
  email(path.email, { message: 'LOGIN.invalidEmail' });
});

@Component({
  selector: 'lib-login',
  imports: [
    MatFormFieldModule,
    MatCardModule,
    MatInput,
    MatIcon,
    MatButtonModule,
    Field,
    TranslateModule,
    FieldError,
    JsonPipe,
    MatFormFieldStatusDirective
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  appStore = inject(AppStore);
  router = inject(Router);

  loginUser = signal<LoginUser>({ email: '', password: '' });
  userLoginForm = form(this.loginUser, loginUserSchema);

// TODO : to delete it's just for easy testing
  constructor() {
      this.loginUser.set({ email: 'user1@test.be', password: 'Pwd!123456' });
  }

  hidePassword = signal(true);

submitForm() {
  console.log('Login: submitted form', this.userLoginForm.email().value(), this.userLoginForm.password().value());
  submit(this.userLoginForm, async (form) => {
    const email = form.email().value() ;
    const password = form.password().value();
    console.log('Login avec', email, password);
    try {
      await this.login(email, password);
      console.log('Login réussi:', form().value());
      return undefined;
    } catch (e) {
      console.error('Erreur lors du login:', e);
      return [
        { kind: 'server', message: 'Network error. Please try again.' }
      ];
    }
  });
}

  async login(email: string, password: string) {
    console.log('Login avec', email, password);
    await this.appStore['login'](email, password);
  }

  register() {
    this.router.navigate(['auth/register']);
  }
  forgotPassword() {
    this.router.navigate(['auth/forgotpwd']);
  }


  cancel() {
    this.router.navigate(['/pages/home']);
  }
}
