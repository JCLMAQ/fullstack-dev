import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { EcommerceStore } from '../../ecommerce-store';
import { ViewPanel } from '../../directives/view-panel';

@Component({
  selector: 'lib-shop-summarize-order',
  imports: [ViewPanel],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div libShopViewPanel>
      <h2 class="text-2xl font-bold mb-4">Order Summary</h2>
      <div class="space-y-2 border-b pb-4">
        <ng-content select="[checkoutItems]" />
      </div>

      <div class="space-y-3 text-lg pt-4">
        <div class="flex justify-between">
          <span>Subtotal</span>
          <span>\${{ store.total().toFixed(2) }}</span>
        </div>
        <div class="flex justify-between">
          <span>Tax</span>
          <span>$0.00</span>
        </div>
        <div class="border-t pt-3 mt-3 flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>\${{ store.total().toFixed(2) }}</span>
        </div>
      </div>

      <ng-content select="[actionButtons]" />
    </div>
  `,
  styles: ``,
})
export class SummarizeOrder {
  protected store = inject(EcommerceStore);
}
