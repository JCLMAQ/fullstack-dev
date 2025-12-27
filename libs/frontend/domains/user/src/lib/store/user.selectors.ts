import { computed } from '@angular/core';
import { User } from '@db/prisma';
import { signalStoreFeature, type, withComputed } from '@ngrx/signals';
import { EntityState } from '@ngrx/signals/entities';

export function withUserSelectors() {
  return signalStoreFeature(
    { state: type<EntityState<User>>() },
    withComputed((store) => ({
      selectedItem: computed(() =>
        Object.values(store.entityMap()).find((x) => x.id === store.selectedId())
      ),
      selectedItemIndex: computed(() =>
        store.selectedIds().findIndex((x) => x === store.selectedId())
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
