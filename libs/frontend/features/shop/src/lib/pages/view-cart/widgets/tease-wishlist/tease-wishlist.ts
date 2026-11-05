import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { EcommerceStore } from '../../../../ecommerce-store';
import { ViewPanel } from '../../../../directives/view-panel';
@Component({
  selector: 'lib-shop-tease-wishlist',
  imports: [MatButton, MatIcon, RouterLink, ViewPanel],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div libShopViewPanel class="flex items-center justify-between">
      <div class="flex items-center gap-3">
        <mat-icon class="text-rose-500">favorite_border</mat-icon>
        <div>
          <h2 class="text-xl font-bold">
            Wishlist ({{ store.wishlistCount() }} items)
          </h2>
          <p class="text-[var(--mat-sys-on-surface-variant)] text-sm">
            You have {{ store.wishlistCount() }} item saved for later
          </p>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <button matButton routerLink="/shop/wishlist">View All</button>
        <button
          class="flex items-center gap-2"
          matButton="filled"
          (click)="store.addAllWishlistToCart()"
        >
          <mat-icon>shopping_cart</mat-icon>
          Add All to Cart
        </button>
      </div>
    </div>
  `,
  styles: ``,
  host: {
    class: 'block',
  },
})
export class TeaseWishlist {
  protected store = inject(EcommerceStore);
}
