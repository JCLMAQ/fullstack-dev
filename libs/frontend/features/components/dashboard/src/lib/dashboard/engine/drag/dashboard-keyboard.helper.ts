import { clampColumnToGrid, clampRowToGrid } from '../placement/dashboard-placement.helper';

export type KeyboardMovePhase = 'idle' | 'lifted';

export type InteractionInputKind = 'pointer' | 'keyboard';

export type KeyboardMoveDelta = {
  columnDelta: number;
  rowDelta: number;
};

/**
 * Maps arrow keys to one-cell keyboard move deltas.
 * Unrecognized keys return null.
 */
export function keyboardMoveDeltaForKey(key: string): KeyboardMoveDelta | null {
  switch (key) {
    case 'ArrowLeft':
      return { columnDelta: -1, rowDelta: 0 };
    case 'ArrowRight':
      return { columnDelta: 1, rowDelta: 0 };
    case 'ArrowUp':
      return { columnDelta: 0, rowDelta: -1 };
    case 'ArrowDown':
      return { columnDelta: 0, rowDelta: 1 };
    default:
      return null;
  }
}

/**
 * Applies a one-cell nudge and clamps within grid bounds.
 */
export function nudgeCandidateOrigin(
  column: number,
  row: number,
  widgetColumns: number,
  columnDelta: number,
  rowDelta: number
): { column: number; row: number } {
  return {
    column: clampColumnToGrid(column + columnDelta, widgetColumns),
    row: clampRowToGrid(row + rowDelta),
  };
}

export function buildKeyboardLiftAnnouncement(
  label: string,
  column: number,
  row: number
): string {
  return `${label} lifted. Use arrow keys to move, Space or Enter to drop, Escape to cancel. Currently row ${row}, column ${column}.`;
}

export function buildKeyboardMoveAnnouncement(
  label: string,
  column: number,
  row: number
): string {
  return `${label} row ${row}, column ${column}.`;
}

export function buildKeyboardDropAnnouncement(label: string): string {
  return `${label} dropped.`;
}

export function buildKeyboardCancelAnnouncement(label: string): string {
  return `${label} move cancelled.`;
}

export function buildKeyboardMobileLiftAnnouncement(
  label: string,
  position: number,
  total: number
): string {
  return `${label} lifted. Use up and down arrows to reorder, Space or Enter to drop, Escape to cancel. Position ${position} of ${total}.`;
}

export function buildKeyboardMobileMoveAnnouncement(
  label: string,
  position: number,
  total: number
): string {
  return `${label} position ${position} of ${total}.`;
}
