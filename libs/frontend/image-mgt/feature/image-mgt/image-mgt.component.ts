import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ImageMgtFeature } from '../../feature/image-mgt/image-mgt.feature';

@Component({
  selector: 'image-mgt',
  template: `
    @if (feature.loading()) {
      <div>Chargement...</div>
    }
    @if (feature.error()) {
      <div>Erreur: {{ feature.error() }}</div>
    }
    <ul>
      @for (img of feature.images(); track img.id) {
        <li>{{ img.title }}</li>
      }
    </ul>
    <button (click)="feature.clear()">Vider</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageMgtComponent {
  readonly feature = inject(ImageMgtFeature);
}
