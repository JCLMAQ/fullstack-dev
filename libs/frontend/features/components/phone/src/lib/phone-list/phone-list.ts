
import { Component, inject, OnInit } from '@angular/core';
import { PhoneStore } from '../store/phone-store';

@Component({
  selector: 'lib-phone-list',
  imports: [],
  templateUrl: './phone-list.html',
  styleUrl: './phone-list.scss',
})
export class PhoneList implements OnInit {

  protected readonly store = inject(PhoneStore);

  ngOnInit() {
    console.log('PhoneList ngOnInit - Loading phones...');
    this.store.loadAllPhones();
    console.log('Loading state:', this.store.isLoading());
    console.log('Phone entities:', this.store.phoneEntities());
  }
}
