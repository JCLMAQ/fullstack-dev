import { patchState, type WritableStateSource } from '@ngrx/signals';
import type { NavigationState } from './navigation.feature';
import { clampPosition, computeNavigation } from './navigation.helper';

export type EntityWithId = { id: string };

export type NavigationStore<Entity extends EntityWithId> = WritableStateSource<object> & {
  currentPosition: () => number;
  lastPosition: () => number;
  navigation: () => NavigationState['navigation'];
  selectedIds: () => string[];
  effectiveSelectedIds?: () => string[];
  selectedItemId: () => string | null;
  selectedItem: () => Entity | null;
  items?: () => Entity[];
};

export type EntityMap<Entity extends EntityWithId> = Record<string, Entity>;

export function getEntityMap<Entity extends EntityWithId>(store: NavigationStore<Entity>): EntityMap<Entity> {
  const entry = Object.entries(store as Record<string, unknown>).find(
    ([key, value]) => (key === 'entityMap' || key.endsWith('EntityMap')) && typeof value === 'function'
  );
  if (!entry) {
    return {} as EntityMap<Entity>;
  }
  const selector = entry[1] as () => unknown;
  const mapCandidate = selector();
  if (mapCandidate && typeof mapCandidate === 'object' && !Array.isArray(mapCandidate)) {
    return mapCandidate as EntityMap<Entity>;
  }
  return {} as EntityMap<Entity>;
}

export function resolveSource<Entity extends EntityWithId>(store: NavigationStore<Entity>): Entity[] {
  const map = getEntityMap(store);
  const ids = store.effectiveSelectedIds ? store.effectiveSelectedIds() : store.selectedIds();
  if (ids.length > 0) {
    return ids
      .map((id) => map[id])
      .filter((item): item is Entity => Boolean(item));
  }
  if (store.items) {
    return store.items();
  }
  return Object.values(map);
}

function selectById<Entity extends EntityWithId>(
  store: NavigationStore<Entity>,
  map: EntityMap<Entity>,
  id: string | null
) {
  const setSelectedId = (store as { setSelectedId?: (value: string | null) => void }).setSelectedId;
  if (setSelectedId) {
    setSelectedId(id);
    return;
  }
  const selectedItem = id ? map[id] ?? null : null;
  patchState(store, { selectedItemId: id, selectedItem });
}

export function applyNavigation<Entity extends EntityWithId>(
  store: NavigationStore<Entity>,
  source: Entity[],
  targetIndex: number
) {
  if (source.length === 0) {
    patchState(store, {
      currentPosition: 0,
      lastPosition: 0,
      navigation: computeNavigation(0, 0),
    });
    selectById(store, {} as EntityMap<Entity>, null);
    return;
  }

  const last = source.length - 1;
  const { current, last: safeLast } = clampPosition(targetIndex, last);
  const navigation = computeNavigation(current, safeLast);
  const map = getEntityMap(store);
  patchState(store, { currentPosition: current, lastPosition: safeLast, navigation });
  selectById(store, map, source[current].id);
}

export function resolveIndex<Entity extends EntityWithId>(source: Entity[], selectedId: string | null) {
  if (!selectedId) {
    return 0;
  }
  const index = source.findIndex((item) => item.id === selectedId);
  return index === -1 ? 0 : index;
}

export function resolveTargetId<Entity extends EntityWithId>(
  store: NavigationStore<Entity>,
  source: Entity[],
  initialItemId?: string
) {
  if (initialItemId) {
    return initialItemId;
  }
  const selectedId = store.selectedItemId();
  if (selectedId) {
    return selectedId;
  }
  const selectedItem = store.selectedItem();
  if (selectedItem) {
    return selectedItem.id;
  }
  const selectedIds = store.effectiveSelectedIds ? store.effectiveSelectedIds() : store.selectedIds();
  if (selectedIds.length > 0) {
    return selectedIds[0];
  }
  return source.length > 0 ? source[0].id : null;
}
