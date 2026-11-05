import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { WidgetStore } from '../widget.store';

@Component({
  selector: 'lib-widget-options',
  imports: [MatIcon, MatButtonModule],
  host: {
    class:
      'absolute inset-0 z-[2] flex box-border h-full w-full flex-col items-center justify-center rounded-[inherit] bg-surface-container text-inverse-surface',
  },
  template: `
    @if (store.widget(); as widget) {
    <button
      [style.view-transition-name]="'widget-close-' + widget.id"
      matIconButton
      type="button"
      class="absolute! top-0 right-0"
      aria-label="Close widget options"
      (click)="store.closeOptions()"
    >
      <mat-icon>close</mat-icon>
    </button>
    <button
      [style.view-transition-name]="'widget-delete-' + widget.id"
      matButton="filled"
      type="button"
      class="error"
      (click)="store.removeWidget()"
    >
      Confirm delete?
    </button>
    }
  `,
})
export class WidgetOptionsComponent {
  readonly store = inject(WidgetStore);
}
