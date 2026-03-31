import { patchState, signalStoreFeature, type, withMethods } from '@ngrx/signals';

export function withPostMethods<_>() {
  return signalStoreFeature(
    {
      methods: type<{ _postsReload: () => void }>(),
    },
    withMethods((store) => ({
      reload(): void {
        store._postsReload();
      },
      setSelectedTabIndex(selectedTabIndex: number): void {
        patchState(store, { selectedTabIndex });
      },
    }))
  );
}
