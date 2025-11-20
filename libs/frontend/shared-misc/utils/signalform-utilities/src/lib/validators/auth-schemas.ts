// validators/auth-schemas.ts from: https://javascript.plainenglish.io/angular-signal-based-forms-why-theyre-about-to-change-everything-you-know-about-form-handling-0db6f81e89c9

import { minLength, pattern, required, schema } from '@angular/forms/signals';

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
