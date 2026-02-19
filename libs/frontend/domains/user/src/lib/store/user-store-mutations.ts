import { withMutations } from "@angular-architects/ngrx-toolkit";
import { MatSnackBar } from "@angular/material/snack-bar";
import { UserWithRelations } from "@db/prisma/browser";
import { patchState, signalStoreFeature, type } from "@ngrx/signals";
import { addEntity, EntityId, removeEntity, updateEntity } from "@ngrx/signals/entities";
import { UserService } from "../services/user-service";

export function withUserMutations<_>() {
  return signalStoreFeature(
    {
      state: type<{
        // State requis pour la selection
        selectedIds: string[];
        effectiveSelectedIds: string[];

        // State requis pour la gestion des entités 'users'
        usersEntityMap: Record<EntityId, UserWithRelations>;
        usersIds: EntityId[]
      }>(),
      props: type<{
        _userServices: UserService;
        _snackBar: MatSnackBar;
      }>()
    },
    withMutations((store) => ({
      saveUser: store._userServices.createSaveUserMutation({
        onSuccess: (user: UserWithRelations) => {
          const exists = !!store.usersEntityMap()[user.id];

          const entityUpdate = exists
            ? updateEntity({ id: user.id, changes: user }, { collection: 'users' })
            : addEntity(user, { collection: 'users' });

          const stateUpdate = exists
            ? { selectedItemId: user.id }
            : {
                selectedItemId: user.id,
                selectedIds: store.selectedIds().includes(user.id)
                  ? store.selectedIds()
                  : [...store.selectedIds(), user.id],
                effectiveSelectedIds: store.effectiveSelectedIds().includes(user.id)
                  ? store.effectiveSelectedIds()
                  : [...store.effectiveSelectedIds(), user.id],
              };

          patchState(store, entityUpdate, stateUpdate);
          store._snackBar.open('User saved', 'OK');
        },
        onError: (error: unknown) => {
          store._snackBar.open('Error saving user!', 'OK');
          console.error(error);
        },
      }),
      softDeleteUser: store._userServices.softDeleteUserMutation({
        onSuccess: (response: { message: string; user: UserWithRelations }) => {
          patchState(store, removeEntity(response.user.id, { collection: 'users' }));
          store._snackBar.open('User soft deleted', 'OK');
        },
        onError: (error: unknown) => {
          store._snackBar.open('Error deleting user!', 'OK');
          console.error(error);
        },
      }),

      hardDeleteUser: store._userServices.hardDeleteUserMutation({
        onSuccess: (response: { message: string; user: UserWithRelations }) => {
          patchState(store, removeEntity(response.user.id, { collection: 'users' }));
          store._snackBar.open('User permanently deleted', 'OK');
        },
        onError: (error: unknown) => {
          store._snackBar.open('Error permanently deleting user!', 'OK');
          console.error(error);
        },
      }),

    }))
  );
}
