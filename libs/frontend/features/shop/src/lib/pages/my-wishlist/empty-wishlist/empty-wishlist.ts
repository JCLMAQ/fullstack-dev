import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lib-shop-empty-wishlist',
  standalone: true,
  imports: [MatButton, MatIcon, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="flex flex-col items-center justify-center py-16 text-center">
      <!-- Heart Icon -->
      <div
        class="w-20 h-20 mb-8 rounded-full bg-[var(--mat-sys-surface-container-low)] flex items-center justify-center"
      >
        <mat-icon class="text-gray-400 transform scale-150"
          >favorite_border</mat-icon
        >
      </div>

      <!-- Message -->
      <h2 class="text-2xl font-bold text-[var(--mat-sys-on-surface)] mb-3">
        Your wishlist is empty
      </h2>
      <p class="text-[var(--mat-sys-on-surface-variant)] mb-8">
        Save items you love for later!
      </p>

      <!-- Start Shopping Button -->
      <button
        matButton="filled"
        routerLink="/shop/products/all"
        class="min-w-[200px] py-3"
      >
        Start Shopping
      </button>
    </div>
  `,
  styles: `
    :host {
      display: block;
      width: 100%;
    }
  `,
})
export class EmptyWishlist {}
