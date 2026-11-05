import {
  Component,
  ElementRef,
  inject,
  input
} from '@angular/core';

import { NgComponentOutlet } from '@angular/common';

import { WidgetHeaderComponent } from './widget-header/widget-header.component';

import { WidgetOptionsComponent } from './widget-options/widget-options.component';

import { WidgetResizeHandleComponent } from './widget-resize-handle/widget-resize-handle.component';

import { WidgetStore } from './widget.store';

@Component({
  selector: 'lib-widget',

  providers: [WidgetStore],

  imports: [
    WidgetHeaderComponent,

    WidgetOptionsComponent,

    WidgetResizeHandleComponent,

    NgComponentOutlet,
  ],

  template: `
    <div
      class="relative h-full rounded-[inherit]"
      [class.overflow-visible]="store.resizeActive()"
      [class.opacity-30]="store.isKeyboardLifted()"
    >
      <div
        class="relative mat-elevation-z3 overflow-hidden box-border rounded-[inherit] p-7!"
        [class.h-full]="store.contentHeightPx() === null"
        [class.w-full]="store.contentWidthPx() === null"
        [style.width.px]="store.contentWidthPx()"
        [style.height.px]="store.contentHeightPx()"
        [style.background-color]="
          store.widget()?.backgroundColor ?? 'var(--mat-sys-surface-bright)'
        "
        [style.color]="store.widget()?.color ?? 'inherit'"
      >
        <lib-widget-header (dragStart)="onDragStart($event)" />

        @if (store.widget(); as widget) {
          <ng-container [ngComponentOutlet]="widget.content" />
        }

        @if (store.showOptions()) {
          <lib-widget-options />
        }

        <div class="sr-only" aria-live="polite">
          {{ store.resizeAnnouncement() }}
        </div>
      </div>

      @if (store.snappedPreviewWidthPx() !== null) {
        <div
          class="pointer-events-none absolute inset-y-0 left-0 z-5 rounded-[inherit] border-2 border-primary bg-primary/10"
          [style.width.px]="store.snappedPreviewWidthPx()"
          aria-hidden="true"
        ></div>
      }
      @if (store.snappedPreviewHeightPx() !== null) {
        <div
          class="pointer-events-none absolute inset-x-0 top-0 z-5 rounded-[inherit] border-2 border-primary bg-primary/10"
          [style.height.px]="store.snappedPreviewHeightPx()"
          aria-hidden="true"
        ></div>
      }

      @if (
        !store.showOptions() &&
        !store.isActiveDragPreview() &&
        !store.isKeyboardLifted()
      ) {
        @if (store.layoutMode() === 'desktop') {
          <lib-widget-resize-handle axis="horizontal" />
        }

        <lib-widget-resize-handle axis="vertical" />
      }
    </div>
  `,

  host: {
    '[style.grid-area]': 'store.gridArea()',

    '[style.transform]': 'store.displacementTransform()',

    '[style.transition]': 'store.displacementTransition()',

    '[class.z-10]': 'store.isActiveDragPreview()',

    '[class.overflow-visible]': 'store.resizeActive()',

    class:
      'block rounded-2xl pb-4 group/widget outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',

    tabindex: '0',

    role: 'group',

    '[attr.aria-label]': 'store.ariaLabel()',

    '[attr.data-widget-id]': 'widgetId()',

    '(mouseenter)': 'store.setHovered(true)',

    '(mouseleave)': 'store.setHovered(false)',

    '(focusin)': 'store.setFocusWithin(true)',

    '(focusout)': 'onFocusOut($event)',

    '(pointerdown)': 'onPointerDown($event)',
  },
})
export class WidgetComponent {
  readonly store = inject(WidgetStore);

  private readonly elementRef = inject(ElementRef<HTMLElement>);

  widgetId = input.required<number>();

  constructor() {
    this.store.initialize(this.widgetId);
  }

  onFocusOut(event: FocusEvent): void {
    const next = event.relatedTarget;

    if (next instanceof Node && event.currentTarget instanceof Node) {
      if (event.currentTarget.contains(next)) {
        return;
      }
    }

    this.store.setFocusWithin(false);

    this.store.setTouchSelected(false);
  }

  onPointerDown(event: PointerEvent): void {
    if (event.pointerType === 'touch' || event.pointerType === 'pen') {
      this.store.setTouchSelected(true);
    }
  }

  onDragStart(event: PointerEvent): void {
    this.store.beginPointerMove(event, this.elementRef.nativeElement);
  }
}
