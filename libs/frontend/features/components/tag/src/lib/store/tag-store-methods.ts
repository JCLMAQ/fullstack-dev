import { patchState, signalStoreFeature, type, withMethods } from '@ngrx/signals';

export function withTagMethods<_>() {
  return signalStoreFeature(
    {
      methods: type<{ _tagsReload: () => void }>(),
    },
    withMethods((store) => ({
      reload(): void {
        store._tagsReload();
      },
      setMainTagId(mainTagId: number | null): void {
        patchState(store, { mainTagId });
      },
      setIncludeDeleted(includeDeleted: boolean): void {
        patchState(store, { includeDeleted });
      },
    }))
  );
}
