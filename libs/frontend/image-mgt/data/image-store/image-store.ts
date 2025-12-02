
import { patchState, signalStore, type, withMethods, withState } from '@ngrx/signals';
import { addEntity, entityConfig, removeEntity, setAllEntities, withEntities } from '@ngrx/signals/entities';
import { Image } from '../models/image.model';


export interface ImageStoreState {
  loading: boolean;
  error: string | null;
  isCarousel: boolean;
  isPublic: boolean;
}


const imageEntityConfig = entityConfig({
  entity: type<Image>(),
  collection: 'images',
  selectId: (image: Image) => image.id,
});

export const ImageStore = signalStore(
  { providedIn: 'root' },
  withState<ImageStoreState>({
    loading: false,
    error: null,
    isCarousel: false,
    isPublic: false,
  }),
  withEntities(imageEntityConfig),
  withMethods((store) => ({
    setLoading(loading: boolean) {
      patchState(store, { loading });
    },
    setError(error: string | null) {
      patchState(store, { error, loading: false });
    },
    setCarousel(isCarousel: boolean) {
      patchState(store, { isCarousel });
    },
    setPublic(isPublic: boolean) {
      patchState(store, { isPublic });
    },
    clear() {
      patchState(store, {
        loading: false,
        error: null,
        isCarousel: false,
        isPublic: false,
      });
      patchState(store, removeAllEntities({ collection: 'images' }));
    },
    setImages(images: Image[]) {
      patchState(store, setAllEntities(images, imageEntityConfig));
      patchState(store, { loading: false, error: null });
    },
    addImage(image: Image) {
      patchState(store, addEntity(image, imageEntityConfig));
    },
    removeImage(id: string) {
      patchState(store, removeEntity(id, imageEntityConfig));
    },
  }))
);
