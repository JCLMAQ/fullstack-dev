import {
  Component,
  ChangeDetectionStrategy,
  input,
  computed,
} from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'lib-shop-star-rating',
  imports: [MatIcon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="flex items-center">
      <div class="flex items-center mr-2">
        @for (star of starArray(); track $index) {
          <mat-icon
            class="!text-lg"
            [inline]="true"
            [class]="star ? '!text-yellow-400' : '!text-gray-300'"
          >
            star
          </mat-icon>
        }
      </div>

      <span class="text-sm text-[var(--mat-sys-on-surface-variant)]">
        <ng-content></ng-content>
      </span>
    </div>
  `,
})
export class StarRating {
  rating = input.required<number>();

  starArray = computed(() => {
    const fullStars = Math.floor(this.rating());
    return Array(5)
      .fill(false)
      .map((_, index) => index < fullStars);
  });
}
