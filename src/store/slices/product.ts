import { createSlice } from "@reduxjs/toolkit";
import { InitialProductState } from "../../types/product";

const initialState: InitialProductState = {
  items: [],
  isLoading: false,
  error: null,
};

const productSlice = createSlice({
  name: "item",
  initialState,
  reducers: {},
});

export default productSlice.reducer;
