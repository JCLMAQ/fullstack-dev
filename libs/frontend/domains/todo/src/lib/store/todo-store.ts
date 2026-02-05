import { withCallState, withDevtools, withEntityResources, withUndoRedo } from "@angular-architects/ngrx-toolkit";
import { inject } from '@angular/core';
import { patchState, signalMethod, signalStore, withMethods, withProps, withState } from '@ngrx/signals';
import { initialTodoState } from './todo-slice';
// import { computed, effect, inject, resource } from "@angular/core";
import { AppStore } from "@fe/stores";
import { TodoService } from '../services/todo-service';

type TodoFilter = {
  ownerId: string | null;
  orgId: string | null;
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
    return {
      _todoServices,
      _appStore
  }}),
  // withEntities(todoConfig),
  withDevtools('TodoStore'),
  // withUndoRedo({
  //   collections: [ todoConfig.collection ]
  // }),
  withCallState({ collection: 'todos' }),
  withMethods((_store) => ({
    updateFilter: signalMethod( (filter: TodoFilter) => {
      const  { ownerId, orgId } = filter;
      if (filter.ownerId !== ownerId || filter.orgId !== orgId ) {
        patchState(_store, { filter: { ownerId,  orgId } });
      }})
    })),

  /* withEntityResources: withResource with entities
    https://ngrx-toolkit.angulararchitects.io/docs/with-entity-resources
    This exposes per-resource members with the resource name as a prefix:
    Resource members: todosValue(), todosStatus(), todosError(), todosIsLoading();
    Entity members: todosIds(), todosEntityMap(), todosEntities();
  */

  //  Appel via un filter
  //   withEntityResources((_store) => ({
  //   todosWithFilter: _store._todoServices.getTodosByUserIdOrOrgIdResource(_store.filter().ownerId!, _store.filter().orgId )  })
  // ),
  // Appel avec les valeurs de l'utilisateur courant (depuis l'AppStore)
  withEntityResources((_store) => ({
    todos: _store._todoServices.getTodosByUserIdOrOrgIdResource(_store._appStore.user()?.id!, _store._appStore.user()?.orgId )  })
  ),
  withUndoRedo({
    collections: [ "todos" ]
  }),

// End of store definition
);
