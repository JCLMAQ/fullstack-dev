import { Component, inject, input } from '@angular/core';
import { EcommerceStore } from '../../ecommerce-store';
import { Router } from '@angular/router';
import { ViewReviews } from './view-reviews/view-reviews';
import { ProductInfo } from './product-info/product-info';
import { BackButton } from '../../components/back-button/back-button';

@Component({
  selector: 'lib-shop-view-product-detail',
  imports: [ViewReviews, ProductInfo, BackButton],
  template: `
    <div class="mx-auto max-w-[1200px] py-6">
      <lib-shop-back-button class="mb-6" (backClicked)="goBack()"
        >Back to Products</lib-shop-back-button
      >

      @if (store.selectedProduct(); as product) {
        <div class="flex flex-col lg:flex-row gap-8 mb-8">
          <img
            [src]="product.imageUrl"
            [alt]="product.name"
            class="w-full lg:w-[45%] max-h-[550px] object-cover rounded-lg"
            [style.view-transition-name]="'product-image-' + product.id"
          />
          <div class="flex-1">
            <lib-shop-product-info [product]="product" />
          </div>
        </div>
        <lib-shop-view-reviews [product]="product" />
      } @else {
        <p role="status">Product not found.</p>
      }
    </div>
  `,
  styles: ``,
})
export default class ViewProductDetail {
  productId = input.required<string>();
  store = inject(EcommerceStore);
  router = inject(Router);

  constructor() {
    this.store.setProductId(this.productId);
  }

  goBack() {
    this.router.navigate([`/shop/products`, this.store.category()], {
      queryParams: this.store.searchTerm()
        ? { search: this.store.searchTerm() }
        : {},
    });
  }
}
