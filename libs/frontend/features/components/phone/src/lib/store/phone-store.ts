import { withDevtools, withMutations, withUndoRedo } from "@angular-architects/ngrx-toolkit";
import { computed, inject } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Phone } from "@db/prisma";
import { buildSelectionComputed, withNavigationMethods, withSelectionMethods } from "@fe/stores";
import { patchState, signalStore, type, withComputed, withMethods, withProps, withState } from '@ngrx/signals';
import { addEntity, entityConfig, removeEntity, setAllEntities, withEntities } from "@ngrx/signals/entities";
import { PhoneService } from "../services/phone-service";
import { initialPhoneState } from "./phone-slice";

const phoneConfig = entityConfig({
  entity: type<Phone>(),
  collection: 'phone',
  selectId: (phone: Phone) => phone.id,
});

export const PhoneStore = signalStore (
  { providedIn: 'root' },
  withState(initialPhoneState),
  withEntities(phoneConfig),
  withSelectionMethods<Phone>({ collection: 'phone' }),
  withNavigationMethods(),
  withProps(() => ({
      _phoneService: inject(PhoneService),
      _snackBar: inject(MatSnackBar),
    })),

  withComputed((store) => ({
    ownerIdOrDefault: computed(() => store.filter.ownerId() ?? ''),
  })),

  withMethods((store) => ({
    async loadAllPhones() {
      try {
        patchState(store, { loading: true, error: null });
        const phones = await store._phoneService.getAllPhones();
        patchState(store, setAllEntities(phones, phoneConfig), { loading: false });
      } catch (error) {
        patchState(store, { loading: false, error: 'Erreur lors du chargement des téléphones' });
        console.error('Error loading phones:', error);
      }
    },

    async loadPhonesByUserId(userId: string) {
      try {
        patchState(store, { loading: true, error: null });
        const phones = await store._phoneService.getPhonesByUserId(userId);
        patchState(store, setAllEntities(phones, phoneConfig), { loading: false });
      } catch (error) {
        patchState(store, { loading: false, error: 'Erreur lors du chargement des téléphones' });
        console.error('Error loading phones:', error);
      }
    },

    setOwnerId(ownerId: string) {
      patchState(store, { filter: { ownerId } });
    },
  })),

  withMutations((store) => ({
    savePhone: store._phoneService.createSaveMutation({
      onSuccess(phone: Phone) {
        // Ajoute ou met à jour l'entité Phone dans le store via withEntities
        patchState(store, addEntity(phone, phoneConfig));
        store._snackBar.open('Phone saved', 'OK');
      },
      onError(error: unknown) {
        store._snackBar.open('Error saving phone!', 'OK');
        console.error(error);
      },
    }),
    deletePhone: store._phoneService.createDeleteMutation({
      onSuccess(result: { id: string }) {
        patchState(store, removeEntity(result.id, phoneConfig));
        store._snackBar.open('Phone deleted', 'OK');
      },
      onError(error: unknown) {
        store._snackBar.open('Error deleting phone!', 'OK');
        console.error(error);
      },
    }),

  })),
  withDevtools('PhoneStore'),
  withUndoRedo({collections: ['phone'],}),
  withComputed((store) => {
      const { selection, isAllSelected } = buildSelectionComputed<Phone>(store, 'phoneEntityMap');
      return {
        // Conversion des entités en tableau pour la compatibilité
        phoneEntities: computed(() => Object.values(store.phoneEntityMap())),

        isLoading: computed(() => store.loading()),
        hasError: computed(() => !!store.error()),

        phoneCount: computed(() => Object.keys(store.phoneEntityMap()).length),

        selection,
        isAllSelected,
      };
    }),

    /*
      import { updateEntity } from '@ngrx/signals/entities';
      // Pour mettre à jour un phone existant (par exemple après une mutation update)
      patchState(store, updateEntity(
        { id: phone.id, changes: { ...tesChangements } },
        phoneConfig
      ));

      // Pour supprimer un phone par son id
      patchState(store, removeEntity(phoneId, phoneConfig));
    */

)

