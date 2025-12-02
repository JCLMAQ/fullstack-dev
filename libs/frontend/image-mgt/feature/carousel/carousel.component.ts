import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CarouselFeature } from '../../feature/carousel/carousel.feature';

@Component({
  selector: 'carousel',
  template: `
    @if (feature.isCarousel()) {
      <div>Mode carrousel activé</div>
    }
    <ul>
      @for (img of feature.images(); track img.id) {
        <li>{{ img.title }}</li>
      }
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent {
  readonly feature = inject(CarouselFeature);
}
