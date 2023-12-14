import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { config } from "../../config/config";
import { InitialProductState } from "../../types/product";

const initialState: InitialProductState = {
  items: [],
  isLoading: false,
  error: null,
};

export const getProducts = createAsyncThunk(
  "product/getProducts",
  async (_, thunkApi) => {
    try {
      const token = localStorage.getItem("authToken");
      const response = await fetch(`${config.apiBaseUrl}/products`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error("Fail to fetch the products!");

      const data = await response.json();
      thunkApi.dispatch(setProducts(data.data));
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
);

const productSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    setProducts: (store, action) => {
      store.items = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
