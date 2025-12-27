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
  selection: SelectionModel<Entity>
};
// export type SelectionState<Entity> {
//   // selectionOne: {
//   //   selected: Map<EntityId, Entity>;
//   //   deselected: Map<EntityId, Entity>;
//   // };
  
// }

export function withEntitySelectors<Entity>() {
  return signalStoreFeature(
    { state: type<EntityState<Entity>>() },
    withState<SelectedEntityState>({ selectedEntityId: null }),
    withComputed((store) => ({

      selectedItem: computed(() => {
        const selectedId = selectedEntityId();
        Object.values(store.entityMap()).find((x) => x.id === store.selectedEntityId())
    }),
      selectedItemIndex: computed(() =>
        store.selectedIds().findIndex((x) => x === store.selectedEntityId())
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

export function withSelectedEntity<Entity>() {
  return signalStoreFeature(
    { state: type<EntityState<Entity>>() },
    withState<SelectedEntityState>({ selectedEntityId: null }),
    withComputed(({ entityMap, selectedEntityId }) => ({
      selectedEntity: computed(() => {
        const selectedId = selectedEntityId();
        return selectedId ? entityMap()[selectedId] : null;
      }),
    }))
  );
}
