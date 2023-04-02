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
     hasErrorPopular: false
 },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoadingProducts = true;
        state.hasErrorPopular = false;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoadingProducts = false;
        state.hasErrorPopular = false;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.isLoadingProducts = false;
        state.hasErrorPopular = true;
      });
  },
});

export default productListSlice.reducer;

export const selectProducts = (state) => state.productList.products;
