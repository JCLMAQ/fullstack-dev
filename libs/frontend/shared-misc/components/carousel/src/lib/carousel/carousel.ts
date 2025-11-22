import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  input,
  output,
  signal,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import type { Image } from '@db/prisma';
import { ImageService, SearchImagesDto } from '@fe/image-mgt';

export interface ICarouselConfig {
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showThumbnails?: boolean;
  showIndicators?: boolean;
  showControls?: boolean;
  loop?: boolean;
  aspectRatio?: string;
  maxImages?: number;
}

@Component({
  selector: 'lib-carousel',
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatChipsModule,
  ],
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Carousel {
  private readonly imageService = inject(ImageService);

  // Inputs
  readonly config = input<ICarouselConfig>({
    autoPlay: false,
    autoPlayInterval: 5000,
    showThumbnails: true,
    showIndicators: true,
    showControls: true,
    loop: true,
    aspectRatio: '16/9',
    maxImages: 10,
  });

  readonly filterParams = input<SearchImagesDto>({
    isPublic: true,
    take: 10,
    orderBy: 'createdAt',
  });

  readonly tags = input<string[]>([]);
  readonly associationType = input<string | undefined>();
  readonly associatedId = input<string | undefined>();

  // Outputs
  readonly imageClick = output<Image>();
  readonly slideChange = output<number>();

  // State
  readonly images = signal<Image[]>([]);
  readonly loading = signal<boolean>(false);
  readonly currentIndex = signal<number>(0);
  readonly isPlaying = signal<boolean>(false);
  readonly error = signal<string | null>(null);

  // Computed
  readonly currentImage = computed(() => {
    const imgs = this.images();
    const index = this.currentIndex();
    return imgs[index] || null;
  });

  readonly hasImages = computed(() => this.images().length > 0);
  readonly hasPrevious = computed(
    () => this.currentIndex() > 0 || this.config().loop === true
  );
  readonly hasNext = computed(() => {
    const imgs = this.images();
    const index = this.currentIndex();
    return index < imgs.length - 1 || this.config().loop === true;
  });

  private autoPlayInterval: ReturnType<typeof setInterval> | null = null;

  constructor() {
    // Effect pour charger les images basées sur les inputs
    effect(
      () => {
        const filters = this.filterParams();
        const tagsList = this.tags();
        const assocType = this.associationType();
        const assocId = this.associatedId();

        // Construire les paramètres de recherche
        const params: SearchImagesDto = {
          ...filters,
          take: this.config().maxImages || 10,
        };

        if (assocType) params.associationType = assocType;
        if (assocId) params.associatedId = assocId;

        this.loadImages(params, tagsList);
      },
      { allowSignalWrites: true }
    );

    // Effect pour l'autoplay
    effect(
      () => {
        if (this.isPlaying() && this.config().autoPlay) {
          this.startAutoPlay();
        } else {
          this.stopAutoPlay();
        }
      },
      { allowSignalWrites: true }
    );
  }

  private loadImages(params: SearchImagesDto, tagsList: string[]): void {
    this.loading.set(true);
    this.error.set(null);

    const loadObservable =
      tagsList.length > 0
        ? this.imageService.getImagesByTags(tagsList, params)
        : this.imageService.getImages(params);

    loadObservable.subscribe({
      next: (images) => {
        this.images.set(images);
        this.loading.set(false);
        if (images.length > 0 && this.config().autoPlay) {
          this.isPlaying.set(true);
        }
      },
      error: (err) => {
        console.error('Erreur lors du chargement des images:', err);
        this.error.set('Impossible de charger les images');
        this.loading.set(false);
      },
    });
  }

  goToSlide(index: number): void {
    const imgs = this.images();
    if (index >= 0 && index < imgs.length) {
      this.currentIndex.set(index);
      this.slideChange.emit(index);
    }
  }

  nextSlide(): void {
    const imgs = this.images();
    const currentIdx = this.currentIndex();

    if (currentIdx < imgs.length - 1) {
      this.goToSlide(currentIdx + 1);
    } else if (this.config().loop) {
      this.goToSlide(0);
    }
  }

  previousSlide(): void {
    const imgs = this.images();
    const currentIdx = this.currentIndex();

    if (currentIdx > 0) {
      this.goToSlide(currentIdx - 1);
    } else if (this.config().loop) {
      this.goToSlide(imgs.length - 1);
    }
  }

  toggleAutoPlay(): void {
    this.isPlaying.update((playing) => !playing);
  }

  private startAutoPlay(): void {
    this.stopAutoPlay();
    const interval = this.config().autoPlayInterval || 5000;
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, interval);
  }

  private stopAutoPlay(): void {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }

  onImageClick(image: Image): void {
    this.imageClick.emit(image);
  }

  getImageUrl(image: Image): string {
    return this.imageService.getFullImageUrl(image);
  }

  getThumbnailUrl(image: Image): string {
    return this.imageService.getFullImageUrl(image, true);
  }

  getImageAlt(image: Image): string {
    return image.altText || image.originalName || 'Image du carousel';
  }

  refresh(): void {
    const filters = this.filterParams();
    const tagsList = this.tags();
    const assocType = this.associationType();
    const assocId = this.associatedId();

    const params: SearchImagesDto = {
      ...filters,
      take: this.config().maxImages || 10,
    };

    if (assocType) params.associationType = assocType;
    if (assocId) params.associatedId = assocId;

    this.loadImages(params, tagsList);
  }
}
