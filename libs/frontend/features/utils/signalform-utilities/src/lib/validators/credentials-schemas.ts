// validators/auth-schemas.ts from: https://javascript.plainenglish.io/angular-signal-based-forms-why-theyre-about-to-change-everything-you-know-about-form-handling-0db6f81e89c9

/* In your component
registrationForm = form(this.userRegistration, (path) => [
  apply(path.personalInfo.firstName, personNameSchema),
  apply(path.personalInfo.lastName, personNameSchema),
  apply(path.password, strongPasswordSchema),
  ....
]);
*/

import { apply, customError, disabled, email, maxLength, minLength, pattern, required, schema, validate } from '@angular/forms/signals';
/*
* Email Schemas
*/
// Standard Email Schema
export const emailSchema = schema<string>((path) => [
  required(path, { message: 'signalFormError.emailRequired' }), // 'Email is required'
  email(path, { message: 'signalFormError.invalidEmail' }),
  pattern(path, /^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
    message: 'signalFormError.invalidEmail' // 'Invalid email format'
  })
]);
// Business Email Schema
export const businessEmailSchema = schema<string>((path) => [
  required(path, { message: 'signalFormError.businessEmailRequired' }),
  email(path, { message: 'signalFormError.invalidEmail' }),
  pattern(path, /^[a-zA-Z0-9._%+-]+@(?!gmail|yahoo|hotmail|outlook|mac|icloud)[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/, {
    message: 'signalFormError.businessDomainRequired'
  })
]);

/*
* End of Email Schemas
*/

// Person Name Schema
export const personNameSchema = schema<string>((path) => [
  required(path, { message: 'signalFormError.required' }), // 'This field is required'
  minLength(path, 2, { message: 'signalFormError.minLength' }), // 'Must be at least 2 characters'
  pattern(path, /^[a-zA-Z\\s'-]+$/, {
    message: 'signalFormError.invalidCharactersDetected' // 'Only letters, spaces, hyphens, and apostrophes are allowed'
  })
]);

/*
*
* Password Schemas
*
*/
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
/*
* End of Password Schemas
*/

/*
* Base schema for all text inputs
*/
export const baseTextSchema = schema<string>((path) => [
  minLength(path, 1, { message: 'signalFormError.minLength' })
]);

export const baseTextSchemaMax50 = schema<string>((path) => [
  apply(path, baseTextSchema),
  maxLength(path, 50, { message: 'signalFormError.nameMaxLength' })
]);

export const baseTextSchemRequired = schema<string>((path) => [
  apply(path, baseTextSchema),
  required(path, { message: 'signalFormError.required' }) // 'This field is required' }),
]);
/*
* End of Base schema for all text inputs
*/

/*
* Date of Birth Schema with minimum age validation
*/
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
/*
* End of Date of Birth Schema
*/

/*
* Emergency Contact Schema
*/
/*

  protected readonly userData = signal<UserFormData>({
   ...
    dateOfBirth: null,
    emergencyContact: {
      hasEmergencyContact: false,
      emergencyContactName: '',
      emergencyContactPhone: '',
    },
    position: null,
  ..
  });

*/

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


/*
* Password password is different from Email validator
*/
export const passwordDifferentFromEmail = schema<{ email: string; password: string; confirmPassword?: string }>(
  (path) => [
    validate(path.password, ({ valueOf }) => {
      const email = valueOf(path.email);
      const password = valueOf(path.password);

      return email && password && email.toLowerCase() === password.toLowerCase()
        ? customError({
            kind: 'password-different-from-email',
            message: 'signalFormError.passwordDifferentFromEmail', // 'Password should not be the same as email'
          })
        : null;
    }),
  ]);
/*
* End of Password different from Email validator
*/

/*
* Example of use: In your component (from signal-forms-preview master)

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





// https://blog.ninja-squad.com/2025/11/14/angular-signal-forms-part-2?utm_source=substack&utm_medium=email

// email is not already registered (async validation)
/*
validateAsync(form.email, {
  params: (email: ChildFieldContext<string>) => email.value(),
  factory: (params: Signal<string | undefined>) =>
    resource({
      // 👇 Params contains the `email` signal and is used to trigger the resource
      params,
      // the loader makes an HTTP call to check if the email is already registered
      loader: async (loaderParams: ResourceLoaderParams<string | undefined>) =>
        // returns true if the email is already registered
        await this.userService.isRegistered(loaderParams.params)
    }),
    // 👇 This is called with the result of the resource
    onSuccess: (response: { isRegistered: boolean }) =>
      response.isRegistered
        ? {
            kind: 'email-already-registered',
            message: 'Email is already registered'
          }
        : undefined,
    // 👇 This is called if the resource fails
    onError: () =>
      ({
        kind: 'email-check-failed',
        message: 'Could not verify if the email is already registered'
      })
});


// email is not already registered (async validation)
validateHttp(form.email, {
  // 👇 httpResource is triggered when the email signal changes
  request: (email: ChildFieldContext<string>) => `/api/users/check?email=${email.value()}`,
  onSuccess: (response: { isRegistered: boolean }) =>
    response.isRegistered
      ? {
          kind: 'email-already-taken',
          message: 'Email is already taken'
        }
      : undefined,
  onError: () =>
    ({
      kind: 'email-check-failed',
      message: 'Could not verify if the email is already taken'
    })
});
*/
