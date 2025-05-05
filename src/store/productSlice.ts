import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  images: string[];
}

interface ProductResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
interface EmployeeState {
  data: ProductResponse;
  loading: boolean;
  error: string | null;
}

const initialState: EmployeeState = {
  data: {
    products: [],
    total: 0,
    skip: 0,
    limit: 0,
  },
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk<ProductResponse>(
  "product/fetchProducts",
  async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = response.json();
    return data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default productSlice.reducer;
