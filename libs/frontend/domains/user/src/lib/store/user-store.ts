import { withCallState, withDevtools, withUndoRedo } from "@angular-architects/ngrx-toolkit";
import { computed } from "@angular/core";
import { User } from "@db/prisma";
import { signalStore, type, withComputed, withHooks, withState } from "@ngrx/signals";
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
  withHooks({
    onInit: (store) => {
      console.log('UserStore initialized');
      store.loadUsers();
    },
  })
);
