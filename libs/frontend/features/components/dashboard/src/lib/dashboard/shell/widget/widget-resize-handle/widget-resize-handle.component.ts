import {
  Component,
  computed,
  DestroyRef,
  inject,
  input
} from '@angular/core';
import { ResizeAxis } from '../../../engine/grid/widget-resize.types';
import { WidgetStore } from '../widget.store';
import { WidgetResizeHandleStore } from './widget-resize-handle.store';

const GRIP_DOT_CLASSES = 'block size-1 shrink-0 rounded-full bg-current';

@Component({
  selector: 'lib-widget-resize-handle',
  providers: [WidgetResizeHandleStore],
  template: `
    @if (visible() || active()) {
      <div
        role="separator"
        tabindex="0"
        [class]="containerClasses()"
        [style.left.px]="anchorLeftPx()"
        [style.top.px]="anchorTopPx()"
        [attr.aria-orientation]="
          axis() === 'horizontal' ? 'vertical' : 'horizontal'
        "
        [attr.aria-valuenow]="value()"
        [attr.aria-valuemin]="min()"
        [attr.aria-valuemax]="max() ?? null"
        [attr.aria-label]="ariaLabel()"
        (pointerdown)="store.startPointerResize($event)"
        (keydown)="store.handleKeyDown($event)"
      >
        <div [class]="handleClasses()">
          <div [class]="gripClasses()" aria-hidden="true">
            <span [class]="gripDotClasses"></span>
            <span [class]="gripDotClasses"></span>
            <span [class]="gripDotClasses"></span>
          </div>
        </div>
      </div>
    }
  `,
})
export class WidgetResizeHandleComponent {
  readonly store = inject(WidgetResizeHandleStore);
  private readonly widgetStore = inject(WidgetStore);
  readonly gripDotClasses = GRIP_DOT_CLASSES;

  axis = input.required<ResizeAxis>();

  value = computed(() => this.widgetStore.spanValue(this.axis()));
  min = computed(() => this.widgetStore.spanMin(this.axis()));
  max = computed(() => this.widgetStore.spanMax(this.axis()));
  visible = computed(() => this.widgetStore.contextualControlsVisible());
  active = computed(() => this.widgetStore.activeAxis() === this.axis());
  ariaLabel = computed(() => {
    const label = this.widgetStore.widget()?.label ?? 'widget';
    const dimension = this.axis() === 'horizontal' ? 'width' : 'height';
    return `Resize ${label} ${dimension}`;
  });

  /** Follow continuous content edge while resizing; otherwise stick to the host edge. */
  anchorLeftPx = computed(() => {
    if (this.axis() !== 'horizontal') {
      return null;
    }
    return this.widgetStore.contentWidthPx();
  });

  anchorTopPx = computed(() => {
    if (this.axis() !== 'vertical') {
      return null;
    }
    return this.widgetStore.contentHeightPx();
  });

  containerClasses = computed(() => {
    const focusRing =
      'outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2';
    const base = `absolute z-10 flex size-11 touch-none items-center justify-center ${focusRing}`;
    const followsContent =
      this.axis() === 'horizontal'
        ? this.anchorLeftPx() !== null
        : this.anchorTopPx() !== null;

    if (this.axis() === 'horizontal') {
      // Idle: right-0 + translate-x-1/2 centers on the host edge.
      // Follow content: left = width needs -translate-x-1/2 to center on that edge.
      const edge = followsContent
        ? 'top-1/2 -translate-x-1/2 -translate-y-1/2'
        : 'top-1/2 right-0 -translate-y-1/2 translate-x-1/2';
      return `${base} ${edge} cursor-col-resize`;
    }

    const edge = followsContent
      ? 'left-1/2 -translate-x-1/2 -translate-y-1/2'
      : 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2';
    return `${base} ${edge} cursor-row-resize`;
  });

  handleClasses = computed(() => {
    const shape =
      this.axis() === 'horizontal' ? 'h-8 w-3 rounded-md' : 'h-3 w-8 rounded-md';

    const base = `flex items-center justify-center border border-primary bg-surface-container-high shadow-md shadow-primary/25 transition-all duration-150 hover:shadow-lg hover:shadow-primary/30 ${shape}`;

    if (this.active()) {
      return `${base} border-primary! bg-primary! shadow-lg shadow-primary/30`;
    }

    return base;
  });

  gripClasses = computed(() => {
    const color = this.active() ? 'text-on-primary' : 'text-primary';
    const layout =
      this.axis() === 'horizontal'
        ? 'flex flex-col items-center gap-1'
        : 'flex flex-row items-center gap-1';

    return `${layout} justify-center ${color}`;
  });

  constructor() {
    this.store.syncAxis(this.axis);
    inject(DestroyRef).onDestroy(() => this.store.destroy());
  }
}
