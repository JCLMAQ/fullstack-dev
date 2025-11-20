import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FieldState } from '@angular/forms/signals';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'lib-field-error',
  imports: [TranslateModule],
  templateUrl: './field-error.html',
  styleUrl: './field-error.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldError {
  fieldError = input.required<FieldState<any, any>>();
}
