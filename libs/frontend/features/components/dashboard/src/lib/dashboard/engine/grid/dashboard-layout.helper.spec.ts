import { GRID_COLUMNS } from './dashboard-grid.helper';
import {
  DashboardLayoutDocument,
  DashboardLayoutItem,
  DASHBOARD_LAYOUT_VERSION,
} from '../../dashboard.model';
import {
  cloneDefaultLayoutDocument,
  createDefaultLayoutDocument,
  generateMobileOrderFromItems,
  hydrateLayoutDocument,
  isValidLayoutDocument,
  isValidSerializableDashboard,
  migrateToLayoutDocument,
  normalizeLayoutDocument,
  packItemsFirstFit,
  parseStoredLayoutDocument,
  resolveCatalogPlacementSize,
  SerializableUserDashboard,
} from './dashboard-layout.helper';

const KNOWN_CATALOG_IDS = [1, 2, 3, 5, 6, 7, 8, 9, 10, 11];

describe('DashboardLayoutHelper', () => {
  describe('resolveCatalogPlacementSize', () => {
    it('returns catalog defaults clamped to minimum size', () => {
      expect(resolveCatalogPlacementSize(5)).toEqual({ rows: 3, columns: 3 });
      expect(resolveCatalogPlacementSize(1)).toEqual({ rows: 7, columns: 6 });
    });

    it('returns null for unknown catalog widgets', () => {
      expect(resolveCatalogPlacementSize(99999)).toBeNull();
    });
  });

  describe('isValidLayoutDocument', () => {
    it('accepts a valid version 1 document', () => {
      const doc: DashboardLayoutDocument = {
        version: 1,
        items: [{ widgetId: 1, row: 1, column: 1, rows: 2, columns: 3 }],
        mobileOrder: [1],
      };

      expect(isValidLayoutDocument(doc)).toBe(true);
    });

    it('accepts a document with empty items and mobileOrder', () => {
      const doc: DashboardLayoutDocument = {
        version: 1,
        items: [],
        mobileOrder: [],
      };

      expect(isValidLayoutDocument(doc)).toBe(true);
    });

    it('rejects null', () => {
      expect(isValidLayoutDocument(null)).toBe(false);
    });

    it('rejects non-object primitives', () => {
      expect(isValidLayoutDocument('string')).toBe(false);
      expect(isValidLayoutDocument(123)).toBe(false);
      expect(isValidLayoutDocument(undefined)).toBe(false);
    });

    it('rejects documents with missing version', () => {
      expect(
        isValidLayoutDocument({ items: [], mobileOrder: [] })
      ).toBe(false);
    });

    it('rejects documents with unsupported version', () => {
      expect(
        isValidLayoutDocument({ version: 2, items: [], mobileOrder: [] })
      ).toBe(false);
      expect(
        isValidLayoutDocument({ version: 0, items: [], mobileOrder: [] })
      ).toBe(false);
    });

    it('rejects documents with non-array items', () => {
      expect(
        isValidLayoutDocument({ version: 1, items: 'not-array', mobileOrder: [] })
      ).toBe(false);
    });

    it('rejects documents with non-array mobileOrder', () => {
      expect(
        isValidLayoutDocument({ version: 1, items: [], mobileOrder: 'not-array' })
      ).toBe(false);
    });

    it('rejects items with missing widgetId', () => {
      expect(
        isValidLayoutDocument({
          version: 1,
          items: [{ row: 1, column: 1, rows: 1, columns: 1 }],
          mobileOrder: [],
        })
      ).toBe(false);
    });

    it('rejects items with non-numeric fields', () => {
      expect(
        isValidLayoutDocument({
          version: 1,
          items: [{ widgetId: 1, row: 'a', column: 1, rows: 1, columns: 1 }],
          mobileOrder: [],
        })
      ).toBe(false);
    });

    it('rejects mobileOrder with non-numeric entries', () => {
      expect(
        isValidLayoutDocument({
          version: 1,
          items: [],
          mobileOrder: [1, 'two', 3],
        })
      ).toBe(false);
    });
  });

  describe('parseStoredLayoutDocument', () => {
    it('parses valid JSON into a layout document', () => {
      const json = JSON.stringify({
        version: 1,
        items: [{ widgetId: 1, row: 1, column: 1, rows: 2, columns: 3 }],
        mobileOrder: [1],
      });

      const result = parseStoredLayoutDocument(json);

      expect(result).not.toBeNull();
      expect(result?.version).toBe(1);
      expect(result?.items).toHaveLength(1);
    });

    it('returns null for null input', () => {
      expect(parseStoredLayoutDocument(null)).toBeNull();
    });

    it('returns null for malformed JSON', () => {
      expect(parseStoredLayoutDocument('{not-json')).toBeNull();
    });

    it('returns null for valid JSON that is not a valid document', () => {
      expect(parseStoredLayoutDocument('{"version": 2}')).toBeNull();
    });
  });

  describe('normalizeLayoutDocument', () => {
    const catalogIds = KNOWN_CATALOG_IDS;

    it('passes through a valid document unchanged', () => {
      const doc: DashboardLayoutDocument = {
        version: 1,
        items: [{ widgetId: 1, row: 1, column: 1, rows: 5, columns: 6 }],
        mobileOrder: [1],
      };

      const normalized = normalizeLayoutDocument(doc, catalogIds);

      expect(normalized.items).toEqual(doc.items);
      expect(normalized.mobileOrder).toEqual(doc.mobileOrder);
    });

    it('removes items with unknown widget IDs', () => {
      const doc: DashboardLayoutDocument = {
        version: 1,
        items: [
          { widgetId: 1, row: 1, column: 1, rows: 2, columns: 3 },
          { widgetId: 99999, row: 2, column: 1, rows: 2, columns: 3 },
        ],
        mobileOrder: [1, 99999],
      };

      const normalized = normalizeLayoutDocument(doc, catalogIds);

      expect(normalized.items).toHaveLength(1);
      expect(normalized.items[0].widgetId).toBe(1);
      expect(normalized.mobileOrder).toEqual([1]);
    });

    it('keeps first occurrence when duplicate widget IDs exist', () => {
      const doc: DashboardLayoutDocument = {
        version: 1,
        items: [
          { widgetId: 1, row: 1, column: 1, rows: 2, columns: 3 },
          { widgetId: 1, row: 5, column: 5, rows: 4, columns: 4 },
        ],
        mobileOrder: [1, 1],
      };

      const normalized = normalizeLayoutDocument(doc, catalogIds);

      expect(normalized.items).toHaveLength(1);
      expect(normalized.items[0].row).toBe(1);
      expect(normalized.items[0].column).toBe(1);
    });

    it('clamps row to minimum 1', () => {
      const doc: DashboardLayoutDocument = {
        version: 1,
        items: [{ widgetId: 1, row: 0, column: 1, rows: 2, columns: 3 }],
        mobileOrder: [1],
      };

      const normalized = normalizeLayoutDocument(doc, catalogIds);

      expect(normalized.items[0].row).toBe(1);
    });

    it('clamps column to range [1, 12]', () => {
      const doc: DashboardLayoutDocument = {
        version: 1,
        items: [
          { widgetId: 1, row: 1, column: 0, rows: 2, columns: 3 },
          { widgetId: 2, row: 2, column: 15, rows: 2, columns: 3 },
        ],
        mobileOrder: [1, 2],
      };

      const normalized = normalizeLayoutDocument(doc, catalogIds);

      expect(normalized.items[0].column).toBe(1);
      expect(normalized.items[1].column).toBe(GRID_COLUMNS);
    });

    it('clamps rows span to minimum 1', () => {
      const doc: DashboardLayoutDocument = {
        version: 1,
        items: [{ widgetId: 1, row: 1, column: 1, rows: 0, columns: 3 }],
        mobileOrder: [1],
      };

      const normalized = normalizeLayoutDocument(doc, catalogIds);

      expect(normalized.items[0].rows).toBe(1);
    });

    it('clamps columns span to minimum 1', () => {
      const doc: DashboardLayoutDocument = {
        version: 1,
        items: [{ widgetId: 1, row: 1, column: 1, rows: 2, columns: -1 }],
        mobileOrder: [1],
      };

      const normalized = normalizeLayoutDocument(doc, catalogIds);

      expect(normalized.items[0].columns).toBe(1);
    });

    it('clamps column + columns - 1 to not exceed grid boundary', () => {
      const doc: DashboardLayoutDocument = {
        version: 1,
        items: [{ widgetId: 1, row: 1, column: 10, rows: 2, columns: 6 }],
        mobileOrder: [1],
      };

      const normalized = normalizeLayoutDocument(doc, catalogIds);

      expect(normalized.items[0].column + normalized.items[0].columns - 1).toBeLessThanOrEqual(GRID_COLUMNS);
    });

    it('rebuilds mobileOrder from items in row-major order when invalid', () => {
      const doc: DashboardLayoutDocument = {
        version: 1,
        items: [
          { widgetId: 2, row: 2, column: 1, rows: 2, columns: 3 },
          { widgetId: 1, row: 1, column: 1, rows: 2, columns: 3 },
        ],
        mobileOrder: [99, 98],
      };

      const normalized = normalizeLayoutDocument(doc, catalogIds);

      expect(normalized.mobileOrder).toEqual([1, 2]);
    });

    it('preserves valid mobileOrder that matches items', () => {
      const doc: DashboardLayoutDocument = {
        version: 1,
        items: [
          { widgetId: 1, row: 1, column: 1, rows: 2, columns: 3 },
          { widgetId: 2, row: 2, column: 4, rows: 2, columns: 3 },
        ],
        mobileOrder: [2, 1],
      };

      const normalized = normalizeLayoutDocument(doc, catalogIds);

      expect(normalized.mobileOrder).toEqual([2, 1]);
    });
  });

  describe('packItemsFirstFit', () => {
    it('packs items left-to-right, top-to-bottom', () => {
      const items: Array<{ widgetId: number; rows: number; columns: number }> = [
        { widgetId: 1, rows: 2, columns: 6 },
        { widgetId: 2, rows: 2, columns: 6 },
        { widgetId: 3, rows: 2, columns: 3 },
      ];

      const packed = packItemsFirstFit(items);

      expect(packed[0]).toEqual({ widgetId: 1, row: 1, column: 1, rows: 2, columns: 6 });
      expect(packed[1]).toEqual({ widgetId: 2, row: 1, column: 7, rows: 2, columns: 6 });
      expect(packed[2]).toEqual({ widgetId: 3, row: 3, column: 1, rows: 2, columns: 3 });
    });

    it('handles items wider than remaining space by moving to next row', () => {
      const items: Array<{ widgetId: number; rows: number; columns: number }> = [
        { widgetId: 1, rows: 2, columns: 9 },
        { widgetId: 2, rows: 2, columns: 6 },
      ];

      const packed = packItemsFirstFit(items);

      expect(packed[0].row).toBe(1);
      expect(packed[0].column).toBe(1);
      expect(packed[1].row).toBe(3);
      expect(packed[1].column).toBe(1);
    });

    it('clamps columns to grid width for oversized items', () => {
      const items: Array<{ widgetId: number; rows: number; columns: number }> = [
        { widgetId: 1, rows: 2, columns: 15 },
      ];

      const packed = packItemsFirstFit(items);

      expect(packed[0].columns).toBe(GRID_COLUMNS);
    });

    it('returns empty array for empty input', () => {
      expect(packItemsFirstFit([])).toEqual([]);
    });

    it('respects item order for sequential placement', () => {
      const items: Array<{ widgetId: number; rows: number; columns: number }> = [
        { widgetId: 11, rows: 5, columns: 3 },
        { widgetId: 1, rows: 5, columns: 6 },
        { widgetId: 6, rows: 2, columns: 3 },
      ];

      const packed = packItemsFirstFit(items);

      expect(packed.map((i) => i.widgetId)).toEqual([11, 1, 6]);
      expect(packed[0].column).toBe(1);
      expect(packed[1].column).toBe(4);
      expect(packed[2].column).toBe(10);
    });
  });

  describe('generateMobileOrderFromItems', () => {
    it('sorts items by row, then column, then widgetId', () => {
      const items: DashboardLayoutItem[] = [
        { widgetId: 3, row: 2, column: 1, rows: 1, columns: 1 },
        { widgetId: 1, row: 1, column: 1, rows: 1, columns: 1 },
        { widgetId: 2, row: 1, column: 5, rows: 1, columns: 1 },
      ];

      const order = generateMobileOrderFromItems(items);

      expect(order).toEqual([1, 2, 3]);
    });

    it('uses widgetId as tiebreaker for same row and column', () => {
      const items: DashboardLayoutItem[] = [
        { widgetId: 5, row: 1, column: 1, rows: 1, columns: 1 },
        { widgetId: 3, row: 1, column: 1, rows: 1, columns: 1 },
      ];

      const order = generateMobileOrderFromItems(items);

      expect(order).toEqual([3, 5]);
    });

    it('returns empty array for empty items', () => {
      expect(generateMobileOrderFromItems([])).toEqual([]);
    });
  });

  describe('createDefaultLayoutDocument', () => {
    it('creates a document with the default widget set', () => {
      const doc = createDefaultLayoutDocument();

      expect(doc.version).toBe(DASHBOARD_LAYOUT_VERSION);
      expect(doc.items.length).toBeGreaterThan(0);
      expect(doc.mobileOrder.length).toBe(doc.items.length);
    });

    it('includes the eight default dashboard widgets', () => {
      const doc = createDefaultLayoutDocument();
      const ids = doc.items.map((i) => i.widgetId);

      expect(ids).toEqual([1, 6, 8, 5, 7, 9, 10, 11]);
    });

    it('places channel analytics beside a 2x2 metrics grid', () => {
      const doc = createDefaultLayoutDocument();
      const analytics = doc.items.find((i) => i.widgetId === 1);
      const views = doc.items.find((i) => i.widgetId === 6);
      const revenue = doc.items.find((i) => i.widgetId === 8);

      expect(analytics).toEqual({
        widgetId: 1,
        row: 1,
        column: 1,
        rows: 6,
        columns: 8,
      });
      expect(views?.row).toBe(1);
      expect(views?.column).toBe(9);
      expect(revenue?.row).toBe(1);
      expect(revenue?.column).toBe(11);
    });

    it('places bottom-row widgets in three equal columns', () => {
      const doc = createDefaultLayoutDocument();
      const traffic = doc.items.find((i) => i.widgetId === 9);
      const published = doc.items.find((i) => i.widgetId === 10);
      const ideas = doc.items.find((i) => i.widgetId === 11);

      expect(traffic).toEqual({
        widgetId: 9,
        row: 7,
        column: 1,
        rows: 5,
        columns: 4,
      });
      expect(published?.column).toBe(5);
      expect(published?.columns).toBe(4);
      expect(ideas?.column).toBe(9);
      expect(ideas?.rows).toBe(5);
      expect(ideas?.columns).toBe(4);
    });

    it('produces non-overlapping items', () => {
      const doc = createDefaultLayoutDocument();

      for (let i = 0; i < doc.items.length; i++) {
        for (let j = i + 1; j < doc.items.length; j++) {
          const a = doc.items[i];
          const b = doc.items[j];
          const overlaps =
            a.column < b.column + b.columns &&
            a.column + a.columns > b.column &&
            a.row < b.row + b.rows &&
            a.row + a.rows > b.row;

          expect(overlaps).toBe(false);
        }
      }
    });
  });

  describe('cloneDefaultLayoutDocument', () => {
    it('returns a deep copy', () => {
      const a = cloneDefaultLayoutDocument();
      const b = cloneDefaultLayoutDocument();

      a.items[0].row = 999;

      expect(b.items[0].row).not.toBe(999);
    });
  });

  describe('migrateToLayoutDocument', () => {
    it('preserves widget IDs and custom spans from old schema', () => {
      const old: SerializableUserDashboard = {
        widgets: [
          { id: 1, label: 'Channel Analytics', rows: 7, columns: 8 },
          { id: 2, label: 'Latest Comments', rows: 5, columns: 6 },
        ],
        order: [2, 1],
      };

      const doc = migrateToLayoutDocument(old);

      expect(doc.items).toHaveLength(2);
      const item1 = doc.items.find((i) => i.widgetId === 1);
      const item2 = doc.items.find((i) => i.widgetId === 2);

      expect(item1?.rows).toBe(7);
      expect(item1?.columns).toBe(8);
      expect(item2?.rows).toBe(5);
      expect(item2?.columns).toBe(6);
    });

    it('discards old order for positioning and uses default order', () => {
      const old: SerializableUserDashboard = {
        widgets: [
          { id: 1, label: 'A', rows: 2, columns: 3 },
          { id: 11, label: 'B', rows: 2, columns: 3 },
        ],
        order: [1, 11],
      };

      const doc = migrateToLayoutDocument(old);

      const idSequence = doc.items.map((i) => i.widgetId);
      expect(idSequence[0]).toBe(1);
      expect(idSequence[1]).toBe(11);
    });

    it('filters to widgets the user has', () => {
      const old: SerializableUserDashboard = {
        widgets: [{ id: 1, label: 'Only One', rows: 2, columns: 3 }],
        order: [1],
      };

      const doc = migrateToLayoutDocument(old);

      expect(doc.items).toHaveLength(1);
      expect(doc.items[0].widgetId).toBe(1);
    });

    it('generates mobileOrder from packed layout in row-major order', () => {
      const old: SerializableUserDashboard = {
        widgets: [
          { id: 1, label: 'A', rows: 2, columns: 6 },
          { id: 2, label: 'B', rows: 2, columns: 6 },
        ],
        order: [2, 1],
      };

      const doc = migrateToLayoutDocument(old);

      expect(doc.mobileOrder).toEqual(expect.arrayContaining([1, 2]));
      expect(doc.mobileOrder).toHaveLength(2);
    });

    it('handles legacy column/row values by migrating spans', () => {
      const old: SerializableUserDashboard = {
        widgets: [{ id: 1, label: 'Legacy', rows: 2, columns: 2 }],
        order: [1],
      };

      const doc = migrateToLayoutDocument(old);

      expect(doc.items[0].columns).toBeGreaterThanOrEqual(1);
      expect(doc.items[0].rows).toBeGreaterThanOrEqual(1);
    });
  });

  describe('hydrateLayoutDocument', () => {
    it('hydrates catalog metadata and returns layout coordinates', () => {
      const doc: DashboardLayoutDocument = {
        version: 1,
        items: [{ widgetId: 1, row: 1, column: 1, rows: 5, columns: 6 }],
        mobileOrder: [1],
      };

      const result = hydrateLayoutDocument(doc);

      expect(result.widgets).toHaveLength(1);
      expect(result.widgets[0].content).toBeDefined();
      expect(result.mobileOrder).toEqual([1]);
      expect(result.items).toEqual(doc.items);
    });
  });

  describe('isValidSerializableDashboard (old schema migration)', () => {
    it('accepts valid old-format documents', () => {
      const old = {
        widgets: [{ id: 1, label: 'Test' }],
        order: [1],
      };

      expect(isValidSerializableDashboard(old)).toBe(true);
    });

    it('rejects documents missing widgets array', () => {
      expect(isValidSerializableDashboard({ order: [1] })).toBe(false);
    });

    it('rejects documents missing order array', () => {
      expect(
        isValidSerializableDashboard({ widgets: [{ id: 1, label: 'Test' }] })
      ).toBe(false);
    });
  });

  describe('round-trip integrity', () => {
    it('valid documents parse and normalize without data loss', () => {
      const original: DashboardLayoutDocument = {
        version: 1,
        items: [
          { widgetId: 1, row: 1, column: 1, rows: 5, columns: 6 },
          { widgetId: 2, row: 1, column: 7, rows: 5, columns: 6 },
        ],
        mobileOrder: [1, 2],
      };

      const json = JSON.stringify(original);
      const parsed = parseStoredLayoutDocument(json);
      expect(parsed).not.toBeNull();

      const normalized = normalizeLayoutDocument(parsed!, KNOWN_CATALOG_IDS);

      expect(normalized.items).toHaveLength(2);
      expect(normalized.mobileOrder).toEqual([1, 2]);
    });

    it('hydrated layout round-trips coordinates', () => {
      const doc: DashboardLayoutDocument = {
        version: 1,
        items: [
          { widgetId: 1, row: 1, column: 1, rows: 5, columns: 6 },
          { widgetId: 2, row: 1, column: 7, rows: 5, columns: 6 },
        ],
        mobileOrder: [1, 2],
      };

      const hydrated = hydrateLayoutDocument(doc);

      expect(hydrated.items).toEqual(doc.items);
      expect(hydrated.mobileOrder).toEqual(doc.mobileOrder);
      expect(hydrated.widgets).toHaveLength(2);
    });
  });
});
