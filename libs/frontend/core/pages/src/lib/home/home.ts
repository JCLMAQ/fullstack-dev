import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import type { Image } from '@db/prisma/browser';
import { Carousel, type ICarouselConfig } from '@fe/carousel';

@Component({
  selector: 'lib-home',
  imports: [Carousel, MatButtonModule, MatIconModule, TranslateModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  carouselConfig: ICarouselConfig = {
    autoPlay: true,
    autoPlayInterval: 5000,
    showThumbnails: true,
    showIndicators: true,
    showControls: true,
    loop: true,
    aspectRatio: '16/9',
  };

  onSlideChange(index: number): void {
    console.log('Slide changed to:', index);
  }

  onImageClick(image: Image): void {
    console.log('Image clicked:', image);
  }
}
