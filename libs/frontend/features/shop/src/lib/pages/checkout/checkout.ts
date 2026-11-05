import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { ShippingForm } from './shipping-form/shipping-form';
import { PaymentForm } from './payment-form/payment-form';
import { SummarizeOrder } from '../../components/summarize-order/summarize-order';
import { BackButton } from '../../components/back-button/back-button';
import { EcommerceStore } from '../../ecommerce-store';

@Component({
  selector: 'lib-shop-checkout',
  imports: [ShippingForm, PaymentForm, SummarizeOrder, BackButton, MatButton],
  template: `
    <div class="mx-auto max-w-[1200px] py-6">
      <lib-shop-back-button class="mb-4" navigateTo="/shop/cart"
        >Back to Cart</lib-shop-back-button
      >

      <h1 class="text-3xl font-extrabold mb-4">Checkout</h1>

      <div class="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div class="lg:col-span-3 flex flex-col gap-6">
          <lib-shop-shipping-form />
          <lib-shop-payment-form />
        </div>
        <div class="lg:col-span-2">
          <lib-shop-summarize-order>
            <ng-container checkoutItems>
              @for (item of store.cartItems(); track item.product.id) {
                <div class="text-sm flex justify-between">
                  <span>{{ item.product.name }} x {{ item.quantity }}</span>
                  <span>\${{ item.product.price * item.quantity }}</span>
                </div>
              }
            </ng-container>

            <ng-container actionButtons>
              <button
                matButton="filled"
                class="w-full mt-6 py-3"
                [disabled]="store.loading()"
                (click)="store.placeOrder()"
              >
                {{ store.loading() ? 'Processing...' : 'Place Order' }}
              </button>
            </ng-container>
          </lib-shop-summarize-order>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export default class Checkout {
  store = inject(EcommerceStore);
}
