import { withMutations } from '@angular-architects/ngrx-toolkit';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TodoWithRelations } from '@db/prisma/frontend';
import { patchState, signalStoreFeature, type } from '@ngrx/signals';
import { addEntity, EntityId, removeEntity, updateEntity } from '@ngrx/signals/entities';
import { TodoService } from '../services/todo-service';

export function withTodoMutations<_>() {
  return signalStoreFeature(
    {
      state: type<{
        // State requis pour la selection
        selectedIds: string[];
        effectiveSelectedIds: string[];

        // State requis pour la gestion des entités 'todos'
        todosEntityMap: Record<EntityId, TodoWithRelations>;
        todosIds: EntityId[];
      }>(),
      props: type<{
        _todoServices: TodoService;
        _snackBar: MatSnackBar;
      }>()
    },
    withMutations((store) => ({
      saveTodo: store._todoServices.createSaveTodoMutation({
        onSuccess: (todo: TodoWithRelations) => {
          const exists = !!store.todosEntityMap()[todo.id];

          const entityUpdate = exists
            ? updateEntity({ id: todo.id, changes: todo }, { collection: 'todos' })
            : addEntity(todo, { collection: 'todos' });

          const stateUpdate = exists
            ? { selectedItemId: todo.id }
            : {
                selectedItemId: todo.id,
                selectedIds: store.selectedIds().includes(todo.id)
                  ? store.selectedIds()
                  : [...store.selectedIds(), todo.id],
                effectiveSelectedIds: store.effectiveSelectedIds().includes(todo.id)
                  ? store.effectiveSelectedIds()
                  : [...store.effectiveSelectedIds(), todo.id],
              };

          patchState(store, entityUpdate, stateUpdate);
          store._snackBar.open('Todo saved', 'OK');
        },
        onError: (error: unknown) => {
          store._snackBar.open('Error saving todo!', 'OK');
          console.error(error);
        },
      }),

      softDeleteTodo: store._todoServices.createSoftDeleteMutation({
        onSuccess: (response: { message: string; todo: TodoWithRelations }) => {
          patchState(store, removeEntity(response.todo.id, { collection: 'todos' }));
          store._snackBar.open('Todo soft deleted', 'OK');
        },
        onError: (error: unknown) => {
          store._snackBar.open('Error deleting todo!', 'OK');
          console.error(error);
        },
      }),

      hardDeleteTodo: store._todoServices.createHardDeleteMutation({
        onSuccess: (response: { message: string; todo: TodoWithRelations }) => {
          patchState(store, removeEntity(response.todo.id, { collection: 'todos' }));
          store._snackBar.open('Todo permanently deleted', 'OK');
        },
        onError: (error: unknown) => {
          store._snackBar.open('Error permanently deleting todo!', 'OK');
          console.error(error);
        },
      }),
    }))
  );
}
