// validators/auth-schemas.ts from: https://javascript.plainenglish.io/angular-signal-based-forms-why-theyre-about-to-change-everything-you-know-about-form-handling-0db6f81e89c9

import { customError, minLength, pattern, required, schema, validate } from '@angular/forms/signals';

export const personNameSchema = schema<string>((path) => [
  required(path, { message: 'signalFormError.required' }), // 'This field is required'
  minLength(path, 2, { message: 'signalFormError.minLength' }), // 'Must be at least 2 characters'
  pattern(path, /^[a-zA-Z\\s'-]+$/, {
    message: 'signalFormError.invalidName' // 'Only letters, spaces, hyphens, and apostrophes are allowed'
  })
]);

export const strongPasswordSchema = schema<string>((path) => [
  required(path, { message: 'signalFormError.passwordRequired' }), // 'Password is required'
  minLength(path, 8, { message: 'signalFormError.passwordMinLength' }), // 'Password must be at least 8 characters'
  pattern(path, /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)/, {
    message: 'signalFormError.passwordPattern' // 'Password must contain uppercase, lowercase, and number'
  })
]);

/* In your component
registrationForm = form(this.userRegistration, (path) => [
  apply(path.personalInfo.firstName, personNameSchema),
  apply(path.personalInfo.lastName, personNameSchema),
  apply(path.password, strongPasswordSchema)
]);
*/

const passwordSchema = schema<{ password: string; confirmPassword: string }>((path) => {
  required(path.password, { message: 'Password is required' });
  required(path.confirmPassword, { message: 'Confirm Password is required' });
  validate(path, ({ valueOf }) => {
    const password = valueOf(path.password);
    const confirmPassword = valueOf(path.confirmPassword);

    if (password && confirmPassword && password !== confirmPassword) {
      return customError({
        kind: 'passwordsMismatch',
        message: 'Password should match',
      });
    }
    return null;
  });
});

/* In your component (from signal-forms-preview master)

export type PersonalInfo = {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  password: string;
  confirmPassword: string;
  hasEmergencyContact: boolean;
  emergencyContactName: string;
  emergencyContactPhone: string;
};

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

  // personalForm = form(this.personalInfo)
  personalForm = form<PersonalInfo>(this.personalInfo, (path) => {
    required(path.firstName, { message: 'First Name is required' });
    required(path.lastName, { message: 'Last Name is required' });
    required(path.dateOfBirth, { message: 'Date of Birth is required' });

    validate(path.dateOfBirth, ({ value }) => {
      const years = new Date().getFullYear() - value().getFullYear();
      if (years < 18) {
        return customError({
          message: 'You must be at least 18 years old',
          kind: 'minAge',
        });
      }

      return null;
    });

    apply(path, passwordSchema);

    required(path.emergencyContactName, {
      message: 'Name is required',
      when: ({ valueOf }) => valueOf(path.hasEmergencyContact),
    });
    required(path.emergencyContactPhone, {
      message: 'Phone is required',
      when: ({ valueOf }) => valueOf(path.hasEmergencyContact),
    });
    disabled(path.emergencyContactName, ({ valueOf }) => !valueOf(path.hasEmergencyContact));
    disabled(path.emergencyContactPhone, ({ valueOf }) => !valueOf(path.hasEmergencyContact));
  });
*/
