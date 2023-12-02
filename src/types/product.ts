export interface Product extends CreateProductPayload {
  _id: string;
}

export interface CreateProductPayload {
  name: string;
  price: number;
  coverImage?: string;
  description: string;
}

export interface InitialProductState {
  items: Product[];
  isLoading: boolean;
  error: Error | null;
}
