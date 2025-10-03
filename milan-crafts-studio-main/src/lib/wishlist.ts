const WISHLIST_STORAGE_KEY = 'milanCrochetWishlist';

export class WishlistManager {
  private productIds: Set<string> = new Set();
  private listeners: Set<() => void> = new Set();

  constructor() {
    this.loadWishlist();
  }

  private loadWishlist() {
    try {
      const stored = localStorage.getItem(WISHLIST_STORAGE_KEY);
      this.productIds = stored ? new Set(JSON.parse(stored)) : new Set();
    } catch (error) {
      console.error('Failed to load wishlist:', error);
      this.productIds = new Set();
    }
  }

  private saveWishlist() {
    try {
      localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify([...this.productIds]));
      this.notifyListeners();
    } catch (error) {
      console.error('Failed to save wishlist:', error);
    }
  }

  private notifyListeners() {
    this.listeners.forEach(listener => listener());
  }

  subscribe(listener: () => void) {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  toggle(productId: string) {
    if (this.productIds.has(productId)) {
      this.productIds.delete(productId);
    } else {
      this.productIds.add(productId);
    }
    this.saveWishlist();
  }

  isInWishlist(productId: string): boolean {
    return this.productIds.has(productId);
  }

  getCount(): number {
    return this.productIds.size;
  }

  getProductIds(): string[] {
    return [...this.productIds];
  }
}

export const wishlistManager = new WishlistManager();
