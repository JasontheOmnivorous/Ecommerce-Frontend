import { BaseOptions } from "./app";
import { CartItem } from "./cart";

export interface OrderSlice {
  items: CartItem[];
  isOrdered: boolean;
  isLoading: boolean;
  error: Error | null;
}

export interface CreateOrderOptions extends BaseOptions {
  orderItems: CartItem[];
  totalPrice: number;
}
