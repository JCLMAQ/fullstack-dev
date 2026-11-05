import {
  calculateDisplacementOffsets,
  calculateMobileReorderDisplacements,
  clampResizeSpans,
  commitDesktopMove,
  commitDesktopResize,
  commitMobileAdd,
  compactPassivesWithoutActive,
  compactVertically,
  computeMobileReorderTargetIndex,
  computeMobileStackTops,
  findFirstFitOrigin,
  isValidCandidate,
  placeFirstFitCompacted,
  PlacementItem,
  previewDesktopMove,
  previewDesktopResize,
  rangesOverlap,
  reorderMobileOrder,
  resolveCollisions,
  sortItemsByPosition,
} from './dashboard-placement.engine';
import { DashboardLayoutItem } from '../../dashboard.model';
import { GRID_COLUMNS, calculateGridMetrics, gridContainerWidthForLegacyColumns, GRID_LEGACY_COLUMNS } from '../grid/dashboard-grid.helper';

describe('DashboardPlacementEngine', () => {
  describe('sortItemsByPosition', () => {
    it('sorts by row first', () => {
      const items: PlacementItem[] = [
        { widgetId: 1, column: 1, row: 3, columns: 3, rows: 2 },
        { widgetId: 2, column: 1, row: 1, columns: 3, rows: 2 },
        { widgetId: 3, column: 1, row: 2, columns: 3, rows: 2 },
      ];

      const sorted = sortItemsByPosition(items);

      expect(sorted.map((i) => i.widgetId)).toEqual([2, 3, 1]);
    });

    it('sorts by column when rows are equal', () => {
      const items: PlacementItem[] = [
        { widgetId: 1, column: 7, row: 1, columns: 3, rows: 2 },
        { widgetId: 2, column: 1, row: 1, columns: 3, rows: 2 },
        { widgetId: 3, column: 4, row: 1, columns: 3, rows: 2 },
      ];

      const sorted = sortItemsByPosition(items);

      expect(sorted.map((i) => i.widgetId)).toEqual([2, 3, 1]);
    });

    it('sorts by widgetId when row and column are equal', () => {
      const items: PlacementItem[] = [
        { widgetId: 3, column: 1, row: 1, columns: 3, rows: 2 },
        { widgetId: 1, column: 1, row: 1, columns: 3, rows: 2 },
        { widgetId: 2, column: 1, row: 1, columns: 3, rows: 2 },
      ];

      const sorted = sortItemsByPosition(items);

      expect(sorted.map((i) => i.widgetId)).toEqual([1, 2, 3]);
    });

    it('does not mutate input array', () => {
      const items: PlacementItem[] = [
        { widgetId: 2, column: 1, row: 2, columns: 3, rows: 2 },
        { widgetId: 1, column: 1, row: 1, columns: 3, rows: 2 },
      ];

      sortItemsByPosition(items);

      expect(items[0].widgetId).toBe(2);
      expect(items[1].widgetId).toBe(1);
    });
  });

  describe('rangesOverlap', () => {
    it('detects horizontal overlap', () => {
      const a = { column: 1, row: 1, columns: 4, rows: 2 };
      const b = { column: 3, row: 1, columns: 4, rows: 2 };

      expect(rangesOverlap(a, b)).toBe(true);
    });

    it('detects vertical overlap', () => {
      const a = { column: 1, row: 1, columns: 3, rows: 3 };
      const b = { column: 1, row: 2, columns: 3, rows: 3 };

      expect(rangesOverlap(a, b)).toBe(true);
    });

    it('returns false when horizontally adjacent', () => {
      const a = { column: 1, row: 1, columns: 3, rows: 2 };
      const b = { column: 4, row: 1, columns: 3, rows: 2 };

      expect(rangesOverlap(a, b)).toBe(false);
    });

    it('returns false when vertically adjacent', () => {
      const a = { column: 1, row: 1, columns: 3, rows: 2 };
      const b = { column: 1, row: 3, columns: 3, rows: 2 };

      expect(rangesOverlap(a, b)).toBe(false);
    });

    it('detects complete containment', () => {
      const outer = { column: 1, row: 1, columns: 6, rows: 6 };
      const inner = { column: 2, row: 2, columns: 2, rows: 2 };

      expect(rangesOverlap(outer, inner)).toBe(true);
    });
  });

  describe('isValidCandidate', () => {
    it('returns true for valid position', () => {
      expect(isValidCandidate(1, 1, 3)).toBe(true);
      expect(isValidCandidate(GRID_COLUMNS - 2, 1, 3)).toBe(true);
    });

    it('returns false for column less than 1', () => {
      expect(isValidCandidate(0, 1, 3)).toBe(false);
      expect(isValidCandidate(-1, 1, 3)).toBe(false);
    });

    it('returns false for row less than 1', () => {
      expect(isValidCandidate(1, 0, 3)).toBe(false);
      expect(isValidCandidate(1, -1, 3)).toBe(false);
    });

    it('returns false when widget extends beyond grid right edge', () => {
      expect(isValidCandidate(11, 1, 3)).toBe(false);
      expect(isValidCandidate(GRID_COLUMNS, 1, 2)).toBe(false);
    });

    it('returns true when widget fits exactly at right edge', () => {
      expect(isValidCandidate(GRID_COLUMNS - 2, 1, 3)).toBe(true);
      expect(isValidCandidate(GRID_COLUMNS, 1, 1)).toBe(true);
    });
  });

  describe('resolveCollisions', () => {
    it('returns original positions when no collision', () => {
      const items: DashboardLayoutItem[] = [
        { widgetId: 1, column: 1, row: 1, columns: 3, rows: 2 },
        { widgetId: 2, column: 4, row: 1, columns: 3, rows: 2 },
      ];

      const result = resolveCollisions(items, 1, 1, 1);

      const item1 = result.find((i) => i.widgetId === 1)!;
      const item2 = result.find((i) => i.widgetId === 2)!;

      expect(item1.row).toBe(1);
      expect(item1.column).toBe(1);
      expect(item2.row).toBe(1);
      expect(item2.column).toBe(4);
    });

    it('pushes single colliding widget downward', () => {
      const items: DashboardLayoutItem[] = [
        { widgetId: 1, column: 1, row: 1, columns: 3, rows: 2 },
        { widgetId: 2, column: 1, row: 1, columns: 3, rows: 2 },
      ];

      const result = resolveCollisions(items, 1, 1, 1);

      const item1 = result.find((i) => i.widgetId === 1)!;
      const item2 = result.find((i) => i.widgetId === 2)!;

      expect(item1.row).toBe(1);
      expect(item2.row).toBe(3);
    });

    it('active widget always retains candidate position', () => {
      const items: DashboardLayoutItem[] = [
        { widgetId: 1, column: 4, row: 5, columns: 3, rows: 2 },
        { widgetId: 2, column: 1, row: 1, columns: 6, rows: 3 },
      ];

      const result = resolveCollisions(items, 1, 1, 1);

      const item1 = result.find((i) => i.widgetId === 1)!;

      expect(item1.column).toBe(1);
      expect(item1.row).toBe(1);
    });

    it('cascades collisions through multiple widgets', () => {
      const items: DashboardLayoutItem[] = [
        { widgetId: 1, column: 1, row: 5, columns: 6, rows: 2 },
        { widgetId: 2, column: 1, row: 1, columns: 6, rows: 2 },
        { widgetId: 3, column: 1, row: 3, columns: 6, rows: 2 },
      ];

      const result = resolveCollisions(items, 1, 1, 1);

      const item1 = result.find((i) => i.widgetId === 1)!;
      const item2 = result.find((i) => i.widgetId === 2)!;
      const item3 = result.find((i) => i.widgetId === 3)!;

      expect(item1.row).toBe(1);
      expect(item2.row).toBe(3);
      expect(item3.row).toBe(5);
    });

    it('processes passive widgets in deterministic visual order', () => {
      const items: DashboardLayoutItem[] = [
        { widgetId: 1, column: 1, row: 10, columns: 12, rows: 2 },
        { widgetId: 3, column: 7, row: 1, columns: 3, rows: 2 },
        { widgetId: 2, column: 4, row: 1, columns: 3, rows: 2 },
      ];

      const result = resolveCollisions(items, 1, 4, 1);

      const item2 = result.find((i) => i.widgetId === 2)!;
      const item3 = result.find((i) => i.widgetId === 3)!;

      expect(item2.row).toBe(3);
      expect(item3.row).toBe(3);
    });

    it('B-before-C determinism: same column widget with lower id processes first', () => {
      const items: DashboardLayoutItem[] = [
        { widgetId: 1, column: 1, row: 10, columns: 6, rows: 2 },
        { widgetId: 3, column: 1, row: 1, columns: 3, rows: 2 },
        { widgetId: 2, column: 1, row: 1, columns: 3, rows: 2 },
      ];

      const result = resolveCollisions(items, 1, 1, 1);

      const resultOrder = result
        .filter((i) => i.widgetId !== 1)
        .sort((a, b) => a.row - b.row || a.widgetId - b.widgetId)
        .map((i) => i.widgetId);

      expect(resultOrder[0]).toBe(2);
    });

    it('preserves column positions of passive widgets', () => {
      const items: DashboardLayoutItem[] = [
        { widgetId: 1, column: 1, row: 5, columns: 6, rows: 2 },
        { widgetId: 2, column: 1, row: 1, columns: 3, rows: 2 },
        { widgetId: 3, column: 4, row: 1, columns: 3, rows: 2 },
      ];

      const result = resolveCollisions(items, 1, 1, 1);

      const item2 = result.find((i) => i.widgetId === 2)!;
      const item3 = result.find((i) => i.widgetId === 3)!;

      expect(item2.column).toBe(1);
      expect(item3.column).toBe(4);
    });

    it('returns clone when active widget not found', () => {
      const items: DashboardLayoutItem[] = [
        { widgetId: 2, column: 1, row: 1, columns: 3, rows: 2 },
      ];

      const result = resolveCollisions(items, 999, 1, 1);

      expect(result).toHaveLength(1);
      expect(result[0].widgetId).toBe(2);
    });

    it('does not mutate input items', () => {
      const items: DashboardLayoutItem[] = [
        { widgetId: 1, column: 1, row: 1, columns: 3, rows: 2 },
        { widgetId: 2, column: 1, row: 1, columns: 3, rows: 2 },
      ];

      resolveCollisions(items, 1, 1, 1);

      expect(items[0].row).toBe(1);
      expect(items[1].row).toBe(1);
    });
  });

  describe('compactVertically', () => {
    it('moves single widget to row 1', () => {
      const items: PlacementItem[] = [
        { widgetId: 1, column: 1, row: 5, columns: 3, rows: 2 },
      ];

      const result = compactVertically(items);

      expect(result[0].row).toBe(1);
    });

    it('stacks non-overlapping columns at row 1', () => {
      const items: PlacementItem[] = [
        { widgetId: 1, column: 1, row: 3, columns: 3, rows: 2 },
        { widgetId: 2, column: 4, row: 5, columns: 3, rows: 2 },
      ];

      const result = compactVertically(items);

      expect(result.find((i) => i.widgetId === 1)!.row).toBe(1);
      expect(result.find((i) => i.widgetId === 2)!.row).toBe(1);
    });

    it('stacks overlapping columns vertically', () => {
      const items: PlacementItem[] = [
        { widgetId: 1, column: 1, row: 5, columns: 6, rows: 2 },
        { widgetId: 2, column: 1, row: 10, columns: 6, rows: 2 },
      ];

      const result = compactVertically(items);

      const item1 = result.find((i) => i.widgetId === 1)!;
      const item2 = result.find((i) => i.widgetId === 2)!;

      expect(item1.row).toBe(1);
      expect(item2.row).toBe(3);
    });

    it('never changes column positions', () => {
      const items: PlacementItem[] = [
        { widgetId: 1, column: 4, row: 5, columns: 3, rows: 2 },
        { widgetId: 2, column: 7, row: 10, columns: 3, rows: 2 },
      ];

      const result = compactVertically(items);

      expect(result.find((i) => i.widgetId === 1)!.column).toBe(4);
      expect(result.find((i) => i.widgetId === 2)!.column).toBe(7);
    });

    it('maintains sorted processing order', () => {
      const items: PlacementItem[] = [
        { widgetId: 3, column: 1, row: 7, columns: 6, rows: 2 },
        { widgetId: 1, column: 1, row: 3, columns: 6, rows: 2 },
        { widgetId: 2, column: 1, row: 5, columns: 6, rows: 2 },
      ];

      const result = compactVertically(items);

      const item1 = result.find((i) => i.widgetId === 1)!;
      const item2 = result.find((i) => i.widgetId === 2)!;
      const item3 = result.find((i) => i.widgetId === 3)!;

      expect(item1.row).toBe(1);
      expect(item2.row).toBe(3);
      expect(item3.row).toBe(5);
    });

    it('handles empty array', () => {
      const result = compactVertically([]);
      expect(result).toEqual([]);
    });

    it('does not mutate input items', () => {
      const items: PlacementItem[] = [
        { widgetId: 1, column: 1, row: 5, columns: 3, rows: 2 },
      ];

      compactVertically(items);

      expect(items[0].row).toBe(5);
    });

    it('handles complex layout with mixed overlaps', () => {
      const items: PlacementItem[] = [
        { widgetId: 1, column: 1, row: 10, columns: 3, rows: 2 },
        { widgetId: 2, column: 4, row: 15, columns: 6, rows: 3 },
        { widgetId: 3, column: 1, row: 20, columns: 6, rows: 2 },
        { widgetId: 4, column: 10, row: 25, columns: 3, rows: 2 },
      ];

      const result = compactVertically(items);

      expect(result.find((i) => i.widgetId === 1)!.row).toBe(1);
      expect(result.find((i) => i.widgetId === 2)!.row).toBe(1);
      expect(result.find((i) => i.widgetId === 3)!.row).toBe(4);
      expect(result.find((i) => i.widgetId === 4)!.row).toBe(1);
    });
  });

  describe('previewDesktopMove', () => {
    it('returns valid=true for valid move', () => {
      const items: DashboardLayoutItem[] = [
        { widgetId: 1, column: 1, row: 1, columns: 3, rows: 2 },
      ];

      const result = previewDesktopMove(items, 1, 4, 1);

      expect(result.valid).toBe(true);
    });

    it('returns valid=false for out-of-bounds column', () => {
      const items: DashboardLayoutItem[] = [
        { widgetId: 1, column: 1, row: 1, columns: 3, rows: 2 },
      ];

      const result = previewDesktopMove(items, 1, 11, 1);

      expect(result.valid).toBe(false);
    });

    it('returns valid=false for widget not found', () => {
      const items: DashboardLayoutItem[] = [
        { widgetId: 1, column: 1, row: 1, columns: 3, rows: 2 },
      ];

      const result = previewDesktopMove(items, 999, 1, 1);

      expect(result.valid).toBe(false);
    });

    it('resolves collisions in preview', () => {
      const items: DashboardLayoutItem[] = [
        { widgetId: 1, column: 4, row: 5, columns: 3, rows: 2 },
        { widgetId: 2, column: 1, row: 1, columns: 6, rows: 3 },
      ];

      const result = previewDesktopMove(items, 1, 1, 1);

      expect(result.valid).toBe(true);
      const item1 = result.items.find((i) => i.widgetId === 1)!;
      const item2 = result.items.find((i) => i.widgetId === 2)!;
      expect(item1.row).toBe(1);
      expect(item2.row).toBe(3);
    });

    it('recalculates from start items (immutable)', () => {
      const items: DashboardLayoutItem[] = [
        { widgetId: 1, column: 4, row: 1, columns: 3, rows: 2 },
        { widgetId: 2, column: 1, row: 1, columns: 3, rows: 2 },
      ];

      const result1 = previewDesktopMove(items, 1, 1, 1);
      const result2 = previewDesktopMove(items, 1, 7, 1);

      expect(result1.items.find((i) => i.widgetId === 2)!.row).toBe(3);
      expect(result2.items.find((i) => i.widgetId === 2)!.row).toBe(1);
    });

    it('same input produces same output', () => {
      const items: DashboardLayoutItem[] = [
        { widgetId: 1, column: 1, row: 1, columns: 6, rows: 2 },
        { widgetId: 2, column: 1, row: 3, columns: 3, rows: 2 },
        { widgetId: 3, column: 4, row: 3, columns: 3, rows: 2 },
      ];

      const result1 = previewDesktopMove(items, 1, 1, 3);
      const result2 = previewDesktopMove(items, 1, 1, 3);

      expect(result1.items).toEqual(result2.items);
    });

    it('compacts passive widgets upward when active moves to empty area', () => {
      const items: DashboardLayoutItem[] = [
        { widgetId: 1, column: 1, row: 1, columns: 3, rows: 2 },
        { widgetId: 2, column: 1, row: 3, columns: 3, rows: 2 },
      ];

      const result = previewDesktopMove(items, 1, 7, 1);

      expect(result.valid).toBe(true);
      expect(result.items.find((i) => i.widgetId === 2)!.row).toBe(1);
    });

    it('compacts passive widgets when candidate is invalid', () => {
      const items: DashboardLayoutItem[] = [
        { widgetId: 1, column: 1, row: 1, columns: 3, rows: 2 },
        { widgetId: 2, column: 1, row: 3, columns: 3, rows: 2 },
      ];

      const result = previewDesktopMove(items, 1, 11, 1);

      expect(result.valid).toBe(false);
      expect(result.items.find((i) => i.widgetId === 2)!.row).toBe(1);
      expect(result.items.find((i) => i.widgetId === 1)!.row).toBe(1);
    });

    it('matches commit layout for the same valid candidate', () => {
      const items: DashboardLayoutItem[] = [
        { widgetId: 1, column: 1, row: 1, columns: 3, rows: 2 },
        { widgetId: 2, column: 1, row: 3, columns: 3, rows: 2 },
        { widgetId: 3, column: 4, row: 1, columns: 3, rows: 2 },
      ];

      const preview = previewDesktopMove(items, 1, 7, 1);
      const committed = commitDesktopMove(items, 1, 7, 1);

      expect(preview.items).toEqual(committed);
    });
  });

  describe('compactPassivesWithoutActive', () => {
    it('raises stacked widgets below the removed active item', () => {
      const items: DashboardLayoutItem[] = [
        { widgetId: 1, column: 1, row: 1, columns: 3, rows: 2 },
        { widgetId: 2, column: 1, row: 3, columns: 3, rows: 2 },
      ];

      const result = compactPassivesWithoutActive(items, 1);

      expect(result.find((i) => i.widgetId === 2)!.row).toBe(1);
      expect(result.find((i) => i.widgetId === 1)!.row).toBe(1);
    });
  });

  describe('commitDesktopMove', () => {
    it('returns null for invalid candidate', () => {
      const items: DashboardLayoutItem[] = [
        { widgetId: 1, column: 1, row: 1, columns: 3, rows: 2 },
      ];

      const result = commitDesktopMove(items, 1, 11, 1);

      expect(result).toBeNull();
    });

    it('returns null for widget not found', () => {
      const items: DashboardLayoutItem[] = [
        { widgetId: 1, column: 1, row: 1, columns: 3, rows: 2 },
      ];

      const result = commitDesktopMove(items, 999, 1, 1);

      expect(result).toBeNull();
    });

    it('resolves collisions and compacts', () => {
      const items: DashboardLayoutItem[] = [
        { widgetId: 1, column: 4, row: 10, columns: 3, rows: 2 },
        { widgetId: 2, column: 1, row: 1, columns: 6, rows: 3 },
      ];

      const result = commitDesktopMove(items, 1, 1, 1);

      expect(result).not.toBeNull();
      const item1 = result!.find((i) => i.widgetId === 1)!;
      const item2 = result!.find((i) => i.widgetId === 2)!;

      expect(item1.row).toBe(1);
      expect(item2.row).toBe(3);
    });

    it('compacts widgets upward after move', () => {
      const items: DashboardLayoutItem[] = [
        { widgetId: 1, column: 1, row: 1, columns: 3, rows: 2 },
        { widgetId: 2, column: 4, row: 5, columns: 3, rows: 2 },
      ];

      const result = commitDesktopMove(items, 1, 1, 5);

      expect(result).not.toBeNull();
      const item2 = result!.find((i) => i.widgetId === 2)!;
      expect(item2.row).toBe(1);
    });

    it('returns DashboardLayoutItem format', () => {
      const items: DashboardLayoutItem[] = [
        { widgetId: 1, column: 1, row: 1, columns: 3, rows: 2 },
      ];

      const result = commitDesktopMove(items, 1, 4, 1);

      expect(result).not.toBeNull();
      expect(result![0]).toEqual({
        widgetId: 1,
        column: 4,
        row: 1,
        columns: 3,
        rows: 2,
      });
    });
  });

  describe('calculateDisplacementOffsets', () => {
    const rowTrackPx = 100;

    it('calculates positive offset for pushed down widget', () => {
      const start: DashboardLayoutItem[] = [
        { widgetId: 1, column: 1, row: 1, columns: 3, rows: 2 },
        { widgetId: 2, column: 1, row: 1, columns: 3, rows: 2 },
      ];
      const preview: PlacementItem[] = [
        { widgetId: 1, column: 1, row: 1, columns: 3, rows: 2 },
        { widgetId: 2, column: 1, row: 3, columns: 3, rows: 2 },
      ];

      const offsets = calculateDisplacementOffsets(start, preview, rowTrackPx);

      expect(offsets.get(1)).toBe(0);
      expect(offsets.get(2)).toBe(200);
    });

    it('calculates negative offset for compacted widget', () => {
      const start: DashboardLayoutItem[] = [
        { widgetId: 1, column: 1, row: 5, columns: 3, rows: 2 },
      ];
      const preview: PlacementItem[] = [
        { widgetId: 1, column: 1, row: 1, columns: 3, rows: 2 },
      ];

      const offsets = calculateDisplacementOffsets(start, preview, rowTrackPx);

      expect(offsets.get(1)).toBe(-400);
    });

    it('returns zero offset for unmoved widget', () => {
      const start: DashboardLayoutItem[] = [
        { widgetId: 1, column: 1, row: 3, columns: 3, rows: 2 },
      ];
      const preview: PlacementItem[] = [
        { widgetId: 1, column: 1, row: 3, columns: 3, rows: 2 },
      ];

      const offsets = calculateDisplacementOffsets(start, preview, rowTrackPx);

      expect(offsets.get(1)).toBe(0);
    });

    it('handles missing widget in start items', () => {
      const start: DashboardLayoutItem[] = [];
      const preview: PlacementItem[] = [
        { widgetId: 1, column: 1, row: 1, columns: 3, rows: 2 },
      ];

      const offsets = calculateDisplacementOffsets(start, preview, rowTrackPx);

      expect(offsets.has(1)).toBe(false);
    });
  });

  describe('performance: 50 widget layout', () => {
    let largeLayout: DashboardLayoutItem[];

    beforeEach(() => {
      largeLayout = [];
      for (let i = 0; i < 50; i++) {
        const column = (i % 4) * 3 + 1;
        const row = Math.floor(i / 4) * 3 + 1;
        largeLayout.push({
          widgetId: i + 1,
          column,
          row,
          columns: 3,
          rows: 2,
        });
      }
    });

    it('resolves collisions within practical time budget', () => {
      const start = performance.now();

      for (let i = 0; i < 100; i++) {
        resolveCollisions(largeLayout, 1, 1, 1);
      }

      const elapsed = performance.now() - start;
      expect(elapsed).toBeLessThan(1000);
    });

    it('compacts vertically within practical time budget', () => {
      const resolved = resolveCollisions(largeLayout, 1, 1, 1);
      const start = performance.now();

      for (let i = 0; i < 100; i++) {
        compactVertically(resolved);
      }

      const elapsed = performance.now() - start;
      expect(elapsed).toBeLessThan(1000);
    });

    it('previewDesktopMove within practical time budget', () => {
      const start = performance.now();

      for (let i = 0; i < 100; i++) {
        previewDesktopMove(largeLayout, 1, 7, 1);
      }

      const elapsed = performance.now() - start;
      expect(elapsed).toBeLessThan(1000);
    });

    it('commitDesktopMove within practical time budget', () => {
      const start = performance.now();

      for (let i = 0; i < 100; i++) {
        commitDesktopMove(largeLayout, 1, 7, 1);
      }

      const elapsed = performance.now() - start;
      expect(elapsed).toBeLessThan(1000);
    });

    it('produces no overlapping widgets', () => {
      const result = resolveCollisions(largeLayout, 25, 1, 1);

      for (let i = 0; i < result.length; i++) {
        for (let j = i + 1; j < result.length; j++) {
          const a = result[i];
          const b = result[j];
          const overlap = rangesOverlap(
            { column: a.column, row: a.row, columns: a.columns, rows: a.rows },
            { column: b.column, row: b.row, columns: b.columns, rows: b.rows }
          );
          expect(overlap).toBe(false);
        }
      }
    });
  });

  describe('immutability guarantees', () => {
    it('resolveCollisions produces new objects', () => {
      const items: DashboardLayoutItem[] = [
        { widgetId: 1, column: 1, row: 1, columns: 3, rows: 2 },
      ];

      const result = resolveCollisions(items, 1, 4, 1);

      expect(result[0]).not.toBe(items[0]);
    });

    it('compactVertically produces new objects', () => {
      const items: PlacementItem[] = [
        { widgetId: 1, column: 1, row: 5, columns: 3, rows: 2 },
      ];

      const result = compactVertically(items);

      expect(result[0]).not.toBe(items[0]);
    });

    it('previewDesktopMove does not modify input', () => {
      const items: DashboardLayoutItem[] = [
        { widgetId: 1, column: 1, row: 1, columns: 3, rows: 2 },
        { widgetId: 2, column: 1, row: 1, columns: 3, rows: 2 },
      ];
      const originalJson = JSON.stringify(items);

      previewDesktopMove(items, 1, 1, 1);

      expect(JSON.stringify(items)).toBe(originalJson);
    });

    it('commitDesktopMove does not modify input', () => {
      const items: DashboardLayoutItem[] = [
        { widgetId: 1, column: 1, row: 1, columns: 3, rows: 2 },
        { widgetId: 2, column: 1, row: 1, columns: 3, rows: 2 },
      ];
      const originalJson = JSON.stringify(items);

      commitDesktopMove(items, 1, 1, 1);

      expect(JSON.stringify(items)).toBe(originalJson);
    });
  });

  describe('moving away restores non-displaced preview', () => {
    it('returns to original positions when moving to empty area', () => {
      const items: DashboardLayoutItem[] = [
        { widgetId: 1, column: 7, row: 1, columns: 3, rows: 2 },
        { widgetId: 2, column: 1, row: 1, columns: 3, rows: 2 },
        { widgetId: 3, column: 4, row: 1, columns: 3, rows: 2 },
      ];

      const displaced = previewDesktopMove(items, 1, 1, 1);
      expect(displaced.items.find((i) => i.widgetId === 2)!.row).toBe(3);

      const restored = previewDesktopMove(items, 1, 7, 1);
      expect(restored.items.find((i) => i.widgetId === 2)!.row).toBe(1);
      expect(restored.items.find((i) => i.widgetId === 3)!.row).toBe(1);
    });
  });

  describe('clampResizeSpans', () => {
    it('clamps width to remaining columns from pinned origin', () => {
      expect(clampResizeSpans(10, 6, 4)).toEqual({ columns: 3, rows: 4 });
    });

    it('respects catalog minimums', () => {
      expect(
        clampResizeSpans(1, 1, 1, { columns: 2, rows: 3 })
      ).toEqual({ columns: 2, rows: 3 });
    });

    it('leaves row growth unbounded', () => {
      expect(clampResizeSpans(1, 3, 50)).toEqual({ columns: 3, rows: 50 });
    });
  });

  describe('previewDesktopResize', () => {
    it('keeps top-left pinned while changing spans', () => {
      const items: DashboardLayoutItem[] = [
        { widgetId: 1, column: 4, row: 1, columns: 3, rows: 2 },
      ];

      const result = previewDesktopResize(items, 1, 5, 4);

      expect(result.valid).toBe(true);
      const active = result.items.find((i) => i.widgetId === 1)!;
      expect(active.column).toBe(4);
      expect(active.row).toBe(1);
      expect(active.columns).toBe(5);
      expect(active.rows).toBe(4);
    });

    it('clamps right-edge growth at column 12', () => {
      const items: DashboardLayoutItem[] = [
        { widgetId: 1, column: 10, row: 1, columns: 2, rows: 2 },
      ];

      const result = previewDesktopResize(items, 1, 8, 2);
      const active = result.items.find((i) => i.widgetId === 1)!;

      expect(active.columns).toBe(3);
      expect(active.column).toBe(10);
    });

    it('pushes overlapping neighbors with the same collision rules as move', () => {
      const items: DashboardLayoutItem[] = [
        { widgetId: 1, column: 1, row: 1, columns: 3, rows: 2 },
        { widgetId: 2, column: 1, row: 3, columns: 3, rows: 2 },
      ];

      const result = previewDesktopResize(items, 1, 3, 4);

      expect(result.items.find((i) => i.widgetId === 1)!.rows).toBe(4);
      expect(result.items.find((i) => i.widgetId === 2)!.row).toBe(5);
    });

    it('recalculates from the immutable start snapshot', () => {
      const items: DashboardLayoutItem[] = [
        { widgetId: 1, column: 1, row: 1, columns: 3, rows: 2 },
        { widgetId: 2, column: 4, row: 1, columns: 3, rows: 2 },
      ];

      const grown = previewDesktopResize(items, 1, 6, 2);
      expect(grown.items.find((i) => i.widgetId === 2)!.row).toBe(3);

      const restored = previewDesktopResize(items, 1, 3, 2);
      expect(restored.items.find((i) => i.widgetId === 2)!.row).toBe(1);
    });

    it('returns invalid when widget is missing', () => {
      const items: DashboardLayoutItem[] = [
        { widgetId: 1, column: 1, row: 1, columns: 3, rows: 2 },
      ];

      expect(previewDesktopResize(items, 99, 4, 2).valid).toBe(false);
    });

    it('compacts passive widgets upward when active shrinks vertically', () => {
      const items: DashboardLayoutItem[] = [
        { widgetId: 1, column: 1, row: 1, columns: 3, rows: 4 },
        { widgetId: 2, column: 1, row: 5, columns: 3, rows: 2 },
      ];

      const result = previewDesktopResize(items, 1, 3, 2);

      expect(result.valid).toBe(true);
      expect(result.items.find((i) => i.widgetId === 1)!.rows).toBe(2);
      expect(result.items.find((i) => i.widgetId === 2)!.row).toBe(3);
    });

    it('matches commitDesktopResize layout for the same candidate spans', () => {
      const items: DashboardLayoutItem[] = [
        { widgetId: 1, column: 1, row: 1, columns: 3, rows: 4 },
        { widgetId: 2, column: 1, row: 5, columns: 3, rows: 2 },
      ];

      const preview = previewDesktopResize(items, 1, 3, 2);
      const committed = commitDesktopResize(items, 1, 3, 2);

      expect(preview.items).toEqual(committed);
    });
  });

  describe('commitDesktopResize', () => {
    it('commits span and compacted neighbor coordinates', () => {
      const items: DashboardLayoutItem[] = [
        { widgetId: 1, column: 1, row: 1, columns: 3, rows: 2 },
        { widgetId: 2, column: 1, row: 5, columns: 3, rows: 2 },
      ];

      const result = commitDesktopResize(items, 1, 3, 3);

      expect(result).not.toBeNull();
      expect(result!.find((i) => i.widgetId === 1)).toEqual({
        widgetId: 1,
        column: 1,
        row: 1,
        columns: 3,
        rows: 3,
      });
      expect(result!.find((i) => i.widgetId === 2)!.row).toBe(4);
    });

    it('returns null when widget is missing', () => {
      expect(
        commitDesktopResize(
          [{ widgetId: 1, column: 1, row: 1, columns: 3, rows: 2 }],
          99,
          4,
          2
        )
      ).toBeNull();
    });

    it('does not mutate input items', () => {
      const items: DashboardLayoutItem[] = [
        { widgetId: 1, column: 1, row: 1, columns: 3, rows: 2 },
        { widgetId: 2, column: 1, row: 3, columns: 3, rows: 2 },
      ];
      const original = JSON.stringify(items);

      commitDesktopResize(items, 1, 3, 4);

      expect(JSON.stringify(items)).toBe(original);
    });
  });

  describe('mobile reorder', () => {
    it('moves an id to a new index without changing other membership', () => {
      const result = reorderMobileOrder([1, 2, 3], 3, 0);

      expect(result.valid).toBe(true);
      expect(result.mobileOrder).toEqual([3, 1, 2]);
      expect(result.targetIndex).toBe(0);
    });

    it('clamps target index to the order bounds', () => {
      expect(reorderMobileOrder([1, 2], 1, 99).mobileOrder).toEqual([2, 1]);
      expect(reorderMobileOrder([1, 2], 1, -5).mobileOrder).toEqual([1, 2]);
    });

    it('rejects unknown active ids', () => {
      const result = reorderMobileOrder([1, 2], 99, 0);

      expect(result.valid).toBe(false);
      expect(result.mobileOrder).toEqual([1, 2]);
    });

    it('computes stack tops from row spans', () => {
      const rowsById = new Map([
        [1, 2],
        [2, 3],
      ]);
      const tops = computeMobileStackTops([1, 2], rowsById, 100);

      expect(tops.get(1)).toBe(0);
      expect(tops.get(2)).toBe(200);
    });

    it('computes insert index from pointer midpoint', () => {
      const rowsById = new Map([
        [1, 2],
        [2, 2],
        [3, 2],
      ]);
      // Active widget 1 removed; remaining stack is [2, 3] each 200px tall.
      // Ghost midpoint at 50 should insert before widget 2 (index 0).
      expect(
        computeMobileReorderTargetIndex(
          50,
          50,
          1,
          2,
          [1, 2, 3],
          rowsById,
          100
        )
      ).toBe(0);

      // Ghost midpoint near the end of widget 2 should insert after it (index 1).
      expect(
        computeMobileReorderTargetIndex(
          250,
          50,
          1,
          2,
          [1, 2, 3],
          rowsById,
          100
        )
      ).toBe(1);
    });

    it('calculates displacements for passive widgets only', () => {
      const rowsById = new Map([
        [1, 2],
        [2, 2],
      ]);
      const displaced = calculateMobileReorderDisplacements(
        [1, 2],
        [2, 1],
        rowsById,
        100,
        1
      );

      expect(displaced).toEqual([{ widgetId: 2, offsetY: -200 }]);
    });
  });

  describe('mobile first-fit placement', () => {
    it('finds the first empty origin among occupied cells', () => {
      const occupied: PlacementItem[] = [
        { widgetId: 1, column: 1, row: 1, columns: 6, rows: 2 },
      ];

      expect(findFirstFitOrigin(occupied, 6, 2)).toEqual({
        column: 7,
        row: 1,
      });
    });

    it('places and vertically compacts a new item', () => {
      const existing: DashboardLayoutItem[] = [
        { widgetId: 1, column: 1, row: 3, columns: 3, rows: 2 },
      ];

      const result = placeFirstFitCompacted(existing, {
        widgetId: 2,
        columns: 3,
        rows: 2,
      });

      expect(result.find((item) => item.widgetId === 2)).toEqual({
        widgetId: 2,
        column: 1,
        row: 1,
        columns: 3,
        rows: 2,
      });
      expect(result.find((item) => item.widgetId === 1)?.column).toBe(1);
      expect(result.find((item) => item.widgetId === 1)?.row).toBe(3);
    });

    it('commits a mobile add with prepended order and desktop cells', () => {
      const existing: DashboardLayoutItem[] = [
        { widgetId: 1, column: 1, row: 1, columns: 3, rows: 2 },
      ];

      const result = commitMobileAdd(existing, [1], {
        widgetId: 5,
        columns: 3,
        rows: 2,
      });

      expect(result).not.toBeNull();
      expect(result!.mobileOrder).toEqual([5, 1]);
      expect(result!.items.find((item) => item.widgetId === 5)).toBeDefined();
      expect(result!.items).toHaveLength(2);
    });

    it('rejects duplicate mobile adds', () => {
      expect(
        commitMobileAdd(
          [{ widgetId: 5, column: 1, row: 1, columns: 3, rows: 2 }],
          [5],
          { widgetId: 5, columns: 3, rows: 2 }
        )
      ).toBeNull();
    });
  });
});
