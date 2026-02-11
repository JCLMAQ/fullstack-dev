import { inject } from '@angular/core';
import { User } from '@db/prisma/frontend';
import { AppStore } from '@fe/stores';
import { patchState, signalStoreFeature, withMethods } from '@ngrx/signals';
import { addEntity, removeEntity, setAllEntities, updateEntity } from '@ngrx/signals/entities';
import { UserService, UsersQueryOptions } from '../services/user-service';

type SelectionStore = { selectedIds: () => string[] };

export const withUserMethods = signalStoreFeature(

  withMethods((store, userService = inject(UserService), appStore = inject(AppStore)) => ({

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

        patchState(store, addEntity(user, { collection: 'user' }), {
          selectedItemId: user.id,
          loading: false,
        });
      } catch {
        patchState(store, { loading: false, error: 'Erreur lors du chargement de l\'utilisateur' });
      }
    },

    async loadAddresses(userId: string) {
      try {
        patchState(store, { loading: true, error: null });
        const addresses = await userService.getUserAddresses(userId);
        patchState(store, { addresses, loading: false });
      } catch {
        patchState(store, { loading: false, error: 'Erreur lors du chargement des adresses' });
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

    async updateUser(id: string, data: Partial<User>) {
      try {
        patchState(store, { loading: true, error: null });
        const updated = await userService.updateUser(id, data);
        patchState(store, { selectedItemId: id, loading: false });
        appStore.updateUserProfile(updated);
        patchState(
          store,
          updateEntity({ id, changes: updated }, { collection: 'users' }),
        );
      } catch {
        patchState(store, { loading: false, error: 'Erreur lors de la mise à jour de l\'utilisateur' });
      }
    },

    async deleteUser(id: string) {
      try {
        patchState(store, { loading: true, error: null });
        await userService.deleteUser(id);
        patchState(
          store,
          removeEntity(id, { collection: 'users' }),
          { selectedItemId: null, loading: false }
        );
        const sel = store as unknown as SelectionStore;
        const selectedIds = sel.selectedIds().filter(sid => sid !== id);
        patchState(store, { selectedIds });
      } catch {
        patchState(store, { loading: false, error: 'Erreur lors de la suppression de l\'utilisateur' });
      }
    },

    async softDeleteUser(id: string) {
      try {
        patchState(store, { loading: true, error: null });
        await userService.softDeleteUser(id);
        const storeWithEntities = store as unknown as { userEntityMap: () => Record<string, User> };
        const currentUser = storeWithEntities.userEntityMap()[id];
        if (currentUser) {
          const updated = { ...currentUser, isDeleted: 1 };
          patchState(
            store,
            updateEntity({ id, changes: updated }, { collection: 'users' }),
            {
              loading: false,
            },
          );
        }
      } catch {
        patchState(store, { loading: false, error: 'Erreur lors de la désactivation de l\'utilisateur' });
      }
    },

    async createUser(data: Omit<User, 'id' | 'createdAt' | 'updatedAt'>) {
      try {
        patchState(store, { loading: true, error: null });
        const created = await userService.createUser(data);
        patchState(
          store,
          addEntity(created, { collection: 'users' }),
          { selectedItemId: created.id, loading: false },
        );
      } catch {
        patchState(store, { loading: false, error: 'Erreur lors de la création de l\'utilisateur' });
      }
    },

    setSortedSelection(sortedIds: string[]) {
      patchState(store, { effectiveSelectedIds: sortedIds });
    },

    clearSortedSelection() {
      patchState(store, { effectiveSelectedIds: [] });
    },


  }))
);
