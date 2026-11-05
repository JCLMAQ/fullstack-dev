import {
  Component,
  computed,
  input
} from '@angular/core';
import { DashboardGridMetrics } from '../widget-resize.types';

@Component({
  selector: 'lib-dashboard-grid-overlay',
  template: `
    <div
      class="grid h-full w-full gap-x-4 gap-y-0"
      [style.grid-template-columns]="columnTemplate()"
      [style.grid-auto-rows]="rowTrackSize()"
      aria-hidden="true"
    >
      @for (cell of cells(); track cell) {
        <div class="box-border h-full pb-4">
          <div
            class="h-full rounded-2xl border border-dashed border-primary/25 bg-primary/5"
          ></div>
        </div>
      }
    </div>
  `,
  host: {
    class: 'pointer-events-none absolute inset-0 z-0',
  },
})
export class DashboardGridOverlayComponent {
  metrics = input.required<DashboardGridMetrics>();
  rows = input.required<number>();

  columnTemplate = computed(
    () => `repeat(${this.metrics().availableColumns}, minmax(0, 1fr))`
  );

  rowTrackSize = computed(() => `${this.metrics().rowTrackPx}px`);

  cells = computed(() => {
    const count = this.metrics().availableColumns * this.rows();
    return Array.from({ length: count }, (_, index) => index);
  });
}
