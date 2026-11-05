import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
  provideRouter,
  Router,
  withComponentInputBinding,
} from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { shopRoutes } from '../lib.routes';
import { ShopSession } from '../services/shop-session';
import { Toaster } from '../services/toaster';
import { User } from '../models/user';

@Component({ template: 'Host login' })
class HostLogin {}

describe('Embedded shop navigation', () => {
  const user = signal<User | undefined>(undefined);
  let harness: RouterTestingHarness;

  beforeEach(async () => {
    user.set(undefined);
    TestBed.configureTestingModule({
      providers: [
        provideRouter(
          [
            {
              path: 'shop',
              children: [
                {
                  ...shopRoutes[0],
                  providers: [
                    ...(shopRoutes[0].providers ?? []),
                    { provide: ShopSession, useValue: { user } },
                    {
                      provide: Toaster,
                      useValue: { success: jest.fn(), error: jest.fn() },
                    },
                  ],
                },
              ],
            },
            { path: 'auth/login', component: HostLogin },
          ],
          withComponentInputBinding(),
        ),
      ],
    });
    harness = await RouterTestingHarness.create();
  });

  it('loads the catalog at /shop and keeps product/cart links in the feature', async () => {
    await harness.navigateByUrl('/shop');
    expect(TestBed.inject(Router).url).toBe('/shop/products/all');
    const element = harness.routeNativeElement!;
    expect(element.querySelectorAll('lib-shop-product-card')).toHaveLength(12);
    const productLink = element.querySelector('lib-shop-product-card [href]');
    expect(productLink?.getAttribute('href')).toBe('/shop/product/1');
    expect(
      element
        .querySelector('[aria-label="Shopping cart"]')
        ?.getAttribute('href'),
    ).toBe('/shop/cart');
  });

  it('updates category/search inputs and opens a product directly', async () => {
    await harness.navigateByUrl('/shop/products/electronics?search=camera');
    expect(
      harness.routeNativeElement!.querySelectorAll('lib-shop-product-card'),
    ).toHaveLength(1);
    await harness.navigateByUrl('/shop/product/3');
    expect(harness.routeNativeElement!.textContent).toContain(
      'Professional Camera',
    );
    await harness.navigateByUrl('/shop/product/missing');
    expect(harness.routeNativeElement!.textContent).toContain(
      'Product not found.',
    );
  });

  it('adds a product, opens cart and redirects a guest checkout to host login', async () => {
    await harness.navigateByUrl('/shop/products/all');
    const card = harness.routeNativeElement!.querySelector(
      'lib-shop-product-card',
    )!;
    const addButton = [...card.querySelectorAll('button')].find((button) =>
      button.textContent?.includes('Add to Cart'),
    )!;
    (addButton as HTMLButtonElement).click();
    await harness.fixture.whenStable();
    await harness.navigateByUrl('/shop/cart');
    expect(harness.routeNativeElement!.textContent).toContain(
      'Wireless Noise-Cancelling Headphones',
    );
    await harness.navigateByUrl('/shop/checkout');
    expect(TestBed.inject(Router).url).toBe('/auth/login');
  });

  it('redirects signed-in users with an empty cart to cart', async () => {
    user.set({
      id: '1',
      name: 'Customer',
      email: 'customer@example.test',
      imageUrl: '',
    });
    await harness.navigateByUrl('/shop/checkout');
    expect(TestBed.inject(Router).url).toBe('/shop/cart');
  });
  it('opens checkout for a signed-in customer with a populated cart', async () => {
    user.set({
      id: '1',
      name: 'Customer',
      email: 'customer@example.test',
      imageUrl: '',
    });
    await harness.navigateByUrl('/shop/products/all');
    const button = [
      ...harness.routeNativeElement!.querySelectorAll(
        'lib-shop-product-card button',
      ),
    ].find((element) =>
      element.textContent?.includes('Add to Cart'),
    ) as HTMLButtonElement;
    button.click();
    await harness.fixture.whenStable();
    await harness.navigateByUrl('/shop/checkout');
    expect(TestBed.inject(Router).url).toBe('/shop/checkout');
    expect(harness.routeNativeElement!.textContent).toContain(
      'no payment is collected',
    );
  });
});
