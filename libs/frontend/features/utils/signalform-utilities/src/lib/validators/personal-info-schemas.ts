import { email, maxLength, minLength, pattern, required, schema } from '@angular/forms/signals';

// From: https://javascript.plainenglish.io/angular-signal-based-forms-why-theyre-about-to-change-everything-you-know-about-form-handling-0db6f81e89c9

// Apply schema to form field
/*
registrationForm = form(this.userRegistration, (path) => [
  apply(path.personalInfo.firstName, nameSchema)
]);
*/

// Define reusable validation schemas
export const nameSchema = schema<string>((path) => [
  required(path, { message: 'This field is required' }),
  minLength(path, 2, { message: 'Must be at least 2 characters' }),
  pattern(path, /^[a-zA-Z\\s'-]+$/, {
    message: 'Only letters, spaces, hyphens and apostrophes allowed'
  })
]);

export const emailSchema = schema<string>((path) => [
  required(path, { message: 'Email is required' }),
  email(path, { message: 'Please enter a valid email address' })
]);

export const businessEmailSchema = schema<string>((path) => [
  required(path, { message: 'Business email is required' }),
  email(path, { message: 'Invalid email format' }),
  pattern(path, /^[a-zA-Z0-9._%+-]+@(?!gmail|yahoo|hotmail|outlook)[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/, {
    message: 'Business domain required'
  })
]);


// Base schema for all text inputs
export const baseTextSchema = schema<string>((path) => [
  required(path, { message: 'This field is required' }),
  minLength(path, 1, { message: 'Field cannot be empty' })
]);

// Extended schema for names
export const enhancedNameSchema = schema<string>((path) => [
  ...baseTextSchema(path), // Spread base validation
  maxLength(path, 50, { message: 'Name cannot exceed 50 characters' }),
  pattern(path, /^[a-zA-Z\\s'-]+$/, { message: 'Invalid characters detected' })
]);

// Usage in form with complex conditions
/*
registrationForm = form(this.userRegistration, (path) => [
  apply(path.personalInfo.firstName, enhancedNameSchema),
  apply(path.personalInfo.lastName, enhancedNameSchema),
  // Multiple conditional validations
  required(path.personalInfo.email, {
    message: 'Email required when notifications are enabled',
    when: ({ valueOf }) => valueOf(path.preferences.notifications) === true
  }),
  pattern(path.personalInfo.email, /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/, {
    message: 'Personal email format is invalid',
    when: ({ valueOf }) => valueOf(path.accountType) === 'personal'
  }),
  pattern(path.personalInfo.email, /^[a-zA-Z0-9._%+-]+@(?!gmail|yahoo|hotmail|outlook)[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/, {
    message: 'Business email required for business accounts',
    when: ({ valueOf }) => valueOf(path.accountType) === 'business'
  })
]);
*/

// User Registration Interface
// interface UserRegistration {
//   personalInfo: {
//     firstName: string;
//     lastName: string;
//     email: string;
//   };
//   preferences: {
//     newsletter: boolean;
//     notifications: boolean;
//   };
//   accountType: 'personal' | 'business';
//   password: string;
//   confirmPassword: string;
// }

// Apply schemas to form fields
/*
registrationForm = form(this.userRegistration, (path) => [
  apply(path.personalInfo.firstName, nameSchema),
  apply(path.personalInfo.lastName, nameSchema),
  // Conditional schema application
  apply(path.personalInfo.email, businessEmailSchema, {
    when: ({ valueOf }) => valueOf(path.preferences.newsletter) === true
  }),
  apply(path.personalInfo.email, emailSchema, {
    when: ({ valueOf }) => valueOf(path.preferences.newsletter) === false
  }),
  // Additional conditional validation
  minLength(path.personalInfo.firstName, 5, {
    message: 'Business accounts require longer names',
    when: ({ valueOf }) => valueOf(path.accountType) === 'business'
  })
]);
*/
