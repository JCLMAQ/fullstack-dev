import {
  Component,
  ChangeDetectionStrategy,
  input,
  inject,
  computed,
} from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Product } from '../../../models/product';
import { EcommerceStore } from '../../../ecommerce-store';
import { StarRating } from '../../../components/star-rating/star-rating';
import { RouterLink } from '@angular/router';
import { MatIconButton } from '@angular/material/button';
import { ResponsiveManager } from '../../../services/responsive-manager';

@Component({
  selector: 'lib-shop-product-card',
  imports: [MatButton, MatIcon, StarRating, RouterLink, MatIconButton],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      class="relative bg-[var(--mat-sys-surface)] cursor-pointer rounded-xl overflow-hidden shadow-lg transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-xl flex flex-col h-full"
    >
      <a [routerLink]="['/shop/product', product().id]">
        <img
          [src]="product().imageUrl"
          [alt]="product().name"
          class="w-full h-[300px] object-cover rounded-t-xl"
          [style.view-transition-name]="
            responsiveManager.largeWidth()
              ? 'product-image-' + product().id
              : null
          "
        />
      </a>
      <button
        class="!absolute z-10 top-3 right-3 w-10 h-10 rounded-full !bg-[var(--mat-sys-surface)] border-0 shadow-md flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-lg"
        [class]="isInWishlist() ? '!text-red-500' : '!text-gray-400'"
        (click)="toggleWishlist(product())"
        [style.view-transition-name]="'wishlist-' + product().id"
        matIconButton
      >
        <mat-icon>{{
          isInWishlist() ? 'favorite' : 'favorite_border'
        }}</mat-icon>
      </button>

      <!-- Product Info -->
      <div class="p-5 flex flex-col flex-1">
        <h3
          class="text-lg font-semibold text-[var(--mat-sys-on-surface)] mb-2 leading-tight"
          [routerLink]="['/shop/product', product().id]"
        >
          {{ product().name }}
        </h3>
        <p
          class="text-sm text-[var(--mat-sys-on-surface-variant)] mb-4 flex-1 leading-relaxed"
        >
          {{ product().description }}
        </p>

        <lib-shop-star-rating class="mb-3" [rating]="product().rating">
          ({{ product().reviewCount }})
        </lib-shop-star-rating>

        <!-- Stock Status -->
        <div
          class="text-sm font-medium mb-4"
          [class]="product().inStock ? 'text-green-600' : 'danger'"
        >
          {{ product().inStock ? 'In Stock' : 'Out of Stock' }}
        </div>

        <!-- Price and Add to Cart -->
        <div class="flex items-center justify-between mt-auto">
          <span class="text-2xl font-bold text-[var(--mat-sys-on-surface)]"
            >\${{ product().price }}</span
          >
          <button
            matButton="filled"
            class="flex items-center gap-2"
            [disabled]="!product().inStock"
            (click)="store.addToCart(product())"
          >
            <mat-icon>shopping_cart</mat-icon>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class ProductCard {
  product = input.required<Product>();
  store = inject(EcommerceStore);

  responsiveManager = inject(ResponsiveManager);

  isInWishlist = computed(() =>
    this.store.wishlistItems().find((p) => p.id === this.product().id),
  );

  toggleWishlist(product: Product) {
    if (this.isInWishlist()) {
      this.store.removeFromWishlist(product);
    } else {
      this.store.addToWishlist(product);
    }
  }
}
