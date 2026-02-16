import { patchState, signalStoreFeature, type, withMethods } from "@ngrx/signals";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function withTodoMethods<_>() {
  return signalStoreFeature(
    {
      methods: type<{ _todosReload: () => void }>(),
    },
    withMethods((store) => ({
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
