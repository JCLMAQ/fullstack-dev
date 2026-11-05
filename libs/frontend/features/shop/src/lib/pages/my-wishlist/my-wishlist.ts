import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { WishlistCard } from './wishlist-card/wishlist-card';
import { EmptyWishlist } from './empty-wishlist/empty-wishlist';
import { EcommerceStore } from '../../ecommerce-store';
import { BackButton } from '../../components/back-button/back-button';

@Component({
  selector: 'lib-shop-my-wishlist',
  imports: [WishlistCard, EmptyWishlist, BackButton],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="mx-auto max-w-[1200px] py-6 px-4">
      <lib-shop-back-button class="mb-6" navigateTo="/shop/products/all"
        >Continue Shopping</lib-shop-back-button
      >

      @if (store.wishlistItems().length > 0) {
        <!-- Wishlist Header -->
        <div class="flex justify-between items-center mb-6">
          <h1 class="text-2xl font-bold">My Wishlist</h1>
          <span class="text-[var(--mat-sys-on-surface-variant)] text-xl"
            >{{ store.wishlistCount() }} items</span
          >
        </div>

        <!-- Grid of Wishlist Items -->
        <div class="responsive-grid">
          @for (product of store.wishlistItems(); track product.id) {
            <lib-shop-wishlist-card [product]="product" />
          }
        </div>

        <!-- Clear Wishlist Button -->
        <div class="mt-8 flex justify-center">
          <button
            matButton="outlined"
            class="danger"
            (click)="store.clearWishlist()"
          >
            Clear Wishlist
          </button>
        </div>
      } @else {
        <lib-shop-empty-wishlist />
      }
    </div>
  `,
})
export default class MyWishlist {
  protected store = inject(EcommerceStore);
}
