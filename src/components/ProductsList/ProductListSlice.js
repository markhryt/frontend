import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
  'productList/fetchProducts',
  async () => {
    const response = await fetch('http://localhost:3000/products');
    const data = await response.json();
    return data.products;
  }
);

const productListSlice = createSlice({
  name: 'productList',
  initialState: {
     products: [],
     isLoadingProducts: false,
     hasErrorProducts: false
 },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoadingProducts = true;
        state.hasErrorProducts = false;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoadingProducts = false;
        state.hasErrorProducts = false;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.isLoadingProducts = false;
        state.hasErrorProducts = true;
      });
  },
});

export default productListSlice.reducer;

export const selectProducts = (state) => state.productList.products;
