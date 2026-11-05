import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatRadioGroup } from '@angular/material/radio';
import { MatRadioButton } from '@angular/material/radio';
import { ViewPanel } from '../../../directives/view-panel';

@Component({
  selector: 'lib-shop-payment-form',
  imports: [MatIcon, MatRadioGroup, MatRadioButton, ViewPanel],
  template: `
    <div libShopViewPanel>
      <h2 class="text-2xl font-bold mb-6 flex items-center gap-2">
        <mat-icon>payment</mat-icon>
        Payment Options
      </h2>
      <div>
        <mat-radio-group [value]="'stripe'">
          <mat-radio-button value="stripe">
            Demonstration — no payment is collected
          </mat-radio-button>
        </mat-radio-group>
      </div>
    </div>
  `,
  styles: ``,
})
export class PaymentForm {}
