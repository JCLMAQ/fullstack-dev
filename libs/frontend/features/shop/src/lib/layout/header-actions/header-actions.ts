import { Component, inject } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatBadge } from '@angular/material/badge';
import { RouterLink } from '@angular/router';
import { EcommerceStore } from '../../ecommerce-store';

@Component({
  selector: 'lib-shop-header-actions',
  imports: [MatButton, MatIconButton, MatIcon, MatBadge, RouterLink],
  template: `
    <div class="flex items-center gap-2">
      <a
        matIconButton
        routerLink="/shop/wishlist"
        aria-label="Wishlist"
        [matBadge]="store.wishlistCount()"
        [matBadgeHidden]="store.wishlistCount() === 0"
      >
        <mat-icon>favorite</mat-icon>
      </a>
      <a
        matIconButton
        routerLink="/shop/cart"
        aria-label="Shopping cart"
        [matBadge]="store.itemCount()"
        [matBadgeHidden]="store.itemCount() === 0"
      >
        <mat-icon>shopping_cart</mat-icon>
      </a>
      @if (store.user(); as user) {
        <span class="hidden md:inline text-sm">{{ user.name }}</span>
      } @else {
        <a matButton routerLink="/auth/login">Connexion</a>
      }
    </div>
  `,
})
export class HeaderActions {
  readonly store = inject(EcommerceStore);
}
