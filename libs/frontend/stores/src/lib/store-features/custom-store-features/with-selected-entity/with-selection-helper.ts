import { computed, type Signal } from '@angular/core';

export type SelectionState<Entity> = {
  selection: Signal<{ selected: Entity[]; isSelected: (entity: Entity) => boolean }>;
  selectedEntities: Signal<Entity[]>;
  isAllSelected: Signal<boolean>;
};

function getEntityMap<Entity>(store: unknown, entityMapKey: string): Record<string, Entity> {
  const mapSelector = (store as Record<string, () => Record<string, Entity>>)[entityMapKey];
  if (typeof mapSelector === 'function') {
    const mapCandidate = mapSelector();
    if (mapCandidate && typeof mapCandidate === 'object' && !Array.isArray(mapCandidate)) {
      return mapCandidate;
    }
  }
  return {} as Record<string, Entity>;
}

export function buildSelectionComputed<Entity extends { id: string }>(
  store: { selectedIds: () => string[] },
  entityMapKey = 'entityMap'
): SelectionState<Entity> {
  const selection = computed(() => {
    const ids = store.selectedIds();
    const map = getEntityMap<Entity>(store, entityMapKey);
    return {
      selected: ids.map((id) => map[id]).filter((entity): entity is Entity => Boolean(entity)),
      isSelected: (entity: Entity) => ids.includes(entity.id),
    };
  });

  const selectedEntities = computed(() => selection().selected);

  const isAllSelected = computed(() => {
    const map = getEntityMap<Entity>(store, entityMapKey);
    const total = Object.keys(map).length;
    const sel = store.selectedIds().length;
    return total > 0 && sel === total;
  });

  return { selection, selectedEntities, isAllSelected };
}
