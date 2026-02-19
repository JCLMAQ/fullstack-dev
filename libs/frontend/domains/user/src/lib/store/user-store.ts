import { withDevtools, withEntityResources, withUndoRedo } from "@angular-architects/ngrx-toolkit";
import { computed, effect, inject } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { UserWithRelations } from "@db/prisma/frontend";
import { buildSelectionComputed, withFilter, withNavigationMethods, withPagination, withSelectionFeature, withSort } from "@fe/stores";
import { patchState, signalStore, type, withComputed, withHooks, withProps, withState } from '@ngrx/signals';
import { entityConfig } from "@ngrx/signals/entities";
import { UserService } from "../services/user-service";
import { initialUserState } from "./user-slice";
import { withUserMethods } from "./user-store-methods";
import { withUserMutations } from "./user-store-mutations";

const userConfig = entityConfig({
  entity: type<UserWithRelations>(),
  collection: 'users',
  selectId: (user: UserWithRelations) => user.id,
});


export const UserStore = signalStore(
  withState(initialUserState),
  withProps((_ ) => {
    const _userServices = inject(UserService);
    const _snackBar = inject(MatSnackBar);

    return {
      _userServices,
      _snackBar,
    };
  }),
  withDevtools('UserStore'),

  // Appel  withEntityResources
  withEntityResources(( store ) => ({
    users: store._userServices.getUsersResource()
  })),
  withUserMethods(),
  withSelectionFeature<UserWithRelations>({ collection: 'users' }),
  withNavigationMethods(),
  // withEntityResources(( store ) => ({
  //   followers: store._svc.getUserFollowersResource(store.selectedItemId() ?? '0'),
  //   following: store._svc.getUserFollowingResource(store.selectedItemId() ?? '0'),
  //   addresses: store._svc.getUserAddressesResource(store.selectedItemId() ?? '0'),
  //   organizations: store._svc.getUserOrganizationsResource(store.selectedItemId() ?? '0'),
  //  })),
  withUserMutations(),
  withUndoRedo({
    collections: [ userConfig.collection ]
  }),
  withComputed((store) => {
    const { selection, isAllSelected } = buildSelectionComputed<UserWithRelations>(store, 'usersEntityMap');
    return {
      // Conversion des entités en tableau pour la compatibilité
      users: computed(() => Object.values(store.usersEntityMap())),

      isLoading: computed(() => store.usersIsLoading()),
      hasError: computed(() => !!store.usersError()),

      userCount: computed(() => Object.keys(store.usersEntityMap()).length),

      hasAddresses: computed(() => store.addresses().length > 0),
      hasFollowers: computed(() => store.followers().length > 0),
      nbrOfFollowers: computed(() => store.selectedItem()?.Followers.length),
      hasFollowing: computed(() => store.following().length > 0),
      hasOrganizations: computed(() => store.organizations().length > 0),

      selection,
      isAllSelected,
    };
  }),
  withFilter<UserWithRelations, 'users'>({
    collection: 'users',
    itemsSelector: (store: any) => store.users(),
    predicate: (user: UserWithRelations, filter: string) =>
      user.firstName?.toLowerCase().includes(filter) ||
      user.lastName?.toLowerCase().includes(filter) ||
      user.email?.toLowerCase().includes(filter),
  }),
  withSort<UserWithRelations>({
    // withSort<User, 'users'>({
    // collection: 'users',
    itemsSelector: (store: any) => store.filteredUsers(),
    comparators: {
      createdAt: (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
      updatedAt: (a, b) => new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime(),
    }
  }),
  withPagination<UserWithRelations>({
    itemsSelector: (store: any) => store.sortedItems,
    initialPageSize: 10
  }),
  withHooks({
    onInit: (store) => {
      console.log('UserStore initialized');
      // store['loadUsers']();
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
