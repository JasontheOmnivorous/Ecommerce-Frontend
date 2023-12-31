import { Product } from "./product";

export interface CartItem extends Product {
  quantity: number;
}

export interface CartSlice {
  items: CartItem[];
  isLoading: boolean;
  error: Error | null;
}
