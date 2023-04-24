import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchOrderDescription = createAsyncThunk(
  "orderDescription/fetchOrderDescription",
  async (orderId) => {
    try {
      const response = await axios.get(`http://localhost:3000/account/orders/${orderId}`, { withCredentials: true });
      return response.data;
    } catch (error) {
      return (error.response.data);
    }
  }
);

const orderDescriptionSlice = createSlice({
  name: "orderDescription",
  initialState: {
    loading: false,
    error: null,
    orderDescription: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrderDescription.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchOrderDescription.fulfilled, (state, action) => {
        state.loading = false;
        state.orderDescription = action.payload;
      })
      .addCase(fetchOrderDescription.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default orderDescriptionSlice.reducer;
export const selectOrderDescription = (state) => state.orderDescription.orderDescription;