import { Component, input, output } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'lib-shop-qty-selector',
  imports: [MatIcon, MatIconButton],
  template: `
    <div class="flex items-center gap-3">
      <div class="inline-flex items-center">
        <button
          [disabled]="quantity() === 1"
          matIconButton
          (click)="qtyUpdated.emit(quantity() - 1)"
        >
          <mat-icon>remove</mat-icon>
        </button>
        <div class="px-3">{{ quantity() }}</div>
        <button matIconButton (click)="qtyUpdated.emit(quantity() + 1)">
          <mat-icon>add</mat-icon>
        </button>
      </div>
    </div>
  `,
  styles: ``,
})
export class QtySelector {
  quantity = input<number>(0);
  qtyUpdated = output<number>();
}
