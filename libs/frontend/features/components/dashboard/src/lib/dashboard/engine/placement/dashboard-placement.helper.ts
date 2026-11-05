import { DashboardLayoutItem } from '../../dashboard.model';
import { DashboardGridMetrics } from '../grid/widget-resize.types';
import { GRID_COLUMNS } from '../grid/dashboard-grid.helper';

export type CellCoordinate = {
  column: number;
  row: number;
};

export type CellRange = {
  column: number;
  row: number;
  columns: number;
  rows: number;
};

/**
 * Clamps a 1-based column index to fit the widget within grid bounds.
 * @param column 1-based column index
 * @param widgetColumns Number of columns the widget spans
 */
export function clampColumnToGrid(column: number, widgetColumns: number): number {
  const minColumn = 1;
  const maxColumn = GRID_COLUMNS - widgetColumns + 1;
  return Math.max(minColumn, Math.min(column, maxColumn));
}

/**
 * Clamps a 1-based row index to valid range (minimum 1).
 */
export function clampRowToGrid(row: number): number {
  return Math.max(1, row);
}

/**
 * Converts a pixel offset within the grid container to a 1-based column index,
 * using midpoint snapping.
 */
export function pixelToColumn(
  offsetX: number,
  metrics: DashboardGridMetrics
): number {
  if (metrics.columnStep <= 0) {
    return 1;
  }

  const fractionalColumn = offsetX / metrics.columnStep;
  const snappedColumn = Math.round(fractionalColumn) + 1;
  return Math.max(1, Math.min(snappedColumn, GRID_COLUMNS));
}

/**
 * Converts a pixel offset within the grid container to a 1-based row index,
 * using midpoint snapping.
 */
export function pixelToRow(offsetY: number, metrics: DashboardGridMetrics): number {
  if (metrics.rowTrackPx <= 0) {
    return 1;
  }

  const fractionalRow = offsetY / metrics.rowTrackPx;
  const snappedRow = Math.round(fractionalRow) + 1;
  return Math.max(1, snappedRow);
}

/**
 * Computes the candidate cell origin for a widget being dragged, given the
 * pointer position and the grab offset from the widget's top-left corner.
 *
 * @param pointerX Pointer X position relative to grid container
 * @param pointerY Pointer Y position relative to grid container
 * @param grabOffsetX Offset from widget top-left where grab started
 * @param grabOffsetY Offset from widget top-left where grab started
 * @param widgetColumns Widget column span
 * @param widgetRows Widget row span
 * @param metrics Current grid metrics
 */
export function computeCandidateCellOrigin(
  pointerX: number,
  pointerY: number,
  grabOffsetX: number,
  grabOffsetY: number,
  widgetColumns: number,
  _widgetRows: number,
  metrics: DashboardGridMetrics
): CellCoordinate {
  const widgetTopLeftX = pointerX - grabOffsetX;
  const widgetTopLeftY = pointerY - grabOffsetY;

  const originColumn = clampColumnToGrid(
    pixelToColumn(widgetTopLeftX, metrics),
    widgetColumns
  );
  const originRow = clampRowToGrid(pixelToRow(widgetTopLeftY, metrics));

  return { column: originColumn, row: originRow };
}

/**
 * Converts a 1-based cell coordinate to pixel position (top-left corner).
 */
export function cellToPixelPosition(
  cell: CellCoordinate,
  metrics: DashboardGridMetrics
): { x: number; y: number } {
  const x = (cell.column - 1) * metrics.columnStep;
  const y = (cell.row - 1) * metrics.rowTrackPx;
  return { x, y };
}

/**
 * Creates a shallow clone of layout items (new array and item objects).
 */
export function cloneLayoutItems(
  items: DashboardLayoutItem[]
): DashboardLayoutItem[] {
  return items.map((item) => ({ ...item }));
}
