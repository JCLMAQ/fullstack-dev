import {
  Component,
  ChangeDetectionStrategy,
  input,
  inject,
} from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { StarRating } from '../../../components/star-rating/star-rating';
import { Product } from '../../../models/product';
import { EcommerceStore } from '../../../ecommerce-store';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'lib-shop-wishlist-card',
  standalone: true,
  imports: [MatButton, MatIcon, StarRating, MatIconButton],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      class="relative bg-[var(--mat-sys-surface)] rounded-xl overflow-hidden shadow-lg transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-xl flex flex-col h-full"
    >
      <!-- Product Image with Delete Icon -->
      <img
        [src]="product().imageUrl"
        [alt]="product().name"
        class="w-full h-[300px] object-cover rounded-t-xl"
      />
      <button
        class="!absolute top-3 right-3 w-10 h-10 rounded-full !bg-[var(--mat-sys-surface)] border-0 shadow-md flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-lg text-[var(--mat-sys-on-surface-variant)] hover:text-red-500"
        (click)="store.removeFromWishlist(product())"
        aria-label="Remove from wishlist"
        matIconButton
      >
        <mat-icon>delete</mat-icon>
      </button>

      <!-- Product Info -->
      <div class="p-5 flex flex-col flex-1">
        <h3
          class="text-lg font-semibold text-[var(--mat-sys-on-surface)] mb-2 leading-tight"
        >
          {{ product().name }}
        </h3>
        <p
          class="text-sm text-[var(--mat-sys-on-surface-variant)] mb-4 flex-1 leading-relaxed"
        >
          {{ product().description }}
        </p>

        <!-- Rating -->
        <lib-shop-star-rating class="mb-3" [rating]="product().rating">
          ({{ product().reviewCount }})
        </lib-shop-star-rating>

        <!-- Stock Status -->
        <div
          class="text-sm font-medium mb-4"
          [class]="product().inStock ? 'text-green-600' : 'text-red-600'"
        >
          {{ product().inStock ? 'In Stock' : 'Out of Stock' }}
        </div>

        <!-- Price and Move to Cart -->
        <div class="flex flex-col justify-between mt-auto">
          <span class="text-2xl font-bold text-[var(--mat-sys-on-surface)]"
            >\${{ product().price }}</span
          >
          <button
            matButton="filled"
            class="w-full mt-4 py-2 text-sm rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
            [disabled]="!product().inStock"
            (click)="store.moveToCart(product())"
          >
            Move to Cart
          </button>
        </div>
      </div>
    </div>
  `,
})
export class WishlistCard {
  product = input.required<Product>();

  store = inject(EcommerceStore);
}
