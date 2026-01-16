import { withDevtools, withEntityResources, withMutations, withUndoRedo } from '@angular-architects/ngrx-toolkit';
import { computed, inject, resource } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Phone } from '@db/prisma';
import { buildSelectionComputed, withNavigationMethods, withSelectionMethods } from '@fe/stores';
import { patchState, signalStore, withComputed, withHooks, withMethods, withProps, withState } from '@ngrx/signals';
import { addEntity, removeEntity } from '@ngrx/signals/entities';
import { PhoneService } from '../services/phone-service';
import { initialPhoneState } from './phone-slice';

export const PhoneStore = signalStore(
  // { providedIn: 'root' },
  withState(initialPhoneState),
  withProps(() => ({
    _phoneService: inject(PhoneService),
    _snackBar: inject(MatSnackBar),
  })),

  withEntityResources((store) => ({
    phones: resource({
      loader: async () => {
        const ownerId = store.filter().ownerId;
        return ownerId
          ? store._phoneService.getPhonesByUserId(ownerId)
          : store._phoneService.getAllPhones();
      },
      defaultValue: [],
    }),
  })),

  withSelectionMethods<Phone>({ collection: 'phones' }),
  withNavigationMethods(),

  withMethods((store) => ({
    loadAllPhones() {
      patchState(store, { filter: { ownerId: null } });
      store._phonesReload();
    },

    loadPhonesByUserId(userId: string) {
      patchState(store, { filter: { ownerId: userId } });
      store._phonesReload();
    },

    setOwnerId(ownerId: string | null) {
      patchState(store, { filter: { ownerId } });
      store._phonesReload();
    },
  })),

  withHooks((store) => ({
    onInit() {
      store.loadAllPhones();
    },
  })),

  withMutations((store) => ({
    savePhone: store._phoneService.createSaveMutation({
      onSuccess(phone: Phone) {
        patchState(store, addEntity(phone, { collection: 'phones' }));
        store._snackBar.open('Phone saved', 'OK');
      },
      onError(error: unknown) {
        store._snackBar.open('Error saving phone!', 'OK');
        console.error(error);
      },
    }),
    deletePhone: store._phoneService.createDeleteMutation({
      onSuccess(result: { id: string }) {
        patchState(store, removeEntity(result.id, { collection: 'phones' }));
        store._snackBar.open('Phone deleted', 'OK');
      },
      onError(error: unknown) {
        store._snackBar.open('Error deleting phone!', 'OK');
        console.error(error);
      },
    }),

  })),
  withDevtools('PhoneStore'),
  withUndoRedo({ collections: ['phones'] }),
  withComputed((store) => {
    const { selection, isAllSelected } = buildSelectionComputed<Phone>(store, 'phonesEntityMap');
    return {
      ownerIdOrDefault: computed(() => store.filter().ownerId ?? ''),
      phoneEntities: computed(() => store.phonesEntities()),

      isLoading: computed(() => store.phonesIsLoading()),
      hasError: computed(() => !!store.phonesError()),

      phoneCount: computed(() => store.phonesIds().length),

      selection,
      isAllSelected,
    };
  }),
);

