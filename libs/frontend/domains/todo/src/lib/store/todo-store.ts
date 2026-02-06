import { withCallState, withDevtools, withEntityResources, withMutations, withUndoRedo } from "@angular-architects/ngrx-toolkit";
import { computed, inject } from '@angular/core';
import { patchState, signalMethod, signalStore, withComputed, withMethods, withProps, withState } from '@ngrx/signals';
import { initialTodoState } from './todo-slice';
// import { computed, effect, inject, resource } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { TodoWithRelations } from "@db/prisma";
import { AppStore } from "@fe/stores";
import { addEntity } from "@ngrx/signals/entities";
import { TodoService } from '../services/todo-service';

type TodoFilter = {
  ownerId: string | null;
  orgId: string[] | null;
};


// const todoConfig = entityConfig({
//   entity: type<Todo>(),
//   collection: 'todos',
//   selectId: (todo: Todo) => todo.id,
// });

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
  // withEntities(todoConfig),
  withDevtools('TodoStore'),
  // withUndoRedo({
  //   collections: [ todoConfig.collection ]
  // }),
  withCallState({ collection: 'todos' }),
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
      }})
    })),
    // Computed property to get the count of todos and ...
  withComputed((store) => ({
  todosCount: computed(() => !!store.todosEntities() ? store.todosEntities().length : 0),
}))
// End of store definition
);

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
