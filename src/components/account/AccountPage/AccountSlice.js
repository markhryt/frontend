import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

export const fetchUserInfo = createAsyncThunk(
  'account/fetchUserInfo',
  async () => {
    try {
      const response = await axios.get(`${BASE_URL}/account/accountinfo`, { withCredentials: true });
      return response.data;
    } catch (error) {
      return (error.response.data);
    }
  }
);

export const fetchOrders = createAsyncThunk(
  'account/fetchOrders',
  async () => {
    try {
      const response = await axios.get(`${BASE_URL}/account/orders`, { withCredentials: true });
      return response.data;
    } catch (error) {
      return (error.response.data);
    }
  }
);

export const AccountSlice = createSlice({
  name: 'account',
  initialState: {
    userInfo: null,
    orders: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUserInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userInfo = action.payload;
      })
      .addCase(fetchUserInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchOrders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orders = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default AccountSlice.reducer;

export const selectAccountInfo = (state) => state.account.userInfo;