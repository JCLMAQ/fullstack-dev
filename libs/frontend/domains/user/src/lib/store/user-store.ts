import { withCallState, withDevtools, withEntityResources, withUndoRedo } from "@angular-architects/ngrx-toolkit";
import { computed, effect, inject, resource } from "@angular/core";
import { User } from "@db/prisma/frontend";
import { buildSelectionComputed, withFilter, withNavigationMethods, withPagination, withSelectionFeature, withSort } from "@fe/stores";
import { patchState, signalStore, type, withComputed, withHooks, withProps, withState } from '@ngrx/signals';
import { entityConfig, withEntities } from "@ngrx/signals/entities";
import { UserService } from "../services/user-service";
import { initialUserState } from "./user-slice";
import { withUserMethods } from "./user-store-methods";

const userConfig = entityConfig({
  entity: type<User>(),
  collection: 'user',
  selectId: (user: User) => user.id,
});


export const UserStore = signalStore(
  withState(initialUserState),
  withProps( _ => {
    const _svc = inject(UserService);
    return {
      _svc
    };
  }),
  withEntities(userConfig),
  withCallState({ collection: 'user' }),
  withSelectionFeature<User>({ collection: 'user' }),
  withNavigationMethods(),
  // test withResources
  withEntityResources(( store ) => ({
    usersList: resource({ loader: () => store._svc.listUsers(), defaultValue: []}),
  })),
//   withEntityResources((_store, svc = inject(TodoMemoryService)) => resource({ loader: () => firstValueFrom(svc.list()), defaultValue: [] })),

  withUserMethods,
  withDevtools('UserStore'),
  withUndoRedo({
    collections: [ userConfig.collection ]
  }),
  withComputed((store) => {
    const { selection, isAllSelected } = buildSelectionComputed<User>(store, 'userEntityMap');
    return {
      // Conversion des entités en tableau pour la compatibilité
      users: computed(() => Object.values(store.userEntityMap())),

      isLoading: computed(() => store.loading()),
      hasError: computed(() => !!store.error()),

      userCount: computed(() => Object.keys(store.userEntityMap()).length),

      hasAddresses: computed(() => store.addresses().length > 0),
      hasFollowers: computed(() => store.followers().length > 0),
      nbrOfFollowers: computed(() => store.selectedItem()?.Followers.length),
      hasFollowing: computed(() => store.following().length > 0),
      hasOrganizations: computed(() => store.organizations().length > 0),

      selection,
      isAllSelected,
    };
  }),
  withFilter<User, 'user'>({
    collection: 'user',
    itemsSelector: (store: any) => store.users(),
    predicate: (user: User, filter: string) =>
      user.firstName?.toLowerCase().includes(filter) ||
      user.lastName?.toLowerCase().includes(filter) ||
      user.email?.toLowerCase().includes(filter),
  }),
  withSort<User, 'user'>({
    collection: 'user',
    itemsSelector: (store: any) => store.filteredUser(),
    comparators: {
      createdAt: (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
      updatedAt: (a, b) => new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime(),
    }
  }),
  withPagination<User>({
    itemsSelector: (store) => store.sortedUser,
    initialPageSize: 5
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
