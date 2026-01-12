import { Component, input } from '@angular/core';
import { Field, FieldTree } from '@angular/forms/signals';
import { Address } from '@db/prisma';
import { ValidationErrors } from '@fe/signalform-utilities';
// import { buildAddressSection, createAddressModel } from './address-form.model';

@Component({
  selector: 'lib-address-form',
  imports: [
    ValidationErrors,
    Field
  ],
  templateUrl: './address-form.html',
  styleUrl: './address-form.scss',
})
export class AddressForm {
readonly form = input.required<FieldTree<Address>>();
}
