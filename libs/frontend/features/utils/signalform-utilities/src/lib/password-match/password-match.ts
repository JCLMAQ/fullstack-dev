import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { FieldState } from '@angular/forms/signals';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'lib-password-match',
  imports: [TranslateModule, MatIconModule],
  templateUrl: './password-match.html',
  styleUrl: './password-match.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PasswordMatch {
  passwordFieldState = input.required<FieldState<string, any>>();
  confirmPasswordFieldState = input.required<FieldState<string, any>>();

  protected readonly passwordsMatch = computed(() => {
    const pwd = this.passwordFieldState().value();
    const confirmPwd = this.confirmPasswordFieldState().value();
    return pwd.length > 0 && confirmPwd.length > 0 && pwd === confirmPwd;
  });

  protected readonly showIndicator = computed(() => {
    const confirmPwd = this.confirmPasswordFieldState().value();
    return confirmPwd.length > 0;
  });
}
