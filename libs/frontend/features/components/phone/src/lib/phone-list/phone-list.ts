
import { Component, computed, inject, Signal } from '@angular/core';
import { Phone } from '@db/prisma';
import { PhoneStore } from '../store/phone-store';

@Component({
  selector: 'lib-phone-list',
  imports: [],
  templateUrl: './phone-list.html',
  styleUrl: './phone-list.scss',
})
export class PhoneList {

  #store = inject(PhoneStore);

  // Correction du nom et liaison avec le store
  itemsEntities: Signal<Phone[]> = computed(() => {
    const map = this.#store.phoneEntityMap();
    return map && typeof map === 'object' ? Object.values(map) : [];
  });

  // Liaison des signaux de loading/loaded
  itemsLoading = this.#store.isLoading;
  itemsLoaded = computed(() => !this.#store.isLoading() && this.itemsEntities().length > 0);
  itemsError = this.#store.hasError;

}
