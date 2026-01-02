import { Component, input, model } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'lib-star-rating',
  imports: [MatIconModule],
  templateUrl: './star-rating.html',
  styleUrl: './star-rating.scss',
})
export class StarRating {
  value = model(0);
  disabled = input(false);
  required = input(false);

  stars = [1, 2, 3, 4, 5];
  hoverRating = 0;

  setRating(rating: number) {
    if (!this.disabled()) {
      this.value.set(rating);
    }
  }
}
