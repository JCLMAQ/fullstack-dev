
import { Component, inject } from '@angular/core';
import { PhoneStore } from '../store/phone-store';

@Component({
  selector: 'lib-phone-list',
  imports: [],
  templateUrl: './phone-list.html',
  styleUrl: './phone-list.scss',
})
export class PhoneList {
  protected readonly store = inject(PhoneStore);
}
