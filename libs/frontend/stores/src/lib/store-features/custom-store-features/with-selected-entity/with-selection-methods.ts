import { patchState, signalStoreFeature, withMethods } from '@ngrx/signals';

/**
 * Generic selection feature for entity stores
 * Provides methods to manage selection state (selectedIds)
 */

/*
// Pour un store de tasks avec collection
export const TaskStore = signalStore(
  withEntities(taskConfig),
  withSelectionMethods<Task>({ collection: 'task' }), // ✅ Réutilisable
 ...
);

  // Pour un store sans collection nommée
export const PostStore = signalStore(
  withEntities(postConfig),
  withSelectionMethods<Post>(), // ✅ Utilise entityMap par défaut
  ...
);


*/
export function withSelectionMethods<Entity>(config?: { collection?: string }) {
  const collectionName = config?.collection;
  const entityMapKey = collectionName ? `${collectionName}EntityMap` : 'entityMap';

  return signalStoreFeature(
    withMethods((store) => ({
      /**
       * Toggle selection for a single entity by ID
       */
      toggleSelection(id: string) {
        const current: string[] = (store as any).selectedIds();
        const next = current.includes(id)
          ? current.filter((x: string) => x !== id)
          : [...current, id];
        patchState(store, { selectedIds: next });
      },

      /**
       * Clear all selections
       */
      clearSelection() {
        patchState(store, { selectedIds: [] });
      },

      /**
       * Select all entities
       */
      selectAll() {
        const entityMap = (store as any)[entityMapKey]();
        const allIds = Object.keys(entityMap);
        patchState(store, { selectedIds: allIds });
      },

      /**
       * Set selection to specific IDs (removes duplicates)
       */
      setSelection(ids: string[]) {
        const unique = Array.from(new Set(ids));
        patchState(store, { selectedIds: unique });
      },
      /**
       * Set the currently active/focused entity ID (singular)
       * Also updates selectedUser with the corresponding entity
       */
      setSelectedId(id: string | null) {
        const entityMap = (store as any)[entityMapKey]();
        const selectedEntity = id ? entityMap[id] : null;
        patchState(store, { selectedId: id, selectedUser: selectedEntity });
      },    }))
  );
}
