import { Component, inject, model, signal } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { OptionItem } from '../../../models/option-item';
import { MatSelect, MatOption } from '@angular/material/select';
import { MatButton } from '@angular/material/button';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AddReviewParams } from '../../../models/user-review';
import { EcommerceStore } from '../../../ecommerce-store';
import { ViewPanel } from '../../../directives/view-panel';

@Component({
  selector: 'lib-shop-write-review',
  imports: [
    MatFormField,
    MatInput,
    MatLabel,
    MatSelect,
    MatOption,
    MatButton,
    ReactiveFormsModule,
    ViewPanel,
  ],
  template: `
    <div libShopViewPanel>
      <h2 class="text-xl font-semibold mb-6">Write a Review</h2>

      <form [formGroup]="reviewForm" (ngSubmit)="saveReview()">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <mat-form-field>
            <mat-label>Review Title</mat-label>
            <input
              formControlName="title"
              placeholder="Summarize your review"
              matInput
              type="text"
            />
          </mat-form-field>
          <mat-form-field>
            <mat-select formControlName="rating">
              @for (option of ratingOptions(); track option.value) {
                <mat-option [value]="option.value">{{
                  option.label
                }}</mat-option>
              }
            </mat-select>
          </mat-form-field>
          <mat-form-field class="col-span-2">
            <mat-label>Review</mat-label>
            <textarea
              placeholder="Tell others about your experience with this product"
              formControlName="comment"
              matInput
              type="text"
              rows="4"
            ></textarea>
          </mat-form-field>
        </div>
        <div class="flex gap-4">
          <button matButton="filled" type="submit">Submit Review</button>
          <button
            matButton="outlined"
            type="button"
            (click)="showWriteReview.set(false)"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  `,
  styles: ``,
  host: {
    class: 'block',
  },
})
export class WriteReview {
  showWriteReview = model<boolean>(false);

  fb = inject(NonNullableFormBuilder);
  store = inject(EcommerceStore);

  ratingOptions = signal<OptionItem[]>([
    { label: '5 Stars - Excellent', value: 5 },
    { label: '4 Stars - Good', value: 4 },
    { label: '3 Stars - Average', value: 3 },
    { label: '2 Stars - Poor', value: 2 },
    { label: '1 Star - Terrible', value: 1 },
  ]);

  reviewForm = this.fb.group({
    title: ['', Validators.required],
    comment: ['', Validators.required],
    rating: [5, Validators.required],
  });

  saveReview() {
    if (!this.reviewForm.valid) {
      this.reviewForm.markAllAsTouched();
      return;
    }

    const { title, comment, rating } = this.reviewForm.value;
    this.store.addReview({ title, comment, rating } as AddReviewParams);
    this.showWriteReview.set(false);
  }
}
