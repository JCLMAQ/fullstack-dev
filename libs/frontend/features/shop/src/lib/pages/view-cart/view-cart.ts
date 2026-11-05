import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { TeaseWishlist } from './widgets/tease-wishlist/tease-wishlist';
import { ListCartItems } from './widgets/list-cart-items/list-cart-items';
import { SummarizeOrder } from '../../components/summarize-order/summarize-order';
import { EcommerceStore } from '../../ecommerce-store';
import { BackButton } from '../../components/back-button/back-button';
import { Router } from '@angular/router';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'lib-shop-view-cart',
  imports: [
    TeaseWishlist,
    ListCartItems,
    SummarizeOrder,
    BackButton,
    MatButton,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="mx-auto max-w-[1200px] py-6">
      <lib-shop-back-button class="mb-6" navigateTo="/shop/products/all"
        >Continue Shopping</lib-shop-back-button
      >

      <h1 class="text-3xl font-extrabold mb-4">Shopping Cart</h1>

      <lib-shop-tease-wishlist class="mb-6" />

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div class="lg:col-span-2">
          <lib-shop-list-cart-items />
        </div>
        <div>
          <lib-shop-summarize-order>
            <ng-container actionButtons>
              <button
                matButton="filled"
                class="w-full mt-6 py-3"
                (click)="proceedToCheckout()"
              >
                Proceed to Checkout
              </button>
            </ng-container>
          </lib-shop-summarize-order>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export default class ViewCart {
  store = inject(EcommerceStore);
  router = inject(Router);

  proceedToCheckout() {
    if (this.store.user()) {
      this.router.navigate(['/shop/checkout']);
    } else {
      this.router.navigate(['/auth/login']);
    }
  }
}
