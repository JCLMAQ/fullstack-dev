import { computed } from '@angular/core';
import { patchState, signalStoreFeature, withComputed, withMethods, withState } from '@ngrx/signals';

type SelectionState = {
  selectedIds: string[];
  effectiveSelectedIds: string[];
  selectedItemId: string | null;
};

export function withSelectionFeature<Entity>(config?: { collection?: string }) {
  const collectionName = config?.collection;
  const entityMapKey = collectionName ? `${collectionName}EntityMap` : 'entityMap';

  return signalStoreFeature(
    withState<SelectionState>({
      selectedIds: [],
      effectiveSelectedIds: [],
      selectedItemId: null,
    }),
    withComputed((store) => ({
      selectedItem: computed(() => {
        const entityMap = (store as any)[entityMapKey]?.();
        const selectedId = store.selectedItemId();
        console.log(`[withSelectionFeature] Computing selectedItem:`, {
          entityMapKey,
          entityMap: entityMap ? Object.keys(entityMap) : 'undefined',
          selectedId,
          result: entityMap && selectedId ? entityMap[selectedId] : null
        });
        if (!entityMap || !selectedId) {
          return null;
        }
        return entityMap[selectedId] ?? null;
      }),
    })),
    withMethods((store) => ({
      toggleSelection(id: string) {
        const current = store.selectedIds();
        const next = current.includes(id)
          ? current.filter((x: string) => x !== id)
          : [...current, id];
        patchState(store, { selectedIds: next });
      },

      toggleAll() {
        const selectedIds = store.selectedIds();
        const entityMap = (store as any)[entityMapKey]();
        const allIds = Object.keys(entityMap);
        const isAllSelected = allIds.length > 0 && selectedIds.length === allIds.length;

        if (isAllSelected) {
          patchState(store, { selectedIds: [] });
          if (typeof (store as any).clearSortedSelection === 'function') {
            (store as any).clearSortedSelection();
          }
        } else {
          patchState(store, { selectedIds: allIds });
        }
      },
      clearSelection() {
        patchState(store, { selectedIds: [] });
      },
      selectAll() {
        const entityMap = (store as any)[entityMapKey]();
        const allIds = Object.keys(entityMap);
        patchState(store, { selectedIds: allIds });
      },
      setSelection(ids: string[]) {
        const unique = Array.from(new Set(ids));
        patchState(store, { selectedIds: unique });
      },
      setSelectedId(id: string | null) {
        patchState(store, { selectedItemId: id });
      },

      setSortedSelection(ids: string[]) {
        patchState(store, { effectiveSelectedIds: ids });
      },

      clearSortedSelection() {
        patchState(store, { effectiveSelectedIds: [] });
      },
    }))
  );
}
