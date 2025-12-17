import {
    customError,
    minLength,
    pattern,
    required,
    schema,
    validate,
} from '@angular/forms/signals';
import { ChangePasswordForm } from './changepwd';

/**
 * Schema de validation pour le changement de mot de passe
 * Valide que :
 * - L'ancien mot de passe est requis et a une longueur minimale de 8 caractères
 * - Le nouveau mot de passe est requis, a une longueur minimale de 8 caractères
 *   et respecte les règles de complexité (majuscules, minuscules, chiffres, caractères spéciaux)
 * - Le mot de passe de confirmation correspond au nouveau mot de passe
 * - Le nouveau mot de passe est différent de l'ancien
 */
export const changePasswordSchema = schema<ChangePasswordForm>((path) => [
  // Validation de l'ancien mot de passe
  required(path.oldPassword, { message: 'signalFormError.passwordRequired' }),
  minLength(path.oldPassword, 8, {
    message: 'signalFormError.passwordMinLength',
  }),

  // Validation du nouveau mot de passe
  required(path.newPassword, { message: 'signalFormError.passwordRequired' }),
  minLength(path.newPassword, 8, {
    message: 'signalFormError.passwordMinLength',
  }),
  pattern(
    path.newPassword,
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    {
      message: 'signalFormError.passwordPattern',
    }
  ),

  // Validation du mot de passe de confirmation
  required(path.confirmPassword, {
    message: 'signalFormError.confirmPasswordRequired',
  }),

  // Validation que les mots de passe correspondent
  validate(path, ({ valueOf }) => {
    const newPassword = valueOf(path.newPassword);
    const confirmPassword = valueOf(path.confirmPassword);

    if (
      newPassword &&
      confirmPassword &&
      newPassword !== confirmPassword
    ) {
      return customError({
        kind: 'passwordsMismatch',
        message: 'signalFormError.passwordMismatch',
      });
    }
    return null;
  }),

  // Validation que le nouveau mot de passe est différent de l'ancien
  validate(path, ({ valueOf }) => {
    const oldPassword = valueOf(path.oldPassword);
    const newPassword = valueOf(path.newPassword);

    if (oldPassword && newPassword && oldPassword === newPassword) {
      return customError({
        kind: 'samePassword',
        message: 'signalFormError.newPasswordMustBeDifferent',
      });
    }
    return null;
  }),
]);
