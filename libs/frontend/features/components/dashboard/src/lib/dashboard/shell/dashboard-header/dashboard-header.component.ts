import {
  Component,
  output,
  signal
} from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {
  WidgetAddDragStartEvent,
  WidgetsPanelComponent,
} from '../widgets-panel/widgets-panel.component';

@Component({
  selector: 'lib-dashboard-header',
  imports: [MatIcon, MatButtonModule, WidgetsPanelComponent],
  template: `
    <div
      class="flex flex-row items-center justify-between mb-4 position-relative gap-2"
    >
      <h2 class="text-2xl">Channel Dashboard</h2>
      <div
        class="flex-1 text-sm text-on-surface-variant text-right hidden lg:block"
      ></div>
      @if (widgetsOpen()) {
        <lib-widgets-panel
          id="dashboard-widgets-panel"
          class="mat-elevation-z8"
          (widgetAddDragStart)="widgetAddDragStart.emit($event)"
        />
      }
      <button
        matButton="filled"
        type="button"
        [attr.aria-expanded]="widgetsOpen()"
        aria-controls="dashboard-widgets-panel"
        (click)="widgetsOpen.set(!widgetsOpen())"
      >
        @if (widgetsOpen()) {
          <mat-icon>close</mat-icon>
        } @else {
          <mat-icon>add_circle</mat-icon>
        }
        Widgets
      </button>
    </div>
  `,
})
export class DashboardHeaderComponent {
  widgetsOpen = signal(false);

  widgetAddDragStart = output<WidgetAddDragStartEvent>();
}
