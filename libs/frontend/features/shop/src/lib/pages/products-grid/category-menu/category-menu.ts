import { Component, inject, signal } from '@angular/core';
import { MatListItem, MatNavList } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { EcommerceStore } from '../../../ecommerce-store';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'lib-shop-category-menu',
  imports: [MatNavList, MatListItem, RouterLink, TitleCasePipe],
  template: `
    <div class="p-6" [style.view-transition-name]="'sidenav-content'">
      <h2 class="text-lg text-[var(--mat-sys-on-surface)]">Categories</h2>

      <mat-nav-list>
        @for (category of categories(); track category) {
          <mat-list-item
            [routerLink]="['/shop/products', category]"
            [queryParams]="
              store.searchTerm() ? { search: store.searchTerm() } : {}
            "
            [activated]="category === store.category()"
            class="my-2"
          >
            <span matListItemTitle class="font-medium">{{
              category | titlecase
            }}</span>
          </mat-list-item>
        }
      </mat-nav-list>
    </div>
  `,
  styles: ``,
})
export class CategoryMenu {
  store = inject(EcommerceStore);

  categories = signal<string[]>([
    'all',
    'electronics',
    'clothing',
    'accessories',
    'home',
  ]);
}
