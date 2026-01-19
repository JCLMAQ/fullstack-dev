
import { Component } from '@angular/core';


@Component({
  selector: 'lib-phone',
  standalone: true,
  imports: [

  ],
  templateUrl: './phone.html',
  styleUrl: './phone.scss',
})
export class Phone {


  // getValue(value: string): void {
  //   this.currentPhoneValue.set(value);
  // }

  // onSubmit(event: Event): void {
  //   event.preventDefault();
  //   if (!this.formTestGroup().valid()) {
  //     return;
  //   }
  //   this.submittedPhoneValue.set(this.formTestGroup.phone().value());
  // }

  // setPhone(): void {
  //   const newPhone = this.formTestGroup.setPhoneTextbox().value();
  //   this.phoneControl.setValue(newPhone);
  // }

  // toggleShowSetPhoneInput(): void {
  //   this.showSetPhoneInput.set(!this.showSetPhoneInput());
  // }

  // resetForm(): void {
  //   this.phoneControl.reset();
  //   this.setPhoneControl.reset();
  // }

  // getCountryCode(value: string): void {
  //   this.currentCountryCode.set(value);
  // }

  // getCountryISO(value: string): void {
  //   this.currentCountryISO.set(value);
  // }
}

