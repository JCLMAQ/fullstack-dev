
import { Component, signal } from '@angular/core';
import { PhoneList } from '../phone-list/phone-list';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormField } from '@angular/forms/signals';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterOutlet } from '@angular/router';
import { NgxMaterialIntlTelInputComponent } from 'ngx-material-intl-tel-input';
import { PhoneNumberFormat } from 'google-libphonenumber';
import { compatForm } from '@angular/forms/signals';

@Component({
  selector: 'lib-phone',
  standalone: true,
  imports: [
    NgxMaterialIntlTelInputComponent,
    RouterOutlet,
    FormField,
    ReactiveFormsModule,
    MatButtonModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    PhoneList
  ],
  templateUrl: './phone.html',
  styleUrl: './phone.scss',
})
export class Phone {
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

  constructor() {}

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
function compatForm(formValue: any) {
  throw new Error('Function not implemented.');
}

