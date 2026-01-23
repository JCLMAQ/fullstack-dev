import { effect } from '@angular/core';
import {
  getState,
  patchState,
  signalStoreFeature,
  SignalStoreFeature,
  withHooks,
} from '@ngrx/signals';

// Prefer withLocalStorage instead of withStorageSync for better control
export function withLocalStorage(key: string): SignalStoreFeature {
  return signalStoreFeature(
    withHooks((store) => ({
      onInit: () => {
        const stateJson = localStorage.getItem(key);
        if (stateJson) {
          const state = JSON.parse(stateJson);
          patchState(store, state);
        }

        effect(() => {
          const state = getState(store);
          const stateJson = JSON.stringify(state);
          localStorage.setItem(key, stateJson);
        });
      },
    })),
  );
}
