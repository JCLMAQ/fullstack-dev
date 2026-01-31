import { withEntityResources, withMutations } from "@angular-architects/ngrx-toolkit";
import { inject } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { signalStore, withHooks, withProps, withState } from "@ngrx/signals";
import { TranslationApiService } from "../services";
import { initialPhoneState } from "./dictionary-slice";


export const DictionaryStore = signalStore(
  // { providedIn: 'root' },
  withState(initialPhoneState),
  withProps(() => ({
    _translationService: inject(TranslationApiService),
    _snackBar: inject(MatSnackBar),
  })),

  withEntityResources((store) => ({
    // translations: resource({
    //   loader: async () => {
    //     return store._translationService.getAllResource();
    //   },
    //   defaultValue: [],
    // }),
  })),

  // withSelectionMethods<Translation>({ collection: 'translations' }),
  // withNavigationMethods(),

  withHooks((store) => ({
    onInit() {
      // store._translationsReload();
    },
  })),

  withMutations((store) => ({
    // saveTranslation: store._translationService.createSaveMutation({
    //   onSuccess(translation: Translation) {
    //     patchState(store, addEntity(translation, { collection: 'translations' }));
    //     store._snackBar.open('Translation saved', 'OK');
    //   },
    //   onError(error: unknown) {
    //     store._snackBar.open('Error saving translation!', 'OK');
    //     console.error(error);
    //   },
    // }),
  }))
);
