import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lib-shop-order-success',
  imports: [MatButton, MatIcon, RouterLink],
  template: `
    <div class="flex justify-center items-center h-[calc(100vh-64px)] py-6">
      <div
        class="flex flex-col items-center justify-center text-center bg-[var(--mat-sys-surface)] rounded-xl shadow p-8 gap-6 max-w-[400px]"
      >
        <mat-icon class="!text-green-500 !h-[56px] !w-[56px] !text-[56px]"
          >check_circle</mat-icon
        >
        <h2 class="font-semibold text-green-600 text-2xl font-bold">
          Demo Order Created
        </h2>
        <p class="text-base">
          Your demonstration order has been created in memory. No payment or
          shipment will occur.
        </p>
        <p class="text-[var(--mat-sys-on-surface-variant)]">
          No confirmation email is sent. This order is lost when you leave or
          reload the shop.
        </p>
        <button
          matButton="filled"
          color="primary"
          class="w-full max-w-xs mt-2"
          routerLink="/shop/products/all"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  `,
  styles: ``,
})
export default class OrderSuccess {}
