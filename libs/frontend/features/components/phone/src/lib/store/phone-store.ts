import { withDevtools, withMutations, withResource, withUndoRedo } from "@angular-architects/ngrx-toolkit";
import { computed, inject } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Phone } from "@db/prisma";
import { buildSelectionComputed, withNavigationMethods, withSelectionMethods } from "@fe/stores";
import { patchState, signalStore, type, withComputed, withProps, withState } from '@ngrx/signals';
import { addEntity, entityConfig, withEntities } from "@ngrx/signals/entities";
import { PhoneService } from "../services/phone-service";
import { initialPhoneState } from "./phone-slice";

const phoneConfig = entityConfig({
  entity: type<Phone>(),
  collection: 'phone',
  selectId: (phone: Phone) => phone.id,
});

export const PhoneStore = signalStore (
  withState(initialPhoneState),
  withEntities(phoneConfig),
  withSelectionMethods<Phone>({ collection: 'phone' }),
  withNavigationMethods(),
  withProps(() => ({
      _phoneService: inject(PhoneService),
      _snackBar: inject(MatSnackBar),
    })),
  withResource((store) => ({
      phones: store._phoneService.getPhonesByUserId(store.filter.ownerId ?? '' as string)
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
  })),
  withDevtools('PhoneStore'),
  withUndoRedo({collections: ['phone'],}),
  withComputed((store) => {
      const { selection, isAllSelected } = buildSelectionComputed<Phone>(store, 'phoneEntityMap');
      return {
        // Conversion des entités en tableau pour la compatibilité
        users: computed(() => Object.values(store.phoneEntityMap())),

        isLoading: computed(() => store.loading()),
        hasError: computed(() => !!store.error()),

        phoneCount: computed(() => Object.keys(store.phoneEntityMap()).length),

        selection,
        isAllSelected,
      };
    }),


)

