import { patchState, signalStoreFeature, withMethods } from "@ngrx/signals";

// type SelectionStore = { selectedIds: () => string[] };

export function withTodoMethods() {
  return signalStoreFeature(
    withMethods((store) => ({
      // Sélection des todos triés
      setSortedSelection(sortedIds: string[]) {
        patchState(store, { effectiveSelectedIds: sortedIds });
      },

      clearSortedSelection() {
        patchState(store, { effectiveSelectedIds: [] });
      },
    }))
  );
}
