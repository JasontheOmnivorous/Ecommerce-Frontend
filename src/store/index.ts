import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import orderReducer from "./slices/orderSlice";
import productReducer from "./slices/productSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    order: orderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
