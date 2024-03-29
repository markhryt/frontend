import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const isLoged = createAsyncThunk(
  'header/getUsername',
  async () => {
    try{
   
    let response = await axios.get(BASE_URL+'/username',
    {withCredentials:true});
    return response.data;
    }catch (error) {
      throw Error(error.message);
    }
  }
);

const headerSlice = createSlice({
  name: 'header',
  initialState: {
     username: "",
     isLoadingUsername: false,
     hasErrorUsername: false
 },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(isLoged.pending, (state) => {
        state.isLoadingUsername = true;
        state.hasErrorUsername = false;
      })
      .addCase(isLoged.fulfilled, (state, action) => {
        state.username = action.payload.userName;
        state.isLoadingUsername = false;
        state.hasErrorUsername = false;
      })
      .addCase(isLoged.rejected, (state) => {
        state.isLoadingUsername = false;
        state.hasErrorUsername = true;
      });
  },
});

export default headerSlice.reducer;

export const selectUsername = (state) => state.header.username;
