import { withCallState, withDevtools, withUndoRedo } from "@angular-architects/ngrx-toolkit";
import { computed } from "@angular/core";
import { User } from "@db/prisma";
import { withNavigationMethods } from "@fe/stores";
import { patchState, signalStore, type, withComputed, withHooks, withMethods, withState } from "@ngrx/signals";
import { entityConfig, withEntities } from "@ngrx/signals/entities";
import { initialUserState } from "./user-slice";
import { withUserMethods } from "./user-store-methods";

const userConfig = entityConfig({
  entity: type<User>(),
  collection: 'users',
  selectId: (user: User) => user.id,
});


export const UserStore = signalStore(
  withState(initialUserState),
  withState({ selectedIds: [] as string[] }),
  withEntities(userConfig),
  withNavigationMethods<User>(),
  withCallState({ collection: 'users' }),
  withUserMethods,
  withDevtools('UserStore'),
  withUndoRedo({
    collections: ['users'],
  }),
  withComputed(({ usersEntities, followers, following, organizations, selectedUser, loading, error, selectedIds }) => ({
    // Conversion des entités en tableau pour la compatibilité
    users: computed(() => Object.values(usersEntities())),
    isLoading: computed(() => loading()),
    hasError: computed(() => !!error()),
    userCount: computed(() => Object.keys(usersEntities()).length),
    hasFollowers: computed(() => followers().length > 0),
    hasFollowing: computed(() => following().length > 0),
    hasOrganizations: computed(() => organizations().length > 0),
    selectedUserId: computed(() => selectedUser()?.id ?? null),
    selectedIdSet: computed(() => new Set(selectedIds())),
    selectedCount: computed(() => selectedIds().length),
    selectedUsers: computed(() => {
      const entities = usersEntities();
      return selectedIds()
        .map((id: string) => entities[id as keyof typeof entities])
        .filter((user): user is User => user !== undefined);
    }),
    isAllSelected: computed(() => {
      const total = Object.keys(usersEntities()).length;
      const sel = selectedIds().length;
      return total > 0 && sel === total;
    }),
  })),
  withMethods((store) => ({
    initSelectedID() {
        const firstIndex = store.usersEntities().at(0)?.id;
        patchState(store, { selectedId: firstIndex })
      },

      todoIdSelectedId(selectedRowId: string) {
        patchState(store, { selectedId: selectedRowId })
      },

      toggleSelected( selectedRowId: string) {
        const allSelectedRowId = store.selectedIds();
        const existSelectedRowId = allSelectedRowId.filter( item => item === selectedRowId)
        if(existSelectedRowId.length === 0) {
          patchState(store, { selectedIds: [ ...store.selectedIds(), selectedRowId] })
          patchState(store, { selectedId: selectedRowId })
        } else {
          const updateSelectedRowId = allSelectedRowId.filter( item => item !== selectedRowId)
          patchState(store, { selectedIds: updateSelectedRowId })
          patchState(store, { selectedId: "" })
        }
      },

      newSelectedSelectionItem(newSelectedSelectionItemIndex: number) {
        const users = Object.values(store.usersEntities());
        const newSelectedSelectionItem = users[newSelectedSelectionItemIndex];
        if (newSelectedSelectionItem) {
          patchState(store, { selectedId: newSelectedSelectionItem.id });
        }
      },

      newSelectedItem(newSelectedItemIndex: number) {
        const selectedItem = store.usersEntities()[newSelectedItemIndex]
        patchState(store,{ selectedId: selectedItem.id })
      },

      selectedItemUpdate(selectedRowId: string){
        const allSelectedRowId = store.selectedIds();
        if(allSelectedRowId.length > 0 ) {
          const existSelectedRowId = allSelectedRowId.filter( item => item === selectedRowId);
          if(existSelectedRowId.length === 0) {
            patchState(store, { selectedIds: [ ...store.selectedIds(), selectedRowId] })
          };
          patchState(store, { selectedIds: [ ...store.selectedIds()] })
          patchState(store,{ selectedId: selectedRowId })
        } else {
          patchState(store, { selectedIds: [ ...store.selectedIds(), selectedRowId] });
          patchState(store,{ selectedId: selectedRowId })
        }
      }
    })),
  withHooks({
    onInit: (store) => {
      console.log('UserStore initialized');
      store.loadUsers();
    },
  })
);
