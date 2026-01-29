import { inject } from "@angular/core";
import { patchState, signalStoreFeature, withMethods } from "@ngrx/signals";
import { PhoneService } from "../services/phone-service";


export const withUserMethods = signalStoreFeature(
  withMethods((store, _phoneService = inject(PhoneService)) => ({

 loadAllPhones() {
      patchState(store, { filter: { ownerId: null } });
      // store._phonesReload();
    },

    loadPhonesByUserId(userId: string) {
      patchState(store, { filter: { ownerId: userId } });
      // store._phonesReload();
    },

    setOwnerId(ownerId: string | null) {
      patchState(store, { filter: { ownerId } });
      // store._phonesReload();
    },

  }))
);
