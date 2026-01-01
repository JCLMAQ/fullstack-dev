import { patchState, signalStoreFeature, withMethods, withState } from '@ngrx/signals';
import { clampPosition, computeNavigation } from './navigation.helper';

type NavigationState = {
  currentPosition: number;
  lastPosition: number;
  navigation: {
    hasNext: boolean;
    hasPrevious: boolean;
    isFirst: boolean;
    isLast: boolean;
  };
};

const initialNavigationState: NavigationState = {
  currentPosition: 0,
  lastPosition: 0,
  navigation: {
    hasNext: false,
    hasPrevious: false,
    isFirst: true,
    isLast: true,
  },
};

type PatchableStore = Parameters<typeof patchState>[0];
type EntityWithId = { id: string };

type NavigationStore<Entity extends EntityWithId> = PatchableStore & {
  currentPosition: () => number;
  lastPosition: () => number;
  navigation: () => NavigationState['navigation'];
  selectedIds: () => string[];
  selectedItemId: () => string | null;
  selectedItem: () => Entity | null;
  items?: () => Entity[];
};

type EntityMap<Entity extends EntityWithId> = Record<string, Entity>;

function getEntityMap<Entity extends EntityWithId>(store: NavigationStore<Entity>): EntityMap<Entity> {
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

function resolveSource<Entity extends EntityWithId>(store: NavigationStore<Entity>): Entity[] {
  const map = getEntityMap(store);
  const ids = store.selectedIds();
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

function applyNavigation<Entity extends EntityWithId>(
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

function resolveIndex<Entity extends EntityWithId>(source: Entity[], selectedId: string | null) {
  if (!selectedId) {
    return 0;
  }
  const index = source.findIndex((item) => item.id === selectedId);
  return index === -1 ? 0 : index;
}

function resolveTargetId<Entity extends EntityWithId>(store: NavigationStore<Entity>, source: Entity[], initialItemId?: string) {
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
  const selectedIds = store.selectedIds();
  if (selectedIds.length > 0) {
    return selectedIds[0];
  }
  return source.length > 0 ? source[0].id : null;
}

export function withNavigationMethods<Entity extends EntityWithId>() {
  return signalStoreFeature(
    withState<NavigationState>(initialNavigationState),
    withMethods((store) => {
      const navStore = store as unknown as NavigationStore<Entity>;
      return {
      initNavButton(initialItemId?: string) {
        const source = resolveSource(navStore);
        const targetId = resolveTargetId(navStore, source, initialItemId);
        const index = resolveIndex(source, targetId);
        applyNavigation(navStore, source, index);
      },
      navStateMgt(currentPosition: number, lastPosition: number) {
        const source = resolveSource(navStore);
        const { current } = clampPosition(currentPosition, Math.max(source.length - 1, lastPosition));
        applyNavigation(navStore, source, current);
      },
      next() {
        const source = resolveSource(navStore);
        const current = resolveIndex(source, navStore.selectedItemId());
        applyNavigation(navStore, source, current + 1);
      },
      last() {
        const source = resolveSource(navStore);
        applyNavigation(navStore, source, source.length - 1);
      },
      first() {
        const source = resolveSource(navStore);
        applyNavigation(navStore, source, 0);
      },
      previous() {
        const source = resolveSource(navStore);
        const current = resolveIndex(source, navStore.selectedItemId());
        applyNavigation(navStore, source, current - 1);
      },
    }; })
  );
}

