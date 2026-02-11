import { computed, Signal } from '@angular/core';
import {
  patchState,
  signalStoreFeature,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';

export interface PaginationState {
  pageIndex: number;
  pageSize: number;
}

export interface PaginationConfig<Entity> {
  itemsSelector: (store: any) => Signal<Entity[]>;
  initialPageSize?: number;
}

// WithPagination is a feature that helps for pagination in the list view
export function withPagination<Entity>(config: PaginationConfig<Entity>) {
  return signalStoreFeature(
    withState<PaginationState>({
      pageIndex: 0,
      pageSize: config.initialPageSize ?? 10,
    }),
    withComputed((store) => {
      const items = config.itemsSelector(store);

      if (typeof items !== 'function') {
        throw new Error('withPagination: itemsSelector must return a Signal<T[]>');
      }

      const paginatedItems = computed(() => {
        const pIndex = store.pageIndex();
        const pSize = store.pageSize();
        const currentItems = items();
        const start = pIndex * pSize;
        return currentItems.slice(start, start + pSize);
      });

      const totalCount = computed(() => items().length);

      return {
        paginatedItems,
        totalCount,
      };
    }),
    withMethods((store) => ({
      setPagination(pageIndex: number, pageSize: number) {
        patchState(store, { pageIndex, pageSize });
      },
      setPage(pageIndex: number) {
        patchState(store, { pageIndex });
      },
      setPageSize(pageSize: number) {
        patchState(store, { pageSize, pageIndex: 0 });
      },
    }))
  );
}
