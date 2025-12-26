import { withCallState, withDevtools, withUndoRedo } from "@angular-architects/ngrx-toolkit";
import { computed, inject } from "@angular/core";
import { User } from "@db/prisma";
import { patchState, signalStore, type, withComputed, withHooks, withMethods, withState } from "@ngrx/signals";
import { entityConfig, setAllEntities, withEntities } from "@ngrx/signals/entities";
import { UserService, UsersQueryOptions } from "../services/user-service";
import { initialUserState } from "./user-slice";

const userConfig = entityConfig({
  entity: type<User>(),
  collection: 'users',
  selectId: (user: User) => user.id,
});

export const UserStore = signalStore(
  withState(initialUserState),
  withEntities(userConfig),
  withCallState({ collection: 'users' }),
  withDevtools('UserStore'),
  withUndoRedo({
    collections: ['users'],
  }),
  withComputed(({ usersEntities, followers, following, organizations, selectedUser, loading, error }) => ({
    // Conversion des entités en tableau pour la compatibilité
    users: computed(() => Object.values(usersEntities())),
    isLoading: computed(() => loading()),
    hasError: computed(() => !!error()),
    userCount: computed(() => Object.keys(usersEntities()).length),
    hasFollowers: computed(() => followers().length > 0),
    hasFollowing: computed(() => following().length > 0),
    hasOrganizations: computed(() => organizations().length > 0),
    selectedUserId: computed(() => selectedUser()?.id ?? null),
  })),
  withMethods((store, userService = inject(UserService)) => ({
    async loadUsers(options?: UsersQueryOptions) {
      try {
        patchState(store, { loading: true, error: null });
        const users = await userService.listUsers(options);
        patchState(store, setAllEntities(users, { collection: 'users' }), { loading: false });
      } catch {
        patchState(store, { loading: false, error: 'Erreur lors du chargement des utilisateurs' });
      }
    },
    async loadUser(id: string) {
      try {
        patchState(store, { loading: true, error: null });
        const user = await userService.getUserById(id);
        patchState(store, { selectedUser: user, loading: false });
      } catch {
        patchState(store, { loading: false, error: 'Erreur lors du chargement de l\'utilisateur' });
      }
    },
    async loadOrganizations(id: string) {
      try {
        patchState(store, { loading: true, error: null });
        const organizations = await userService.getUserOrganizations(id);
        patchState(store, { organizations, loading: false });
      } catch {
        patchState(store, { loading: false, error: 'Erreur lors du chargement des organisations' });
      }
    },
    async loadFollowers(id: string) {
      try {
        patchState(store, { loading: true, error: null });
        const followers = await userService.getUserFollowers(id);
        patchState(store, { followers, loading: false });
      } catch {
        patchState(store, { loading: false, error: 'Erreur lors du chargement des followers' });
      }
    },
    async loadFollowing(id: string) {
      try {
        patchState(store, { loading: true, error: null });
        const following = await userService.getUserFollowing(id);
        patchState(store, { following, loading: false });
      } catch {
        patchState(store, { loading: false, error: 'Erreur lors du chargement des following' });
      }
    },
  })),
  withHooks({
    onInit: (store) => {
      console.log('UserStore initialized');
      // Optionnel: pré-chargement de la liste
      store.loadUsers();
    },
  })

)
