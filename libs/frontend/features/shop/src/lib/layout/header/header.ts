import { Component, inject } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { EcommerceStore } from '../../ecommerce-store';
import { ResponsiveManager } from '../../services/responsive-manager';
import { SearchBar } from '../search-bar/search-bar';
import { HeaderActions } from '../header-actions/header-actions';

@Component({
  selector: 'lib-shop-header',
  imports: [MatToolbar, MatIcon, MatIconButton, SearchBar, HeaderActions],
  template: `
    <mat-toolbar class="w-full elevated py-2">
      <div
        class="max-w-[1200px] mx-auto w-full flex flex-wrap gap-3 items-center justify-between"
      >
        <div class="flex items-center gap-2">
          <button
            matIconButton
            aria-label="Product categories"
            (click)="responsiveManager.toggleSideNav()"
          >
            <mat-icon>menu</mat-icon>
          </button>
          <span>Boutique</span>
        </div>
        <lib-shop-search-bar />
        <lib-shop-header-actions />
      </div>
    </mat-toolbar>
  `,
  host: {
    class: 'relative z-10 view-transition-name:header',
  },
  styles: ``,
})
export class Header {
  protected store = inject(EcommerceStore);
  responsiveManager = inject(ResponsiveManager);
}
