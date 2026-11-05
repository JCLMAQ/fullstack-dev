import { computed, inject, Signal } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import {
  calculateGridMetrics,
  calculateGridOverlayRowCount,
  GRID_COLUMNS,
} from '../grid/dashboard-grid.helper';
import {
  DashboardDragCoordinator,
  DragHostCallbacks,
  DragSessionBindings,
} from '../drag/dashboard-drag.coordinator';
import { DashboardPersistenceStore } from './dashboard-persistence.store';
import { DashboardGridMetrics, LayoutMode } from '../grid/widget-resize.types';
import { WidgetAddDragStartEvent } from '../../shell/widgets-panel/widgets-panel.component';

type DashboardViewState = {
  gridMetrics: DashboardGridMetrics;
  gridContainerHeight: number;
  containerElement: HTMLElement | null;
  gridInteractionCount: number;
  lastLayoutMode: LayoutMode | null;
};

const initialState: DashboardViewState = {
  gridMetrics: calculateGridMetrics(0),
  gridContainerHeight: 0,
  containerElement: null,
  gridInteractionCount: 0,
  lastLayoutMode: null,
};

export const DashboardViewStore = signalStore(
  withState(initialState),
  withComputed((store, dragCoordinator = inject(DashboardDragCoordinator)) => {
    const layoutMode = computed(() => store.gridMetrics().layoutMode);
    const gridColumnTemplate = computed(
      () => `repeat(${GRID_COLUMNS}, minmax(0, 1fr))`,
    );
    const gridAutoRows = computed(() => `${store.gridMetrics().rowTrackPx}px`);
    const overlayRowCount = computed(() =>
      calculateGridOverlayRowCount(
        store.gridContainerHeight(),
        store.gridMetrics().rowTrackPx,
      ),
    );
    const displacementMap = computed(() => {
      const map = new Map<number, { offsetX: number; offsetY: number }>();
      for (const displaced of dragCoordinator.displaced()) {
        map.set(displaced.widgetId, {
          offsetX: displaced.offsetX,
          offsetY: displaced.offsetY,
        });
      }
      const active = dragCoordinator.activeWidgetDisplacement();
      if (active) {
        map.set(active.widgetId, {
          offsetX: active.offsetX,
          offsetY: active.offsetY,
        });
      }
      return map;
    });

    return {
      layoutMode,
      showGridOverlay: computed(() => store.gridInteractionCount() > 0),
      gridColumnTemplate,
      gridAutoRows,
      overlayRowCount,
      displacementMap,
    };
  }),
  withMethods(
    (
      store,
      persistenceStore = inject(DashboardPersistenceStore),
      dragCoordinator = inject(DashboardDragCoordinator),
    ) => {
      const setGridMetrics = (
        metrics: DashboardGridMetrics,
        containerHeight: number,
      ): void => {
        const previousMode = store.lastLayoutMode();
        patchState(store, {
          gridMetrics: metrics,
          gridContainerHeight: containerHeight,
          lastLayoutMode: metrics.layoutMode,
        });

        if (previousMode !== null && previousMode !== metrics.layoutMode) {
          dragCoordinator.onLayoutModeChange(metrics.layoutMode);
        }
      };

      const registerContainer = (element: HTMLElement | null): void => {
        patchState(store, { containerElement: element });
      };

      const setGridInteractionActive = (active: boolean): void => {
        patchState(store, (state) => ({
          gridInteractionCount: active
            ? state.gridInteractionCount + 1
            : Math.max(0, state.gridInteractionCount - 1),
        }));
      };

      const getDisplacementX = (widgetId: number): number => {
        return store.displacementMap().get(widgetId)?.offsetX ?? 0;
      };

      const getDisplacementY = (widgetId: number): number => {
        return store.displacementMap().get(widgetId)?.offsetY ?? 0;
      };

      const createDragBindings = (): DragSessionBindings => ({
        currentItems: persistenceStore.getLayoutItems(),
        mobileOrder: persistenceStore.layoutDocument().mobileOrder,
        metrics: store.gridMetrics(),
        onCommit: () => undefined,
        onCleanup: () => undefined,
      });

      const focusDragHandle = (widgetId: number): void => {
        const container = store.containerElement();
        if (!container) {
          return;
        }

        requestAnimationFrame(() => {
          const handle = container.querySelector(
            `[data-widget-id="${widgetId}"] .drag-handle`,
          );
          if (handle instanceof HTMLElement) {
            handle.focus();
          }
        });
      };

      const createDragCallbacks = (
        widgetId: number,
        focusTiming: 'commit' | 'sessionEnd',
      ): DragHostCallbacks => ({
        onSessionStart: () => setGridInteractionActive(true),
        onCommit: (document) => {
          persistenceStore.setLayoutDocument(document);
          if (focusTiming === 'commit') {
            focusDragHandle(widgetId);
          }
        },
        onSessionEnd: () => {
          setGridInteractionActive(false);
          if (focusTiming === 'sessionEnd') {
            focusDragHandle(widgetId);
          }
        },
      });

      const beginWidgetPointerMove = (params: {
        event: PointerEvent;
        widgetId: number;
        widgetElement: HTMLElement;
      }): void => {
        const container = store.containerElement();
        if (!container) {
          return;
        }

        dragCoordinator.beginWidgetPointerMove({
          event: params.event,
          widgetId: params.widgetId,
          widgetElement: params.widgetElement,
          containerElement: container,
          bindings: createDragBindings(),
          callbacks: createDragCallbacks(params.widgetId, 'commit'),
        });
      };

      const beginWidgetKeyboardMove = (params: {
        widgetId: number;
        widgetLabel: string;
      }): void => {
        dragCoordinator.beginWidgetKeyboardMove({
          widgetId: params.widgetId,
          widgetLabel: params.widgetLabel,
          bindings: createDragBindings(),
          callbacks: createDragCallbacks(params.widgetId, 'sessionEnd'),
        });
      };

      const beginWidgetPointerAdd = (event: WidgetAddDragStartEvent): void => {
        const container = store.containerElement();
        if (!container) {
          return;
        }

        dragCoordinator.beginWidgetPointerAdd({
          event: event.event,
          widgetId: event.widgetId,
          containerElement: container,
          bindings: createDragBindings(),
          callbacks: createDragCallbacks(event.widgetId, 'commit'),
        });
      };

      const commitLayoutDocument = (
        document: Parameters<typeof persistenceStore.setLayoutDocument>[0],
      ): void => {
        persistenceStore.setLayoutDocument(document);
      };

      const beginWidgetResize = (widgetId: number): void => {
        setGridInteractionActive(true);
        dragCoordinator.beginResize(
          widgetId,
          persistenceStore.getLayoutItems(),
          persistenceStore.layoutDocument().mobileOrder,
          store.gridMetrics(),
          commitLayoutDocument,
          () => undefined,
        );
      };

      const updateWidgetResizePreview = (
        candidateColumns: number,
        candidateRows: number,
      ): void => {
        dragCoordinator.updateResizePreview(candidateColumns, candidateRows);
      };

      const commitWidgetResize = (
        candidateColumns: number,
        candidateRows: number,
      ): boolean => {
        return dragCoordinator.commitResize(candidateColumns, candidateRows);
      };

      const applyWidgetResize = (
        widgetId: number,
        candidateColumns: number,
        candidateRows: number,
      ): boolean => {
        return dragCoordinator.applyResize(
          widgetId,
          candidateColumns,
          candidateRows,
          persistenceStore.getLayoutItems(),
          persistenceStore.layoutDocument().mobileOrder,
          commitLayoutDocument,
        );
      };

      const cancelWidgetResize = (): void => {
        dragCoordinator.cancelResize();
      };

      const isWidgetResizing = (): boolean => {
        return dragCoordinator.resizing();
      };

      const bindWidgetContext = (
        widgetIdSignal: Signal<number>,
      ): Signal<{
        widgetId: number;
        gridMetrics: DashboardGridMetrics;
        layoutMode: LayoutMode;
        layoutItems: ReturnType<typeof persistenceStore.layoutItems>;
        mobileWidgets: ReturnType<typeof persistenceStore.mobileWidgets>;
        entityMap: ReturnType<typeof persistenceStore.entityMap>;
      }> =>
        computed(() => ({
          widgetId: widgetIdSignal(),
          gridMetrics: store.gridMetrics(),
          layoutMode: store.layoutMode(),
          layoutItems: persistenceStore.layoutItems(),
          mobileWidgets: persistenceStore.mobileWidgets(),
          entityMap: persistenceStore.entityMap(),
        }));

      return {
        setGridMetrics,
        registerContainer,
        setGridInteractionActive,
        getDisplacementX,
        getDisplacementY,
        beginWidgetPointerMove,
        beginWidgetKeyboardMove,
        beginWidgetPointerAdd,
        beginWidgetResize,
        updateWidgetResizePreview,
        commitWidgetResize,
        applyWidgetResize,
        cancelWidgetResize,
        isWidgetResizing,
        bindWidgetContext,
      };
    },
  ),
);
