import { ApplicationRef, computed, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';

import { rxMethod } from '@ngrx/signals/rxjs-interop';

import {
  addEntities,
  removeEntity,
  updateEntity,
  withEntities,
} from '@ngrx/signals/entities';
import { widgetsDirectory } from '../../catalog/widgets.registry';
import { catchError, concatMap, EMPTY, filter, from, pipe } from 'rxjs';
import { DashboardService } from '../../dashboard.service';
import {
  DashboardLayoutDocument,
  DashboardLayoutItem,
  Widget,
} from '../../dashboard.model';
import { compactVertically } from '../placement/dashboard-placement.engine';
import { cloneLayoutItems } from '../placement/dashboard-placement.helper';

export type LayoutItemWithWidget = DashboardLayoutItem & {
  widget: Widget;
};

type DashboardPersistenceState = {
  loaded: boolean;
  mobileOrder: number[];
  items: DashboardLayoutItem[];
};

const initialState: DashboardPersistenceState = {
  loaded: false,
  mobileOrder: [],
  items: [],
};

const snackBarConfig = {
  verticalPosition: 'top' as const,
  horizontalPosition: 'right' as const,
};

export const DashboardPersistenceStore = signalStore(
  withState(initialState),
  withEntities<Widget>(),
  withComputed(({ entities, mobileOrder, entityMap, items }) => {
    const layoutDocument = computed(
      (): DashboardLayoutDocument => ({
        version: 1,
        items: cloneLayoutItems(items()),
        mobileOrder: [...mobileOrder()],
      }),
    );

    return {
      widgetsToAdd: computed(() => {
        const addedIds = entities().map((w) => w.id);
        return widgetsDirectory.filter((w) => !addedIds.includes(w.id));
      }),
      layoutDocument,
      layoutItems: computed((): LayoutItemWithWidget[] => {
        const widgetMap = entityMap();
        return items()
          .map((item) => {
            const widget = widgetMap[item.widgetId];
            if (!widget) {
              return null;
            }
            return { ...item, widget };
          })
          .filter((item): item is LayoutItemWithWidget => item !== null);
      }),
      mobileWidgets: computed(() => {
        const doc = layoutDocument();
        const widgetMap = entityMap();
        return doc.mobileOrder
          .map((id) => {
            const widget = widgetMap[id];
            if (!widget) {
              return null;
            }
            const item = doc.items.find((i) => i.widgetId === id);
            const rows = item?.rows ?? widget.rows ?? 1;
            return { widget, rows };
          })
          .filter(
            (entry): entry is { widget: Widget; rows: number } =>
              entry !== null,
          );
      }),
    };
  }),
  withMethods(
    (
      store,
      dataService = inject(DashboardService),
      appRef = inject(ApplicationRef),
      snackBar = inject(MatSnackBar),
    ) => {
      const queueLayoutSave = rxMethod<DashboardLayoutDocument>(
        pipe(
          filter(() => store.loaded()),
          concatMap((layout) =>
            from(dataService.saveLayout(layout)).pipe(
              catchError(() => {
                snackBar.open(
                  'Could not save dashboard changes.',
                  'Close',
                  snackBarConfig,
                );
                return EMPTY;
              }),
            ),
          ),
        ),
      );

      const fetchWidgets = async (): Promise<void> => {
        try {
          const { widgets, items, mobileOrder } =
            await dataService.fetchWidgets();
          patchState(store, addEntities(widgets), {
            loaded: true,
            mobileOrder,
            items: cloneLayoutItems(items),
          });
        } catch {
          snackBar.open(
            'Could not load your dashboard.',
            'Close',
            snackBarConfig,
          );
        }
      };

      const updateWidget = (id: number, data: Partial<Widget>): void => {
        const updatedItems = store.items().map((item) =>
          item.widgetId === id
            ? {
                ...item,
                rows: data.rows ?? item.rows,
                columns: data.columns ?? item.columns,
              }
            : item,
        );
        patchState(store, updateEntity({ id, changes: { ...data } }), {
          items: updatedItems,
        });
      };

      const removeWidget = (id: number): void => {
        const updatedItems = compactVertically(
          store.items().filter((item) => item.widgetId !== id),
        ).map((item) => ({
          widgetId: item.widgetId,
          column: item.column,
          row: item.row,
          columns: item.columns,
          rows: item.rows,
        }));

        const remainingIds = new Set(updatedItems.map((item) => item.widgetId));

        patchState(store, removeEntity(id), {
          mobileOrder: store
            .mobileOrder()
            .filter((widgetId) => remainingIds.has(widgetId)),
          items: updatedItems,
        });
        appRef.tick();
      };

      const setLayoutDocument = (document: DashboardLayoutDocument): void => {
        const entityMap = store.entityMap();
        const widgetsToInsert: Widget[] = [];
        const sizeUpdates: { id: number; columns: number; rows: number }[] = [];

        for (const item of document.items) {
          if (entityMap[item.widgetId]) {
            const existing = entityMap[item.widgetId];
            if (
              existing.columns !== item.columns ||
              existing.rows !== item.rows
            ) {
              sizeUpdates.push({
                id: item.widgetId,
                columns: item.columns,
                rows: item.rows,
              });
            }
            continue;
          }

          const catalogEntry = widgetsDirectory.find(
            (widget) => widget.id === item.widgetId,
          );
          if (!catalogEntry) {
            continue;
          }

          widgetsToInsert.push({
            ...catalogEntry,
            rows: item.rows,
            columns: item.columns,
          });
        }

        const knownIds = new Set<number>([
          ...Object.keys(entityMap).map(Number),
          ...widgetsToInsert.map((widget) => widget.id),
        ]);

        const newMobileOrder = document.mobileOrder.filter((id) =>
          knownIds.has(id),
        );
        const newLayoutItems = cloneLayoutItems(
          document.items.filter((item) => knownIds.has(item.widgetId)),
        );

        if (widgetsToInsert.length > 0) {
          patchState(store, addEntities(widgetsToInsert), {
            mobileOrder: newMobileOrder,
            items: newLayoutItems,
          });
        } else {
          patchState(store, {
            mobileOrder: newMobileOrder,
            items: newLayoutItems,
          });
        }

        for (const update of sizeUpdates) {
          patchState(
            store,
            updateEntity({
              id: update.id,
              changes: {
                columns: update.columns,
                rows: update.rows,
              },
            }),
          );
        }
      };

      const getLayoutItems = (): DashboardLayoutItem[] => {
        return cloneLayoutItems(store.items());
      };

      return {
        fetchWidgets,
        queueLayoutSave,
        updateWidget,
        removeWidget,
        setLayoutDocument,
        getLayoutItems,
      };
    },
  ),
  withHooks({
    onInit(store) {
      store.queueLayoutSave(store.layoutDocument);
      void store.fetchWidgets();
    },
  }),
);
