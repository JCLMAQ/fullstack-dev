import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { EcommerceStore } from './ecommerce-store';
import { ShopSession } from './services/shop-session';
import { Toaster } from './services/toaster';
import { User } from './models/user';

const customer: User = {
  id: '1',
  email: 'customer@example.test',
  name: 'Customer',
  imageUrl: '',
};

describe('Shop store', () => {
  const user = signal<User | undefined>(undefined);
  const navigate = jest.fn();
  let store: InstanceType<typeof EcommerceStore>;
  beforeEach(() => {
    user.set(undefined);
    navigate.mockClear();
    TestBed.configureTestingModule({
      providers: [
        EcommerceStore,
        { provide: ShopSession, useValue: { user } },
        {
          provide: Toaster,
          useValue: { success: jest.fn(), error: jest.fn() },
        },
        { provide: Router, useValue: { navigate } },
      ],
    });
    store = TestBed.inject(EcommerceStore);
    TestBed.tick();
  });

  it('filters the catalog by category and search query', () => {
    store.setParams({ category: 'electronics', searchTerm: 'camera' });
    expect(store.filteredProducts().map((p) => p.name)).toEqual([
      'Professional Camera',
    ]);
  });

  it('updates quantity and totals without mutating the catalog', () => {
    const product = store.products()[0];
    store.addToCart(product, 2);
    store.addToCart(product);
    expect(store.itemCount()).toBe(3);
    expect(store.total()).toBeCloseTo(product.price * 3);
    store.setItemQuantity({ productId: product.id, quantity: 4 });
    expect(store.itemCount()).toBe(4);
    store.setItemQuantity({ productId: product.id, quantity: -1 });
    store.setItemQuantity({ productId: 'missing', quantity: 2 });
    expect(store.itemCount()).toBe(4);
    expect(store.products()[0]).toBe(product);
  });

  it('rejects out-of-stock items and invalid quantities', () => {
    store.addToCart(store.products().find((p) => !p.inStock)!);
    store.addToCart(store.products()[0], 0);
    expect(store.itemCount()).toBe(0);
  });

  it('moves items between favorites and cart without duplicates', () => {
    const product = store.products()[0];
    store.addToWishlist(product);
    store.addToWishlist(product);
    expect(store.wishlistCount()).toBe(1);
    store.moveToCart(product);
    expect(store.wishlistCount()).toBe(0);
    expect(store.itemCount()).toBe(1);
    store.moveToWishlist(product);
    expect(store.itemCount()).toBe(0);
    expect(store.wishlistCount()).toBe(1);
  });

  it('uses the host identity and clears private shop state on logout', () => {
    user.set(customer);
    TestBed.tick();
    expect(store.user()).toBe(customer);
    store.addToCart(store.products()[0]);
    store.addToWishlist(store.products()[1]);
    user.set(undefined);
    TestBed.tick();
    expect(store.itemCount()).toBe(0);
    expect(store.wishlistCount()).toBe(0);
    expect(store.orders()).toEqual([]);
  });

  it('requires a host user and nonempty cart before placing an order', async () => {
    store.addToCart(store.products()[0]);
    await store.placeOrder();
    expect(store.orders()).toEqual([]);
    expect(navigate).not.toHaveBeenCalled();
  });

  it('creates a demo order and stays within the shop routes', async () => {
    jest.useFakeTimers();
    try {
      user.set(customer);
      TestBed.tick();
      store.addToCart(store.products()[0]);
      const placing = store.placeOrder();
      await jest.runAllTimersAsync();
      await placing;
      expect(store.orders()).toHaveLength(1);
      expect(store.orders()[0].userId).toBe(customer.id);
      expect(store.itemCount()).toBe(0);
      expect(navigate).toHaveBeenCalledWith(['/shop/order-success']);
    } finally {
      jest.useRealTimers();
    }
  });

  it('cancels a pending demo order when the user logs out', async () => {
    jest.useFakeTimers();
    try {
      user.set(customer);
      TestBed.tick();
      store.addToCart(store.products()[0]);
      const placing = store.placeOrder();
      user.set(undefined);
      TestBed.tick();
      await jest.runAllTimersAsync();
      await placing;
      expect(store.orders()).toEqual([]);
      expect(navigate).not.toHaveBeenCalled();
    } finally {
      jest.useRealTimers();
    }
  });
});
