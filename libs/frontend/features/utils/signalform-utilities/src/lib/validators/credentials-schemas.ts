// validators/auth-schemas.ts from: https://javascript.plainenglish.io/angular-signal-based-forms-why-theyre-about-to-change-everything-you-know-about-form-handling-0db6f81e89c9

/* In your component
registrationForm = form(this.userRegistration, (path) => [
  apply(path.personalInfo.firstName, personNameSchema),
  apply(path.personalInfo.lastName, personNameSchema),
  apply(path.password, strongPasswordSchema),
  ....
]);
*/

import { customError, disabled, minLength, pattern, required, schema, validate } from '@angular/forms/signals';

// Person Name Schema
export const personNameSchema = schema<string>((path) => [
  required(path, { message: 'signalFormError.required' }), // 'This field is required'
  minLength(path, 2, { message: 'signalFormError.minLength' }), // 'Must be at least 2 characters'
  pattern(path, /^[a-zA-Z\\s'-]+$/, {
    message: 'signalFormError.invalidName' // 'Only letters, spaces, hyphens, and apostrophes are allowed'
  })
]);

// Strong Password Schema
export const strongPasswordSchema = schema<string>((path) => [
  required(path, { message: 'signalFormError.passwordRequired' }), // 'Password is required'
  minLength(path, 8, { message: 'signalFormError.passwordMinLength' }), // 'Password must be at least 8 characters'
  pattern(path, /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, {
    message: 'signalFormError.passwordPattern' // 'Password must contain uppercase, lowercase, and number'
  })
]);

// Password with Confirm Password schema
export const passwordWithConfirmSchema = schema<{ password: string; confirmPassword: string }>((path) => [
  required(path.password, { message: 'signalFormError.passwordRequired' }),
  minLength(path.password, 8, { message: 'signalFormError.passwordMinLength' }), // 'Password must be at least 8 characters'
  pattern(path.password, /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, {
      // pattern(path.password, /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)/, {
    message: 'signalFormError.passwordPattern' // 'Password must contain uppercase, lowercase, and number'
  }),
  required(path.confirmPassword, { message: 'signalFormError.confirmPasswordRequired' }),
  validate(path, ({ valueOf }) => {
    const password = valueOf(path.password);
    const confirmPassword = valueOf(path.confirmPassword);

    if (password && confirmPassword && password !== confirmPassword) {
      return customError({
        kind: 'passwordsMismatch',
        message: 'signalFormError.passwordMismatch' // 'Passwords do not match',
      });
    }
    return null;
  }),
]);

// Date of Birth schema with minimum age validation
export const dateOfBirthSchema = schema<Date>((path) => [
  required(path, { message: 'signalFormError.dateDobRequired' }), // 'Date of birth is required'
  validate(path, ({ value }) => {
    const years = new Date().getFullYear() - value().getFullYear();
    if (years < 18) {
      return customError({
        message: 'signalFormError.age18Plus', // 'You must be at least 18 years old',
        kind: 'minAge',
      });
    }

    return null;
  }),
]);



// Emergency Contact Schema
export const emergencyContactSchema = schema<{ hasEmergencyContact: boolean; emergencyContactName: string; emergencyContactPhone: string }>((path) => [
  required(path.emergencyContactName, {
      message: 'signalFormError.contactNameRequired', // 'Contact name is required'
      when: ({ valueOf }) => valueOf(path.hasEmergencyContact),
    }),
  required(path.emergencyContactPhone, {
      message: 'signalFormError.contactPhoneRequired', // 'Contact phone is required'
      when: ({ valueOf }) => valueOf(path.hasEmergencyContact),
  }),
  pattern(path.emergencyContactPhone, /^\+?[1-9]\d{1,14}$/, {
      message: 'signalFormError.invalidPhone' // 'Invalid phone number format'
  }),
  disabled(path.emergencyContactName, ({ valueOf }) => !valueOf(path.hasEmergencyContact)),
  disabled(path.emergencyContactPhone, ({ valueOf }) => !valueOf(path.hasEmergencyContact)),
]);


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
*/
