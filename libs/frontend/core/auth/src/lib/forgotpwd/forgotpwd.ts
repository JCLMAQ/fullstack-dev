import { Component, inject, signal } from '@angular/core';
import { email, Field, form, required, schema } from '@angular/forms/signals';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { Router } from '@angular/router';
import { FieldError } from '@fe/signalform-utilities';
import { TranslateModule } from '@ngx-translate/core';

interface emailUser {
  email: string;
};

const forgotpwdSchema = schema<emailUser>((f) => {
  required(f.email, { message: 'L’email est requis' });
  email(f.email, { message: 'Email invalide' });
});


@Component({
  selector: 'lib-forgotpwd',
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInput,
    MatIcon,
    MatButtonModule,
    Field,
    TranslateModule,
    FieldError
  ],
  templateUrl: './forgotpwd.html',
  styleUrl: './forgotpwd.scss',
})
export class Forgotpwd {
 private router = inject(Router);

 emailUser = signal<emailUser>({ email: '' });
forgotPwdForm = form(this.emailUser, forgotpwdSchema);

 onSubmit() {
    if (this.forgotPwdForm().valid()) {
      this.sendforget();
      console.log('Données valides:-email envoyé', this.emailUser());
    }
 }

  async sendforget() {
    // const res = await this.authService.sendEmailForgotPwd(email.value);
    // alert(res.message);
    // this.router.navigate(['portal']);
  }

  backhome() {
    this.router.navigate(['/pages/home']);
  }
}
