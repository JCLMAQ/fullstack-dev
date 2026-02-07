import { computed } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { patchState, signalStoreFeature, withComputed, withMethods, withState } from '@ngrx/signals';

export function withSort<T>(options: {
  collection: string;
  itemsSelector: (store: any) => T[];
}) {
  const { collection, itemsSelector } = options;
  const capitalizedCollection = collection.charAt(0).toUpperCase() + collection.slice(1);

  return signalStoreFeature(
    withState<{ currentSort: Sort | null }>({ currentSort: null }),
    withMethods((store) => ({
      setCurrentSort(sort: Sort | null) {
        patchState(store, { currentSort: sort });
      },
    })),
    withComputed((store) => {
      return {
        [`sorted${capitalizedCollection}`]: computed(() => {
          const items = itemsSelector(store);
          const sort = (store as any).currentSort();

          if (!sort || !sort.active || !sort.direction) {
            return items;
          }

          return [...items].sort((a: any, b: any) => {
            const aValue = a[sort.active];
            const bValue = b[sort.active];

            if (aValue == null && bValue == null) return 0;
            if (aValue == null) return 1;
            if (bValue == null) return -1;

            const comparison = String(aValue).localeCompare(String(bValue), undefined, { sensitivity: 'base' });
            return sort.direction === 'asc' ? comparison : -comparison;
          });
        })
      };
    })
  );
}
