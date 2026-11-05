import { UserReview } from './user-review';

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  isFavorite: boolean;
  rating: number; // e.g., 4.0
  reviewCount: number;
  inStock: boolean;
  category: string;
  reviews: UserReview[];
};

export type FilterParams = {
  category: string;
  searchTerm?: string;
};
