export interface Product extends CreateProductPayload {
  id: number;
  isArchived: boolean;
}

export interface CreateProductPayload {
  name: string;
  price: string;
  coverImage: string;
  description: string;
}

export interface InitialProductState {
  items: Product[];
  isLoading: boolean;
  error: Error | null;
}
