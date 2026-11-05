import {
  GRID_COLUMNS,
  getWidgetMinimumSize,
  migrateLegacyWidgetSpan,
} from './dashboard-grid.helper';
import {
  DashboardLayoutDocument,
  DashboardLayoutItem,
  DASHBOARD_LAYOUT_VERSION,
  UserDashboard,
  Widget,
} from '../../dashboard.model';
import { widgetsDirectory } from '../../catalog/widgets.registry';

/**
 * Resolves placement size for a catalog widget using directory defaults
 * clamped up to the per-widget minimum size.
 */
export function resolveCatalogPlacementSize(
  widgetId: number
): { rows: number; columns: number } | null {
  const entry = widgetsDirectory.find((widget) => widget.id === widgetId);
  if (!entry) {
    return null;
  }

  const minimum = getWidgetMinimumSize(widgetId);
  return {
    rows: Math.max(entry.rows ?? 1, minimum.rows),
    columns: Math.max(entry.columns ?? 1, minimum.columns),
  };
}

export type SerializableWidget = Omit<Widget, 'content'>;

export type SerializableUserDashboard = {
  widgets: SerializableWidget[];
  order: number[];
};

/** Preferred widget sequence when migrating legacy dashboards via first-fit packing. */
const DEFAULT_ORDER = [1, 6, 8, 5, 7, 9, 10, 11];

const DEFAULT_SERIALIZABLE_DASHBOARD: SerializableUserDashboard = {
  widgets: [
    { id: 1, label: 'Channel Analytics', rows: 6, columns: 8 },
    {
      id: 6,
      label: 'Views',
      rows: 3,
      columns: 2,
      backgroundColor: '#003f5c',
      color: 'whitesmoke',
    },
    {
      id: 8,
      label: 'Revenue',
      rows: 3,
      columns: 2,
      backgroundColor: '#003f5c',
      color: 'whitesmoke',
    },
    {
      id: 5,
      label: 'Subscribers',
      rows: 3,
      columns: 2,
      backgroundColor: '#003f5c',
      color: 'whitesmoke',
    },
    {
      id: 7,
      label: 'Watch Time',
      rows: 3,
      columns: 2,
      backgroundColor: '#003f5c',
      color: 'whitesmoke',
    },
    { id: 9, label: 'Traffic sources', rows: 5, columns: 4 },
    { id: 10, label: 'Published videos', rows: 5, columns: 4 },
    { id: 11, label: 'Ideas for you', rows: 5, columns: 4 },
  ],
  order: DEFAULT_ORDER,
};

/** Explicit desktop positions for the default dashboard (see product screenshot). */
const DEFAULT_LAYOUT_ITEMS: DashboardLayoutItem[] = [
  { widgetId: 1, row: 1, column: 1, rows: 6, columns: 8 },
  { widgetId: 6, row: 1, column: 9, rows: 3, columns: 2 },
  { widgetId: 8, row: 1, column: 11, rows: 3, columns: 2 },
  { widgetId: 5, row: 4, column: 9, rows: 3, columns: 2 },
  { widgetId: 7, row: 4, column: 11, rows: 3, columns: 2 },
  { widgetId: 9, row: 7, column: 1, rows: 5, columns: 4 },
  { widgetId: 10, row: 7, column: 5, rows: 5, columns: 4 },
  { widgetId: 11, row: 7, column: 9, rows: 5, columns: 4 },
];

function isLayoutItem(value: unknown): value is DashboardLayoutItem {
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  const item = value as Record<string, unknown>;
  return (
    Number.isSafeInteger(item['widgetId']) && (item['widgetId'] as number) > 0 &&
    Number.isSafeInteger(item['row']) && (item['row'] as number) > 0 &&
    Number.isSafeInteger(item['column']) && (item['column'] as number) > 0 &&
    Number.isSafeInteger(item['rows']) && (item['rows'] as number) > 0 &&
    Number.isSafeInteger(item['columns']) && (item['columns'] as number) > 0
  );
}

export function isValidLayoutDocument(
  data: unknown
): data is DashboardLayoutDocument {
  if (typeof data !== 'object' || data === null) {
    return false;
  }

  const doc = data as Record<string, unknown>;

  if (doc['version'] !== DASHBOARD_LAYOUT_VERSION) {
    return false;
  }

  if (!Array.isArray(doc['items'])) {
    return false;
  }

  if (!doc['items'].every(isLayoutItem)) {
    return false;
  }

  if (!Array.isArray(doc['mobileOrder'])) {
    return false;
  }

  if (!doc['mobileOrder'].every((item) => typeof item === 'number')) {
    return false;
  }

  return true;
}

export function parseStoredLayoutDocument(
  raw: string | null
): DashboardLayoutDocument | null {
  if (raw === null) {
    return null;
  }

  try {
    const parsed: unknown = JSON.parse(raw);
    return isValidLayoutDocument(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

function clampToRange(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(value, max));
}

export function generateMobileOrderFromItems(
  items: DashboardLayoutItem[]
): number[] {
  return [...items]
    .sort((a, b) => {
      if (a.row !== b.row) {
        return a.row - b.row;
      }
      if (a.column !== b.column) {
        return a.column - b.column;
      }
      return a.widgetId - b.widgetId;
    })
    .map((item) => item.widgetId);
}

function isMobileOrderValid(
  mobileOrder: number[],
  itemIds: Set<number>
): boolean {
  if (mobileOrder.length !== itemIds.size) {
    return false;
  }

  const orderSet = new Set(mobileOrder);
  if (orderSet.size !== mobileOrder.length) {
    return false;
  }

  for (const id of mobileOrder) {
    if (!itemIds.has(id)) {
      return false;
    }
  }

  return true;
}

export function normalizeLayoutDocument(
  doc: DashboardLayoutDocument,
  catalogIds: number[]
): DashboardLayoutDocument {
  const catalogSet = new Set(catalogIds);
  const seenIds = new Set<number>();
  const normalizedItems: DashboardLayoutItem[] = [];

  for (const item of doc.items) {
    if (!catalogSet.has(item.widgetId)) {
      continue;
    }

    if (seenIds.has(item.widgetId)) {
      continue;
    }

    seenIds.add(item.widgetId);

    const row = Math.max(1, item.row);
    const column = clampToRange(item.column, 1, GRID_COLUMNS);
    const rows = Math.max(1, item.rows);
    let columns = Math.max(1, item.columns);

    if (column + columns - 1 > GRID_COLUMNS) {
      columns = GRID_COLUMNS - column + 1;
    }

    normalizedItems.push({
      widgetId: item.widgetId,
      row,
      column,
      rows,
      columns,
    });
  }

  const itemIds = new Set(normalizedItems.map((i) => i.widgetId));
  let normalizedMobileOrder: number[];

  if (isMobileOrderValid(doc.mobileOrder, itemIds)) {
    normalizedMobileOrder = [...doc.mobileOrder];
  } else {
    normalizedMobileOrder = generateMobileOrderFromItems(normalizedItems);
  }

  return {
    version: DASHBOARD_LAYOUT_VERSION,
    items: normalizedItems,
    mobileOrder: normalizedMobileOrder,
  };
}

export function packItemsFirstFit(
  items: Array<{ widgetId: number; rows: number; columns: number }>
): DashboardLayoutItem[] {
  if (items.length === 0) {
    return [];
  }

  const packed: DashboardLayoutItem[] = [];
  const grid: boolean[][] = [];

  function ensureRows(rowCount: number): void {
    while (grid.length < rowCount) {
      grid.push(new Array(GRID_COLUMNS).fill(false));
    }
  }

  function canPlace(
    startRow: number,
    startCol: number,
    rows: number,
    cols: number
  ): boolean {
    ensureRows(startRow + rows);
    for (let r = startRow; r < startRow + rows; r++) {
      for (let c = startCol; c < startCol + cols; c++) {
        if (grid[r][c]) {
          return false;
        }
      }
    }
    return true;
  }

  function markOccupied(
    startRow: number,
    startCol: number,
    rows: number,
    cols: number
  ): void {
    ensureRows(startRow + rows);
    for (let r = startRow; r < startRow + rows; r++) {
      for (let c = startCol; c < startCol + cols; c++) {
        grid[r][c] = true;
      }
    }
  }

  for (const item of items) {
    const cols = Math.min(item.columns, GRID_COLUMNS);
    const rows = Math.max(1, item.rows);

    let placed = false;
    let rowIndex = 0;

    while (!placed) {
      for (let col = 0; col <= GRID_COLUMNS - cols; col++) {
        if (canPlace(rowIndex, col, rows, cols)) {
          markOccupied(rowIndex, col, rows, cols);
          packed.push({
            widgetId: item.widgetId,
            row: rowIndex + 1,
            column: col + 1,
            rows,
            columns: cols,
          });
          placed = true;
          break;
        }
      }
      if (!placed) {
        rowIndex++;
      }
    }
  }

  return packed;
}

export function createDefaultLayoutDocument(): DashboardLayoutDocument {
  const items = DEFAULT_LAYOUT_ITEMS.map((item) => ({ ...item }));
  const mobileOrder = generateMobileOrderFromItems(items);

  return {
    version: DASHBOARD_LAYOUT_VERSION,
    items,
    mobileOrder,
  };
}

export function cloneDefaultLayoutDocument(): DashboardLayoutDocument {
  const doc = createDefaultLayoutDocument();
  return {
    version: doc.version,
    items: doc.items.map((item) => ({ ...item })),
    mobileOrder: [...doc.mobileOrder],
  };
}

function spansFromSerializableWidget(widget: SerializableWidget): {
  rows: number;
  columns: number;
} {
  const migrated = migrateLegacyWidgetSpan(
    widget.columns ?? 3,
    widget.rows ?? 12
  );
  return { rows: migrated.rows, columns: migrated.columns };
}

export function migrateToLayoutDocument(
  old: SerializableUserDashboard
): DashboardLayoutDocument {
  const userWidgetMap = new Map(old.widgets.map((w) => [w.id, w]));
  const placedIds = new Set<number>();

  const itemsToPlace: Array<{
    widgetId: number;
    rows: number;
    columns: number;
  }> = [];

  for (const id of DEFAULT_ORDER) {
    const widget = userWidgetMap.get(id);
    if (!widget) {
      continue;
    }
    placedIds.add(id);
    const spans = spansFromSerializableWidget(widget);
    itemsToPlace.push({ widgetId: id, ...spans });
  }

  for (const widget of old.widgets) {
    if (placedIds.has(widget.id)) {
      continue;
    }
    placedIds.add(widget.id);
    const spans = spansFromSerializableWidget(widget);
    itemsToPlace.push({ widgetId: widget.id, ...spans });
  }

  const packedItems = packItemsFirstFit(itemsToPlace);
  const mobileOrder = generateMobileOrderFromItems(packedItems);

  return {
    version: DASHBOARD_LAYOUT_VERSION,
    items: packedItems,
    mobileOrder,
  };
}

export function hydrateLayoutDocument(
  doc: DashboardLayoutDocument
): UserDashboard {
  const catalogMap = new Map(widgetsDirectory.map((w) => [w.id, w]));
  const widgets: Widget[] = [];
  const validIds = new Set<number>();

  for (const item of doc.items) {
    const catalogEntry = catalogMap.get(item.widgetId);
    if (!catalogEntry) {
      continue;
    }

    validIds.add(item.widgetId);
    widgets.push({
      id: item.widgetId,
      label: catalogEntry.label,
      content: catalogEntry.content,
      rows: item.rows,
      columns: item.columns,
      backgroundColor: catalogEntry.backgroundColor,
      color: catalogEntry.color,
    });
  }

  const mobileOrder = doc.mobileOrder.filter((id) => validIds.has(id));
  const items = doc.items.filter((item) => validIds.has(item.widgetId));

  return { widgets, items, mobileOrder };
}

function isSerializableWidget(value: unknown): value is SerializableWidget {
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  const widget = value as Record<string, unknown>;
  return (
    typeof widget['id'] === 'number' && typeof widget['label'] === 'string'
  );
}

export function isValidSerializableDashboard(
  data: unknown
): data is SerializableUserDashboard {
  if (typeof data !== 'object' || data === null) {
    return false;
  }

  const dashboard = data as Record<string, unknown>;

  if (
    !Array.isArray(dashboard['widgets']) ||
    !Array.isArray(dashboard['order'])
  ) {
    return false;
  }

  if (!dashboard['widgets'].every(isSerializableWidget)) {
    return false;
  }

  return dashboard['order'].every((item) => typeof item === 'number');
}

