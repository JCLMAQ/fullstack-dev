import {
  cellToPixelPosition,
  clampColumnToGrid,
  clampRowToGrid,
  cloneLayoutItems,
  computeCandidateCellOrigin,
  pixelToColumn,
  pixelToRow,
} from './dashboard-placement.helper';
import {
  calculateGridMetrics,
  GRID_COLUMNS,
  gridContainerWidthForLegacyColumns,
  GRID_LEGACY_COLUMNS,
} from '../grid/dashboard-grid.helper';
import { DashboardLayoutItem } from '../../dashboard.model';

describe('DashboardPlacementHelper', () => {
  const metrics = calculateGridMetrics(
    gridContainerWidthForLegacyColumns(GRID_LEGACY_COLUMNS)
  );
  const stepPx = metrics.columnStep;

  describe('clampColumnToGrid', () => {
    it('clamps column to minimum 1', () => {
      expect(clampColumnToGrid(0, 3)).toBe(1);
      expect(clampColumnToGrid(-5, 3)).toBe(1);
    });

    it('clamps column so widget fits within grid', () => {
      expect(clampColumnToGrid(11, 3)).toBe(GRID_COLUMNS - 2);
      expect(clampColumnToGrid(15, 3)).toBe(GRID_COLUMNS - 2);
    });

    it('allows valid columns within range', () => {
      expect(clampColumnToGrid(1, 3)).toBe(1);
      expect(clampColumnToGrid(5, 3)).toBe(5);
      expect(clampColumnToGrid(10, 3)).toBe(10);
    });

    it('handles single-column widgets', () => {
      expect(clampColumnToGrid(12, 1)).toBe(GRID_COLUMNS);
      expect(clampColumnToGrid(13, 1)).toBe(GRID_COLUMNS);
    });

    it('handles full-width widgets', () => {
      expect(clampColumnToGrid(1, GRID_COLUMNS)).toBe(1);
      expect(clampColumnToGrid(5, GRID_COLUMNS)).toBe(1);
    });
  });

  describe('clampRowToGrid', () => {
    it('clamps row to minimum 1', () => {
      expect(clampRowToGrid(0)).toBe(1);
      expect(clampRowToGrid(-5)).toBe(1);
    });

    it('allows valid rows', () => {
      expect(clampRowToGrid(1)).toBe(1);
      expect(clampRowToGrid(10)).toBe(10);
      expect(clampRowToGrid(100)).toBe(100);
    });
  });

  describe('pixelToColumn', () => {
    it('returns 1 for negative offsets', () => {
      expect(pixelToColumn(-50, metrics)).toBe(1);
    });

    it('returns 1 for offset at origin', () => {
      expect(pixelToColumn(0, metrics)).toBe(1);
    });

    it('snaps to nearest column using midpoint', () => {
      expect(pixelToColumn(stepPx * 0.4, metrics)).toBe(1);
      expect(pixelToColumn(stepPx * 0.6, metrics)).toBe(2);
      expect(pixelToColumn(stepPx * 1.5, metrics)).toBe(3);
    });

    it('clamps to maximum column', () => {
      expect(pixelToColumn(stepPx * 20, metrics)).toBe(GRID_COLUMNS);
    });

    it('handles zero column step gracefully', () => {
      const zeroMetrics = { ...metrics, columnStep: 0 };
      expect(pixelToColumn(100, zeroMetrics)).toBe(1);
    });
  });

  describe('pixelToRow', () => {
    it('returns 1 for negative offsets', () => {
      expect(pixelToRow(-50, metrics)).toBe(1);
    });

    it('returns 1 for offset at origin', () => {
      expect(pixelToRow(0, metrics)).toBe(1);
    });

    it('snaps to nearest row using midpoint', () => {
      const rowStep = metrics.rowTrackPx;
      expect(pixelToRow(rowStep * 0.4, metrics)).toBe(1);
      expect(pixelToRow(rowStep * 0.6, metrics)).toBe(2);
      expect(pixelToRow(rowStep * 1.5, metrics)).toBe(3);
    });

    it('handles zero row track gracefully', () => {
      const zeroMetrics = { ...metrics, rowTrackPx: 0 };
      expect(pixelToRow(100, zeroMetrics)).toBe(1);
    });
  });

  describe('computeCandidateCellOrigin', () => {
    it('computes origin from pointer with grab offset preserved', () => {
      const grabOffsetX = 20;
      const grabOffsetY = 10;
      const pointerX = stepPx + grabOffsetX;
      const pointerY = metrics.rowTrackPx + grabOffsetY;

      const origin = computeCandidateCellOrigin(
        pointerX,
        pointerY,
        grabOffsetX,
        grabOffsetY,
        3,
        2,
        metrics
      );

      expect(origin.column).toBeGreaterThanOrEqual(1);
      expect(origin.row).toBeGreaterThanOrEqual(1);
    });

    it('preserves saved origin when pointer matches grid placement', () => {
      const widgetColumns = 3;
      const widgetRows = 6;
      const column = 1;
      const row = 6;
      const pos = cellToPixelPosition({ column, row }, metrics);
      const grabOffsetX = 24;
      const grabOffsetY = 16;

      const origin = computeCandidateCellOrigin(
        pos.x + grabOffsetX,
        pos.y + grabOffsetY,
        grabOffsetX,
        grabOffsetY,
        widgetColumns,
        widgetRows,
        metrics
      );

      expect(origin).toEqual({ column, row });
    });

    it('derives origin from widget top-left rather than pointer position', () => {
      const widgetColumns = 3;
      const widgetRows = 2;

      const origin1 = computeCandidateCellOrigin(
        stepPx * 2,
        metrics.rowTrackPx * 2,
        0,
        0,
        widgetColumns,
        widgetRows,
        metrics
      );

      const origin2 = computeCandidateCellOrigin(
        stepPx * 2,
        metrics.rowTrackPx * 2,
        stepPx,
        metrics.rowTrackPx,
        widgetColumns,
        widgetRows,
        metrics
      );

      expect(origin1.column).not.toBe(origin2.column);
      expect(origin2.column).toBeLessThan(origin1.column);
    });

    it('clamps horizontal out-of-bounds to valid range', () => {
      const origin = computeCandidateCellOrigin(
        stepPx * 20,
        metrics.rowTrackPx,
        0,
        0,
        3,
        2,
        metrics
      );

      expect(origin.column).toBeLessThanOrEqual(GRID_COLUMNS - 2);
    });

    it('clamps vertical out-of-bounds to minimum row', () => {
      const origin = computeCandidateCellOrigin(
        stepPx,
        -100,
        0,
        0,
        3,
        2,
        metrics
      );

      expect(origin.row).toBe(1);
    });
  });

  describe('cellToPixelPosition', () => {
    it('converts cell 1,1 to origin 0,0', () => {
      const pos = cellToPixelPosition({ column: 1, row: 1 }, metrics);
      expect(pos.x).toBe(0);
      expect(pos.y).toBe(0);
    });

    it('converts column 2 to one step right', () => {
      const pos = cellToPixelPosition({ column: 2, row: 1 }, metrics);
      expect(pos.x).toBeCloseTo(stepPx, 5);
    });

    it('converts row 3 to two row steps down', () => {
      const pos = cellToPixelPosition({ column: 1, row: 3 }, metrics);
      expect(pos.y).toBeCloseTo(metrics.rowTrackPx * 2, 5);
    });
  });

  describe('cloneLayoutItems', () => {
    it('creates shallow copy of items', () => {
      const items: DashboardLayoutItem[] = [
        { widgetId: 1, row: 1, column: 1, rows: 2, columns: 3 },
      ];

      const cloned = cloneLayoutItems(items);

      expect(cloned).not.toBe(items);
      expect(cloned[0]).not.toBe(items[0]);
      expect(cloned[0]).toEqual(items[0]);
    });
  });
});
