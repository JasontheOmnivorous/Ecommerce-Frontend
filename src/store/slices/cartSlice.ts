import { createSlice } from "@reduxjs/toolkit";
import { CartSlice } from "../../types/cart";

const initialState: CartSlice = {
  items: [],
  isLoading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isExists = state.items.find(
        (item) => item._id === action.payload._id
      );
      console.log(isExists);

      if (isExists) {
        state.items = state.items.map((item) =>
          item._id === isExists._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        state.items = [...state.items, action.payload];
      }
    },
    updateQuantity: (state, action) => {
      if (!action.payload.quantity) {
        state.items = state.items.filter(
          (item) => item._id !== action.payload._id
        );
      } else {
        state.items = state.items.map((item) =>
          item._id === action.payload._id
            ? { ...item, quantity: action.payload.quantity }
            : item
        );
      }
    },
  },
});

export const { addToCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
