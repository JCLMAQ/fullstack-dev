import {
  computed,
  inject,
  Injector,
  runInInjectionContext,
  Signal,
} from '@angular/core';

import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';

import { rxMethod } from '@ngrx/signals/rxjs-interop';

import { pipe, tap } from 'rxjs';

import {
  calculateGridMetrics,
  displayColumnSpan,
  getWidgetMinimumSize,
  GRID_COLUMNS,
  spanToColumnExtent,
  spanToRowExtent,
} from '../../engine/grid/dashboard-grid.helper';
import {
  DashboardLayoutItem,
  Widget,
} from '../../dashboard.model';
import { DashboardDragCoordinator } from '../../engine/drag/dashboard-drag.coordinator';
import { keyboardMoveDeltaForKey } from '../../engine/drag/dashboard-keyboard.helper';
import { DashboardPersistenceStore } from '../../engine/stores/dashboard-persistence.store';
import { DashboardViewStore } from '../../engine/stores/dashboard-view.store';
import {
  DashboardGridMetrics,
  LayoutMode,
  ResizeAxis,
  ResizePreview,
} from '../../engine/grid/widget-resize.types';

type WidgetLocalState = {
  widgetId: number | null;

  widget: Widget | null;

  gridMetrics: DashboardGridMetrics;

  layoutMode: LayoutMode;

  row: number;

  column: number;

  showOptions: boolean;

  hovered: boolean;

  focusWithin: boolean;

  touchSelected: boolean;

  activeAxis: ResizeAxis | null;

  interactionStartSpan: number | null;

  interactionGridMetrics: DashboardGridMetrics | null;

  previewExtentPx: number | null;

  resizeAnnouncement: string;

  previewRows: number;

  previewColumns: number;

  dragging: boolean;

  reducedMotion: boolean;
};

const initialState: WidgetLocalState = {
  widgetId: null,

  widget: null,

  gridMetrics: calculateGridMetrics(0),

  layoutMode: 'desktop',

  row: 1,

  column: 1,

  showOptions: false,

  hovered: false,

  focusWithin: false,

  touchSelected: false,

  activeAxis: null,

  interactionStartSpan: null,

  interactionGridMetrics: null,

  previewExtentPx: null,

  resizeAnnouncement: '',

  previewRows: 1,

  previewColumns: 1,

  dragging: false,

  reducedMotion: false,
};

function resolvePlacement(
  widgetId: number,

  layoutMode: LayoutMode,

  layoutItems: {
    widgetId: number;
    row: number;
    column: number;
    rows: number;
  }[],

  mobileWidgets: { widget: Widget; rows: number }[],

  fallbackRows: number,
): { row: number; column: number; rows: number } {
  if (layoutMode === 'mobile') {
    const entry = mobileWidgets.find((item) => item.widget.id === widgetId);

    return { row: 1, column: 1, rows: entry?.rows ?? fallbackRows };
  }

  const item = layoutItems.find((entry) => entry.widgetId === widgetId);

  return {
    row: item?.row ?? 1,

    column: item?.column ?? 1,

    rows: item?.rows ?? fallbackRows,
  };
}

export const WidgetStore = signalStore(
  withState(initialState),

  withComputed(
    (
      store,
      dragCoordinator = inject(DashboardDragCoordinator),
      viewStore = inject(DashboardViewStore),
    ) => {
      const minSize = computed(() => {
        const widget = store.widget();

        return widget
          ? getWidgetMinimumSize(widget.id)
          : { rows: 1, columns: 1 };
      });

      const displayColumns = computed(() =>
        displayColumnSpan(
          store.previewColumns(),

          store.gridMetrics().availableColumns,
        ),
      );

      const gridArea = computed(() => {
        const mode = store.layoutMode();

        if (mode === 'mobile') {
          return `auto / 1 / span ${store.previewRows()} / span ${GRID_COLUMNS}`;
        }

        const row = store.row();

        const column = store.column();

        return `${row} / ${column} / span ${store.previewRows()} / span ${displayColumns()}`;
      });

      const resizeActive = computed(() => store.activeAxis() !== null);

      const contextualControlsVisible = computed(() => {
        const widgetId = store.widget()?.id;

        const keyboardActiveId = dragCoordinator.keyboardActiveWidgetId();

        const thisWidgetLifted =
          widgetId !== undefined && keyboardActiveId === widgetId;

        return (
          store.hovered() ||
          store.focusWithin() ||
          store.touchSelected() ||
          store.showOptions() ||
          store.activeAxis() !== null ||
          thisWidgetLifted
        );
      });

      const resizeMetrics = computed(
        () => store.interactionGridMetrics() ?? store.gridMetrics(),
      );

      const contentWidthPx = computed(() => {
        if (
          store.activeAxis() !== 'horizontal' ||
          store.previewExtentPx() === null
        ) {
          return null;
        }

        return store.previewExtentPx();
      });

      const contentHeightPx = computed(() => {
        if (
          store.activeAxis() !== 'vertical' ||
          store.previewExtentPx() === null
        ) {
          return null;
        }

        return store.previewExtentPx();
      });

      const snappedPreviewWidthPx = computed(() => {
        if (store.activeAxis() !== 'horizontal') {
          return null;
        }

        return spanToColumnExtent(
          store.previewColumns(),

          resizeMetrics().columnStep,
        );
      });

      const snappedPreviewHeightPx = computed(() => {
        if (store.activeAxis() !== 'vertical') {
          return null;
        }

        return spanToRowExtent(store.previewRows(), resizeMetrics().rowTrackPx);
      });

      const displacementX = computed(() => {
        const widgetId = store.widgetId();

        return widgetId === null ? 0 : viewStore.getDisplacementX(widgetId);
      });

      const displacementY = computed(() => {
        const widgetId = store.widgetId();

        return widgetId === null ? 0 : viewStore.getDisplacementY(widgetId);
      });

      const isKeyboardLifted = computed(() => {
        const widgetId = store.widgetId();

        return (
          widgetId !== null &&
          dragCoordinator.keyboardActiveWidgetId() === widgetId
        );
      });

      const isActiveDragPreview = computed(() => {
        const widgetId = store.widgetId();

        const active = dragCoordinator.activeWidgetDisplacement();

        return (
          dragCoordinator.dragging() &&
          widgetId !== null &&
          active?.widgetId === widgetId
        );
      });

      const isActiveWidgetDisplacement = computed(() => {
        const widgetId = store.widgetId();

        const active = dragCoordinator.activeWidgetDisplacement();

        return widgetId !== null && active?.widgetId === widgetId;
      });

      const displacementTransform = computed(() => {
        const x = displacementX();

        const y = displacementY();

        if (x === 0 && y === 0) {
          return 'none';
        }

        return `translate(${x}px, ${y}px)`;
      });

      const displacementTransition = computed(() => {
        if (store.reducedMotion() || isActiveWidgetDisplacement()) {
          return 'none';
        }

        if (!dragCoordinator.dragging() && !dragCoordinator.resizing()) {
          return 'none';
        }

        return 'transform 300ms ease-out';
      });

      const ariaLabel = computed(() => {
        const widget = store.widget();

        return widget ? `${widget.label} widget` : 'Widget';
      });

      return {
        minSize,

        displayColumns,

        gridArea,

        resizeActive,

        contextualControlsVisible,

        contentWidthPx,

        contentHeightPx,

        snappedPreviewWidthPx,

        snappedPreviewHeightPx,

        displacementX,

        displacementY,

        isKeyboardLifted,

        isActiveDragPreview,

        isActiveWidgetDisplacement,

        displacementTransform,

        displacementTransition,

        ariaLabel,
      };
    },
  ),

  withMethods(
    (
      store,

      persistenceStore = inject(DashboardPersistenceStore),

      viewStore = inject(DashboardViewStore),

      dragCoordinator = inject(DashboardDragCoordinator),

      injector = inject(Injector),
    ) => {
      const applyContext = (context: {
        widgetId: number;
        gridMetrics: DashboardGridMetrics;
        layoutMode: LayoutMode;
        layoutItems: DashboardLayoutItem[];
        mobileWidgets: ReturnType<typeof persistenceStore.mobileWidgets>;
        entityMap: ReturnType<typeof persistenceStore.entityMap>;
      }): void => {
        const {
          widgetId,
          gridMetrics,
          layoutMode,
          layoutItems,
          mobileWidgets,
          entityMap,
        } = context;
        const widget = entityMap[widgetId];
        if (!widget) {
          return;
        }

        const placement = resolvePlacement(
          widgetId,
          layoutMode,
          layoutItems,
          mobileWidgets,
          widget.rows ?? 1,
        );
        const previous = store.widget();
        const widgetChanged = previous?.id !== widget.id;
        const resizeActive = store.activeAxis() !== null;
        const rowsChanged =
          !resizeActive &&
          (widgetChanged || store.previewRows() !== placement.rows);
        const columnsChanged =
          !resizeActive &&
          (widgetChanged || (previous?.columns ?? 1) !== (widget.columns ?? 1));

        patchState(store, {
          widgetId,
          widget,
          gridMetrics,
          row: placement.row,
          column: placement.column,
          layoutMode,
          ...(rowsChanged ? { previewRows: placement.rows } : {}),
          ...(columnsChanged ? { previewColumns: widget.columns ?? 1 } : {}),
        });
      };

      const syncFromContext = rxMethod<{
        widgetId: number;
        gridMetrics: DashboardGridMetrics;
        layoutMode: LayoutMode;
        layoutItems: DashboardLayoutItem[];
        mobileWidgets: ReturnType<typeof persistenceStore.mobileWidgets>;
        entityMap: ReturnType<typeof persistenceStore.entityMap>;
      }>(pipe(tap(applyContext)));

      const initialize = (widgetIdSignal: Signal<number>): void => {
        runInInjectionContext(injector, () => {
          syncFromContext(viewStore.bindWidgetContext(widgetIdSignal));
        });
      };

      const setReducedMotion = (reducedMotion: boolean): void => {
        patchState(store, { reducedMotion });
      };

      const setHovered = (hovered: boolean): void => {
        patchState(store, { hovered });
      };

      const setFocusWithin = (focusWithin: boolean): void => {
        patchState(store, { focusWithin });
      };

      const setTouchSelected = (touchSelected: boolean): void => {
        patchState(store, { touchSelected });
      };

      const openOptions = (): void => {
        patchState(store, { showOptions: true });
      };

      const closeOptions = (): void => {
        patchState(store, { showOptions: false });
      };

      const removeWidget = (): void => {
        const widget = store.widget();

        if (!widget) {
          return;
        }

        persistenceStore.removeWidget(widget.id);
      };

      type ResizeAxisStrategy = {
        readSpan: () => number;
        spanPatch: (value: number) => Partial<WidgetLocalState>;
        restorePatch: (widget: Widget) => Partial<WidgetLocalState>;
        unit: 'columns' | 'rows';
        readMin: () => number;
        readMax: () => number | undefined;
        readStep: () => number;
        spanToExtent: (span: number, metrics: DashboardGridMetrics) => number;
        previewColumns: (snappedSpan: number) => number;
        previewRows: (snappedSpan: number) => number;
        clampStartSpan: (span: number, metrics: DashboardGridMetrics) => number;
        startSpanPatch: (
          startSpan: number,
        ) => Partial<WidgetLocalState> | undefined;
      };

      const resizeAxisStrategies: Record<ResizeAxis, ResizeAxisStrategy> = {
        horizontal: {
          readSpan: () => store.previewColumns(),
          spanPatch: (value) => ({ previewColumns: value }),
          restorePatch: (widget) => ({
            previewColumns: widget.columns ?? 1,
            previewExtentPx: null,
          }),
          unit: 'columns',
          readMin: () => store.minSize().columns,
          readMax: () => GRID_COLUMNS - store.column() + 1,
          readStep: () => store.gridMetrics().columnStep,
          spanToExtent: (span, metrics) =>
            spanToColumnExtent(span, metrics.columnStep),
          previewColumns: (snappedSpan) => snappedSpan,
          previewRows: () => store.previewRows(),
          clampStartSpan: (span, metrics) =>
            span > metrics.availableColumns
              ? displayColumnSpan(span, metrics.availableColumns)
              : span,
          startSpanPatch: (startSpan) =>
            startSpan !== store.previewColumns()
              ? { previewColumns: startSpan }
              : undefined,
        },
        vertical: {
          readSpan: () => store.previewRows(),
          spanPatch: (value) => ({ previewRows: value }),
          restorePatch: (widget) => ({
            previewRows: widget.rows ?? 1,
            previewExtentPx: null,
          }),
          unit: 'rows',
          readMin: () => store.minSize().rows,
          readMax: () => undefined,
          readStep: () => store.gridMetrics().rowTrackPx,
          spanToExtent: (span, metrics) =>
            spanToRowExtent(span, metrics.rowTrackPx),
          previewColumns: () => store.previewColumns(),
          previewRows: (snappedSpan) => snappedSpan,
          clampStartSpan: (span) => span,
          startSpanPatch: () => undefined,
        },
      };

      const previewResize = (preview: ResizePreview): void => {
        const strategy = resizeAxisStrategies[preview.axis];
        const extentChanged =
          preview.continuousExtentPx !== store.previewExtentPx();
        const spanChanged = preview.snappedSpan !== strategy.readSpan();

        if (!extentChanged && !spanChanged) {
          return;
        }

        patchState(store, {
          ...(extentChanged
            ? { previewExtentPx: preview.continuousExtentPx }
            : {}),
          ...(spanChanged ? strategy.spanPatch(preview.snappedSpan) : {}),
        });

        if (spanChanged && viewStore.isWidgetResizing()) {
          viewStore.updateWidgetResizePreview(
            strategy.previewColumns(preview.snappedSpan),
            strategy.previewRows(preview.snappedSpan),
          );
        }
      };

      const commitSpan = (
        axis: ResizeAxis,
        value: number,
        announce = false,
      ): void => {
        const widget = store.widget();
        if (!widget) {
          return;
        }

        const strategy = resizeAxisStrategies[axis];
        patchState(store, strategy.spanPatch(value));

        const nextColumns = strategy.previewColumns(value);
        const nextRows = strategy.previewRows(value);

        if (viewStore.isWidgetResizing()) {
          viewStore.commitWidgetResize(nextColumns, nextRows);
        } else {
          viewStore.applyWidgetResize(widget.id, nextColumns, nextRows);
        }

        if (announce) {
          patchState(store, {
            resizeAnnouncement: `${widget.label} ${value} ${strategy.unit}`,
          });
        }
      };

      const cancelSpan = (axis: ResizeAxis): void => {
        const widget = store.widget();
        if (!widget) {
          return;
        }

        viewStore.cancelWidgetResize();
        patchState(store, resizeAxisStrategies[axis].restorePatch(widget));
      };

      const setResizeActive = (axis: ResizeAxis, active: boolean): void => {
        if (!active) {
          const wasActive = store.activeAxis() !== null;

          if (viewStore.isWidgetResizing()) {
            viewStore.cancelWidgetResize();
          }

          patchState(store, {
            activeAxis: null,
            interactionStartSpan: null,
            interactionGridMetrics: null,
            previewExtentPx: null,
          });

          if (wasActive) {
            viewStore.setGridInteractionActive(false);
          }

          return;
        }

        if (axis === 'horizontal' && store.layoutMode() === 'mobile') {
          return;
        }

        const strategy = resizeAxisStrategies[axis];
        const frozenMetrics = store.gridMetrics();
        const interactionStartSpan = strategy.clampStartSpan(
          strategy.readSpan(),
          frozenMetrics,
        );
        const startSpanPatch = strategy.startSpanPatch(interactionStartSpan);

        patchState(store, {
          activeAxis: axis,
          interactionStartSpan,
          interactionGridMetrics: frozenMetrics,
          previewExtentPx: strategy.spanToExtent(
            interactionStartSpan,
            frozenMetrics,
          ),
          ...startSpanPatch,
        });

        const widget = store.widget();
        if (!widget) {
          return;
        }

        viewStore.beginWidgetResize(widget.id);
      };

      const spanValue = (axis: ResizeAxis): number =>
        resizeAxisStrategies[axis].readSpan();

      const spanMin = (axis: ResizeAxis): number =>
        resizeAxisStrategies[axis].readMin();

      const spanMax = (axis: ResizeAxis): number | undefined =>
        resizeAxisStrategies[axis].readMax();

      const spanStep = (axis: ResizeAxis): number =>
        resizeAxisStrategies[axis].readStep();

      const setDragging = (dragging: boolean): void => {
        patchState(store, { dragging });
      };

      const beginPointerMove = (
        event: PointerEvent,
        widgetElement: HTMLElement,
      ): void => {
        const widgetId = store.widgetId();

        if (widgetId === null) {
          return;
        }

        viewStore.beginWidgetPointerMove({
          event,

          widgetId,

          widgetElement,
        });
      };

      const beginKeyboardMove = (): void => {
        const widget = store.widget();

        const widgetId = store.widgetId();

        if (!widget || widgetId === null) {
          return;
        }

        viewStore.beginWidgetKeyboardMove({
          widgetId,

          widgetLabel: widget.label,
        });
      };

      const onHeaderPointerDown = (): void => {
        if (store.isKeyboardLifted()) {
          dragCoordinator.cancelKeyboardMove();
        }
      };

      const onHeaderKeyDown = (event: KeyboardEvent): void => {
        const lifted = store.isKeyboardLifted();

        switch (event.key) {
          case ' ':
          case 'Enter':
            event.preventDefault();
            event.stopPropagation();
            if (lifted) {
              dragCoordinator.dropKeyboardMove();
            } else {
              beginKeyboardMove();
            }
            return;
          case 'Escape':
            if (!lifted) {
              return;
            }
            event.preventDefault();
            event.stopPropagation();
            dragCoordinator.cancelKeyboardMove();
            return;
          case 'ArrowLeft':
          case 'ArrowRight':
          case 'ArrowUp':
          case 'ArrowDown':
            if (!lifted || !keyboardMoveDeltaForKey(event.key)) {
              return;
            }
            event.preventDefault();
            event.stopPropagation();
            dragCoordinator.nudgeKeyboardMove(event.key);
            return;
          default:
            return;
        }
      };

      return {
        initialize,
        applyContext,

        setReducedMotion,

        setHovered,

        setFocusWithin,

        setTouchSelected,

        openOptions,

        closeOptions,

        removeWidget,

        previewResize,

        commitSpan,

        cancelSpan,

        setResizeActive,

        spanValue,

        spanMin,

        spanMax,

        spanStep,

        setDragging,

        beginPointerMove,

        beginKeyboardMove,

        onHeaderPointerDown,

        onHeaderKeyDown,
      };
    },
  ),

  withHooks({
    onInit(store) {
      if (
        typeof window !== 'undefined' &&
        typeof window.matchMedia === 'function'
      ) {
        const mediaQuery = window.matchMedia(
          '(prefers-reduced-motion: reduce)',
        );
        store.setReducedMotion(mediaQuery.matches);
        mediaQuery.addEventListener('change', (event) => {
          store.setReducedMotion(event.matches);
        });
      }
    },
  }),
);
