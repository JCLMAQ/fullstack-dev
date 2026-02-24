import { withDevtools, withEntityResources, withUndoRedo } from "@angular-architects/ngrx-toolkit";
import { computed, effect, inject } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { TodoWithRelations } from '@db/prisma/frontend';
import { AppStore, buildSelectionComputed, withFilter, withNavigationMethods, withPagination, withSelectionFeature, withSort } from "@fe/stores";
import { patchState, signalStore, type, withComputed, withHooks, withProps, withState } from '@ngrx/signals';
import { entityConfig } from "@ngrx/signals/entities";
import { TodoService } from '../services/todo-service';
import { initialTodoState } from './todo-slice';
import { withTodoMethods } from "./todo-store-methods";
import { withTodoMutations } from "./todo-store-mutations";
// import { withMutations } from "@angular-architects/ngrx-toolkit";
// import { addEntity, removeEntity, updateEntity } from "@ngrx/signals/entities";


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
  withProps( _ => {
    const _todoServices = inject(TodoService);
    const _snackBar = inject(MatSnackBar);
    const _appStore = inject(AppStore);
    return {
      _todoServices,
      _snackBar,
      _appStore
    };
  }),
  // withEntities(todoConfig), // Not necessary for read-only data, but useful if we want to add/update/delete todos in the store after mutations. withEntityResources create the entities management based on the resource, so we don't need to add it separately here.
  withDevtools('TodoStore'), // For developer tools

  // Appel avec les valeurs de l'utilisateur courant (depuis l'AppStore)
  withEntityResources((store) => ({
      todos: store._todoServices.getTodosByUserIdOrOrgIdResource(store._appStore.user()?.id!, store._appStore.orgId() ?? null),
    }),
  ),
  withTodoMethods(),
  // Selection within the material Table
  withSelectionFeature<TodoWithRelations>({ collection: 'todos' }),
  // Navigation methods useful for the details view of a todo item
  withNavigationMethods(),
  // Methods specific to the Todo entity
  // to add or change entities in the store after a mutation, we can use the onSuccess callback of the mutation to patch the state with the new or updated entity
  withTodoMutations(),
  // Add undo redo capability to the store, with configuration for the collections to track
  withUndoRedo({
    collections: [ todoConfig.collection ]
  }),
    // Computed property to get the count of todos and ...
  withComputed((store) => {
    const { selection, isAllSelected } = buildSelectionComputed<TodoWithRelations>(store, 'todosEntityMap');
    return {
      selection,
      isAllSelected,
      itemsCount: computed(() => Object.keys(store.todosEntityMap()).length),
      // Conversion des entités en tableau pour la compatibilité
      todos: computed(() => Object.values(store.todosEntityMap())),

      isLoading: computed(() => store.todosIsLoading()),
      hasError: computed(() => !!store.todosError()),
    };
  }),
  // Add filter capabilities to the store, with a simple text filter on the title, content and state of the todo. The filter value is stored in the state and can be updated with a method. The filtered items are available as a computed property.
  withFilter<TodoWithRelations, 'todos'>({
    collection: 'todos',
    itemsSelector: (store: any) => store.todos(),
    predicate: (todo: TodoWithRelations, filter: string) =>
      todo.title?.toLowerCase().includes(filter) ||
      todo.content?.toLowerCase().includes(filter) ||
      todo.todoState?.toLowerCase().includes(filter),
  }),
  // Add sorting capabilities
  withSort<TodoWithRelations>({
    itemsSelector: (store: any) => store.filteredTodos(),
    comparators: {
      createdAt: (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
      updatedAt: (a, b) => new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime(),
    }
  }),

  withPagination<TodoWithRelations>({
    itemsSelector: (store: any) => store.sortedItems,
    initialPageSize: 10
  }),
  withHooks({
    onInit: (store) => {
      console.log('TodoStore initialized');
      // Synchroniser effectiveSelectedIds avec selectedIds quand la sélection change
      effect(() => {
        const selected = store.selectedIds();
        const effective = store.effectiveSelectedIds();
        // Si la longueur a changé, c'est qu'on a ajouté/retiré une sélection
        // Resync effectiveSelectedIds avec selectedIds (le tri est réinitialisé)
        if (effective.length !== selected.length) {
          patchState(store, { effectiveSelectedIds: selected });
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
  //   withEntityResources((store) => ({
  //   todosWithFilter: store._todoServices.getTodosByUserIdOrOrgIdResource(store.filter().ownerId!, store.filter().orgId )  })
  // ),
