import { inject } from '@angular/core';
import { CanActivateFn, Router, Routes } from '@angular/router';
import { EcommerceStore } from './ecommerce-store';
import { ResponsiveManager } from './services/responsive-manager';
import { ShopSession } from './services/shop-session';
import { Toaster } from './services/toaster';
import { Shop } from './shop/shop';

const checkoutGuard: CanActivateFn = () => {
  const store = inject(EcommerceStore);
  const router = inject(Router);
  if (!store.user()) return router.createUrlTree(['/auth/login']);
  return store.itemCount() > 0 || router.createUrlTree(['/shop/cart']);
};

export const shopRoutes: Routes = [
  {
    path: '',
    component: Shop,
    providers: [EcommerceStore, ShopSession, Toaster, ResponsiveManager],
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'products/all' },
      {
        path: 'products/:categoryName',
        loadComponent: () => import('./pages/products-grid/products-grid'),
      },
      {
        path: 'product/:productId',
        loadComponent: () =>
          import('./pages/view-product-detail/view-product-detail'),
      },
      {
        path: 'wishlist',
        loadComponent: () => import('./pages/my-wishlist/my-wishlist'),
      },
      {
        path: 'cart',
        loadComponent: () => import('./pages/view-cart/view-cart'),
      },
      {
        path: 'checkout',
        canActivate: [checkoutGuard],
        loadComponent: () => import('./pages/checkout/checkout'),
      },
      {
        path: 'order-success',
        loadComponent: () => import('./pages/order-success/order-success'),
      },
      { path: '**', redirectTo: 'products/all' },
    ],
  },
];
