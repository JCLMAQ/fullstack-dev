import {
  AUTO_SCROLL_EDGE_PX,
  AUTO_SCROLL_MAX_SPEED_PX,
  autoScrollSpeed,
  calculateAvailableColumns,
  calculateGridMetrics,
  calculateGridOverlayRowCount,
  calculateResizePreview,
  clampSpan,
  displayColumnSpan,
  getLayoutMode,
  getWidgetMinimumSize,
  GRID_COLUMNS,
  GRID_GAP_PX,
  GRID_LEGACY_COLUMNS,
  GRID_MIN_COLUMN_PX,
  GRID_ROW_PX,
  GRID_ROW_SUBDIVISIONS,
  gridContainerWidthForLegacyColumns,
  isLegacyWidgetSpan,
  keyboardDeltaForAxis,
  migrateLegacyWidgetSpan,
  MOBILE_BREAKPOINT_PX,
  spanFromPointerDelta,
  spanToColumnExtent,
  spanToPixelExtent,
  spanToRowExtent,
} from './dashboard-grid.helper';

describe('dashboard-grid.helper', () => {
  const desktopWidth = gridContainerWidthForLegacyColumns(GRID_LEGACY_COLUMNS);
  const narrowWidth = gridContainerWidthForLegacyColumns(2);

  describe('calculateAvailableColumns', () => {
    it('returns 1 for non-positive widths', () => {
      expect(calculateAvailableColumns(0)).toBe(1);
      expect(calculateAvailableColumns(-10)).toBe(1);
    });

    it('returns the fixed 12-column track count for positive widths', () => {
      expect(calculateAvailableColumns(desktopWidth)).toBe(GRID_COLUMNS);
      expect(calculateAvailableColumns(narrowWidth)).toBe(GRID_COLUMNS);
    });
  });

  describe('calculateGridMetrics', () => {
    it('derives column steps from container width and fixed row track height', () => {
      const metrics = calculateGridMetrics(desktopWidth);

      expect(metrics.availableColumns).toBe(GRID_COLUMNS);
      expect(metrics.containerWidth).toBe(desktopWidth);
      expect(metrics.columnWidth).toBeCloseTo(
        (desktopWidth - (GRID_COLUMNS - 1) * GRID_GAP_PX) / GRID_COLUMNS,
        5
      );
      expect(metrics.columnStep).toBe(metrics.columnWidth + GRID_GAP_PX);
      expect(metrics.rowStep).toBe(GRID_ROW_PX);
      expect(metrics.rowTrackPx).toBe(GRID_ROW_PX);
    });

    it('keeps row track height fixed regardless of container width', () => {
      const desktopMetrics = calculateGridMetrics(desktopWidth);
      const mobileMetrics = calculateGridMetrics(320);

      expect(desktopMetrics.rowTrackPx).toBe(GRID_ROW_PX);
      expect(mobileMetrics.rowTrackPx).toBe(GRID_ROW_PX);
      expect(mobileMetrics.rowTrackPx).not.toBe(mobileMetrics.columnWidth);
    });

    it('uses 16px gaps between tracks', () => {
      const metrics = calculateGridMetrics(desktopWidth);
      const expectedColumnWidth =
        (desktopWidth - (GRID_COLUMNS - 1) * GRID_GAP_PX) / GRID_COLUMNS;

      expect(metrics.columnStep - expectedColumnWidth).toBe(GRID_GAP_PX);
    });

    it('includes layoutMode from container width', () => {
      const desktopMetrics = calculateGridMetrics(desktopWidth);
      const mobileMetrics = calculateGridMetrics(700);

      expect(desktopMetrics.layoutMode).toBe('desktop');
      expect(mobileMetrics.layoutMode).toBe('mobile');
    });
  });

  describe('getLayoutMode', () => {
    it('returns desktop for widths at or above 768px', () => {
      expect(getLayoutMode(MOBILE_BREAKPOINT_PX)).toBe('desktop');
      expect(getLayoutMode(1200)).toBe('desktop');
      expect(getLayoutMode(desktopWidth)).toBe('desktop');
    });

    it('returns mobile for widths below 768px', () => {
      expect(getLayoutMode(MOBILE_BREAKPOINT_PX - 1)).toBe('mobile');
      expect(getLayoutMode(700)).toBe('mobile');
      expect(getLayoutMode(320)).toBe('mobile');
      expect(getLayoutMode(0)).toBe('mobile');
    });

    it('uses 768px as the breakpoint threshold', () => {
      expect(MOBILE_BREAKPOINT_PX).toBe(768);
    });
  });

  describe('calculateGridOverlayRowCount', () => {
    it('returns at least one row for empty or invalid measurements', () => {
      expect(calculateGridOverlayRowCount(0, 72)).toBe(1);
      expect(calculateGridOverlayRowCount(400, 0)).toBe(1);
    });

    it('ceil-divides container height by row track size', () => {
      expect(calculateGridOverlayRowCount(400, 72)).toBe(6);
      expect(calculateGridOverlayRowCount(72, 72)).toBe(1);
      expect(calculateGridOverlayRowCount(73, 72)).toBe(2);
    });
  });

  describe('getWidgetMinimumSize', () => {
    it('returns one grid cell for every widget', () => {
      expect(getWidgetMinimumSize(1)).toEqual({ rows: 1, columns: 1 });
      expect(getWidgetMinimumSize(9999)).toEqual({ rows: 1, columns: 1 });
    });
  });

  describe('migrateLegacyWidgetSpan', () => {
    it('scales legacy spans to the 12-track grid', () => {
      expect(migrateLegacyWidgetSpan(2, 2)).toEqual({ columns: 6, rows: 3 });
      expect(migrateLegacyWidgetSpan(1, 1)).toEqual({ columns: 3, rows: 1 });
    });

    it('migrates persisted sub-row spans to unified row tracks', () => {
      expect(migrateLegacyWidgetSpan(6, 24)).toEqual({ columns: 6, rows: 3 });
    });

    it('leaves modern spans unchanged', () => {
      expect(migrateLegacyWidgetSpan(6, 5)).toEqual({ columns: 6, rows: 5 });
    });

    it('detects legacy spans', () => {
      expect(isLegacyWidgetSpan(2, 2)).toBe(true);
      expect(isLegacyWidgetSpan(6, 5)).toBe(false);
    });
  });

  describe('clampSpan', () => {
    it('clamps within min and optional max', () => {
      expect(clampSpan(0, 1, 4)).toBe(1);
      expect(clampSpan(2, 1, 4)).toBe(2);
      expect(clampSpan(9, 1, 4)).toBe(4);
      expect(clampSpan(9, 1)).toBe(9);
    });
  });

  describe('displayColumnSpan', () => {
    it('never exceeds available columns', () => {
      expect(displayColumnSpan(9, GRID_COLUMNS)).toBe(9);
      expect(displayColumnSpan(15, GRID_COLUMNS)).toBe(GRID_COLUMNS);
    });
  });

  describe('spanFromPointerDelta', () => {
    it('returns start span when step is not positive', () => {
      expect(spanFromPointerDelta(6, 100, 0, 3, 12)).toBe(6);
    });

    it('snaps pointer delta to span steps', () => {
      const metrics = calculateGridMetrics(desktopWidth);
      const stepPx = metrics.columnStep;

      expect(spanFromPointerDelta(6, stepPx, stepPx, 3, 12)).toBe(7);
      expect(spanFromPointerDelta(6, -stepPx, stepPx, 3, 12)).toBe(5);
    });
  });

  describe('spanToColumnExtent', () => {
    it('converts column span to rendered pixel extent', () => {
      const metrics = calculateGridMetrics(desktopWidth);
      const stepPx = metrics.columnStep;

      expect(spanToColumnExtent(6, stepPx)).toBe(6 * stepPx - GRID_GAP_PX);
      expect(spanToColumnExtent(3, stepPx)).toBeCloseTo(GRID_MIN_COLUMN_PX, 5);
      expect(spanToPixelExtent(3, stepPx)).toBe(spanToColumnExtent(3, stepPx));
    });
  });

  describe('spanToRowExtent', () => {
    it('ends at the bottom of the Nth padded overlay cell', () => {
      const metrics = calculateGridMetrics(desktopWidth);
      const rowTrackPx = metrics.rowTrackPx;

      expect(spanToRowExtent(1, rowTrackPx)).toBe(rowTrackPx - GRID_GAP_PX);
      expect(spanToRowExtent(2, rowTrackPx)).toBe(2 * rowTrackPx - GRID_GAP_PX);
      expect(spanToRowExtent(5, rowTrackPx)).toBe(5 * rowTrackPx - GRID_GAP_PX);
    });
  });

  describe('calculateResizePreview', () => {
    const metrics = calculateGridMetrics(desktopWidth);
    const stepPx = metrics.columnStep;

    it('returns continuous extents between column thresholds', () => {
      const startSpan = 6;
      const startExtent = spanToColumnExtent(startSpan, stepPx);

      const withinCell = calculateResizePreview(
        'horizontal',
        startSpan,
        20,
        metrics,
        3,
        GRID_COLUMNS
      );
      expect(withinCell.snappedSpan).toBe(startSpan);
      expect(withinCell.continuousExtentPx).toBe(startExtent + 20);

      const nextThreshold = calculateResizePreview(
        'horizontal',
        startSpan,
        stepPx / 2,
        metrics,
        3,
        GRID_COLUMNS
      );
      expect(nextThreshold.snappedSpan).toBe(startSpan + 1);
      expect(nextThreshold.continuousExtentPx).toBe(startExtent + stepPx / 2);
    });

    it('snaps at exact half-step boundaries', () => {
      const preview = calculateResizePreview(
        'horizontal',
        6,
        stepPx / 2,
        metrics,
        3,
        GRID_COLUMNS
      );

      expect(preview.snappedSpan).toBe(7);
    });

    it('clamps continuous extent at min and max spans', () => {
      const minPreview = calculateResizePreview(
        'horizontal',
        6,
        -stepPx * 12,
        metrics,
        3,
        GRID_COLUMNS
      );
      expect(minPreview.snappedSpan).toBe(3);
      expect(minPreview.continuousExtentPx).toBe(
        spanToColumnExtent(3, stepPx)
      );

      const maxPreview = calculateResizePreview(
        'horizontal',
        6,
        stepPx * 12,
        metrics,
        3,
        9
      );
      expect(maxPreview.snappedSpan).toBe(9);
      expect(maxPreview.continuousExtentPx).toBe(spanToColumnExtent(9, stepPx));
    });

    it('preserves start span when step is not positive', () => {
      const invalidMetrics = { ...metrics, columnStep: 0 };
      const preview = calculateResizePreview(
        'horizontal',
        6,
        100,
        invalidMetrics,
        3,
        GRID_COLUMNS
      );

      expect(preview.snappedSpan).toBe(6);
      expect(preview.continuousExtentPx).toBe(spanToColumnExtent(6, 0));
    });

    describe('vertical axis', () => {
      const rowTrackPx = metrics.rowTrackPx;

      it('returns continuous extents between row thresholds', () => {
        const startSpan = 5;
        const startExtent = spanToRowExtent(startSpan, rowTrackPx);

        const withinCell = calculateResizePreview(
          'vertical',
          startSpan,
          20,
          metrics,
          2
        );
        expect(withinCell.snappedSpan).toBe(startSpan);
        expect(withinCell.continuousExtentPx).toBe(startExtent + 20);

        const nextThreshold = calculateResizePreview(
          'vertical',
          startSpan,
          rowTrackPx / 2,
          metrics,
          2
        );
        expect(nextThreshold.snappedSpan).toBe(startSpan + 1);
        expect(nextThreshold.continuousExtentPx).toBe(
          startExtent + rowTrackPx / 2
        );
      });

      it('snaps at exact half-step boundaries', () => {
        const preview = calculateResizePreview(
          'vertical',
          5,
          rowTrackPx / 2,
          metrics,
          2
        );

        expect(preview.snappedSpan).toBe(6);
      });

      it('clamps continuous extent at minimum height with no artificial maximum', () => {
        const minPreview = calculateResizePreview(
          'vertical',
          5,
          -rowTrackPx * 12,
          metrics,
          2
        );
        expect(minPreview.snappedSpan).toBe(2);
        expect(minPreview.continuousExtentPx).toBe(
          spanToRowExtent(2, rowTrackPx)
        );

        const largeDelta = calculateResizePreview(
          'vertical',
          5,
          rowTrackPx * 20,
          metrics,
          2
        );
        expect(largeDelta.snappedSpan).toBe(25);
        expect(largeDelta.continuousExtentPx).toBe(
          spanToRowExtent(5, rowTrackPx) + rowTrackPx * 20
        );
      });

      it('uses fixed row track size for vertical snapping', () => {
        expect(metrics.rowStep).toBe(metrics.rowTrackPx);
        expect(metrics.rowTrackPx).toBe(GRID_ROW_PX);
      });

      it('preserves start span when row track size is not positive', () => {
        const invalidMetrics = { ...metrics, rowTrackPx: 0, rowStep: 0 };
        const preview = calculateResizePreview(
          'vertical',
          5,
          100,
          invalidMetrics,
          2
        );

        expect(preview.snappedSpan).toBe(5);
        expect(preview.continuousExtentPx).toBe(spanToRowExtent(5, 0));
      });
    });
  });

  describe('keyboardDeltaForAxis', () => {
    it('maps horizontal arrows', () => {
      expect(keyboardDeltaForAxis('horizontal', 'ArrowLeft')).toBe(-1);
      expect(keyboardDeltaForAxis('horizontal', 'ArrowRight')).toBe(1);
      expect(keyboardDeltaForAxis('horizontal', 'ArrowUp')).toBe(0);
    });

    it('maps vertical arrows', () => {
      expect(keyboardDeltaForAxis('vertical', 'ArrowUp')).toBe(-1);
      expect(keyboardDeltaForAxis('vertical', 'ArrowDown')).toBe(1);
      expect(keyboardDeltaForAxis('vertical', 'ArrowLeft')).toBe(0);
    });
  });

  describe('autoScrollSpeed', () => {
    it('returns 0 when the pointer is away from edges', () => {
      expect(autoScrollSpeed(200, 800)).toBe(0);
    });

    it('scrolls up near the top edge and down near the bottom', () => {
      expect(autoScrollSpeed(0, 800)).toBe(-AUTO_SCROLL_MAX_SPEED_PX);
      expect(autoScrollSpeed(800, 800)).toBe(AUTO_SCROLL_MAX_SPEED_PX);
      expect(autoScrollSpeed(AUTO_SCROLL_EDGE_PX / 2, 800)).toBeLessThan(0);
    });
  });
});
