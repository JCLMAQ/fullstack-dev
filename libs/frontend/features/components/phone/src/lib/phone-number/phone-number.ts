
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormField, required, schema } from '@angular/forms/signals';
import { compatForm } from '@angular/forms/signals/compat';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PhoneNumberFormat } from 'google-libphonenumber';
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
    MatInputModule,
    NgxMaterialIntlTelInputComponent,
    FormField,
    ReactiveFormsModule,
    MatButtonModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,

  ],
  templateUrl: './phone-number.html',
  styleUrl: './phone-number.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhoneNumber {
  readonly phoneControl = new FormControl('', { nonNullable: true });
  readonly setPhoneControl = new FormControl('', { nonNullable: true });

  readonly reactiveFormGroup = new FormGroup({
    phone: this.phoneControl,
    setPhoneTextbox: this.setPhoneControl
  });

  private readonly formValue = signal({
    phone: this.phoneControl,
    setPhoneTextbox: this.setPhoneControl
  });

  readonly formTestGroup = compatForm(this.formValue);

  title = 'ngx-material-intl-tel-input';
  currentPhoneValue = signal<string>('');
  currentCountryCode = signal<string>('');
  currentCountryISO = signal<string>('');
  submittedPhoneValue = signal<string>('');
  showSetPhoneInput = signal<boolean>(false);
  PhoneNumberFormat = PhoneNumberFormat;

  // constructor() {}

  getValue(value: string): void {
    this.currentPhoneValue.set(value);
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    if (!this.formTestGroup().valid()) {
      return;
    }
    this.submittedPhoneValue.set(this.formTestGroup.phone().value());
  }

  setPhone(): void {
    const newPhone = this.formTestGroup.setPhoneTextbox().value();
    this.phoneControl.setValue(newPhone);
  }

  toggleShowSetPhoneInput(): void {
    this.showSetPhoneInput.set(!this.showSetPhoneInput());
  }

  resetForm(): void {
    this.phoneControl.reset();
    this.setPhoneControl.reset();
  }

  getCountryCode(value: string): void {
    this.currentCountryCode.set(value);
  }

  getCountryISO(value: string): void {
    this.currentCountryISO.set(value);
  }
}

