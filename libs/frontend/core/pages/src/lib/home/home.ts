import { Component, computed, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { IamAuth } from '@fe/auth';
import { Carousel, type ICarouselConfig } from '@fe/carousel';
import { Layout } from '@fe/layout';

@Component({
  selector: 'lib-home',
  imports: [Carousel, MatButtonModule, MatIconModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private layout = inject(Layout, { optional: true });
  private readonly authService = inject(IamAuth);

  readonly isLoggedIn = computed(() => this.authService.isLoggedIn());

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

  onImageClick(image: any): void {
    console.log('Image clicked:', image);
    this.openImageManager();
  }

  openImageManager(): void {
    if (this.layout) {
      this.layout.toggleRightDrawer();
    }
  }
}
