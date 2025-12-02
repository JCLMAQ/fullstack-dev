import { inject } from '@angular/core';
import { ImageStore } from './image-store';
import { Image } from './models/image.model';

export class ImageMgtFeature {
  readonly imageStore = inject(ImageStore);

  readonly images = this.imageStore.imagesEntities;
  readonly loading = this.imageStore.loading;
  readonly error = this.imageStore.error;
  readonly isCarousel = this.imageStore.isCarousel;
  readonly isPublic = this.imageStore.isPublic;

  addImage(image: Image) {
    this.imageStore.addImage(image);
  }

  removeImage(id: string) {
    this.imageStore.removeImage(id);
  }

  setCarousel(isCarousel: boolean) {
    this.imageStore.setCarousel(isCarousel);
  }

  setPublic(isPublic: boolean) {
    this.imageStore.setPublic(isPublic);
  }

  clear() {
    this.imageStore.clear();
  }
}
