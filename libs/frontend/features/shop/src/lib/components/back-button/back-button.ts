import { Component, input, output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lib-shop-back-button',
  imports: [MatButton, MatIcon, RouterLink],
  template: `
    <button
      matButton="text"
      [routerLink]="navigateTo() ?? null"
      class="-ms-2 flex items-center gap-1"
      (click)="backClicked.emit()"
    >
      <mat-icon>arrow_back</mat-icon>
      <ng-content />
    </button>
  `,
  host: {
    class: 'block',
  },
  styles: ``,
})
export class BackButton {
  navigateTo = input<string>();
  backClicked = output<void>();
}
