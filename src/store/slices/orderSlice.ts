import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { config } from "../../config/config";
import { CreateOrderOptions, OrderSlice } from "../../types/order";

const initialState: OrderSlice = {
  items: [],
  isOrdered: false,
  isLoading: false,
  error: null,
};

export const createOrder = createAsyncThunk(
  "cart/createOrder",
  async (options: CreateOrderOptions, thunkApi) => {
    const { orderItems, totalPrice, onSuccess, onError } = options;

    try {
      const response = await fetch(`${config.apiBaseUrl}/orders`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${Cookies.get("authToken")}`,
        },
        body: JSON.stringify({ orderItems, totalPrice }),
      });
      const respondedData = await response.json();
      console.log(respondedData);
      thunkApi.dispatch(addOrderedItems(respondedData.data));
      thunkApi.dispatch(setIsOrdered(true));

      onSuccess && onSuccess();
    } catch (err) {
      onError && onError();
    }
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setIsOrdered: (state, action) => {
      state.isOrdered = action.payload;
    },
    addOrderedItems: (state, action) => {
      state.items = [...state.items, action.payload];
    },
  },
});

export const { setIsOrdered, addOrderedItems } = orderSlice.actions;
export default orderSlice.reducer;
