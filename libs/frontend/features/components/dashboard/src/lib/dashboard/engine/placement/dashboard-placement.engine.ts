import { DashboardLayoutItem } from '../../dashboard.model';
import { CellRange } from '../placement/dashboard-placement.helper';
import { GRID_COLUMNS } from '../grid/dashboard-grid.helper';

export type PlacementItem = {
  widgetId: number;
  column: number;
  row: number;
  columns: number;
  rows: number;
};

export type PreviewResult = {
  items: PlacementItem[];
  valid: boolean;
};

/**
 * Sorts items deterministically by (row, column, widgetId).
 * Used to ensure consistent ordering when processing collisions.
 */
export function sortItemsByPosition(items: PlacementItem[]): PlacementItem[] {
  return [...items].sort((a, b) => {
    if (a.row !== b.row) {
      return a.row - b.row;
    }
    if (a.column !== b.column) {
      return a.column - b.column;
    }
    return a.widgetId - b.widgetId;
  });
}

/**
 * Returns whether two cell ranges overlap.
 */
export function rangesOverlap(a: CellRange, b: CellRange): boolean {
  const aRight = a.column + a.columns - 1;
  const aBottom = a.row + a.rows - 1;
  const bRight = b.column + b.columns - 1;
  const bBottom = b.row + b.rows - 1;

  const noOverlap =
    a.column > bRight ||
    b.column > aRight ||
    a.row > bBottom ||
    b.row > aBottom;

  return !noOverlap;
}

/**
 * Validates a candidate position is within grid bounds.
 */
export function isValidCandidate(
  column: number,
  row: number,
  columns: number
): boolean {
  return (
    column >= 1 &&
    row >= 1 &&
    column + columns - 1 <= GRID_COLUMNS
  );
}

export type SpanSize = {
  columns: number;
  rows: number;
};

/**
 * Clamps resize spans: top-left stays pinned, width cannot pass column 12,
 * height has no artificial maximum, and catalog mins are respected.
 */
export function clampResizeSpans(
  column: number,
  candidateColumns: number,
  candidateRows: number,
  minimum: SpanSize = { columns: 1, rows: 1 }
): SpanSize {
  const maxColumns = Math.max(1, GRID_COLUMNS - column + 1);
  const columns = Math.max(
    minimum.columns,
    Math.min(candidateColumns, maxColumns)
  );
  const rows = Math.max(minimum.rows, candidateRows);

  return { columns, rows };
}

/**
 * Resolves collisions by pushing overlapping passive widgets downward.
 *
 * Algorithm:
 * 1. Place the active widget at the candidate position (and optional span)
 * 2. Sort passive widgets by (row, column, id) for determinism
 * 3. For each passive widget that overlaps with any settled widget:
 *    - Push it down to clear the overlap
 * 4. Repeat until no collisions remain (cascading)
 *
 * @param startItems Original layout items (immutable reference)
 * @param activeId Widget being moved or resized
 * @param candidateColumn Target column for active widget
 * @param candidateRow Target row for active widget
 * @param spanOverride Optional columns/rows for resize; defaults to start span
 * @returns Items with resolved positions
 */
export function resolveCollisions(
  startItems: DashboardLayoutItem[],
  activeId: number,
  candidateColumn: number,
  candidateRow: number,
  spanOverride?: SpanSize
): PlacementItem[] {
  const activeItem = startItems.find((item) => item.widgetId === activeId);
  if (!activeItem) {
    return startItems.map((item) => ({ ...item }));
  }

  const activeColumns = spanOverride?.columns ?? activeItem.columns;
  const activeRows = spanOverride?.rows ?? activeItem.rows;

  const result: PlacementItem[] = [
    {
      widgetId: activeId,
      column: candidateColumn,
      row: candidateRow,
      columns: activeColumns,
      rows: activeRows,
    },
  ];

  const passiveItems = startItems
    .filter((item) => item.widgetId !== activeId)
    .map((item) => ({
      widgetId: item.widgetId,
      column: item.column,
      row: item.row,
      columns: item.columns,
      rows: item.rows,
    }));

  const sortedPassive = sortItemsByPosition(passiveItems);

  const settledItems: PlacementItem[] = [result[0]];

  for (const passive of sortedPassive) {
    let currentRow = passive.row;

    let hasCollision = true;
    while (hasCollision) {
      hasCollision = false;

      const passiveRange: CellRange = {
        column: passive.column,
        row: currentRow,
        columns: passive.columns,
        rows: passive.rows,
      };

      for (const settled of settledItems) {
        const settledRange: CellRange = {
          column: settled.column,
          row: settled.row,
          columns: settled.columns,
          rows: settled.rows,
        };

        if (rangesOverlap(passiveRange, settledRange)) {
          currentRow = settled.row + settled.rows;
          hasCollision = true;
          break;
        }
      }
    }

    const settledPassive: PlacementItem = {
      ...passive,
      row: currentRow,
    };

    settledItems.push(settledPassive);
    result.push(settledPassive);
  }

  return result;
}

/**
 * Compacts items vertically by moving each widget as high as possible
 * without overlapping others, preserving column positions.
 * 
 * Algorithm:
 * 1. Sort items by (row, column, id)
 * 2. For each item, find the lowest row it can occupy without overlap
 * 3. Never change columns
 * 
 * @param items Items to compact
 * @returns Compacted items
 */
export function compactVertically(items: PlacementItem[]): PlacementItem[] {
  if (items.length === 0) {
    return [];
  }

  const sorted = sortItemsByPosition(items);
  const compacted: PlacementItem[] = [];

  for (const item of sorted) {
    let targetRow = 1;

    for (const placed of compacted) {
      if (!columnsOverlap(item, placed)) {
        continue;
      }

      const placedBottom = placed.row + placed.rows;
      if (placedBottom > targetRow) {
        targetRow = placedBottom;
      }
    }

    const itemRange: CellRange = {
      column: item.column,
      row: targetRow,
      columns: item.columns,
      rows: item.rows,
    };

    let hasCollision = true;
    while (hasCollision) {
      hasCollision = false;

      for (const placed of compacted) {
        const placedRange: CellRange = {
          column: placed.column,
          row: placed.row,
          columns: placed.columns,
          rows: placed.rows,
        };

        if (rangesOverlap(itemRange, placedRange)) {
          targetRow = placed.row + placed.rows;
          itemRange.row = targetRow;
          hasCollision = true;
          break;
        }
      }
    }

    compacted.push({
      ...item,
      row: targetRow,
    });
  }

  return compacted;
}

/**
 * Checks if two items occupy any of the same columns.
 */
function columnsOverlap(a: PlacementItem, b: PlacementItem): boolean {
  const aRight = a.column + a.columns - 1;
  const bRight = b.column + b.columns - 1;
  return !(a.column > bRight || b.column > aRight);
}

/**
 * Compacts passive widgets as if the active widget were removed from the grid.
 * Used when the drag candidate is invalid but passive widgets should still
 * rise to fill the vacated space.
 */
export function compactPassivesWithoutActive(
  startItems: DashboardLayoutItem[],
  activeId: number
): PlacementItem[] {
  const activeItem = startItems.find((item) => item.widgetId === activeId);
  if (!activeItem) {
    return startItems.map((item) => ({ ...item }));
  }

  const compactedPassives = compactVertically(
    startItems
      .filter((item) => item.widgetId !== activeId)
      .map((item) => ({ ...item }))
  );

  return [...compactedPassives, { ...activeItem }];
}

/**
 * Computes the preview layout for a desktop move operation.
 *
 * This function is pure and always recalculates from the immutable
 * start snapshot plus the current candidate position. Passive widgets
 * compact vertically during preview so widgets below the dragged item
 * rise as the gap opens.
 *
 * @param startItems Immutable original layout items
 * @param activeId Widget being moved
 * @param candidateColumn Target column
 * @param candidateRow Target row
 * @returns Preview result with items and validity
 */
export function previewDesktopMove(
  startItems: DashboardLayoutItem[],
  activeId: number,
  candidateColumn: number,
  candidateRow: number
): PreviewResult {
  const activeItem = startItems.find((item) => item.widgetId === activeId);
  if (!activeItem) {
    return {
      items: startItems.map((item) => ({ ...item })),
      valid: false,
    };
  }

  const valid = isValidCandidate(
    candidateColumn,
    candidateRow,
    activeItem.columns
  );

  if (!valid) {
    return {
      items: compactPassivesWithoutActive(startItems, activeId),
      valid: false,
    };
  }

  const resolvedItems = resolveCollisions(
    startItems,
    activeId,
    candidateColumn,
    candidateRow
  );

  const compactedItems = compactVertically(resolvedItems);

  return {
    items: compactedItems,
    valid: true,
  };
}

/**
 * Computes the final layout after a move operation.
 * Applies collision resolution followed by vertical compaction.
 * 
 * @param startItems Immutable original layout items
 * @param activeId Widget being moved
 * @param candidateColumn Target column
 * @param candidateRow Target row
 * @returns Compacted items or null if invalid
 */
export function commitDesktopMove(
  startItems: DashboardLayoutItem[],
  activeId: number,
  candidateColumn: number,
  candidateRow: number
): DashboardLayoutItem[] | null {
  const activeItem = startItems.find((item) => item.widgetId === activeId);
  if (!activeItem) {
    return null;
  }

  if (!isValidCandidate(candidateColumn, candidateRow, activeItem.columns)) {
    return null;
  }

  const resolved = resolveCollisions(
    startItems,
    activeId,
    candidateColumn,
    candidateRow
  );

  const compacted = compactVertically(resolved);

  return compacted.map((item) => ({
    widgetId: item.widgetId,
    column: item.column,
    row: item.row,
    columns: item.columns,
    rows: item.rows,
  }));
}

/**
 * Computes the preview layout for a desktop resize operation.
 * Top-left stays pinned; only columns/rows change. Collisions push from the
 * immutable start snapshot, then passive widgets compact vertically so neighbors
 * rise as the active widget shrinks.
 */
export function previewDesktopResize(
  startItems: DashboardLayoutItem[],
  activeId: number,
  candidateColumns: number,
  candidateRows: number,
  minimum: SpanSize = { columns: 1, rows: 1 }
): PreviewResult {
  const activeItem = startItems.find((item) => item.widgetId === activeId);
  if (!activeItem) {
    return {
      items: startItems.map((item) => ({ ...item })),
      valid: false,
    };
  }

  const clamped = clampResizeSpans(
    activeItem.column,
    candidateColumns,
    candidateRows,
    minimum
  );

  const resolvedItems = resolveCollisions(
    startItems,
    activeId,
    activeItem.column,
    activeItem.row,
    clamped
  );

  const compactedItems = compactVertically(resolvedItems);

  return {
    items: compactedItems,
    valid: true,
  };
}

/**
 * Computes the final layout after a resize operation.
 * Applies collision resolution followed by vertical compaction.
 */
export function commitDesktopResize(
  startItems: DashboardLayoutItem[],
  activeId: number,
  candidateColumns: number,
  candidateRows: number,
  minimum: SpanSize = { columns: 1, rows: 1 }
): DashboardLayoutItem[] | null {
  const activeItem = startItems.find((item) => item.widgetId === activeId);
  if (!activeItem) {
    return null;
  }

  const clamped = clampResizeSpans(
    activeItem.column,
    candidateColumns,
    candidateRows,
    minimum
  );

  const resolved = resolveCollisions(
    startItems,
    activeId,
    activeItem.column,
    activeItem.row,
    clamped
  );

  const compacted = compactVertically(resolved);

  return compacted.map((item) => ({
    widgetId: item.widgetId,
    column: item.column,
    row: item.row,
    columns: item.columns,
    rows: item.rows,
  }));
}

export function calculateDisplacementOffsets(
  startItems: DashboardLayoutItem[],
  previewItems: PlacementItem[],
  rowTrackPx: number
): Map<number, number> {
  const startMap = new Map(
    startItems.map((item) => [item.widgetId, item])
  );

  const offsets = new Map<number, number>();

  for (const preview of previewItems) {
    const start = startMap.get(preview.widgetId);
    if (!start) {
      continue;
    }

    const rowDelta = preview.row - start.row;
    const pixelOffset = rowDelta * rowTrackPx;
    offsets.set(preview.widgetId, pixelOffset);
  }

  return offsets;
}

export type MobileReorderResult = {
  mobileOrder: number[];
  targetIndex: number;
  valid: boolean;
};

/**
 * Moves `activeId` to `targetIndex` within `mobileOrder`.
 * `targetIndex` is clamped to a valid final index in the resulting order.
 */
export function reorderMobileOrder(
  mobileOrder: number[],
  activeId: number,
  targetIndex: number
): MobileReorderResult {
  if (!mobileOrder.includes(activeId)) {
    return {
      mobileOrder: [...mobileOrder],
      targetIndex: -1,
      valid: false,
    };
  }

  const withoutActive = mobileOrder.filter((id) => id !== activeId);
  const clampedIndex = Math.max(
    0,
    Math.min(targetIndex, withoutActive.length)
  );
  const nextOrder = [
    ...withoutActive.slice(0, clampedIndex),
    activeId,
    ...withoutActive.slice(clampedIndex),
  ];

  return {
    mobileOrder: nextOrder,
    targetIndex: clampedIndex,
    valid: true,
  };
}

/**
 * Builds cumulative pixel tops for a mobile stack from order and row spans.
 */
export function computeMobileStackTops(
  mobileOrder: number[],
  rowsById: ReadonlyMap<number, number>,
  rowTrackPx: number
): Map<number, number> {
  const tops = new Map<number, number>();
  let currentTop = 0;

  for (const id of mobileOrder) {
    tops.set(id, currentTop);
    const rows = rowsById.get(id) ?? 1;
    currentTop += rows * rowTrackPx;
  }

  return tops;
}

/**
 * Computes the insertion index for a mobile reorder from pointer Y.
 * Index is relative to the order with the active widget removed.
 */
export function computeMobileReorderTargetIndex(
  pointerY: number,
  grabOffsetY: number,
  activeId: number,
  activeRows: number,
  mobileOrder: number[],
  rowsById: ReadonlyMap<number, number>,
  rowTrackPx: number
): number {
  const withoutActive = mobileOrder.filter((id) => id !== activeId);
  if (withoutActive.length === 0) {
    return 0;
  }

  const ghostTop = pointerY - grabOffsetY;
  const ghostMidY = ghostTop + (activeRows * rowTrackPx) / 2;

  let stackTop = 0;
  for (let index = 0; index < withoutActive.length; index++) {
    const id = withoutActive[index];
    const rows = rowsById.get(id) ?? 1;
    const height = rows * rowTrackPx;
    const midpoint = stackTop + height / 2;

    if (ghostMidY <= midpoint) {
      return index;
    }

    stackTop += height;
  }

  return withoutActive.length;
}

export type MobileDisplacement = {
  widgetId: number;
  offsetY: number;
};

/**
 * Pixel displacements for mobile stack reordering relative to the start order.
 */
export function calculateMobileReorderDisplacements(
  startOrder: number[],
  previewOrder: number[],
  rowsById: ReadonlyMap<number, number>,
  rowTrackPx: number,
  activeId: number
): MobileDisplacement[] {
  const startTops = computeMobileStackTops(startOrder, rowsById, rowTrackPx);
  const previewTops = computeMobileStackTops(
    previewOrder,
    rowsById,
    rowTrackPx
  );
  const displaced: MobileDisplacement[] = [];

  for (const id of previewOrder) {
    if (id === activeId) {
      continue;
    }

    const startTop = startTops.get(id);
    const previewTop = previewTops.get(id);
    if (startTop === undefined || previewTop === undefined) {
      continue;
    }

    const offsetY = previewTop - startTop;
    if (offsetY !== 0) {
      displaced.push({ widgetId: id, offsetY });
    }
  }

  return displaced;
}

/**
 * Finds the first unoccupied origin that fits the given span among existing items.
 */
export function findFirstFitOrigin(
  occupied: PlacementItem[],
  columns: number,
  rows: number
): { column: number; row: number } {
  const cols = Math.min(Math.max(1, columns), GRID_COLUMNS);
  const spanRows = Math.max(1, rows);
  let row = 1;

  while (true) {
    for (let column = 1; column <= GRID_COLUMNS - cols + 1; column++) {
      const candidate: CellRange = {
        column,
        row,
        columns: cols,
        rows: spanRows,
      };

      const overlaps = occupied.some((item) =>
        rangesOverlap(candidate, {
          column: item.column,
          row: item.row,
          columns: item.columns,
          rows: item.rows,
        })
      );

      if (!overlaps) {
        return { column, row };
      }
    }
    row += 1;
  }
}

/**
 * Places a new item at the first-fit origin among existing items, then
 * vertically compacts the full layout. Existing columns are preserved.
 */
export function placeFirstFitCompacted(
  existingItems: DashboardLayoutItem[],
  newItem: { widgetId: number; columns: number; rows: number }
): DashboardLayoutItem[] {
  if (existingItems.some((item) => item.widgetId === newItem.widgetId)) {
    return existingItems.map((item) => ({ ...item }));
  }

  const origin = findFirstFitOrigin(
    existingItems,
    newItem.columns,
    newItem.rows
  );

  const withNew: PlacementItem[] = [
    ...existingItems.map((item) => ({ ...item })),
    {
      widgetId: newItem.widgetId,
      column: origin.column,
      row: origin.row,
      columns: Math.min(Math.max(1, newItem.columns), GRID_COLUMNS),
      rows: Math.max(1, newItem.rows),
    },
  ];

  return compactVertically(withNew).map((item) => ({
    widgetId: item.widgetId,
    column: item.column,
    row: item.row,
    columns: item.columns,
    rows: item.rows,
  }));
}

/**
 * Commits a mobile add: prepends mobile order and places the widget with
 * first-fit compacted desktop coordinates.
 */
export function commitMobileAdd(
  existingItems: DashboardLayoutItem[],
  mobileOrder: number[],
  newItem: { widgetId: number; columns: number; rows: number }
): { items: DashboardLayoutItem[]; mobileOrder: number[] } | null {
  if (existingItems.some((item) => item.widgetId === newItem.widgetId)) {
    return null;
  }

  return {
    items: placeFirstFitCompacted(existingItems, newItem),
    mobileOrder: [
      newItem.widgetId,
      ...mobileOrder.filter((id) => id !== newItem.widgetId),
    ],
  };
}
