import { inject } from "@angular/core";
import { signalStoreFeature, withMethods } from "@ngrx/signals";
import { PhoneService } from "../services/phone-service";


export const withUserMethods = signalStoreFeature(
  withMethods((store, _phoneService = inject(PhoneService)) => ({



  }))
);
