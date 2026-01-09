import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import {
  Field,
  apply,
  disabled,
  form,
  required,
  schema,
  validate,
} from '@angular/forms/signals';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FieldError } from '@fe/signalform-utilities';
import { TranslateModule } from '@ngx-translate/core';
import { PersonalInfo } from '../models/personal-info';

const passwordSchema = schema<{ password: string; confirmPassword: string }>(
  (path) => {
    required(path.password, { message: 'signalFormError.passwordRequired' });
    required(path.confirmPassword, { message: 'signalFormError.confirmPasswordRequired' });
    validate(path, ({ valueOf }) => {
      const password = valueOf(path.password);
      const confirmPassword = valueOf(path.confirmPassword);

      if (password && confirmPassword && password !== confirmPassword) {
        return {
          kind: 'passwordsMismatch',
          message: 'signalFormError.passwordMatch',
        };
      }

      return null;
    });
  },
);

@Component({
  selector: 'lib-user-profile',
  imports: [
    JsonPipe,
    FieldError,
    Field,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    TranslateModule
  ],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.scss',
})
export class UserProfile {
  personalInfo = signal<PersonalInfo>({
    firstName: '',
    lastName: '',
    dateOfBirth: new Date(),
    password: '',
    confirmPassword: '',
    hasEmergencyContact: false,
    emergencyContactName: '',
    emergencyContactPhone: '',
  });

  personalForm = form(this.personalInfo, (path) => {
    required(path.firstName, { message: 'signalFormError.required' });
    required(path.lastName, { message: 'signalFormError.required' });
    required(path.dateOfBirth, { message: 'signalFormError.required' });

    validate(path.dateOfBirth, ({ value }) => {
      const years = new Date().getFullYear() - value().getFullYear();
      if (years < 18) {
        return {
          message: 'signalFormError.minAge',
          kind: 'minAge',
        };
      }

      return null;
    });

    apply(path, passwordSchema);

    required(path.emergencyContactName, {
      message: 'signalFormError.required',
      when: ({ valueOf }) => valueOf(path.hasEmergencyContact),
    });
    required(path.emergencyContactPhone, {
      message: 'signalFormError.required',
      when: ({ valueOf }) => valueOf(path.hasEmergencyContact),
    });
    disabled(
      path.emergencyContactName,
      ({ valueOf }) => !valueOf(path.hasEmergencyContact),
    );
    disabled(
      path.emergencyContactPhone,
      ({ valueOf }) => !valueOf(path.hasEmergencyContact),
    );
  });
}
