import { computed, Signal } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { patchState, signalStoreFeature, withComputed, withMethods, withState } from '@ngrx/signals';

export function withSort<T, Collection extends string>(options: {
  collection: Collection;
  itemsSelector: (store: any) => T[];
  comparators?: Record<string, (a: T, b: T) => number>;
}) {
  const { collection, itemsSelector, comparators } = options;
  const capitalizedCollection = collection.charAt(0).toUpperCase() + collection.slice(1);

  return signalStoreFeature(
    withState<{ sorts: Sort[] }>({ sorts: [] }),
    withComputed((store) => ({
      currentSort: computed(() => store.sorts()[0] || null),
    })),
    withMethods((store) => ({
      setCurrentSort(sort: Sort | null) {
        if (!sort || !sort.active || !sort.direction) {
          patchState(store, { sorts: [] });
        } else {
          patchState(store, { sorts: [sort] });
        }
      },
      addSort(sort: Sort) {
        const currentSorts = store.sorts();
        const existingIndex = currentSorts.findIndex((s) => s.active === sort.active);
        let newSorts = [...currentSorts];

        if (existingIndex > -1) {
          if (!sort.direction) {
            newSorts.splice(existingIndex, 1);
          } else {
            newSorts[existingIndex] = sort;
          }
        } else if (sort.direction) {
          newSorts.push(sort);
        }
        patchState(store, { sorts: newSorts });
      },
    })),
    withComputed((store) => {
      return {
        [`sorted${capitalizedCollection}`]: computed(() => {
          const items = itemsSelector(store);
          const sorts = store.sorts();

          if (sorts.length === 0) {
            return items;
          }

          return [...items].sort((a: any, b: any) => {
            for (const sort of sorts) {
              if (!sort.active || !sort.direction) continue;

              let result = 0;
              if (comparators && comparators[sort.active]) {
                result = comparators[sort.active](a, b);
              } else {
                const aValue = a[sort.active];
                const bValue = b[sort.active];

                if (aValue == null && bValue == null) {
                  result = 0;
                } else if (aValue == null) {
                  result = 1;
                } else if (bValue == null) {
                  result = -1;
                } else {
                  result = String(aValue).localeCompare(String(bValue), undefined, { sensitivity: 'base' });
                }
              }

              if (result !== 0) {
                return sort.direction === 'asc' ? result : -result;
              }
            }
            return 0;
          });
        }) as Signal<T[]>
      } as { [K in `sorted${Capitalize<Collection>}`]: Signal<T[]> };
    })
  );
}
