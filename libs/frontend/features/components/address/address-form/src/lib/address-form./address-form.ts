import { Component, input } from '@angular/core';
import { FieldTree, FormField } from '@angular/forms/signals';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Address } from '@db/prisma/browser';
import { ValidationErrors } from '@fe/signalform-utilities';
import { TranslateModule } from '@ngx-translate/core';
// import { buildAddressSection, createAddressModel } from './address-form.model';

@Component({
  selector: 'lib-address-form',
  imports: [
    ValidationErrors,
    FormField,
    MatFormFieldModule,
    MatInputModule,
    TranslateModule,
  ],
  templateUrl: './address-form.html',
  styleUrl: './address-form.scss',
})
export class AddressForm {
  readonly form = input.required<FieldTree<Address>>();
}
