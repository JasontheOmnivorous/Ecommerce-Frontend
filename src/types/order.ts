import { BaseOptions } from "./app";
import { CartItem } from "./cart";

export interface OrderProduct {
  coverImage: string;
  name: string;
  price: number;
}

interface OrderUser {
  email: string;
  name: string;
  _id?: string;
}

export interface OrderType {
  isArchived: boolean;
  products: {
    product: OrderProduct;
    quantity: number;
  }[];
  totalPrice: number;
  user: OrderUser;
  _id?: string;
}

export interface OrderSlice {
  items: OrderType[];
  isOrdered: boolean;
  isLoading: boolean;
  error: Error | null;
}

export interface CreateOrderOptions extends BaseOptions {
  orderItems: CartItem[];
  totalPrice: number;
}
