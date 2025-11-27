import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { email, Field, form, minLength, required, schema } from '@angular/forms/signals';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { Router } from '@angular/router';
import { FieldError } from '@fe/signalform-utilities';
import { AppStore } from '@fe/stores';
import { TranslateModule } from '@ngx-translate/core';
interface LoginUser {
  email: string;
  password: string;
}

const loginUserSchema = schema<LoginUser>((f) => {
  required(f.password, { message: 'Le password est requis' });
  minLength(f.password, 3, { message: 'Le password doit comporter au moins 3 caractères' });
  required(f.email, { message: 'L’email est requis' });
  email(f.email, { message: 'Email invalide' });
});

@Component({
  selector: 'lib-login',
  imports: [
    MatFormFieldModule,
    FormsModule,
    MatInput,
    MatIcon,
    MatButtonModule,
    Field,
    TranslateModule,
    FieldError
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  appStore = inject(AppStore);
  router = inject(Router);

  // loginUser = signal<LoginUser>({ email: '', password: '' });
  loginUser = signal<LoginUser>({ email: 'user1@test.be', password: 'Pwd!123456' });
  userLoginForm = form(this.loginUser, loginUserSchema);

  // email = signal('user1@test.be');
  // password = signal('Pwd!123456');

  hidePassword = signal(true);

  onSubmit() {
    if (this.userLoginForm().valid()) {
          this.login();
      console.log('Données valides:', this.loginUser());
    }
  }
  register() {
    this.router.navigate(['auth/register']);
  }

  async login() {
    await this.appStore['login'](this.loginUser().email, this.loginUser().password);
  }

  cancel() {
    this.router.navigate(['/pages/home']);
  }
}
