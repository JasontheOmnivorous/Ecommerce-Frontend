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

export const getOrders = createAsyncThunk(
  "cart/getOrders",
  async (_, thunkApi) => {
    const response = await fetch(`${config.apiBaseUrl}/orders`, {
      headers: {
        authorization: `Bearer ${Cookies.get("authToken")}`,
      },
    });
    const respondedOrders = await response.json();
    thunkApi.dispatch(setOrderdItems(respondedOrders.orders));
  }
);

export const createOrder = createAsyncThunk(
  "order/createOrder",
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
      console.log("in slice: ", respondedData.newOrder);
      thunkApi.dispatch(addOrderedItems(respondedData.newOrder));
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
    setOrderdItems: (state, action) => {
      state.items = action.payload;
    },
    addOrderedItems: (state, action) => {
      state.items = [...state.items, action.payload];
    },
  },
});

export const { setIsOrdered, setOrderdItems, addOrderedItems } =
  orderSlice.actions;
export default orderSlice.reducer;
