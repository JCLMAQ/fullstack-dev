import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { FieldState } from '@angular/forms/signals';
import { TranslateModule } from '@ngx-translate/core';

export interface PasswordStrengthResult {
  score: number;
  label: string;
  color: string;
}

@Component({
  selector: 'lib-password-strength',
  imports: [TranslateModule],
  templateUrl: './password-strength.html',
  styleUrl: './password-strength.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PasswordStrength {
  fieldState = input.required<FieldState<string, any>>();

  protected readonly strength = computed(() => {
    const pwd = this.fieldState().value();
    if (!pwd) return { score: 0, label: 'Very Weak', color: 'red' };

    let strength = -1;
    if (pwd.length >= 8) strength++;
    if (/[a-z]/.test(pwd)) strength++; // Minuscule
    if (/[A-Z]/.test(pwd)) strength++; // Majuscule
    if (/[0-9]/.test(pwd)) strength++; // Chiffre
    if (/[^A-Za-z0-9]/.test(pwd)) strength++; // Caractère spécial
    if (strength > 4) strength = 4;

    return {
      score: strength + 1,
      label: ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong'][strength] || 'Very Weak',
      color: ['red', 'orange', 'yellow', 'lightgreen', 'green'][strength] || 'red'
    };
  });
}
