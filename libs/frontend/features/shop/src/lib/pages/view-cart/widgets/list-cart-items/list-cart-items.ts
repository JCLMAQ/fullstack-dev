import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { ShowCartItem } from '../show-cart-item/show-cart-item';
import { CommonModule } from '@angular/common';
import { EcommerceStore } from '../../../../ecommerce-store';
import { ViewPanel } from '../../../../directives/view-panel';

@Component({
  selector: 'lib-shop-list-cart-items',
  imports: [CommonModule, ShowCartItem, ViewPanel],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div libShopViewPanel>
      <h2 class="text-2xl font-bold mb-4">
        Cart Items ({{ store.itemCount() }})
      </h2>
      <div class="flex flex-col gap-6">
        @for (item of store.cartItems(); track item.product.id) {
          <lib-shop-show-cart-item [item]="item" />
        }
      </div>
    </div>
  `,
  styles: ``,
})
export class ListCartItems {
  protected store = inject(EcommerceStore);
}
