import { inject } from '@angular/core';
import { User } from '@db/prisma';
import { patchState, signalStoreFeature, withMethods } from '@ngrx/signals';
import { addEntity, setAllEntities } from '@ngrx/signals/entities';
import { UserService, UsersQueryOptions } from '../services/user-service';

// type UsersEntitiesStore = { userEntityMap: () => Record<string, User> };
type SelectionStore = { selectedIds: () => string[] };

export const withUserMethods = signalStoreFeature(
  withMethods((store, userService = inject(UserService)) => ({

    async loadUsers(options?: UsersQueryOptions) {
      try {
        patchState(store, { loading: true, error: null });
        const users = await userService.listUsers(options);
        patchState(store, setAllEntities(users, { collection: 'user' }), { loading: false });
      } catch {
        patchState(store, { loading: false, error: 'Erreur lors du chargement des utilisateurs' });
      }
    },

    async loadUser(id: string) {
      try {
        patchState(store, { loading: true, error: null });
        const user = await userService.getUserById(id);

        // Use addEntity to properly add user to the collection with correct selectId
        patchState(
          store,
          addEntity(user, { collection: 'user' }),
          { selectedItem: user, loading: false }
        );
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
        patchState(store, { selectedItem: updated, loading: false });
        // Update in entities - access via cast
        const storeWithEntities = store as unknown as { usersEntities: () => Record<string, User> };
        const current = storeWithEntities.usersEntities();
        patchState(store, {
          usersEntities: { ...current, [id]: updated },
        } as any);
      } catch {
        patchState(store, { loading: false, error: 'Erreur lors de la mise à jour de l\'utilisateur' });
      }
    },

    async deleteUser(id: string) {
      try {
        patchState(store, { loading: true, error: null });
        await userService.deleteUser(id);
        // Remove from entities
        const storeWithEntities = store as unknown as { usersEntities: () => Record<string, User> };
        const current = storeWithEntities.usersEntities();
        const updated = { ...current };
        delete updated[id];
        patchState(store, {
          usersEntities: updated,
          selectedItem: null,
          loading: false,
        } as any);
        // Remove from selection
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
        // Update in entities
        const storeWithEntities = store as unknown as { usersEntities: () => Record<string, User> };
        const current = storeWithEntities.usersEntities();
        if (current[id]) {
          const updated = { ...current[id], isDeleted: 1 };
          patchState(store, {
            usersEntities: { ...current, [id]: updated },
            selectedItem: current[id]?.id === id ? (updated as User) : null,
            loading: false,
          } as any);
        }
      } catch {
        patchState(store, { loading: false, error: 'Erreur lors de la désactivation de l\'utilisateur' });
      }
    },

    async createUser(data: Omit<User, 'id' | 'createdAt' | 'updatedAt'>) {
      try {
        patchState(store, { loading: true, error: null });
        const created = await userService.createUser(data);
        patchState(store, { selectedItem: created, loading: false });
        // Add to entities
        const storeWithEntities = store as unknown as { usersEntities: () => Record<string, User> };
        const current = storeWithEntities.usersEntities();
        patchState(store, {
          usersEntities: { ...current, [created.id]: created },
        } as any);
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

    setCurrentSort(sort: object | null) {
      patchState(store, { currentSort: sort });
    },


  }))
);
