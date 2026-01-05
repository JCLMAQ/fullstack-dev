


import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule, MatHint } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxMaterialIntlTelInputComponent } from 'ngx-material-intl-tel-input';

@Component({
  selector: 'lib-phone-number',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatHint,
    NgxMaterialIntlTelInputComponent
  ],
  templateUrl: './phone-number.html',
  styleUrl: './phone-number.scss',
})
export class PhoneNumber {
  myForm: FormGroup;
  phoneNumber: string | undefined;

  constructor() {
    const fb = inject(FormBuilder);
    this.myForm = fb.group({
      phone: [undefined, [Validators.required]],
    });
  }

  submitPhone() {
    if (this.myForm.valid) {
      const phoneCtrl = this.myForm.get('phone');
      this.phoneNumber = phoneCtrl ? phoneCtrl.value : undefined;
    }
  }

  get phoneValue() {
    return this.myForm.controls['phone'];
  }
}
