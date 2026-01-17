import { Component, signal } from '@angular/core';
import type { Image } from '@db/prisma/browser';
import { CarouselConfig } from '@fe/carousel';

@Component({
  selector: 'lib-carousel-page',
  imports: [CarouselConfig],
  templateUrl: './carousel-page.html',
  styleUrl: './carousel-page.scss',
})
export class CarouselPage {
  readonly currentCarouselImages = signal<Image[]>([]);

  onCarouselImagesSave(selectedImages: Image[]): void {
    this.currentCarouselImages.set(selectedImages);
    console.log('Images sélectionnées:', selectedImages);
  }

  onCarouselCancel(): void {
    console.log('Configuration annulée');
  }
}
