import { withCallState, withDevtools, withEntityResources, withMutations, withUndoRedo } from "@angular-architects/ngrx-toolkit";
import { computed, effect, inject } from '@angular/core';
import { patchState, signalStore, type, withComputed, withHooks, withState } from '@ngrx/signals';
import { initialTodoState } from './todo-slice';
// import { computed, effect, inject, resource } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { TodoWithRelations } from "@db/prisma";
import { AppStore, buildSelectionComputed, withFilter, withNavigationMethods, withPagination, withSelectionFeature, withSort } from "@fe/stores";
import { addEntity, entityConfig, withEntities } from "@ngrx/signals/entities";
import { TodoService } from '../services/todo-service';
// import { withTodoMethods } from "./todo-store-methods";
import { withMethods } from "@ngrx/signals";

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
  withEntities(todoConfig), // Not necessary for read-only data, but useful if we want to add/update/delete todos in the store after mutations
  withDevtools('TodoStore'), // For developer tools
  withCallState({ collection: 'todos' }),
  // Selection within the material Table
  withSelectionFeature<TodoWithRelations>({ collection: 'todos' }),
  // Navigation methods useful for the details view of a todo item
  withNavigationMethods(),
  // withTodoMethods(),
  withMethods((_store) => ({
    // Sélection des todos triés
    setSortedSelection(sortedIds: string[]) {
      patchState(_store, { effectiveSelectedIds: sortedIds });
    },

    clearSortedSelection() {
      patchState(_store, { effectiveSelectedIds: [] });
    },
    })),
  // Appel avec les valeurs de l'utilisateur courant (depuis l'AppStore)
  withEntityResources((_store, _todoServices = inject(TodoService), _appStore = inject(AppStore)) => ({
    todos: _todoServices.getTodosByUserIdOrOrgIdResource(_appStore.user()?.id!, _appStore.orgId() ?? null)  })
  ),

  // to add or change entities in the store after a mutation, we can use the onSuccess callback of the mutation to patch the state with the new or updated entity
  withMutations((_store, _todoServices = inject(TodoService), _snackBar = inject(MatSnackBar)) => ({
    saveTodo: _todoServices.createSaveTodoMutation({
      onSuccess(todo: TodoWithRelations) {
        patchState(_store, addEntity(todo, { collection: 'todos' }));
        _snackBar.open('Todo saved', 'OK');
      },
      onError(error: unknown) {
        _snackBar.open('Error saving todo!', 'OK');
        console.error(error);
      },
    }),
  })),

  // Add undo redo capability to the store, with configuration for the collections to track
  withUndoRedo({
    collections: [ todoConfig.collection ]
  }),
    // Computed property to get the count of todos and ...
  withComputed((_store) => {
    const { selection, isAllSelected } = buildSelectionComputed<TodoWithRelations>(_store, 'todosEntityMap');
    return {
      selection,
      isAllSelected,
      itemsCount: computed(() => Object.keys(_store.todosEntityMap()).length),
      // Conversion des entités en tableau pour la compatibilité
      todos: computed(() => Object.values(_store.todosEntityMap())),

      isLoading: computed(() => _store.todosLoading()),
      hasError: computed(() => !!_store.todosError()),

    };
  }),
  withFilter<TodoWithRelations, 'todos'>({
    collection: 'todos',
    itemsSelector: (_store: any) => _store.todos(),
    predicate: (todo: TodoWithRelations, filter: string) =>
      todo.title?.toLowerCase().includes(filter) ||
      todo.content?.toLowerCase().includes(filter) ||
      todo.todoState?.toLowerCase().includes(filter),
  }),
  withSort<TodoWithRelations, 'todos'>({
    collection: 'todos',
    itemsSelector: (_store: any) => _store.filteredItems(),
    comparators: {
      createdAt: (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
      updatedAt: (a, b) => new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime(),
    }
  }),

  withPagination<TodoWithRelations>({
    itemsSelector: (_store: any) => _store.sortedTodos,
    initialPageSize: 10
  }),
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
