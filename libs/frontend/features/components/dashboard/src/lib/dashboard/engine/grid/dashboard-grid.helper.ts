import { DashboardLayoutItem } from '../../dashboard.model';
import {
  DashboardGridMetrics,
  LayoutMode,
  ResizeAxis,
  ResizePreview,
} from './widget-resize.types';

/** Fixed horizontal track count for finer resize snapping. */
export const GRID_COLUMNS = 12;

/** Previous desktop column count; used to migrate stored widget spans. */
export const GRID_LEGACY_COLUMNS = 4;

/** Fixed row track height in pixels (adjust to tune widget density). */
export const GRID_ROW_PX = 80;

/** Gap between grid tracks. */
export const GRID_GAP_PX = 16;

/** Container width threshold for desktop/mobile mode. */
export const MOBILE_BREAKPOINT_PX = 768;

/**
 * Reference minimum width for one legacy column on a 4-column desktop layout.
 * On the 12-column grid this equals three column tracks at the reference width.
 */
export const GRID_MIN_COLUMN_PX = 200;

/** @deprecated Used only to detect persisted sub-row spans from an earlier 12-track row model. */
export const GRID_ROW_SUBDIVISIONS = 12;

export const AUTO_SCROLL_EDGE_PX = 48;
export const AUTO_SCROLL_MAX_SPEED_PX = 16;

export function gridContainerWidthForLegacyColumns(
  legacyColumns: number
): number {
  return (
    legacyColumns * GRID_MIN_COLUMN_PX + (legacyColumns - 1) * GRID_GAP_PX
  );
}

export function referenceGridMetrics(): DashboardGridMetrics {
  return calculateGridMetrics(
    gridContainerWidthForLegacyColumns(GRID_LEGACY_COLUMNS)
  );
}

export function calculateAvailableColumns(containerWidth: number): number {
  if (containerWidth <= 0) {
    return 1;
  }

  return GRID_COLUMNS;
}

export function getLayoutMode(containerWidth: number): LayoutMode {
  return containerWidth < MOBILE_BREAKPOINT_PX ? 'mobile' : 'desktop';
}

export function calculateGridOverlayRowCount(
  containerHeight: number,
  rowTrackPx: number
): number {
  if (rowTrackPx <= 0 || containerHeight <= 0) {
    return 1;
  }

  return Math.max(1, Math.ceil(containerHeight / rowTrackPx));
}

export function calculateLayoutContainerHeight(
  items: readonly Pick<DashboardLayoutItem, 'widgetId' | 'row' | 'rows'>[],
  mobileOrder: readonly number[],
  rowTrackPx: number,
  layoutMode: LayoutMode
): number {
  if (rowTrackPx <= 0) {
    return 0;
  }

  if (layoutMode === 'mobile') {
    const rowsById = new Map(items.map((item) => [item.widgetId, item.rows]));
    let height = 0;

    for (const id of mobileOrder) {
      height += (rowsById.get(id) ?? 1) * rowTrackPx;
    }

    return height;
  }

  let maxRow = 0;

  for (const item of items) {
    maxRow = Math.max(maxRow, item.row + item.rows - 1);
  }

  return maxRow * rowTrackPx;
}

export function calculateGridMetrics(containerWidth: number): DashboardGridMetrics {
  const availableColumns = calculateAvailableColumns(containerWidth);
  const totalGap = (availableColumns - 1) * GRID_GAP_PX;
  const columnWidth = (containerWidth - totalGap) / availableColumns;
  const columnStep = columnWidth + GRID_GAP_PX;
  const layoutMode = getLayoutMode(containerWidth);

  const rowTrackPx = GRID_ROW_PX;

  return {
    containerWidth,
    availableColumns,
    columnWidth,
    columnStep,
    rowStep: rowTrackPx,
    rowTrackPx,
    layoutMode,
  };
}

export function logicalRowHeightPx(logicalRows: number): number {
  return logicalRows * GRID_ROW_PX + (logicalRows - 1) * GRID_GAP_PX;
}

export function spanForPixelExtent(extentPx: number, stepPx: number): number {
  if (stepPx <= 0) {
    return 1;
  }

  return Math.max(1, Math.round((extentPx + GRID_GAP_PX) / stepPx));
}

export function rowSpanForLogicalRows(
  logicalRows: number,
  stepPx: number
): number {
  return spanForPixelExtent(logicalRowHeightPx(logicalRows), stepPx);
}

export function getWidgetMinimumSize(_widgetId?: number): {
  rows: number;
  columns: number;
} {
  return { rows: 1, columns: 1 };
}

export function isLegacyWidgetSpan(columns: number, rows: number): boolean {
  return (
    columns > 0 &&
    columns <= GRID_LEGACY_COLUMNS &&
    rows > 0 &&
    rows <= GRID_LEGACY_COLUMNS &&
    columns % 3 !== 0
  );
}

export function isSubRowLegacySpan(rows: number): boolean {
  return rows >= GRID_ROW_SUBDIVISIONS && rows % GRID_ROW_SUBDIVISIONS === 0;
}

/** @deprecated Height model used before row steps matched column steps. */
export function subRowLegacyHeightPx(subRowSpan: number): number {
  if (subRowSpan <= 0) {
    return 0;
  }

  const completeLogical = Math.floor(subRowSpan / GRID_ROW_SUBDIVISIONS);
  const remainder = subRowSpan % GRID_ROW_SUBDIVISIONS;
  const rowTrackPx = GRID_ROW_PX / GRID_ROW_SUBDIVISIONS;
  let height = 0;

  if (completeLogical > 0) {
    height =
      completeLogical * GRID_ROW_PX + (completeLogical - 1) * GRID_GAP_PX;
  }

  if (remainder > 0) {
    if (completeLogical > 0) {
      height += GRID_GAP_PX;
    }
    height += remainder * rowTrackPx;
  }

  return height;
}

export function migrateLegacyWidgetSpan(columns: number, rows: number): {
  columns: number;
  rows: number;
} {
  const stepPx = referenceGridMetrics().columnStep;
  let nextColumns = columns;
  let nextRows = rows;

  if (isLegacyWidgetSpan(columns, rows)) {
    nextColumns = columns * (GRID_COLUMNS / GRID_LEGACY_COLUMNS);
    nextRows = rowSpanForLogicalRows(rows, stepPx);
  } else if (isSubRowLegacySpan(rows)) {
    nextRows = spanForPixelExtent(subRowLegacyHeightPx(rows), stepPx);
  }

  return { columns: nextColumns, rows: nextRows };
}

export function clampSpan(
  value: number,
  minimum: number,
  maximum?: number
): number {
  const upperBound = maximum ?? Number.MAX_SAFE_INTEGER;
  return Math.max(minimum, Math.min(value, upperBound));
}

export function displayColumnSpan(
  preferredColumns: number,
  availableColumns: number
): number {
  return Math.min(preferredColumns, availableColumns);
}

export function spanFromPointerDelta(
  startSpan: number,
  deltaPx: number,
  stepPx: number,
  minimum: number,
  maximum?: number
): number {
  if (stepPx <= 0) {
    return clampSpan(startSpan, minimum, maximum);
  }

  const deltaSpan = Math.round(deltaPx / stepPx);
  return clampSpan(startSpan + deltaSpan, minimum, maximum);
}

export function spanToColumnExtent(span: number, stepPx: number): number {
  return span * stepPx - GRID_GAP_PX;
}

/** @deprecated Use spanToColumnExtent. */
export function spanToPixelExtent(span: number, stepPx: number): number {
  return spanToColumnExtent(span, stepPx);
}

/**
 * Content height for a row span. Row tracks are contiguous (`gap-y-0`); the
 * visual gap is `pb-4` inside each track, so N rows of content end at the
 * bottom of the Nth overlay cell: `N * rowTrackPx - GRID_GAP_PX`.
 */
export function spanToRowExtent(span: number, rowTrackPx: number): number {
  return span * rowTrackPx - GRID_GAP_PX;
}

export function axisSpanToExtent(
  axis: ResizeAxis,
  span: number,
  metrics: DashboardGridMetrics
): number {
  switch (axis) {
    case 'horizontal':
      return spanToColumnExtent(span, metrics.columnStep);
    case 'vertical':
      return spanToRowExtent(span, metrics.rowTrackPx);
    default: {
      const _exhaustive: never = axis;
      return _exhaustive;
    }
  }
}

export function calculateResizePreview(
  axis: ResizeAxis,
  startSpan: number,
  deltaPx: number,
  metrics: DashboardGridMetrics,
  minSpan: number,
  maxSpan?: number
): ResizePreview {
  switch (axis) {
    case 'horizontal': {
      const stepPx = metrics.columnStep;

      if (stepPx <= 0) {
        const snappedSpan = clampSpan(startSpan, minSpan, maxSpan);
        return {
          axis,
          continuousExtentPx: spanToColumnExtent(snappedSpan, stepPx),
          snappedSpan,
        };
      }

      const startExtent = spanToColumnExtent(startSpan, stepPx);
      const minExtent = spanToColumnExtent(minSpan, stepPx);
      const maxExtent =
        maxSpan !== undefined
          ? spanToColumnExtent(maxSpan, stepPx)
          : Number.MAX_SAFE_INTEGER;
      const minDelta = minExtent - startExtent;
      const maxDelta = maxExtent - startExtent;
      const clampedDelta = Math.max(minDelta, Math.min(deltaPx, maxDelta));
      const continuousExtentPx = startExtent + clampedDelta;
      const snappedSpan = spanFromPointerDelta(
        startSpan,
        clampedDelta,
        stepPx,
        minSpan,
        maxSpan
      );

      return { axis, continuousExtentPx, snappedSpan };
    }
    case 'vertical': {
      const stepPx = metrics.rowTrackPx;

      if (stepPx <= 0) {
        const snappedSpan = clampSpan(startSpan, minSpan, maxSpan);
        return {
          axis,
          continuousExtentPx: spanToRowExtent(snappedSpan, stepPx),
          snappedSpan,
        };
      }

      const startExtent = spanToRowExtent(startSpan, stepPx);
      const minExtent = spanToRowExtent(minSpan, stepPx);
      const maxExtent =
        maxSpan !== undefined
          ? spanToRowExtent(maxSpan, stepPx)
          : Number.MAX_SAFE_INTEGER;
      const minDelta = minExtent - startExtent;
      const maxDelta = maxExtent - startExtent;
      const clampedDelta = Math.max(minDelta, Math.min(deltaPx, maxDelta));
      const continuousExtentPx = startExtent + clampedDelta;
      const snappedSpan = spanFromPointerDelta(
        startSpan,
        clampedDelta,
        stepPx,
        minSpan,
        maxSpan
      );

      return { axis, continuousExtentPx, snappedSpan };
    }
    default: {
      const _exhaustive: never = axis;
      return _exhaustive;
    }
  }
}

export function keyboardDeltaForAxis(axis: ResizeAxis, key: string): number {
  switch (axis) {
    case 'horizontal': {
      switch (key) {
        case 'ArrowLeft':
          return -1;
        case 'ArrowRight':
          return 1;
        default:
          return 0;
      }
    }
    case 'vertical': {
      switch (key) {
        case 'ArrowUp':
          return -1;
        case 'ArrowDown':
          return 1;
        default:
          return 0;
      }
    }
    default: {
      const _exhaustive: never = axis;
      return _exhaustive;
    }
  }
}

export function autoScrollSpeed(clientY: number, viewportHeight: number): number {
  const distanceFromTop = clientY;
  const distanceFromBottom = viewportHeight - clientY;

  if (distanceFromTop < AUTO_SCROLL_EDGE_PX) {
    const intensity = 1 - distanceFromTop / AUTO_SCROLL_EDGE_PX;
    return -Math.ceil(AUTO_SCROLL_MAX_SPEED_PX * intensity);
  }

  if (distanceFromBottom < AUTO_SCROLL_EDGE_PX) {
    const intensity = 1 - distanceFromBottom / AUTO_SCROLL_EDGE_PX;
    return Math.ceil(AUTO_SCROLL_MAX_SPEED_PX * intensity);
  }

  return 0;
}
