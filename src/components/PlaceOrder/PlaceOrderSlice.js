import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


const countItems = (items) => {
    const itemCounts = {};
    items.forEach((item) => {
      const { id, name } = item;
      if (itemCounts[id]) {
        itemCounts[id].amount += 1;
      } else {
        itemCounts[id] = { id, name, amount: 1 };
      }
    });
    return Object.values(itemCounts);
};

// Async thunk that makes a POST request to the /placeorder route with credentials
export const placeOrder = createAsyncThunk('placeOrder/post', async () => {
  try {
    let cart=JSON.parse(sessionStorage.getItem('cart')).items;
    const response = await axios.post('/placeorder',
    {cart: cart},
    { withCredentials: true });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
});

// PlaceOrderSlice with a single reducer that handles the async thunk
export const PlaceOrderSlice = createSlice({
  name: 'placeOrder',
  initialState: { status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(placeOrder.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(placeOrder.fulfilled, (state) => {
      state.status = 'succeeded';
    });
    builder.addCase(placeOrder.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
});

export default PlaceOrderSlice.reducer;