import { SelectionModel } from '@angular/cdk/collections';
import { computed } from '@angular/core';
import {
  signalStoreFeature,
  type,
  withComputed,
  withState,
} from '@ngrx/signals';
import { EntityId, EntityState } from '@ngrx/signals/entities';

export type SelectedEntityState<Entity> = {
  selectedEntityId: EntityId | null,
  selectedId: string | null,
  selectedIds: string[],
  selection: SelectionModel<Entity>,
};
export function withSelectedEntities<Entity extends { id: EntityId }>() {
  return signalStoreFeature(
    { state: type<EntityState<Entity>>() },
    withState<SelectedEntityState<Entity>>({
      selectedEntityId: null,
      selectedId: null,
      selectedIds: [],
      selection: new SelectionModel<Entity>(true, []),
    }),
    withComputed((store) => ({
      selectedItems: computed(() => store.selection().selected),
      selectedItemIndexes: computed(() =>
        store.selectedIds().map((id: string) =>
          Object.values(store.entityMap()).findIndex((x) => x.id === id)
        )
      ),
    }))
  );
}

export function withEntitySelectors<Entity extends { id: EntityId }>() {
  return signalStoreFeature(
    { state: type<EntityState<Entity>>() },
    withState<SelectedEntityState<Entity>>({
      selectedEntityId: null,
      selectedId: null,
      selectedIds: [],
      selection: new SelectionModel<Entity>(true, []),
    }),
    withComputed((store) => ({
      selectedItem: computed(() =>
        Object.values(store.entityMap()).find((x) => x.id === store.selectedEntityId())
      ),
      selectedItemIndex: computed(() =>
        store.selectedIds().findIndex((x: string) => x === store.selectedEntityId())
      ),
      selectedItems: computed(() => store.selection().selected.entries),
      lastPositionIndex: computed(() => Object.values(store.entityMap()).length - 1),
      lastPositionId: computed(() => {
        const entities = Object.values(store.entityMap());
        return entities.length > 0 ? entities[entities.length - 1].id : null;
      }),
    }))
  );
}

export function withSelectedEntity<Entity extends { id: EntityId }>() {
  return signalStoreFeature(
    { state: type<EntityState<Entity>>() },
    withState<SelectedEntityState<Entity>>({
      selectedEntityId: null,
      selectedId: null,
      selectedIds: [],
      selection: new SelectionModel<Entity>(true, []),
    }),
    withComputed(({ entityMap, selectedEntityId }) => ({
      selectedEntity: computed(() => {
        const selectedId = selectedEntityId();
        return selectedId ? entityMap()[selectedId] : null;
      }),
    }))
  );
}
