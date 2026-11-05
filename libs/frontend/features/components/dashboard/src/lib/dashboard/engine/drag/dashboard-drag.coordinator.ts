import { computed } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';

import {
  cellToPixelPosition,
  cloneLayoutItems,
  computeCandidateCellOrigin,
} from '../placement/dashboard-placement.helper';
import {
  calculateMobileReorderDisplacements,
  commitDesktopMove,
  commitDesktopResize,
  commitMobileAdd,
  computeMobileReorderTargetIndex,
  computeMobileStackTops,
  PlacementItem,
  previewDesktopMove,
  previewDesktopResize,
  reorderMobileOrder,
} from '../placement/dashboard-placement.engine';
import {
  DashboardDragSession,
  DragSessionCallbacks,
} from './dashboard-drag.session';
import {
  DashboardLayoutDocument,
  DashboardLayoutItem,
  DASHBOARD_LAYOUT_VERSION,
} from '../../dashboard.model';
import { DashboardGridMetrics, LayoutMode } from '../grid/widget-resize.types';
import { resolveCatalogPlacementSize } from '../grid/dashboard-layout.helper';
import { getWidgetMinimumSize, GRID_COLUMNS } from '../grid/dashboard-grid.helper';
import {
  buildKeyboardCancelAnnouncement,
  buildKeyboardDropAnnouncement,
  buildKeyboardLiftAnnouncement,
  buildKeyboardMobileLiftAnnouncement,
  buildKeyboardMobileMoveAnnouncement,
  buildKeyboardMoveAnnouncement,
  InteractionInputKind,
  KeyboardMovePhase,
  nudgeCandidateOrigin,
} from './dashboard-keyboard.helper';

export type DragInteractionMode = 'move' | 'add' | 'resize';

export type { InteractionInputKind, KeyboardMovePhase };

export type DragPreviewState = {
  widgetId: number;
  ghostX: number;
  ghostY: number;
  ghostWidthPx: number;
  ghostHeightPx: number;
  candidateColumn: number;
  candidateRow: number;
  valid: boolean;
  activeOffsetX: number;
  activeOffsetY: number;
};

export type DisplacedWidget = {
  widgetId: number;
  offsetX: number;
  offsetY: number;
};

export type DragSessionBindings = {
  currentItems: DashboardLayoutItem[];
  mobileOrder: number[];
  metrics: DashboardGridMetrics;
  onCommit: (document: DashboardLayoutDocument) => void;
  onCleanup: () => void;
};

export type DragHostCallbacks = {
  onCommit: (document: DashboardLayoutDocument) => void;
  onSessionStart: () => void;
  onSessionEnd: () => void;
};

function mobileStartTopForWidget(
  widgetId: number,
  snapshotItems: DashboardLayoutItem[],
  mobileOrder: number[],
  rowTrackPx: number,
): number {
  const rowsById = buildRowsById(snapshotItems);
  const tops = computeMobileStackTops(mobileOrder, rowsById, rowTrackPx);
  return tops.get(widgetId) ?? 0;
}

function computeActiveWidgetOffset(
  layoutMode: LayoutMode,
  mode: DragInteractionMode,
  inputKind: InteractionInputKind,
  startItem: DashboardLayoutItem | undefined,
  pointerX: number,
  pointerY: number,
  grabOffsetX: number,
  grabOffsetY: number,
  ghostX: number,
  ghostY: number,
  metrics: DashboardGridMetrics,
  mobileStartTop: number | null,
): { activeOffsetX: number; activeOffsetY: number } {
  if (mode === 'add' || !startItem) {
    return { activeOffsetX: 0, activeOffsetY: 0 };
  }

  const mobileStart = mobileStartTop ?? 0;

  if (inputKind === 'keyboard') {
    switch (layoutMode) {
      case 'mobile':
        return {
          activeOffsetX: 0,
          activeOffsetY: ghostY - mobileStart,
        };
      case 'desktop': {
        const startPos = cellToPixelPosition(
          { column: startItem.column, row: startItem.row },
          metrics,
        );
        return {
          activeOffsetX: ghostX - startPos.x,
          activeOffsetY: ghostY - startPos.y,
        };
      }
      default: {
        const _exhaustive: never = layoutMode;
        return _exhaustive;
      }
    }
  }

  switch (layoutMode) {
    case 'mobile':
      return {
        activeOffsetX: 0,
        activeOffsetY: pointerY - grabOffsetY - mobileStart,
      };
    case 'desktop': {
      const startPos = cellToPixelPosition(
        { column: startItem.column, row: startItem.row },
        metrics,
      );
      return {
        activeOffsetX: pointerX - grabOffsetX - startPos.x,
        activeOffsetY: pointerY - grabOffsetY - startPos.y,
      };
    }
    default: {
      const _exhaustive: never = layoutMode;
      return _exhaustive;
    }
  }
}

function buildDragPreviewState(
  widgetId: number,
  ghostX: number,
  ghostY: number,
  ghostWidthPx: number,
  ghostHeightPx: number,
  candidateColumn: number,
  candidateRow: number,
  valid: boolean,
  startItem: DashboardLayoutItem | undefined,
  mode: DragInteractionMode,
  layoutMode: LayoutMode,
  inputKind: InteractionInputKind,
  metrics: DashboardGridMetrics,
  pointerX: number,
  pointerY: number,
  grabOffsetX: number,
  grabOffsetY: number,
  mobileStartTop: number | null,
): DragPreviewState {
  const { activeOffsetX, activeOffsetY } = computeActiveWidgetOffset(
    layoutMode,
    mode,
    inputKind,
    startItem,
    pointerX,
    pointerY,
    grabOffsetX,
    grabOffsetY,
    ghostX,
    ghostY,
    metrics,
    mobileStartTop,
  );

  return {
    widgetId,
    ghostX,
    ghostY,
    ghostWidthPx,
    ghostHeightPx,
    candidateColumn,
    candidateRow,
    valid,
    activeOffsetX,
    activeOffsetY,
  };
}

export type DragCoordinatorState = {
  active: boolean;
  mode: DragInteractionMode | null;
  layoutMode: LayoutMode | null;
  inputKind: InteractionInputKind | null;
  keyboardPhase: KeyboardMovePhase;
  preview: DragPreviewState | null;
  snapshotItems: DashboardLayoutItem[] | null;
  previewItems: PlacementItem[] | null;
  previewMobileOrder: number[] | null;
  displacedWidgets: DisplacedWidget[];
  announcement: string;
};

const initialState: DragCoordinatorState = {
  active: false,
  mode: null,
  layoutMode: null,
  inputKind: null,
  keyboardPhase: 'idle',
  preview: null,
  snapshotItems: null,
  previewItems: null,
  previewMobileOrder: null,
  displacedWidgets: [],
  announcement: '',
};

function buildMobileOrderForCommit(
  mode: DragInteractionMode,
  widgetId: number,
  existingMobileOrder: number[],
): number[] {
  switch (mode) {
    case 'add':
      return [widgetId, ...existingMobileOrder.filter((id) => id !== widgetId)];
    case 'move':
    case 'resize':
      return [...existingMobileOrder];
    default: {
      const _exhaustive: never = mode;
      return _exhaustive;
    }
  }
}

function buildRowsById(items: DashboardLayoutItem[]): Map<number, number> {
  return new Map(items.map((item) => [item.widgetId, item.rows]));
}

export const DashboardDragCoordinator = signalStore(
  withState(initialState),
  withComputed((store) => ({
    dragging: computed(
      () => store.active() && store.mode() !== 'resize',
    ),
    resizing: computed(() => store.active() && store.mode() === 'resize'),
    keyboardLifted: computed(
      () =>
        store.active() &&
        store.inputKind() === 'keyboard' &&
        store.keyboardPhase() === 'lifted',
    ),
    keyboardActiveWidgetId: computed(() => {
      if (
        !(
          store.active() &&
          store.inputKind() === 'keyboard' &&
          store.keyboardPhase() === 'lifted'
        )
      ) {
        return null;
      }
      return store.preview()?.widgetId ?? null;
    }),
    ghostPosition: computed(() => {
      const preview = store.preview();
      if (!preview || store.mode() === 'resize') {
        return null;
      }
      return {
        widgetId: preview.widgetId,
        x: preview.ghostX,
        y: preview.ghostY,
        width: preview.ghostWidthPx,
        height: preview.ghostHeightPx,
        valid: preview.valid,
      };
    }),
    showDragGhost: computed(
      () => store.preview() !== null && store.mode() !== 'resize',
    ),
    activeWidgetDisplacement: computed(() => {
      const preview = store.preview();
      const mode = store.mode();
      if (!preview || mode === 'add' || mode === 'resize') {
        return null;
      }
      return {
        widgetId: preview.widgetId,
        offsetX: preview.activeOffsetX,
        offsetY: preview.activeOffsetY,
      };
    }),
    candidateCell: computed(() => {
      const preview = store.preview();
      if (!preview || store.mode() === 'resize') {
        return null;
      }
      return {
        column: preview.candidateColumn,
        row: preview.candidateRow,
        valid: preview.valid,
      };
    }),
    displaced: computed(() => store.displacedWidgets()),
    liveAnnouncement: computed(() => store.announcement()),
  })),
  withMethods((store) => {
    let currentSession: DashboardDragSession | null = null;
    let sessionMode: DragInteractionMode | null = null;
    let sessionLayoutMode: LayoutMode | null = null;
    let sessionInputKind: InteractionInputKind | null = null;
    let sessionWidgetId: number | null = null;
    let sessionWidgetLabel = '';
    let sessionWidgetColumns = 0;
    let sessionWidgetRows = 0;
    let sessionMetrics: DashboardGridMetrics | null = null;
    let sessionMobileOrder: number[] = [];
    let sessionGrabOffsetX = 0;
    let sessionGrabOffsetY = 0;
    let documentKeyHandler: ((event: KeyboardEvent) => void) | null = null;

    let commitCallback: ((document: DashboardLayoutDocument) => void) | null =
      null;
    let cleanupCallback: (() => void) | null = null;

    const calculateDisplacements = (
      snapshotItems: DashboardLayoutItem[],
      previewItems: PlacementItem[],
      activeWidgetId: number,
      rowTrackPx: number,
    ): DisplacedWidget[] => {
      const startMap = new Map(
        snapshotItems.map((item) => [item.widgetId, item]),
      );

      const displaced: DisplacedWidget[] = [];

      for (const preview of previewItems) {
        if (preview.widgetId === activeWidgetId) {
          continue;
        }

        const start = startMap.get(preview.widgetId);
        if (!start) {
          continue;
        }

        const rowDelta = preview.row - start.row;
        if (rowDelta !== 0) {
          displaced.push({
            widgetId: preview.widgetId,
            offsetX: 0,
            offsetY: rowDelta * rowTrackPx,
          });
        }
      }

      return displaced;
    };

    const updateDesktopMovePreview = (
      pointerX: number,
      pointerY: number,
    ): void => {
      if (!currentSession || !sessionMetrics || sessionWidgetId === null) {
        return;
      }

      const snapshot = store.snapshotItems();
      if (!snapshot) {
        return;
      }

      const origin = computeCandidateCellOrigin(
        pointerX,
        pointerY,
        currentSession.grabOffsetX,
        currentSession.grabOffsetY,
        sessionWidgetColumns,
        sessionWidgetRows,
        sessionMetrics,
      );

      const previewResult = previewDesktopMove(
        snapshot,
        sessionWidgetId,
        origin.column,
        origin.row,
      );

      const ghostPos = cellToPixelPosition(origin, sessionMetrics);
      const ghostWidthPx =
        sessionWidgetColumns * sessionMetrics.columnStep - 16;
      const ghostHeightPx = sessionWidgetRows * sessionMetrics.rowTrackPx - 16;

      const startItem = snapshot.find(
        (item) => item.widgetId === sessionWidgetId,
      );

      const displacedWidgets = calculateDisplacements(
        snapshot,
        previewResult.items,
        sessionWidgetId,
        sessionMetrics.rowTrackPx,
      );

      patchState(store, {
        preview: buildDragPreviewState(
          sessionWidgetId,
          ghostPos.x,
          ghostPos.y,
          ghostWidthPx,
          ghostHeightPx,
          origin.column,
          origin.row,
          previewResult.valid,
          startItem,
          sessionMode ?? 'move',
          'desktop',
          'pointer',
          sessionMetrics,
          pointerX,
          pointerY,
          currentSession.grabOffsetX,
          currentSession.grabOffsetY,
          null,
        ),
        previewItems: previewResult.items,
        displacedWidgets,
      });
    };

    const updateMobileReorderPreview = (pointerY: number): void => {
      if (!sessionMetrics || sessionWidgetId === null) {
        return;
      }

      const snapshot = store.snapshotItems();
      if (!snapshot) {
        return;
      }

      const rowsById = buildRowsById(snapshot);
      const targetIndex = computeMobileReorderTargetIndex(
        pointerY,
        sessionGrabOffsetY,
        sessionWidgetId,
        sessionWidgetRows,
        sessionMobileOrder,
        rowsById,
        sessionMetrics.rowTrackPx,
      );

      const reorder = reorderMobileOrder(
        sessionMobileOrder,
        sessionWidgetId,
        targetIndex,
      );

      const tops = computeMobileStackTops(
        reorder.mobileOrder,
        rowsById,
        sessionMetrics.rowTrackPx,
      );
      const ghostY = tops.get(sessionWidgetId) ?? 0;
      const ghostWidthPx = GRID_COLUMNS * sessionMetrics.columnStep - 16;
      const ghostHeightPx = sessionWidgetRows * sessionMetrics.rowTrackPx - 16;

      const startItem = snapshot.find(
        (item) => item.widgetId === sessionWidgetId,
      );
      const mobileStartTop = mobileStartTopForWidget(
        sessionWidgetId,
        snapshot,
        sessionMobileOrder,
        sessionMetrics.rowTrackPx,
      );

      const displacedWidgets = reorder.valid
        ? calculateMobileReorderDisplacements(
            sessionMobileOrder,
            reorder.mobileOrder,
            rowsById,
            sessionMetrics.rowTrackPx,
            sessionWidgetId,
          ).map((entry) => ({ ...entry, offsetX: 0 }))
        : [];

      patchState(store, {
        preview: buildDragPreviewState(
          sessionWidgetId,
          0,
          ghostY,
          ghostWidthPx,
          ghostHeightPx,
          1,
          targetIndex + 1,
          reorder.valid,
          startItem,
          'move',
          'mobile',
          'pointer',
          sessionMetrics,
          0,
          pointerY,
          sessionGrabOffsetX,
          sessionGrabOffsetY,
          mobileStartTop,
        ),
        previewMobileOrder: reorder.mobileOrder,
        previewItems: snapshot,
        displacedWidgets,
      });
    };

    const updateMobileAddPreview = (pointerY: number): void => {
      if (!sessionMetrics || sessionWidgetId === null) {
        return;
      }

      const ghostWidthPx = GRID_COLUMNS * sessionMetrics.columnStep - 16;
      const ghostHeightPx = sessionWidgetRows * sessionMetrics.rowTrackPx - 16;
      const ghostY = Math.max(0, pointerY - sessionGrabOffsetY);

      patchState(store, {
        preview: buildDragPreviewState(
          sessionWidgetId,
          0,
          ghostY,
          ghostWidthPx,
          ghostHeightPx,
          1,
          1,
          true,
          undefined,
          'add',
          'mobile',
          'pointer',
          sessionMetrics,
          0,
          pointerY,
          sessionGrabOffsetX,
          sessionGrabOffsetY,
          null,
        ),
        previewMobileOrder: [
          sessionWidgetId,
          ...sessionMobileOrder.filter((id) => id !== sessionWidgetId),
        ],
        displacedWidgets: [],
      });
    };

    const updatePreview = (pointerX: number, pointerY: number): void => {
      switch (sessionLayoutMode) {
        case 'mobile':
          if (sessionMode === 'add') {
            updateMobileAddPreview(pointerY);
          } else {
            updateMobileReorderPreview(pointerY);
          }
          return;
        case 'desktop':
          updateDesktopMovePreview(pointerX, pointerY);
          return;
        case null:
          return;
        default: {
          const _exhaustive: never = sessionLayoutMode;
          return _exhaustive;
        }
      }
    };

    const detachDocumentKeys = (): void => {
      if (documentKeyHandler) {
        document.removeEventListener('keydown', documentKeyHandler);
        documentKeyHandler = null;
      }
    };

    const cleanup = (announcement = ''): void => {
      if (currentSession) {
        currentSession.dispose(false);
        currentSession = null;
      }

      detachDocumentKeys();

      sessionMode = null;
      sessionLayoutMode = null;
      sessionInputKind = null;
      sessionWidgetId = null;
      sessionWidgetLabel = '';
      sessionWidgetColumns = 0;
      sessionWidgetRows = 0;
      sessionMetrics = null;
      sessionMobileOrder = [];
      sessionGrabOffsetX = 0;
      sessionGrabOffsetY = 0;

      patchState(store, {
        active: false,
        mode: null,
        layoutMode: null,
        inputKind: null,
        keyboardPhase: 'idle',
        preview: null,
        snapshotItems: null,
        previewItems: null,
        previewMobileOrder: null,
        displacedWidgets: [],
        announcement,
      });

      if (cleanupCallback) {
        cleanupCallback();
      }
    };

    const cancelDrag = (announcement = ''): void => {
      cleanup(announcement);
    };

    const commitDesktopDrag = (): void => {
      const preview = store.preview();
      const snapshot = store.snapshotItems();
      const mode = sessionMode;

      if (!preview || !snapshot || !preview.valid || mode === null) {
        cancelDrag();
        return;
      }

      const committedItems = commitDesktopMove(
        snapshot,
        preview.widgetId,
        preview.candidateColumn,
        preview.candidateRow,
      );

      if (!committedItems) {
        cancelDrag();
        return;
      }

      const newDocument: DashboardLayoutDocument = {
        version: DASHBOARD_LAYOUT_VERSION,
        items: committedItems,
        mobileOrder: buildMobileOrderForCommit(
          mode,
          preview.widgetId,
          sessionMobileOrder,
        ),
      };

      if (commitCallback) {
        commitCallback(newDocument);
      }

      cleanup();
    };

    const commitMobileReorder = (): void => {
      const preview = store.preview();
      const snapshot = store.snapshotItems();
      const previewOrder = store.previewMobileOrder();

      if (
        !preview ||
        !snapshot ||
        !preview.valid ||
        !previewOrder ||
        sessionWidgetId === null
      ) {
        cancelDrag();
        return;
      }

      const newDocument: DashboardLayoutDocument = {
        version: DASHBOARD_LAYOUT_VERSION,
        items: cloneLayoutItems(snapshot),
        mobileOrder: [...previewOrder],
      };

      if (commitCallback) {
        commitCallback(newDocument);
      }

      cleanup();
    };

    const commitMobileAddDrag = (): void => {
      const preview = store.preview();
      const snapshot = store.snapshotItems();

      if (!preview || !snapshot || !preview.valid || sessionWidgetId === null) {
        cancelDrag();
        return;
      }

      const size = resolveCatalogPlacementSize(sessionWidgetId);
      if (!size) {
        cancelDrag();
        return;
      }

      const existingItems = snapshot.filter(
        (item) => item.widgetId !== sessionWidgetId,
      );
      const committed = commitMobileAdd(existingItems, sessionMobileOrder, {
        widgetId: sessionWidgetId,
        columns: size.columns,
        rows: size.rows,
      });

      if (!committed) {
        cancelDrag();
        return;
      }

      const newDocument: DashboardLayoutDocument = {
        version: DASHBOARD_LAYOUT_VERSION,
        items: committed.items,
        mobileOrder: committed.mobileOrder,
      };

      if (commitCallback) {
        commitCallback(newDocument);
      }

      cleanup();
    };

    const commitDrag = (): void => {
      switch (sessionLayoutMode) {
        case 'mobile':
          if (sessionMode === 'add') {
            commitMobileAddDrag();
          } else {
            commitMobileReorder();
          }
          return;
        case 'desktop':
          commitDesktopDrag();
          return;
        case null:
          cancelDrag();
          return;
        default: {
          const _exhaustive: never = sessionLayoutMode;
          return _exhaustive;
        }
      }
    };

    const escapePressed = (): void => {
      cancelDrag();
    };

    const sessionEnded = (): void => {
      if (cleanupCallback) {
        cleanupCallback();
      }
    };

    const beginDesktopSession = (
      event: PointerEvent,
      mode: DragInteractionMode,
      widgetId: number,
      grabOffsetX: number,
      grabOffsetY: number,
      containerElement: HTMLElement,
      bindings: DragSessionBindings,
    ): void => {
      if (store.active()) {
        cancelDrag();
      }

      const {
        currentItems: snapshotItems,
        mobileOrder,
        metrics,
        onCommit,
        onCleanup,
      } = bindings;

      const widget = snapshotItems.find((item) => item.widgetId === widgetId);
      if (!widget) {
        return;
      }

      const containerRect = containerElement.getBoundingClientRect();

      sessionMode = mode;
      sessionLayoutMode = 'desktop';
      sessionInputKind = 'pointer';
      sessionWidgetId = widgetId;
      sessionWidgetColumns = widget.columns;
      sessionWidgetRows = widget.rows;
      sessionMetrics = metrics;
      sessionMobileOrder = [...mobileOrder];
      sessionGrabOffsetX = grabOffsetX;
      sessionGrabOffsetY = grabOffsetY;
      commitCallback = onCommit;
      cleanupCallback = onCleanup;

      const callbacks: DragSessionCallbacks = {
        onMove: updatePreview,
        onCommit: commitDrag,
        onCancel: cancelDrag,
        onEscape: escapePressed,
        onEnd: sessionEnded,
        isActive: () => store.active(),
      };

      currentSession = new DashboardDragSession({
        grabOffsetX,
        grabOffsetY,
        containerRect,
        callbacks,
      });

      const initialPointerX = event.clientX - containerRect.left;
      const initialPointerY = event.clientY - containerRect.top;

      const origin =
        mode === 'move'
          ? { column: widget.column, row: widget.row }
          : computeCandidateCellOrigin(
              initialPointerX,
              initialPointerY,
              grabOffsetX,
              grabOffsetY,
              sessionWidgetColumns,
              sessionWidgetRows,
              metrics,
            );

      const previewResult = previewDesktopMove(
        snapshotItems,
        widgetId,
        origin.column,
        origin.row,
      );

      const ghostPos = cellToPixelPosition(origin, metrics);
      const ghostWidthPx = sessionWidgetColumns * metrics.columnStep - 16;
      const ghostHeightPx = sessionWidgetRows * metrics.rowTrackPx - 16;

      const displacedWidgets = calculateDisplacements(
        snapshotItems,
        previewResult.items,
        widgetId,
        metrics.rowTrackPx,
      );

      patchState(store, {
        active: true,
        mode,
        layoutMode: 'desktop',
        inputKind: 'pointer',
        keyboardPhase: 'idle',
        snapshotItems,
        preview: buildDragPreviewState(
          widgetId,
          ghostPos.x,
          ghostPos.y,
          ghostWidthPx,
          ghostHeightPx,
          origin.column,
          origin.row,
          previewResult.valid,
          widget,
          mode,
          'desktop',
          'pointer',
          metrics,
          initialPointerX,
          initialPointerY,
          grabOffsetX,
          grabOffsetY,
          null,
        ),
        previewItems: previewResult.items,
        previewMobileOrder: null,
        displacedWidgets,
        announcement: '',
      });

      currentSession.start(event);
    };

    const beginMobileReorderSession = (
      event: PointerEvent,
      widgetId: number,
      grabOffsetX: number,
      grabOffsetY: number,
      containerElement: HTMLElement,
      bindings: DragSessionBindings,
    ): void => {
      if (store.active()) {
        cancelDrag();
      }

      const {
        currentItems: snapshotItems,
        mobileOrder,
        metrics,
        onCommit,
        onCleanup,
      } = bindings;

      const widget = snapshotItems.find((item) => item.widgetId === widgetId);
      if (!widget || !mobileOrder.includes(widgetId)) {
        return;
      }

      const containerRect = containerElement.getBoundingClientRect();

      sessionMode = 'move';
      sessionLayoutMode = 'mobile';
      sessionInputKind = 'pointer';
      sessionWidgetId = widgetId;
      sessionWidgetColumns = GRID_COLUMNS;
      sessionWidgetRows = widget.rows;
      sessionMetrics = metrics;
      sessionMobileOrder = [...mobileOrder];
      sessionGrabOffsetX = grabOffsetX;
      sessionGrabOffsetY = grabOffsetY;
      commitCallback = onCommit;
      cleanupCallback = onCleanup;

      const callbacks: DragSessionCallbacks = {
        onMove: updatePreview,
        onCommit: commitDrag,
        onCancel: cancelDrag,
        onEscape: escapePressed,
        onEnd: sessionEnded,
        isActive: () => store.active(),
      };

      currentSession = new DashboardDragSession({
        grabOffsetX,
        grabOffsetY,
        containerRect,
        callbacks,
      });

      patchState(store, {
        active: true,
        mode: 'move',
        layoutMode: 'mobile',
        inputKind: 'pointer',
        keyboardPhase: 'idle',
        snapshotItems: cloneLayoutItems(snapshotItems),
        previewItems: cloneLayoutItems(snapshotItems),
        previewMobileOrder: [...mobileOrder],
        preview: null,
        displacedWidgets: [],
        announcement: '',
      });

      const initialPointerY = event.clientY - containerRect.top;
      updateMobileReorderPreview(initialPointerY);
      currentSession.start(event);
    };

    const beginMobileAddSession = (
      event: PointerEvent,
      widgetId: number,
      containerElement: HTMLElement,
      bindings: DragSessionBindings,
    ): void => {
      if (store.active()) {
        cancelDrag();
      }

      const { currentItems, mobileOrder, metrics, onCommit, onCleanup } =
        bindings;

      if (currentItems.some((item) => item.widgetId === widgetId)) {
        return;
      }

      const size = resolveCatalogPlacementSize(widgetId);
      if (!size) {
        return;
      }

      const transientItem: DashboardLayoutItem = {
        widgetId,
        column: 1,
        row: 1,
        columns: size.columns,
        rows: size.rows,
      };

      const snapshotItems = cloneLayoutItems([...currentItems, transientItem]);
      const containerRect = containerElement.getBoundingClientRect();
      const ghostWidthPx = GRID_COLUMNS * metrics.columnStep - 16;
      const ghostHeightPx = size.rows * metrics.rowTrackPx - 16;
      const grabOffsetX = ghostWidthPx / 2;
      const grabOffsetY = ghostHeightPx / 2;

      sessionMode = 'add';
      sessionLayoutMode = 'mobile';
      sessionInputKind = 'pointer';
      sessionWidgetId = widgetId;
      sessionWidgetColumns = GRID_COLUMNS;
      sessionWidgetRows = size.rows;
      sessionMetrics = metrics;
      sessionMobileOrder = [...mobileOrder];
      sessionGrabOffsetX = grabOffsetX;
      sessionGrabOffsetY = grabOffsetY;
      commitCallback = onCommit;
      cleanupCallback = onCleanup;

      const callbacks: DragSessionCallbacks = {
        onMove: updatePreview,
        onCommit: commitDrag,
        onCancel: cancelDrag,
        onEscape: escapePressed,
        onEnd: sessionEnded,
        isActive: () => store.active(),
      };

      currentSession = new DashboardDragSession({
        grabOffsetX,
        grabOffsetY,
        containerRect,
        callbacks,
      });

      patchState(store, {
        active: true,
        mode: 'add',
        layoutMode: 'mobile',
        inputKind: 'pointer',
        keyboardPhase: 'idle',
        snapshotItems,
        previewItems: snapshotItems,
        previewMobileOrder: [widgetId, ...mobileOrder],
        preview: null,
        displacedWidgets: [],
        announcement: '',
      });

      const initialPointerY = event.clientY - containerRect.top;
      updateMobileAddPreview(initialPointerY);
      currentSession.start(event);
    };

    const startDrag = (
      event: PointerEvent,
      widgetId: number,
      widgetElement: HTMLElement,
      containerElement: HTMLElement,
      bindings: DragSessionBindings,
    ): void => {
      const { currentItems, mobileOrder, metrics, onCommit, onCleanup } =
        bindings;

      const widget = currentItems.find((item) => item.widgetId === widgetId);
      if (!widget) {
        return;
      }

      const containerRect = containerElement.getBoundingClientRect();
      const pointerX = event.clientX - containerRect.left;
      const pointerY = event.clientY - containerRect.top;

      switch (metrics.layoutMode) {
        case 'mobile': {
          const widgetRect = widgetElement.getBoundingClientRect();
          const grabOffsetX = event.clientX - widgetRect.left;
          const grabOffsetY = event.clientY - widgetRect.top;
          beginMobileReorderSession(
            event,
            widgetId,
            grabOffsetX,
            grabOffsetY,
            containerElement,
            {
              currentItems: cloneLayoutItems(currentItems),
              mobileOrder,
              metrics,
              onCommit,
              onCleanup,
            },
          );
          return;
        }
        case 'desktop': {
          const startPos = cellToPixelPosition(
            { column: widget.column, row: widget.row },
            metrics,
          );
          const grabOffsetX = pointerX - startPos.x;
          const grabOffsetY = pointerY - startPos.y;
          beginDesktopSession(
            event,
            'move',
            widgetId,
            grabOffsetX,
            grabOffsetY,
            containerElement,
            {
              currentItems: cloneLayoutItems(currentItems),
              mobileOrder,
              metrics,
              onCommit,
              onCleanup,
            },
          );
          return;
        }
        default: {
          const _exhaustive: never = metrics.layoutMode;
          return _exhaustive;
        }
      }
    };

    const startAdd = (
      event: PointerEvent,
      widgetId: number,
      containerElement: HTMLElement,
      bindings: DragSessionBindings,
    ): void => {
      const { currentItems, mobileOrder, metrics, onCommit, onCleanup } =
        bindings;

      switch (metrics.layoutMode) {
        case 'mobile':
          beginMobileAddSession(event, widgetId, containerElement, bindings);
          return;
        case 'desktop': {
          if (currentItems.some((item) => item.widgetId === widgetId)) {
            return;
          }

          const size = resolveCatalogPlacementSize(widgetId);
          if (!size) {
            return;
          }

          const transientItem: DashboardLayoutItem = {
            widgetId,
            column: 1,
            row: 1,
            columns: size.columns,
            rows: size.rows,
          };

          const snapshotItems = cloneLayoutItems([
            ...currentItems,
            transientItem,
          ]);

          const ghostWidthPx = size.columns * metrics.columnStep - 16;
          const ghostHeightPx = size.rows * metrics.rowTrackPx - 16;
          const grabOffsetX = ghostWidthPx / 2;
          const grabOffsetY = ghostHeightPx / 2;

          beginDesktopSession(
            event,
            'add',
            widgetId,
            grabOffsetX,
            grabOffsetY,
            containerElement,
            {
              currentItems: snapshotItems,
              mobileOrder,
              metrics,
              onCommit,
              onCleanup,
            },
          );
          return;
        }
        default: {
          const _exhaustive: never = metrics.layoutMode;
          return _exhaustive;
        }
      }
    };

    const forceCancel = (): void => {
      cancelDrag();
    };

    /**
     * Cancels any active interaction when the container crosses the
     * desktop/mobile breakpoint.
     */
    const onLayoutModeChange = (nextMode: LayoutMode): void => {
      if (!store.active()) {
        return;
      }

      if (sessionLayoutMode !== null && sessionLayoutMode !== nextMode) {
        cancelDrag();
      }
    };

    const beginResize = (
      widgetId: number,
      currentItems: DashboardLayoutItem[],
      mobileOrder: number[],
      metrics: DashboardGridMetrics,
      onCommit: (document: DashboardLayoutDocument) => void,
      onCleanup: () => void,
    ): void => {
      if (store.active()) {
        cancelDrag();
      }

      const widget = currentItems.find((item) => item.widgetId === widgetId);
      if (!widget) {
        return;
      }

      sessionMode = 'resize';
      sessionLayoutMode = metrics.layoutMode;
      sessionInputKind = 'pointer';
      sessionWidgetId = widgetId;
      sessionWidgetColumns = widget.columns;
      sessionWidgetRows = widget.rows;
      sessionMetrics = metrics;
      sessionMobileOrder = [...mobileOrder];
      commitCallback = onCommit;
      cleanupCallback = onCleanup;

      patchState(store, {
        active: true,
        mode: 'resize',
        layoutMode: metrics.layoutMode,
        inputKind: 'pointer',
        keyboardPhase: 'idle',
        snapshotItems: cloneLayoutItems(currentItems),
        preview: null,
        previewItems: cloneLayoutItems(currentItems),
        previewMobileOrder: null,
        displacedWidgets: [],
        announcement: '',
      });
    };

    const updateResizePreview = (
      candidateColumns: number,
      candidateRows: number,
    ): void => {
      if (
        !store.active() ||
        sessionMode !== 'resize' ||
        sessionWidgetId === null ||
        !sessionMetrics
      ) {
        return;
      }

      const snapshot = store.snapshotItems();
      if (!snapshot) {
        return;
      }

      sessionWidgetColumns = candidateColumns;
      sessionWidgetRows = candidateRows;

      const minimum = getWidgetMinimumSize(sessionWidgetId);
      const previewResult = previewDesktopResize(
        snapshot,
        sessionWidgetId,
        candidateColumns,
        candidateRows,
        minimum,
      );

      const displacedWidgets =
        previewResult.valid && sessionLayoutMode === 'desktop'
          ? calculateDisplacements(
              snapshot,
              previewResult.items,
              sessionWidgetId,
              sessionMetrics.rowTrackPx,
            )
          : [];

      patchState(store, {
        previewItems: previewResult.items,
        displacedWidgets,
      });
    };

    const commitResize = (
      candidateColumns: number,
      candidateRows: number,
    ): boolean => {
      const snapshot = store.snapshotItems();
      const mode = sessionMode;
      const widgetId = sessionWidgetId;

      if (
        !store.active() ||
        mode !== 'resize' ||
        widgetId === null ||
        !snapshot
      ) {
        return false;
      }

      const minimum = getWidgetMinimumSize(widgetId);
      const committedItems = commitDesktopResize(
        snapshot,
        widgetId,
        candidateColumns,
        candidateRows,
        minimum,
      );

      if (!committedItems) {
        cancelDrag();
        return false;
      }

      const newDocument: DashboardLayoutDocument = {
        version: DASHBOARD_LAYOUT_VERSION,
        items: committedItems,
        mobileOrder: buildMobileOrderForCommit(
          mode,
          widgetId,
          sessionMobileOrder,
        ),
      };

      if (commitCallback) {
        commitCallback(newDocument);
      }

      cleanup();
      return true;
    };

    const cancelResize = (): void => {
      if (store.active() && sessionMode === 'resize') {
        cancelDrag();
      }
    };

    const applyResize = (
      widgetId: number,
      candidateColumns: number,
      candidateRows: number,
      currentItems: DashboardLayoutItem[],
      mobileOrder: number[],
      onCommit: (document: DashboardLayoutDocument) => void,
    ): boolean => {
      const minimum = getWidgetMinimumSize(widgetId);
      const committedItems = commitDesktopResize(
        currentItems,
        widgetId,
        candidateColumns,
        candidateRows,
        minimum,
      );

      if (!committedItems) {
        return false;
      }

      onCommit({
        version: DASHBOARD_LAYOUT_VERSION,
        items: committedItems,
        mobileOrder: buildMobileOrderForCommit('resize', widgetId, mobileOrder),
      });
      return true;
    };

    const publishDesktopKeyboardPreview = (
      snapshotItems: DashboardLayoutItem[],
      widgetId: number,
      column: number,
      row: number,
      metrics: DashboardGridMetrics,
      announceMove: boolean,
    ): void => {
      const previewResult = previewDesktopMove(
        snapshotItems,
        widgetId,
        column,
        row,
      );
      const ghostPos = cellToPixelPosition({ column, row }, metrics);
      const ghostWidthPx = sessionWidgetColumns * metrics.columnStep - 16;
      const ghostHeightPx = sessionWidgetRows * metrics.rowTrackPx - 16;
      const displacedWidgets = calculateDisplacements(
        snapshotItems,
        previewResult.items,
        widgetId,
        metrics.rowTrackPx,
      );

      const announcement = announceMove
        ? buildKeyboardMoveAnnouncement(sessionWidgetLabel, column, row)
        : buildKeyboardLiftAnnouncement(sessionWidgetLabel, column, row);

      patchState(store, {
        preview: buildDragPreviewState(
          widgetId,
          ghostPos.x,
          ghostPos.y,
          ghostWidthPx,
          ghostHeightPx,
          column,
          row,
          previewResult.valid,
          snapshotItems.find((item) => item.widgetId === widgetId),
          'move',
          'desktop',
          'keyboard',
          metrics,
          0,
          0,
          0,
          0,
          null,
        ),
        previewItems: previewResult.items,
        displacedWidgets,
        announcement,
      });
    };

    const publishMobileKeyboardPreview = (
      snapshotItems: DashboardLayoutItem[],
      widgetId: number,
      targetIndex: number,
      announceMove: boolean,
    ): void => {
      if (!sessionMetrics) {
        return;
      }

      const reorder = reorderMobileOrder(
        sessionMobileOrder,
        widgetId,
        targetIndex,
      );
      const rowsById = buildRowsById(snapshotItems);
      const tops = computeMobileStackTops(
        reorder.mobileOrder,
        rowsById,
        sessionMetrics.rowTrackPx,
      );
      const ghostY = tops.get(widgetId) ?? 0;
      const ghostWidthPx = GRID_COLUMNS * sessionMetrics.columnStep - 16;
      const ghostHeightPx = sessionWidgetRows * sessionMetrics.rowTrackPx - 16;
      const displacedWidgets = reorder.valid
        ? calculateMobileReorderDisplacements(
            sessionMobileOrder,
            reorder.mobileOrder,
            rowsById,
            sessionMetrics.rowTrackPx,
            widgetId,
          )
        : [];

      const position = reorder.targetIndex + 1;
      const total = reorder.mobileOrder.length;
      const announcement = announceMove
        ? buildKeyboardMobileMoveAnnouncement(
            sessionWidgetLabel,
            position,
            total,
          )
        : buildKeyboardMobileLiftAnnouncement(
            sessionWidgetLabel,
            position,
            total,
          );

      const mobileStartTop = mobileStartTopForWidget(
        widgetId,
        snapshotItems,
        sessionMobileOrder,
        sessionMetrics.rowTrackPx,
      );

      patchState(store, {
        preview: buildDragPreviewState(
          widgetId,
          0,
          ghostY,
          ghostWidthPx,
          ghostHeightPx,
          1,
          position,
          reorder.valid,
          snapshotItems.find((item) => item.widgetId === widgetId),
          'move',
          'mobile',
          'keyboard',
          sessionMetrics,
          0,
          0,
          0,
          0,
          mobileStartTop,
        ),
        previewMobileOrder: reorder.mobileOrder,
        previewItems: snapshotItems,
        displacedWidgets: displacedWidgets.map((entry) => ({
          ...entry,
          offsetX: 0,
        })),
        announcement,
      });
    };

    const handleKeyboardDocumentKey = (event: KeyboardEvent): void => {
      if (!store.keyboardLifted()) {
        return;
      }

      switch (event.key) {
        case 'Escape':
          event.preventDefault();
          cancelKeyboardMove();
          return;
        case 'ArrowLeft':
        case 'ArrowRight':
        case 'ArrowUp':
        case 'ArrowDown':
          event.preventDefault();
          nudgeKeyboardMove(event.key);
          return;
        case ' ':
        case 'Enter':
          event.preventDefault();
          dropKeyboardMove();
          return;
        default:
          return;
      }
    };

    const beginKeyboardMove = (
      widgetId: number,
      widgetLabel: string,
      bindings: DragSessionBindings,
    ): boolean => {
      if (store.active()) {
        cancelDrag();
      }

      const { currentItems, mobileOrder, metrics, onCommit, onCleanup } =
        bindings;

      const widget = currentItems.find((item) => item.widgetId === widgetId);
      if (!widget) {
        return false;
      }

      sessionMode = 'move';
      sessionLayoutMode = metrics.layoutMode;
      sessionInputKind = 'keyboard';
      sessionWidgetId = widgetId;
      sessionWidgetLabel = widgetLabel;
      sessionWidgetColumns =
        metrics.layoutMode === 'mobile' ? GRID_COLUMNS : widget.columns;
      sessionWidgetRows = widget.rows;
      sessionMetrics = metrics;
      sessionMobileOrder = [...mobileOrder];
      commitCallback = onCommit;
      cleanupCallback = onCleanup;

      const snapshotItems = cloneLayoutItems(currentItems);

      patchState(store, {
        active: true,
        mode: 'move',
        layoutMode: metrics.layoutMode,
        inputKind: 'keyboard',
        keyboardPhase: 'lifted',
        snapshotItems,
        previewItems: snapshotItems,
        previewMobileOrder:
          metrics.layoutMode === 'mobile' ? [...mobileOrder] : null,
        displacedWidgets: [],
        announcement: '',
      });

      switch (metrics.layoutMode) {
        case 'desktop':
          publishDesktopKeyboardPreview(
            snapshotItems,
            widgetId,
            widget.column,
            widget.row,
            metrics,
            false,
          );
          break;
        case 'mobile': {
          const startIndex = mobileOrder.indexOf(widgetId);
          publishMobileKeyboardPreview(
            snapshotItems,
            widgetId,
            Math.max(0, startIndex),
            false,
          );
          break;
        }
        default: {
          const _exhaustive: never = metrics.layoutMode;
          return _exhaustive;
        }
      }

      documentKeyHandler = handleKeyboardDocumentKey;
      document.addEventListener('keydown', documentKeyHandler);
      return true;
    };

    const nudgeKeyboardMove = (key: string): void => {
      if (
        !store.keyboardLifted() ||
        sessionWidgetId === null ||
        !sessionMetrics
      ) {
        return;
      }

      const snapshot = store.snapshotItems();
      const preview = store.preview();
      if (!snapshot || !preview) {
        return;
      }

      switch (sessionLayoutMode) {
        case 'desktop': {
          const columnDelta =
            key === 'ArrowLeft' ? -1 : key === 'ArrowRight' ? 1 : 0;
          const rowDelta = key === 'ArrowUp' ? -1 : key === 'ArrowDown' ? 1 : 0;
          if (columnDelta === 0 && rowDelta === 0) {
            return;
          }

          const next = nudgeCandidateOrigin(
            preview.candidateColumn,
            preview.candidateRow,
            sessionWidgetColumns,
            columnDelta,
            rowDelta,
          );

          if (
            next.column === preview.candidateColumn &&
            next.row === preview.candidateRow
          ) {
            return;
          }

          publishDesktopKeyboardPreview(
            snapshot,
            sessionWidgetId,
            next.column,
            next.row,
            sessionMetrics,
            true,
          );
          return;
        }
        case 'mobile': {
          if (key !== 'ArrowUp' && key !== 'ArrowDown') {
            return;
          }

          const currentOrder = store.previewMobileOrder() ?? sessionMobileOrder;
          const fromIndex = currentOrder.indexOf(sessionWidgetId);
          if (fromIndex < 0) {
            return;
          }

          const withoutActive = currentOrder.filter(
            (id) => id !== sessionWidgetId,
          );
          const insertIndex = Math.max(
            0,
            Math.min(
              withoutActive.length,
              fromIndex + (key === 'ArrowUp' ? -1 : 1),
            ),
          );

          // Rebuild against the live preview order so successive nudges stack.
          const nextOrder = [
            ...withoutActive.slice(0, insertIndex),
            sessionWidgetId,
            ...withoutActive.slice(insertIndex),
          ];

          if (!sessionMetrics) {
            return;
          }

          const rowsById = buildRowsById(snapshot);
          const tops = computeMobileStackTops(
            nextOrder,
            rowsById,
            sessionMetrics.rowTrackPx,
          );
          const ghostY = tops.get(sessionWidgetId) ?? 0;
          const ghostWidthPx = GRID_COLUMNS * sessionMetrics.columnStep - 16;
          const ghostHeightPx =
            sessionWidgetRows * sessionMetrics.rowTrackPx - 16;
          const displacedWidgets = calculateMobileReorderDisplacements(
            sessionMobileOrder,
            nextOrder,
            rowsById,
            sessionMetrics.rowTrackPx,
            sessionWidgetId,
          );

          const position = insertIndex + 1;
          const mobileStartTop = mobileStartTopForWidget(
            sessionWidgetId,
            snapshot,
            sessionMobileOrder,
            sessionMetrics.rowTrackPx,
          );

          patchState(store, {
            preview: buildDragPreviewState(
              sessionWidgetId,
              0,
              ghostY,
              ghostWidthPx,
              ghostHeightPx,
              1,
              position,
              true,
              snapshot.find((item) => item.widgetId === sessionWidgetId),
              'move',
              'mobile',
              'keyboard',
              sessionMetrics,
              0,
              0,
              0,
              0,
              mobileStartTop,
            ),
            previewMobileOrder: nextOrder,
            previewItems: snapshot,
            displacedWidgets: displacedWidgets.map((entry) => ({
              ...entry,
              offsetX: 0,
            })),
            announcement: buildKeyboardMobileMoveAnnouncement(
              sessionWidgetLabel,
              position,
              nextOrder.length,
            ),
          });
          return;
        }
        case null:
          return;
        default: {
          const _exhaustive: never = sessionLayoutMode;
          return _exhaustive;
        }
      }
    };

    const dropKeyboardMove = (): void => {
      if (!store.keyboardLifted() || sessionWidgetId === null) {
        return;
      }

      const dropAnnouncement =
        buildKeyboardDropAnnouncement(sessionWidgetLabel);

      switch (sessionLayoutMode) {
        case 'desktop': {
          const preview = store.preview();
          const snapshot = store.snapshotItems();
          if (!preview || !snapshot || !preview.valid) {
            cancelDrag(buildKeyboardCancelAnnouncement(sessionWidgetLabel));
            return;
          }

          const committedItems = commitDesktopMove(
            snapshot,
            preview.widgetId,
            preview.candidateColumn,
            preview.candidateRow,
          );

          if (!committedItems) {
            cancelDrag(buildKeyboardCancelAnnouncement(sessionWidgetLabel));
            return;
          }

          if (commitCallback) {
            commitCallback({
              version: DASHBOARD_LAYOUT_VERSION,
              items: committedItems,
              mobileOrder: [...sessionMobileOrder],
            });
          }

          cleanup(dropAnnouncement);
          return;
        }
        case 'mobile': {
          const snapshot = store.snapshotItems();
          const previewOrder = store.previewMobileOrder();
          if (!snapshot || !previewOrder) {
            cancelDrag(buildKeyboardCancelAnnouncement(sessionWidgetLabel));
            return;
          }

          if (commitCallback) {
            commitCallback({
              version: DASHBOARD_LAYOUT_VERSION,
              items: cloneLayoutItems(snapshot),
              mobileOrder: [...previewOrder],
            });
          }

          cleanup(dropAnnouncement);
          return;
        }
        case null:
          cancelDrag();
          return;
        default: {
          const _exhaustive: never = sessionLayoutMode;
          return _exhaustive;
        }
      }
    };

    const cancelKeyboardMove = (): void => {
      if (!store.keyboardLifted()) {
        forceCancel();
        return;
      }

      const announcement = buildKeyboardCancelAnnouncement(sessionWidgetLabel);
      cancelDrag(announcement);
    };

    const beginWidgetPointerMove = (params: {
      event: PointerEvent;
      widgetId: number;
      widgetElement: HTMLElement;
      containerElement: HTMLElement;
      bindings: DragSessionBindings;
      callbacks: DragHostCallbacks;
    }): void => {
      params.callbacks.onSessionStart();

      const bindings: DragSessionBindings = {
        ...params.bindings,
        onCommit: params.callbacks.onCommit,
        onCleanup: params.callbacks.onSessionEnd,
      };

      startDrag(
        params.event,
        params.widgetId,
        params.widgetElement,
        params.containerElement,
        bindings,
      );

      if (!store.dragging()) {
        params.callbacks.onSessionEnd();
      }
    };

    const beginWidgetPointerAdd = (params: {
      event: PointerEvent;
      widgetId: number;
      containerElement: HTMLElement;
      bindings: DragSessionBindings;
      callbacks: DragHostCallbacks;
    }): void => {
      params.callbacks.onSessionStart();

      const bindings: DragSessionBindings = {
        ...params.bindings,
        onCommit: params.callbacks.onCommit,
        onCleanup: params.callbacks.onSessionEnd,
      };

      startAdd(
        params.event,
        params.widgetId,
        params.containerElement,
        bindings,
      );

      if (!store.dragging()) {
        params.callbacks.onSessionEnd();
      }
    };

    const beginWidgetKeyboardMove = (params: {
      widgetId: number;
      widgetLabel: string;
      bindings: DragSessionBindings;
      callbacks: DragHostCallbacks;
    }): void => {
      params.callbacks.onSessionStart();

      const bindings: DragSessionBindings = {
        ...params.bindings,
        onCommit: params.callbacks.onCommit,
        onCleanup: params.callbacks.onSessionEnd,
      };

      const started = beginKeyboardMove(
        params.widgetId,
        params.widgetLabel,
        bindings,
      );

      if (!started) {
        params.callbacks.onSessionEnd();
      }
    };

    return {
      startDrag,
      startAdd,
      forceCancel,
      onLayoutModeChange,
      beginResize,
      updateResizePreview,
      commitResize,
      cancelResize,
      applyResize,
      beginKeyboardMove,
      beginWidgetPointerMove,
      beginWidgetPointerAdd,
      beginWidgetKeyboardMove,
      nudgeKeyboardMove,
      dropKeyboardMove,
      cancelKeyboardMove,
    };
  }),
);

export type DashboardDragCoordinatorInstance = InstanceType<
  typeof DashboardDragCoordinator
>;
