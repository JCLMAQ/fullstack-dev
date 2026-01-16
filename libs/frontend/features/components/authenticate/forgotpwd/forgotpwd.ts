import { JsonPipe } from '@angular/common';
import { Component, inject, resource, ResourceLoaderParams, Signal, signal } from '@angular/core';
import { ChildFieldContext, email, form, FormField, required, schema, submit, validateAsync } from '@angular/forms/signals';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { IAM_AUTH_TOKEN } from '@fe/auth';
import { MatFormFieldStatusDirective } from '@fe/directives';
import { FieldError } from '@fe/signalform-utilities';
import { TranslateModule } from '@ngx-translate/core';

export interface EmailUserFormModel {
  email: string;
};

@Component({
  selector: 'lib-forgotpwd',
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInput,
    MatIcon,
    MatButtonModule,
    FormField,
    TranslateModule,
    FieldError,
    JsonPipe,
    MatFormFieldStatusDirective
  ],
  templateUrl: './forgotpwd.html',
  styleUrl: './forgotpwd.scss',
})
export class Forgotpwd {

  _authService = inject(IAM_AUTH_TOKEN);

  private router = inject(Router);
  private snackBar = inject(MatSnackBar);
  // private authService = inject(ChangePwdService);

  emailUser = signal<EmailUserFormModel>({ email: '' });

  // Async validator to check if email exists
  private forgotPwdSchema = schema<EmailUserFormModel>((path) => {
    required(path.email, { message: 'signalFormError.emailRequired' });
    email(path.email, { message: 'signalFormError.invalidEmail' });

    validateAsync(path.email, {
      params: (email: ChildFieldContext<string>) => email.value(),
      factory: (params: Signal<string | undefined>) =>
        resource({
          // 👇 Params contains the `email` signal and is used to trigger the resource
            params,
            // the loader makes an HTTP call to check if the email is already registered
            loader: async (loaderParams: ResourceLoaderParams<string | undefined>) =>
              // returns true if the email is already registered
              await this._authService.emailCheck(loaderParams.params)
          }),
          // 👇 This is called with the result of the resource
          onSuccess: (isRegistered: boolean) =>
            isRegistered
              ? undefined
              : {
                  kind: 'email does not exist',
                  message: 'signalFormError.emailNotExist'
                },
          // 👇 This is called if the resource fails
          onError: () =>
            ({
              kind: 'email-check-failed',
              message: 'signalFormError.emailCheckFailed'
            })
      });
    });

  forgotPwdForm = form<EmailUserFormModel>(this.emailUser, this.forgotPwdSchema);

  submitForm() {
    submit(this.forgotPwdForm, async (form) => {

      console.log('Forgot Password: submitted form', email);
      try {
        const email = form.email().value();

        console.log('📤 [Submit] Envoi de la requête d\'oubli de mot de passe pour:', email);

        // const result = await this.sendForget(email);
        const result = await this._authService.sendEmailForgotPwdIamAuth(email);

        console.log('📤 [Submit] Données valides - email envoyé', email);

      // Afficher le message de succès
      this.snackBar.open(
        result.message || 'Email pour ressetter votre mot de passe envoyé.',
        'Fermer',
        {
          duration: 5000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
        }
      );

      // Rediriger vers la page home après un court délai
      setTimeout(() => {
        this.router.navigate(['/pages/home']);
      }, 1500);

        return undefined;

      } catch (e) {
        console.error('❌ [Submit] Erreur lors de l\'envoi du lien de réinitialisation:', e);
        return [
          { kind: 'server', message: 'Network error. Please try again.' }
        ];
      }
    });
  }

  cancel() {
    this.router.navigate(['/pages/home']);
  }

}
