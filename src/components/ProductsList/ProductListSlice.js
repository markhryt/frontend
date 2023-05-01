import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  'productList/fetchProducts',
  async () => {
    const response = await axios.get("http://localhost:3000/products");
    return response.data.products;
  }
);

export const searchProducts = createAsyncThunk(
  "products/searchProducts",
  async (searchTerm) => {
    const response = await axios.get(`http://localhost:3000/products/${searchTerm}`);
    return response.data.products;
  }
);

export const fetchProductsByCategory = createAsyncThunk(
  'productList/fetchProductsByCategory',
  async (category_name) => {
    const response = await axios.get(`http://localhost:3000/${category_name}/getproducts`);
    return response.data.products;
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
      })
      .addCase(searchProducts.pending, (state)=>{
        state.isLoadingProducts = true;
        state.hasErrorProducts = false;
      })
      .addCase(searchProducts.rejected, (state)=>{
        state.isLoadingProducts = false;
        state.hasErrorProducts = true;
      })
      .addCase(searchProducts.fulfilled, (state, action)=>{
        state.isLoadingProducts = false;
        state.hasErrorProducts = false;
        state.products=action.payload;
      })
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.isLoadingProducts = true;
        state.hasErrorProducts = false;
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoadingProducts = false;
        state.hasErrorProducts = false;
      })
      .addCase(fetchProductsByCategory.rejected, (state) => {
        state.isLoadingProducts = false;
        state.hasErrorProducts = true;
      })
  },
});

export default productListSlice.reducer;

export const selectProducts = (state) => state.productList.products;
