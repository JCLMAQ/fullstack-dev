import { Component, input } from '@angular/core';
import { Field, FieldTree } from '@angular/forms/signals';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Address } from '@db/prisma';
import { ValidationErrors } from '@fe/signalform-utilities';
import { TranslateModule } from '@ngx-translate/core';
// import { buildAddressSection, createAddressModel } from './address-form.model';

@Component({
  selector: 'lib-address-form',
  imports: [
    ValidationErrors,
    Field,
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
