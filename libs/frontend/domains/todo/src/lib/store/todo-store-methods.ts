import { signalStoreFeature, withMethods } from "@ngrx/signals";

// type SelectionStore = { selectedIds: () => string[] };

export function withTodoMethods() {
  return signalStoreFeature(
    withMethods((store) => ({

    }))
  );
}
