import { Directive } from '@angular/core';

@Directive({
  selector: '[libShopViewPanel]',
  host: {
    class: 'border border-gray-200 rounded-xl p-6 bg-[var(--mat-sys-surface)] ',
  },
})
export class ViewPanel {}
