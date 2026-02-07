import { withCallState, withDevtools, withEntityResources, withMutations, withUndoRedo } from "@angular-architects/ngrx-toolkit";
import { computed, effect, inject } from '@angular/core';
import { patchState, signalMethod, signalStore, type, withComputed, withHooks, withMethods, withProps, withState } from '@ngrx/signals';
import { initialTodoState } from './todo-slice';
// import { computed, effect, inject, resource } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Sort } from "@angular/material/sort";
import { TodoWithRelations } from "@db/prisma";
import { AppStore, withNavigationMethods, withSelectionFeature } from "@fe/stores";
import { addEntity, entityConfig, withEntities } from "@ngrx/signals/entities";
import { TodoService } from '../services/todo-service';

type TodoFilter = {
  ownerId: string | null;
  orgId: string[] | null;
};


const todoConfig = entityConfig({
  entity: type<TodoWithRelations>(),
  collection: 'todos',
  selectId: (todo: TodoWithRelations) => todo.id,
});

export const TodoStore = signalStore(
  withState(initialTodoState),
  withProps(_ => {
    const _todoServices = inject(TodoService);
    const _appStore = inject(AppStore);
    const _snackBar = inject(MatSnackBar);
    return {
      _todoServices,
      _appStore,
      _snackBar
  }}),
  withEntities(todoConfig), // Not necessary for read-only data, but useful if we want to add/update/delete todos in the store after mutations
  withDevtools('TodoStore'), // For developer tools
  withCallState({ collection: 'todos' }),
  // Selection within the material Table
  withSelectionFeature<TodoWithRelations>({ collection: 'todos' }),
  // Navigation methods useful for the details view of a todo item
  withNavigationMethods(),
  // Appel avec les valeurs de l'utilisateur courant (depuis l'AppStore)
  withEntityResources((_store) => ({
    todos: _store._todoServices.getTodosByUserIdOrOrgIdResource(_store._appStore.user()?.id!, _store._appStore.orgId() )  })
  ),
  // to add or change entities in the store after a mutation, we can use the onSuccess callback of the mutation to patch the state with the new or updated entity
  withMutations((_store) => ({
    saveTodo: _store._todoServices.createSaveTodoMutation({
      onSuccess(todo: TodoWithRelations) {
        patchState(_store, addEntity(todo, { collection: 'todos' }));
        _store._snackBar.open('Todo saved', 'OK');
      },
      onError(error: unknown) {
        _store._snackBar.open('Error saving todo!', 'OK');
        console.error(error);
      },
    }),
  })),
  // Add undo redo capability to the store, with configuration for the collections to track
  withUndoRedo({
    collections: [ "todos" ]
  }),
  // Methods to update the filter (ownerId, orgId) used for fetching the todos, with an explicit reload method to trigger the resource refetch
  withMethods((_store) => ({
    reload: () => {
      _store._todosReload();
    },
    updateFilter: signalMethod( (filter: TodoFilter) => {
      const  { ownerId, orgId } = filter;
      if (filter.ownerId !== ownerId || filter.orgId !== orgId ) {
        patchState(_store, { filter: { ownerId, orgId } });
      }}),
      setCurrentSort(sort: Sort | null) {
        patchState(_store, { currentSort: sort });
      },
      setSortedSelection(sortedIds: string[]) {
        patchState(_store, { effectiveSelectedIds: sortedIds });
      },
      clearSortedSelection() {
        patchState(_store, { effectiveSelectedIds: [] });
      },
    })),
    // Computed property to get the count of todos and ...
  withComputed((_store) => ({
    todosCount: computed(() => !!_store.todosEntities() ? _store.todosEntities().length : 0),
    totalItemsFiltered: computed(() => {}),
    filteredItems: computed(() => {
      const filter = _store.filterValue().toLowerCase();
      if (!filter) {
        return _store.todosValue();
      }
      return _store.todosValue().filter(todo =>
        todo.title?.toLowerCase().includes(filter) ||
        todo.content?.toLowerCase().includes(filter) ||
        todo.owner?.firstName?.toLowerCase().includes(filter) ||
        todo.owner?.lastName?.toLowerCase().includes(filter) ||
        todo.owner?.email?.toLowerCase().includes(filter)
      );
    }),
    sortedItems: computed(() => {
      const todos = [...(_store.filteredItems() ?? [])];
      const currentSort = _store.currentSort();
      if (!currentSort || !currentSort.active || currentSort.direction === '') {
        return todos;
      }
      return todos.sort((a, b) => {
        const aValue = (a as Record<string, unknown>)[currentSort.active];
        const bValue = (b as Record<string, unknown>)[currentSort.active];
        if (aValue == null && bValue == null) {
          return 0;
        }
        if (aValue == null) {
          return 1;
        }
        if (bValue == null) {
          return -1;
        }
        const comparison = String(aValue).localeCompare(String(bValue), undefined, { sensitivity: 'base' });
        return currentSort.direction === 'asc' ? comparison : -comparison;
      });

    })

  })),
  withHooks({
    onInit: (_store) => {
      console.log('TodoStore initialized');
      // Synchroniser effectiveSelectedIds avec selectedIds quand la sélection change
      effect(() => {
        const selected = (_store as unknown as { selectedIds: () => string[] }).selectedIds();
        const effective = (_store as unknown as { effectiveSelectedIds: () => string[] }).effectiveSelectedIds();
        // Si la longueur a changé, c'est qu'on a ajouté/retiré une sélection
        // Resync effectiveSelectedIds avec selectedIds (le tri est réinitialisé)
        if (effective.length !== selected.length) {
          patchState(_store, { effectiveSelectedIds: selected });
        }
      });
    }
  }),
// End of store definition
)

/* withEntityResources: withResource with entities
    https://ngrx-toolkit.angulararchitects.io/docs/with-entity-resources
    This exposes per-resource members with the resource name as a prefix:
    Resource members: todosValue(), todosStatus(), todosError(), todosIsLoading();
    Entity members: todosIds(), todosEntityMap(), todosEntities();
  */
 //  Appel through a filter
  //   withEntityResources((_store) => ({
  //   todosWithFilter: _store._todoServices.getTodosByUserIdOrOrgIdResource(_store.filter().ownerId!, _store.filter().orgId )  })
  // ),
