import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getProduct = createAsyncThunk(
  'productPage/getProduct',
  async (id) => {
    const response = await fetch(BASE_URL+'products/getproduct/'+id);
    const data = await response.json();
    return data;
  }
);

const ProductsPageSlice = createSlice({
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
        state.product = action.payload;
        state.isLoadingProduct = false;
        state.hasErrorProduct = false;
      })
      .addCase(getProduct.rejected, (state) => {
        state.isLoadingProduct = false;
        state.hasErrorProduct = true;
      });
  },
});

export default ProductsPageSlice.reducer;

export const selectProductName = (state) => state.productPage.product.product;