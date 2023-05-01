import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

export const fetchCategories = createAsyncThunk(
  'productList/fetchCategories',
  async () => {
    const response = await axios.get("http://localhost:3000/categories");
    return response.data.products;
  }
);

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
       categories: [],
       isLoadingCategories: false,
       hasErrorCategories: false
   },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchCategories.pending, (state) => {
          state.isLoadingCategories = true;
          state.hasErrorCategories = false;
        })
        .addCase(fetchCategories.fulfilled, (state, action) => {
          state.categories = action.payload;
          state.isLoadingCategories = false;
          state.hasErrorCategories = false;
        })
        .addCase(fetchCategories.rejected, (state) => {
          state.isLoadingCategories = false;
          state.hasErrorCategories = true;
        })
    },
  });
  
  export default categoriesSlice.reducer;
  
  export const selectCategories = (state) => state.categories.categories;
  