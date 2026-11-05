import { Component, input } from '@angular/core';

@Component({
  selector: 'lib-dashboard-drag-ghost',
  template: `
    <div
      class="pointer-events-none absolute z-50 rounded-2xl ring-2 ring-inset transition-shadow duration-150"
      [class.ring-primary]="valid()"
      [class.bg-primary/10]="valid()"
      [class.ring-error]="!valid()"
      [class.bg-error/10]="!valid()"
      [style.left.px]="x()"
      [style.top.px]="y()"
      [style.width.px]="width()"
      [style.height.px]="height()"
      aria-hidden="true"
    ></div>
  `,
  host: {
    class: 'pointer-events-none absolute inset-0 z-40',
  },
})
export class DashboardDragGhostComponent {
  x = input.required<number>();
  y = input.required<number>();
  width = input.required<number>();
  height = input.required<number>();
  valid = input.required<boolean>();
}
