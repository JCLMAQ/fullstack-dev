import { Component, input } from '@angular/core';
import { FieldState } from '@angular/forms/signals';
import { TranslatePipe } from '@ngx-translate/core';

// from: https://github.com/brianmtreese/signal-forms-composition-example-after/blob/master/src/app/shared/validation-errors/validation-errors.component.html
@Component({
  selector: 'lib-validation-errors',
  imports: [TranslatePipe],
  templateUrl: './validation-errors.html',
  styleUrl: './validation-errors.scss',
})
export class ValidationErrors {

 readonly fieldState = input.required<FieldState<unknown, string>>();

}
