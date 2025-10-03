export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'Hats' | 'Bags' | 'Accessories';
  description: string;
  image: string;
  inStock: boolean;
  featured?: boolean;
  rating?: number;
  reviewCount?: number;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export interface Rating {
  productId: string;
  rating: number;
  count: number;
}
