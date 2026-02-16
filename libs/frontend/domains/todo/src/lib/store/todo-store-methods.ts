import { patchState, signalStoreFeature, type, withMethods } from "@ngrx/signals";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function withTodoMethods<_>() {
  return signalStoreFeature(
    {
      methods: type<{ _todosReload: () => void }>(),
    },
    withMethods((store) => ({
      // Relaod data from the API, useful after a mutation to get the updated list of todos
      // Base on the implementation of the httpResource, this will reset the cache and trigger a new API call to get the latest data
      reload(): void {
          store._todosReload();
        },
        // Gestion des tabs dans le détail d'un todo
      setSelectedTabIndex(selectedTabIndex: number): void {
          patchState(store, { selectedTabIndex });
        },

    })),
  );
}
