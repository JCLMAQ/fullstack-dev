import {
  Component,
  ChangeDetectionStrategy,
  inject,
  computed,
  input,
} from '@angular/core';
import {
  MatSidenav,
  MatSidenavContainer,
  MatSidenavContent,
} from '@angular/material/sidenav';

import { TitleCasePipe } from '@angular/common';
import { ProductCard } from './product-card/product-card';
import { EcommerceStore } from '../../ecommerce-store';
import { CategoryMenu } from './category-menu/category-menu';
import { ResponsiveManager } from '../../services/responsive-manager';

@Component({
  selector: 'lib-shop-products-grid',
  imports: [
    MatSidenavContainer,
    MatSidenav,
    MatSidenavContent,
    TitleCasePipe,
    ProductCard,
    CategoryMenu,
  ],
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <mat-sidenav-container class="h-full">
      <mat-sidenav
        #sidenav
        [mode]="responsiveManager.sideNavMode()"
        (openedChange)="responsiveManager.sideNavOpened.set($event)"
        [opened]="responsiveManager.sideNavOpened()"
      >
        <lib-shop-category-menu />
      </mat-sidenav>

      <mat-sidenav-content
        class="bg-[var(--mat-sys-surface-container-low)] p-6"
      >
        <div class="flex items-center justify-between mb-6">
          <div>
            <h1 class="text-2xl font-bold text-[var(--mat-sys-on-surface)]">
              {{ store.category() | titlecase }}
            </h1>
            <p class="text-base text-[var(--mat-sys-on-surface-variant)] mt-1">
              {{ store.filteredProducts().length }} products found
              @if (store.searchTerm()) {
                for "{{ store.searchTerm() }}"
              }
            </p>
          </div>
        </div>

        <div class="responsive-grid">
          @for (product of store.filteredProducts(); track product.id) {
            <lib-shop-product-card [product]="product" />
          }
        </div>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: ``,
})
export default class ProductsGrid {
  categoryName = input<string | undefined>('all');
  search = input<string | undefined>('');
  store = inject(EcommerceStore);
  responsiveManager = inject(ResponsiveManager);

  productsQueryParams = computed(() => ({
    category: this.categoryName() ?? 'all',
    searchTerm: this.search() ?? '',
  }));

  constructor() {
    this.store.setParams(this.productsQueryParams);
  }
}
