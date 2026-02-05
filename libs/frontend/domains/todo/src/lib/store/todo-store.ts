import { withCallState, withDevtools, withEntityResources, withUndoRedo } from "@angular-architects/ngrx-toolkit";
import { inject, resource } from '@angular/core';
import { Todo } from '@db/prisma/frontend';
import { signalStore, type, withProps, withState } from '@ngrx/signals';
import { entityConfig, withEntities } from '@ngrx/signals/entities';
import { initialTodoState } from './todo-slice';
// import { computed, effect, inject, resource } from "@angular/core";
import { TodoService } from '../services/todo-service';



const todoConfig = entityConfig({
  entity: type<Todo>(),
  collection: 'todo',
  selectId: (todo: Todo) => todo.id,
});

export const TodoStore = signalStore(
  withState(initialTodoState),
  withProps(_ => {
    const _todoServices = inject(TodoService);
    return {
      _todoServices
  }}),
  withEntities(todoConfig),
  withDevtools('TodoStore'),
  withUndoRedo({
    collections: [ todoConfig.collection ]
  }),
  withCallState({ collection: 'todo' }),
  /* withEntityResources: withResource with entities
    https://ngrx-toolkit.angulararchitects.io/docs/with-entity-resources
    This exposes per-resource members with the resource name as a prefix:
    Resource members: todosValue(), todosStatus(), todosError(), todosIsLoading();
    Entity members: todosIds(), todosEntityMap(), todosEntities();
  */
  withEntityResources((_store) => ({
    todos: resource({
      loader: async () => {
        const ownerId = _store.filter().ownerId;
        const orgId = _store.filter().orgId;
        return ownerId
            ? await _store._todoServices.getTodosByUserIdOrOrgId(ownerId, orgId)
            : await _store._todoServices.getTodosByOrgId(orgId);
      },
      defaultValue: [],
    }),
  })),

);
