import { inject } from '@angular/core';
import { User } from '@db/prisma';
import { patchState, signalStoreFeature, withMethods } from '@ngrx/signals';
import { setAllEntities } from '@ngrx/signals/entities';
import { UserService, UsersQueryOptions } from '../services/user-service';

type UsersEntitiesStore = { usersEntities: () => Record<string, User> };
type SelectionStore = { selectedIds: () => string[] };

export const withUserMethods = signalStoreFeature(
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

    toggleSelection(id: string) {
      const sel = store as unknown as SelectionStore;
      const current: string[] = sel.selectedIds();
      const next = current.includes(id)
        ? current.filter((x: string) => x !== id)
        : [...current, id];
      patchState(store, { selectedIds: next });
    },

    clearSelection() {
      patchState(store, { selectedIds: [] });
    },

    selectAll() {
      const ents = store as unknown as UsersEntitiesStore;
      const allIds = Object.keys(ents.usersEntities());
      patchState(store, { selectedIds: allIds });
    },

    setSelection(ids: string[]) {
      const unique = Array.from(new Set(ids));
      patchState(store, { selectedIds: unique });
    },
  }))
);
