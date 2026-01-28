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
import type { Image } from '@db/prisma/frontend';
import { ImageService, SearchImagesDto } from '@fe/image-mgt';
import { AppStore } from '@fe/stores';
import { TranslateModule } from '@ngx-translate/core';

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
  // private readonly authService = inject(IamAuth);
  private readonly appStore = inject(AppStore);

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
      // Lire TOUTES les dépendances en PREMIER pour garantir la réactivité
      // Important : Les lire AVANT tout code async
      const triggerValue = this.loadTrigger(); // Pour refresh() manuel
      const user = this.appStore.user(); // Dépendance sur l'authentification
      const token = this.appStore.authToken(); // Dépendance sur le token
      const isLoggedIn = !!user;
      const filters = this.filterParams();
      const tagsList = this.tags();
      const assocType = this.associationType();
      const assocId = this.associatedId();
      const maxImages = this.config().maxImages;

      console.log(`🎠 Carousel loader - user=${user?.email || 'undefined'}, token=${!!token}, trigger=${triggerValue}`);

      if (abortSignal.aborted) {
        throw new Error('Operation aborted');
      }

      const params: SearchImagesDto = {
        ...filters,
        take: maxImages || 10,
        // Si l'utilisateur est connecté, on affiche toutes les images (publiques et privées)
        // Si l'utilisateur n'est pas connecté, on affiche uniquement les images publiques
        isPublic: isLoggedIn ? undefined : true,
      };

      if (assocType) params.associationType = assocType;
      if (assocId) params.associatedId = assocId;

      try {
        const images = tagsList.length > 0
          ? await this.imageService.getImagesByTags(tagsList, params)
          : await this.imageService.getImages(params);

        console.log(`🎠 Carousel loaded ${images?.length || 0} images (isLoggedIn: ${isLoggedIn}, isPublic filter: ${params.isPublic})`);
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
  readonly images = computed(() => {
    const resourceImages = this.imagesResource.value() ?? [];
    const isLoggedIn = !!this.appStore.user();

    // FILTRE DE SÉCURITÉ : Ne jamais afficher d'images privées si non connecté
    // Cela évite d'afficher temporairement les anciennes images privées pendant le rechargement
    if (!isLoggedIn) {
      return resourceImages.filter((img: Image) => img.isPublic === true);
    }

    return resourceImages;
  });
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

    // Effect pour gérer les changements d'authentification
    // Force le rechargement immédiat via loadTrigger pour éviter d'afficher
    // temporairement les anciennes images avec le mauvais état d'auth
    effect(() => {
      const user = this.appStore.user();
      const token = this.appStore.authToken();
      console.log(`🔄 Carousel - Auth changed: user=${user?.email || 'undefined'}, token=${!!token}`);

      // Réinitialiser l'UI de façon asynchrone pour éviter NG0100
      queueMicrotask(() => {
        this.isPlaying.set(false);
        this.currentIndex.set(0);
        this.loadTrigger.update(v => v + 1);
      });
    });

    // Effect pour réinitialiser l'index quand les images changent
    effect(
      () => {
        const imgs = this.images();
        const currentIdx = this.currentIndex();
        // Si l'index actuel est supérieur au nombre d'images, réinitialiser à 0
        if (currentIdx >= imgs.length && imgs.length > 0) {
          this.currentIndex.set(0);
        } else if (imgs.length === 0) {
          this.currentIndex.set(0);
        }
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

  readonly currentImageUrl = computed(() => {
    const image = this.currentImage();
    return image ? this.getImageUrl(image) : '/assets/images/placeholder.png';
  });

  getThumbnailUrl(image: Image): string {
    return this.imageService.getFullImageUrl(image, true);
  }

  getImageAlt(image: Image): string {
    return image.altText || image.originalName || 'Image du carousel';
  }

  refresh(): void {
    this.loadTrigger.update(v => v + 1);
  }

  onImageError(event: Event): void {
    // Une image ne peut pas être chargée
    const img = event.target as HTMLImageElement;
    console.warn('⚠️ Image loading error:', img.src);
  }
}
