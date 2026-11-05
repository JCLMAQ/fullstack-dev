import {
  Component,
  inject,
  output
} from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { DashboardPersistenceStore } from '../../engine/stores/dashboard-persistence.store';
import { Widget } from '../../dashboard.model';

export type WidgetAddDragStartEvent = {
  event: PointerEvent;
  widgetId: number;
};

@Component({
  selector: 'lib-widgets-panel',
  imports: [MatIcon],
  template: `
    <div class="flex flex-col gap-2 p-4 rounded-lg">
      <div class="flex gap-2 items-center mb-2">
        <mat-icon>drag_indicator</mat-icon>
        Widgets
      </div>
      @for (widget of store.widgetsToAdd(); track widget.id) {
        <button
          type="button"
          class="text-sm text-center rounded-2xl bg-surface-container
          text-inverse-surface cursor-grab touch-none px-4 py-2
          hover:bg-surface-container-high mat-elevation-z2
          active:cursor-grabbing focus-visible:outline-none
          focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          [attr.aria-label]="'Add ' + widget.label + ' widget'"
          (pointerdown)="onAddPointerDown($event, widget)"
          (keydown)="onAddKeyDown($event, widget)"
        >
          {{ widget.label }}
        </button>
      } @empty {
        <p class="text-sm text-on-primary-container/80">All widgets added</p>
      }
    </div>
  `,
  host: {
    class:
      '[view-transition-name:widgets-panel] bg-primary-container text-on-primary-container absolute right-[10px] top-[80px] w-[200px] z-2 rounded-2xl',
  },
})
export class WidgetsPanelComponent {
  store = inject(DashboardPersistenceStore);

  widgetAddDragStart = output<WidgetAddDragStartEvent>();

  onAddPointerDown(event: PointerEvent, widget: Widget): void {
    if (event.button !== 0) {
      return;
    }

    this.emitAddDragStart(event, widget);
  }

  onAddKeyDown(event: KeyboardEvent, widget: Widget): void {
    if (event.key !== 'Enter' && event.key !== ' ') {
      return;
    }

    event.preventDefault();

    const target = event.currentTarget;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const rect = target.getBoundingClientRect();
    this.emitAddDragStart(
      new PointerEvent('pointerdown', {
        clientX: rect.left + rect.width / 2,
        clientY: rect.top + rect.height / 2,
        button: 0,
        bubbles: true,
      }),
      widget,
    );
  }

  private emitAddDragStart(event: PointerEvent, widget: Widget): void {
    this.widgetAddDragStart.emit({
      event,
      widgetId: widget.id,
    });
  }
}
