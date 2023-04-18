import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getProduct = createAsyncThunk(
  'productPage/getProduct',
  async (id) => {
    const response = await fetch('http://localhost:3000/products/getproduct/'+id);
    const data = await response.json();
    return data.name;
  }
);

const producPage = createSlice({
  name: 'productList',
  initialState: {
     product: {name: "unknown"},
     isLoadingProduct: false,
     hasErrorProduct: false
 },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state) => {
        state.isLoadingProduct = true;
        state.hasErrorProduct = false;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.product.name = action.payload;
        state.isLoadingProduct = false;
        state.hasErrorProduct = false;
      })
      .addCase(getProduct.rejected, (state) => {
        state.isLoadingProduct = false;
        state.hasErrorProduct = true;
      });
  },
});

export default producPage.reducer;

export const selectProductName = (state) => state.producPage.product.name;
