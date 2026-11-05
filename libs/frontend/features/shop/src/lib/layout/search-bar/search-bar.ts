import { Component, inject } from '@angular/core';
import { EcommerceStore } from '../../ecommerce-store';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-shop-search-bar',
  imports: [MatIcon, MatIconButton],
  template: `
    <div
      class="w-full max-w-xl flex items-center bg-[var(--mat-sys-surface)] border border-gray-200 rounded-lg px-4 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-200"
    >
      <mat-icon class="text-gray-400 mr-2" fontIcon="search"></mat-icon>
      <input
        #searchInput
        type="search"
        aria-label="Search products"
        [value]="store.searchTerm()"
        placeholder="Search products..."
        class="flex-1 bg-transparent outline-none text-[var(--mat-sys-on-surface)] text-sm placeholder-gray-400"
        (keyup)="navigateToSearch($event, searchInput.value)"
      />
      @if (store.searchTerm()) {
        <button matIconButton class="small" (click)="clearSearch(searchInput)">
          <mat-icon>close</mat-icon>
        </button>
      }
    </div>
  `,
  styles: ``,
})
export class SearchBar {
  store = inject(EcommerceStore);
  router = inject(Router);

  navigateToSearch(event: KeyboardEvent, searchQuery: string) {
    if (event.key !== 'Enter') return;
    const trimmedSearch = searchQuery.trim();

    this.router.navigate([`/shop/products/${this.store.category()}`], {
      queryParams: trimmedSearch ? { search: trimmedSearch } : {},
    });
  }

  clearSearch(input: HTMLInputElement) {
    input.value = '';
    const event = new KeyboardEvent('keyup', { key: 'Enter' });
    this.navigateToSearch(event, '');
  }
}
