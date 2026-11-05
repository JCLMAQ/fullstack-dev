import { Component, inject, input, signal } from '@angular/core';
import { ViewReviewItem } from '../view-review-item/view-review-item';
import { RatingSummary } from '../rating-summary/rating-summary';
import { Product } from '../../../models/product';
import { WriteReview } from '../write-review/write-review';
import { MatButton } from '@angular/material/button';
import { EcommerceStore } from '../../../ecommerce-store';
import { ViewPanel } from '../../../directives/view-panel';

@Component({
  selector: 'lib-shop-view-reviews',
  imports: [ViewReviewItem, RatingSummary, WriteReview, MatButton, ViewPanel],
  template: `
    <div libShopViewPanel>
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-semibold">Customer Reviews</h2>
        @if (store.user()) {
          <button
            matButton="filled"
            (click)="showWriteReview.set(!showWriteReview())"
          >
            Write a Review
          </button>
        }
      </div>

      @if (showWriteReview()) {
        <lib-shop-write-review
          [(showWriteReview)]="showWriteReview"
          class="mb-6"
        />
      }

      <lib-shop-rating-summary [product]="product()" />

      <div class="flex flex-col gap-6">
        @for (review of product().reviews; track review.id) {
          <lib-shop-view-review-item [review]="review" />
        }
      </div>
    </div>
  `,
  styles: ``,
})
export class ViewReviews {
  product = input.required<Product>();

  store = inject(EcommerceStore);

  showWriteReview = signal(false);
}
