import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProducts, fetchProductsByCategory } from "../../Api/publicApi";
import { RootState } from "../../app/store";
import { IProductsState } from "../../interfaces/interfaces";

const initialState: IProductsState = {
  products: [],
  status: "idle",
};

// Fetch All Products
export const fetchProductsAsync = createAsyncThunk(
  "product/fetchProducts",

  async () => {
    const response = await fetchProducts();

    return response.data;
  }
);

// Fetch Products By Category
export const fetchProductsByCategoryAsync = createAsyncThunk(
  "product/fetchProductsByCategory",

  async (cat: string) => {
    const response = await fetchProductsByCategory(cat);

    return response.data;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductsAsync.fulfilled, (state, { payload }) => {
        state.status = "idle";
        state.products = payload;
      });

    builder
      .addCase(fetchProductsByCategoryAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductsByCategoryAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      });
  },
});

// Products Selector
export const selectProducts = (state: RootState) => state.products;

export default productsSlice.reducer;
