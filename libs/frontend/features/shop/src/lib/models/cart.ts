import { Product } from './product';

export type CartItem = {
  product: Product;
  quantity: number;
};

export type ItemQuantityParams = {
  productId: string;
  quantity: number;
};
