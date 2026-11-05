import {
  Component,
  ChangeDetectionStrategy,
  inject,
  input,
} from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { CartItem } from '../../../../models/cart';
import { MatIconButton } from '@angular/material/button';
import { EcommerceStore } from '../../../../ecommerce-store';
import { QtySelector } from '../../../../components/qty-selector/qty-selector';

@Component({
  selector: 'lib-shop-show-cart-item',
  imports: [MatIcon, MatIconButton, QtySelector],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="grid grid-cols-3 grid-cols-[3fr_1fr_1fr]">
      <div class="flex items-center gap-4">
        <div
          class="w-24 h-24 rounded-lg bg-[var(--mat-sys-surface-container-low)] overflow-hidden flex items-center justify-center"
        >
          <img
            [src]="item().product.imageUrl"
            [alt]="item().product.name"
            width="96"
            height="96"
            class="w-full h-full object-cover"
          />
        </div>
        <div>
          <div class="text-[var(--mat-sys-on-surface)] text-lg font-semibold">
            {{ item().product.name }}
          </div>
          <div class="text-[var(--mat-sys-on-surface-variant)] text-lg">
            \${{ item().product.price }}
          </div>
        </div>
      </div>

      <lib-shop-qty-selector
        [quantity]="item().quantity"
        (qtyUpdated)="
          store.setItemQuantity({
            productId: item().product.id,
            quantity: $event,
          })
        "
      />

      <div class="flex flex-col items-end">
        <div class="text-right font-semibold text-lg">
          \${{ (item().product.price * item().quantity).toFixed(2) }}
        </div>
        <div class="flex -me-3">
          <button matIconButton (click)="store.moveToWishlist(item().product)">
            <mat-icon>favorite_border</mat-icon>
          </button>
          <button
            matIconButton
            class="danger"
            (click)="store.removeFromCart(item().product)"
          >
            <mat-icon>delete</mat-icon>
          </button>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class ShowCartItem {
  protected store = inject(EcommerceStore);
  item = input.required<CartItem>();
}
