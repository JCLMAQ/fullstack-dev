import { Component, input } from '@angular/core';
import { UserReview } from '../../../models/user-review';
import { StarRating } from '../../../components/star-rating/star-rating';
import { DatePipe } from '@angular/common';
import { ViewPanel } from '../../../directives/view-panel';

@Component({
  selector: 'lib-shop-view-review-item',
  imports: [StarRating, DatePipe, ViewPanel],
  template: `
    <div libShopViewPanel>
      <div class="flex items-start gap-4">
        <img
          [src]="review().userImageUrl"
          [alt]="review().userName"
          class="w-10 h-10 rounded-full"
        />
        <div>
          <div class="text-lg font-semibold">{{ review().userName }}</div>
          <div class="flex items-center mb-1">
            <lib-shop-star-rating [rating]="review().rating" />
            <div class="text-sm text-[var(--mat-sys-on-surface-variant)]">
              {{ review().reviewDate | date: 'MMM d, yyyy' }}
            </div>
          </div>
          <div class="text-base font-semibold mb-1">{{ review().title }}</div>
          <div class="text-sm text-[var(--mat-sys-on-surface-variant)]">
            {{ review().comment }}
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class ViewReviewItem {
  review = input.required<UserReview>();
}
