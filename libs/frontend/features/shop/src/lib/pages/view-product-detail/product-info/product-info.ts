import { Component, computed, inject, input, signal } from '@angular/core';
import { StarRating } from '../../../components/star-rating/star-rating';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { QtySelector } from '../../../components/qty-selector/qty-selector';
import { TitleCasePipe } from '@angular/common';
import { Product } from '../../../models/product';
import { EcommerceStore } from '../../../ecommerce-store';
import { StockStatus } from '../stock-status/stock-status';

@Component({
  selector: 'lib-shop-product-info',
  imports: [
    StarRating,
    QtySelector,
    MatButton,
    MatIcon,
    MatIconButton,
    TitleCasePipe,
    StockStatus,
  ],
  template: `
    <div
      class="text-xs rounded-xl bg-[var(--mat-sys-surface-container-low)] px-2 py-1 w-fit mb-2"
    >
      {{ product().category | titlecase }}
    </div>
    <h1 class="text-2xl font-extrabold mb-3">{{ product().name }}</h1>
    <lib-shop-star-rating [rating]="product().rating" class="mb-3 block">
      {{ product().rating }} ({{ product().reviewCount }} reviews)
    </lib-shop-star-rating>
    <p class="text-3xl font-extrabold mb-4">\${{ product().price }}</p>
    <lib-shop-stock-status [inStock]="product().inStock" class="mb-4" />
    <p class="font-semibold mb-2">Description</p>
    <p
      class="text-[var(--mat-sys-on-surface-variant)] border-b border-gray-200 pb-4"
    >
      {{ product().description }}
    </p>
    <div class="flex items-center gap-2 mb-3 pt-4">
      <span class="font-semibold">Quantity:</span>
      <lib-shop-qty-selector
        [quantity]="quantity()"
        (qtyUpdated)="quantity.set($event)"
      />
    </div>
    <div class="flex gap-4 mb border-b border-gray-200 pb-4">
      <button
        matButton="filled"
        class="w-2/3 flex items-center gap-2"
        (click)="store.addToCart(product(), quantity())"
        [disabled]="!product().inStock"
      >
        <mat-icon>shopping_cart</mat-icon>
        {{ product().inStock ? 'Add to Cart' : 'Out of Stock' }}
      </button>
      <button
        matIconButton
        [class]="isInWishlist() ? '!text-red-700' : '!text-gray-400'"
        (click)="toggleWishlist()"
      >
        <mat-icon>{{
          isInWishlist() ? 'favorite' : 'favorite_border'
        }}</mat-icon>
      </button>
      <button matIconButton>
        <mat-icon>share</mat-icon>
      </button>
    </div>

    <div
      class="pt-6 flex flex-col gap-2 text-[var(--mat-sys-on-surface)] text-xs"
    >
      <div class="flex items-center gap-3">
        <mat-icon class="small">local_shipping</mat-icon>
        <span>Free shipping on orders over $50</span>
      </div>
      <div class="flex items-center gap-3">
        <mat-icon class="small">autorenew</mat-icon>
        <span>30-day return policy</span>
      </div>
      <div class="flex items-center gap-3">
        <mat-icon class="small">shield</mat-icon>
        <span>2-year warranty included</span>
      </div>
    </div>
  `,
  styles: ``,
})
export class ProductInfo {
  product = input.required<Product>();
  store = inject(EcommerceStore);
  quantity = signal(1);

  isInWishlist = computed(() =>
    this.store.wishlistItems().find((p) => p.id === this.product().id),
  );

  toggleWishlist() {
    if (this.isInWishlist()) {
      this.store.removeFromWishlist(this.product());
    } else {
      this.store.addToWishlist(this.product());
    }
  }
}
