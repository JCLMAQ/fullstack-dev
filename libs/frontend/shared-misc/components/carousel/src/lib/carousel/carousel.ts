import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    DestroyRef,
    effect,
    inject,
    input,
    output,
    resource,
    signal,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslateModule } from '@ngx-translate/core';
import type { Image } from '@db/prisma';
import { IamAuth } from '@fe/auth';
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
    TranslateModule,
  ],
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Carousel {
  private readonly imageService = inject(ImageService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly authService = inject(IamAuth);

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
  private readonly loadTrigger = signal(0);

  readonly imagesResource = resource({
    loader: async ({ abortSignal }) => {
      this.loadTrigger();

      if (abortSignal.aborted) {
        throw new Error('Operation aborted');
      }

      const filters = this.filterParams();
      const tagsList = this.tags();
      const assocType = this.associationType();
      const assocId = this.associatedId();
      const isLoggedIn = this.authService.isLoggedIn();

      const params: SearchImagesDto = {
        ...filters,
        take: this.config().maxImages || 10,
        // Si l'utilisateur est connecté, on affiche toutes les images (publiques et privées)
        // Si l'utilisateur n'est pas connecté, on affiche uniquement les images publiques
        isPublic: isLoggedIn ? undefined : true,
      };

      if (assocType) params.associationType = assocType;
      if (assocId) params.associatedId = assocId;

      try {
        const images = tagsList.length > 0
          ? await this.imageService.getImagesByTags(tagsList, params).toPromise()
          : await this.imageService.getImages(params).toPromise();
        return images || [];
      } catch (err) {
        if (err instanceof Error) {
          throw err;
        }
        const errorObj = err as { status?: number; message?: string; statusText?: string };

        // Message d'erreur spécifique pour 401
        if (errorObj.status === 401) {
          console.error('❌ 401 Unauthorized: Authentication required to load images');
          throw new Error('Authentication required. Please log in to view images.');
        }

        throw new Error(errorObj.message || errorObj.statusText || `HTTP Error ${errorObj.status || 'Unknown'}`);
      }
    }
  });

  readonly currentIndex = signal<number>(0);
  readonly isPlaying = signal<boolean>(false);

  // Computed
  readonly images = computed(() => this.imagesResource.value() ?? []);
  readonly loading = computed(() => this.imagesResource.isLoading());
  readonly error = computed(() => {
    const err = this.imagesResource.error();
    return err ? err.message : null;
  });

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
    // Nettoyage lors de la destruction
    this.destroyRef.onDestroy(() => {
      this.stopAutoPlay();
    });

    // Effect pour recharger quand les inputs changent ou l'état d'authentification change
    effect(
      () => {
        // Lire tous les inputs pour créer des dépendances
        this.filterParams();
        this.tags();
        this.associationType();
        this.associatedId();
        void this.config().maxImages;
        // Surveiller l'état de connexion pour recharger les images
        this.authService.isLoggedIn();

        // Déclencher le rechargement
        this.loadTrigger.update(v => v + 1);
      }
    );

    // Effect pour démarrer l'autoplay quand les images sont chargées
    effect(
      () => {
        const imgs = this.images();
        if (imgs.length > 0 && this.config().autoPlay && !this.loading()) {
          this.isPlaying.set(true);
        }
      }
    );

    // Effect pour l'autoplay
    effect(
      () => {
        if (this.isPlaying() && this.config().autoPlay) {
          this.startAutoPlay();
        } else {
          this.stopAutoPlay();
        }
      }
    );
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
    this.loadTrigger.update(v => v + 1);
  }
}
