import { withCallState, withDevtools, withUndoRedo } from "@angular-architects/ngrx-toolkit";
import { computed, effect } from "@angular/core";
import { User } from "@db/prisma";
import { buildSelectionComputed, withNavigationMethods, withSelectionMethods } from "@fe/stores";
import { patchState, signalStore, type, withComputed, withHooks, withState } from '@ngrx/signals';
import { entityConfig, withEntities } from "@ngrx/signals/entities";
import { initialUserState } from "./user-slice";
import { withUserMethods } from "./user-store-methods";

const userConfig = entityConfig({
  entity: type<User>(),
  collection: 'user',
  selectId: (user: User) => user.id,
});


export const UserStore = signalStore(
  withState(initialUserState),
  withEntities(userConfig),
  withCallState({ collection: 'user' }),
  withSelectionMethods<User>({ collection: 'user' }),
  withNavigationMethods(),
  withUserMethods,
  withDevtools('UserStore'),
  withUndoRedo({
  }),
  withComputed((store) => {
    const { selection, isAllSelected } = buildSelectionComputed<User>(store, 'userEntityMap');
    return {
      // Conversion des entités en tableau pour la compatibilité
      users: computed(() => Object.values(store.userEntityMap())),

      isLoading: computed(() => store.loading()),
      hasError: computed(() => !!store.error()),

      userCount: computed(() => Object.keys(store.userEntityMap()).length),

      hasFollowers: computed(() => store.followers().length > 0),
      hasFollowing: computed(() => store.following().length > 0),
      hasOrganizations: computed(() => store.organizations().length > 0),

      selection,
      isAllSelected,
    };
  }),
  withHooks({
    onInit: (store) => {
      console.log('UserStore initialized');
      store['loadUsers']();

      // Synchroniser effectiveSelectedIds avec selectedIds quand la sélection change
      effect(() => {
        const selected = (store as unknown as { selectedIds: () => string[] }).selectedIds();
        const effective = (store as unknown as { effectiveSelectedIds: () => string[] }).effectiveSelectedIds();
        // Si la longueur a changé, c'est qu'on a ajouté/retiré une sélection
        // Resync effectiveSelectedIds avec selectedIds (le tri est réinitialisé)
        if (effective.length !== selected.length) {
          patchState(store, { effectiveSelectedIds: selected });
        }
      });
    },
  })
);
