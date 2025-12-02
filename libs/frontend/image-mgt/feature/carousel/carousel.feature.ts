import { inject } from '@angular/core';
import { ImageStore } from '../../data/image-store/image-store';

export class CarouselFeature {
  readonly imageStore = inject(ImageStore);

  readonly images = this.imageStore.imagesEntities;
  readonly isCarousel = this.imageStore.isCarousel;
  readonly isPublic = this.imageStore.isPublic;

  setCarousel(isCarousel: boolean) {
    this.imageStore.setCarousel(isCarousel);
  }

  setPublic(isPublic: boolean) {
    this.imageStore.setPublic(isPublic);
  }
}
