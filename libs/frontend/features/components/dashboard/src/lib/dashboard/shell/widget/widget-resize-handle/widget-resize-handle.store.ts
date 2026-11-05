import { inject } from '@angular/core';
import {
  patchState,
  signalStore,
  withMethods,
  withState,
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, tap } from 'rxjs';
import {
  clampSpan,
  keyboardDeltaForAxis,
} from '../../../engine/grid/dashboard-grid.helper';
import { ResizeAxis } from '../../../engine/grid/widget-resize.types';
import { WidgetStore } from '../widget.store';
import { ResizePointerSession } from './widget-resize-pointer.session';

type WidgetResizeHandleState = {
  axis: ResizeAxis;
};

export const WidgetResizeHandleStore = signalStore(
  withState<WidgetResizeHandleState>({
    axis: 'horizontal',
  }),
  withMethods((store, widgetStore = inject(WidgetStore)) => {
    let pointerSession: ResizePointerSession | null = null;

    const syncAxis = rxMethod<ResizeAxis>(
      pipe(tap((axis) => patchState(store, { axis }))),
    );

    const cancelActiveInteraction = (): void => {
      widgetStore.cancelSpan(store.axis());
      const session = pointerSession;
      pointerSession = null;
      session?.dispose(true);
    };

    const destroy = (): void => {
      const session = pointerSession;
      if (!session) {
        return;
      }

      pointerSession = null;

      if (widgetStore.activeAxis() === store.axis()) {
        widgetStore.cancelSpan(store.axis());
        widgetStore.setResizeActive(store.axis(), false);
      }

      session.dispose(false);
    };

    const startPointerResize = (event: PointerEvent): void => {
      const axis = store.axis();

      pointerSession?.dispose(false);
      widgetStore.setResizeActive(axis, true);

      pointerSession = new ResizePointerSession({
        axis,
        getStartSpan: () =>
          widgetStore.interactionStartSpan() ?? widgetStore.spanValue(axis),
        getMetrics: () =>
          widgetStore.interactionGridMetrics() ?? widgetStore.gridMetrics(),
        getMin: () => widgetStore.spanMin(axis),
        getMax: () => widgetStore.spanMax(axis),
        onPreview: (preview) => widgetStore.previewResize(preview),
        onCommit: (nextValue) => widgetStore.commitSpan(axis, nextValue, true),
        onCancel: () => widgetStore.cancelSpan(axis),
        onEscape: cancelActiveInteraction,
        onEnd: () => widgetStore.setResizeActive(axis, false),
        isActive: () => widgetStore.activeAxis() === axis,
      });

      pointerSession.start(event);
    };

    const handleKeyDown = (event: KeyboardEvent): void => {
      const axis = store.axis();

      if (event.key === 'Escape') {
        event.preventDefault();
        event.stopPropagation();
        cancelActiveInteraction();
        return;
      }

      const delta = keyboardDeltaForAxis(axis, event.key);
      if (delta === 0) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      const currentValue = widgetStore.spanValue(axis);
      const nextValue = clampSpan(
        currentValue + delta,
        widgetStore.spanMin(axis),
        widgetStore.spanMax(axis),
      );

      if (nextValue === currentValue) {
        return;
      }

      widgetStore.commitSpan(axis, nextValue, true);
    };

    return {
      syncAxis,
      destroy,
      startPointerResize,
      handleKeyDown,
    };
  }),
);
