
import { Component } from '@angular/core';
import { PhoneList } from '../phone-list/phone-list';

@Component({
  selector: 'lib-phone',
  standalone: true,
  imports: [
    PhoneList
  ],
  templateUrl: './phone.html',
  styleUrl: './phone.scss',
})
export class Phone {}
