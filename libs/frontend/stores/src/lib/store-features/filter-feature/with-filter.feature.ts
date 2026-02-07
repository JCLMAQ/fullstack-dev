import { computed, Signal } from '@angular/core';
import { patchState, signalStoreFeature, withComputed, withMethods, withState } from '@ngrx/signals';

export function withFilter<T, Collection extends string>(options: {
  collection: Collection;
  itemsSelector: (store: any) => T[];
  predicate: (item: T, filter: string) => boolean;
}) {
  const { collection, itemsSelector, predicate } = options;
  const capitalizedCollection = collection.charAt(0).toUpperCase() + collection.slice(1);
  const filterName = `filtered${capitalizedCollection}`;

  return signalStoreFeature(
    withState({ filterValue: '' }),
    withMethods((store) => ({
      updateFilter(value: string) {
        patchState(store, { filterValue: value });
      },
    })),
    withComputed((store) => {
      return {
        [filterName]: computed(() => {
          const items = itemsSelector(store);
          const filter = store.filterValue();

          if (!filter) {
            return items;
          }

          const lowerFilter = filter.toLowerCase();
          return items.filter((item: T) => predicate(item, lowerFilter));
        }) as Signal<T[]>
      } as { [K in `filtered${Capitalize<Collection>}`]: Signal<T[]> };
    })
  );
}
