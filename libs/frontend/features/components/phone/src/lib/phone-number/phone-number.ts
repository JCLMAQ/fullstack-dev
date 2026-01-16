
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { form, FormField, required, schema } from '@angular/forms/signals';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule, MatHint } from '@angular/material/form-field';
import { NgxMaterialIntlTelInputComponent } from 'ngx-material-intl-tel-input';

interface PhoneFormModel {
  phone: string;
}

const phoneSchema = schema<PhoneFormModel>((f) => {
  required(f.phone, { message: 'Phone number is required' });
});

@Component({
  selector: 'lib-phone-number',
  standalone: true,
  imports: [
    FormField,
    MatFormFieldModule,
    MatButtonModule,
    MatHint,
    NgxMaterialIntlTelInputComponent
  ],
  templateUrl: './phone-number.html',
  styleUrl: './phone-number.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhoneNumber {
  private readonly phoneState = signal<PhoneFormModel>({ phone: '' });

  readonly phoneForm = form(this.phoneState, phoneSchema);

  phoneNumber: string | null = null;

  submitPhone() {
    if (!this.phoneForm().valid()) {
      this.phoneForm.phone().markAsTouched();
      return;
    }

    this.phoneNumber = this.phoneState().phone;
  }
}
