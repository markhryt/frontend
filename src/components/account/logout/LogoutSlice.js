import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const logoutUser = createAsyncThunk(
  'logout/logoutUser',
  async () => {
    try {
      const {response} = await axios.post('http://localhost:3000/logout',
      {message: "Log out"}, {withCredentials: true});
    } catch (error) {
      throw error.response.data;
    }
  }
);

const logoutSlice = createSlice({
  name: 'logout',
  initialState: {
    status: 'idle',
    error: null,
    successMessage: null,
  },
  reducers: {
    resetLogoutStatus: (state) => {
      state.status = 'idle';
      state.error = null;
      state.successMessage = null;
    },
  },
  extraReducers: {
    [logoutUser.pending]: (state) => {
      state.status = 'loading';
    },
    [logoutUser.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      // state.successMessage = action.payload.message;
    },
    [logoutUser.rejected]: (state, action) => {
      state.status = 'failed';
      // state.error = action.error.message;
    },
  },
});

export const selectLogoutStatus = (state) => state.logout.status;
export const selectLogoutError = (state) => state.logout.error;
export const selectLogoutSuccessMessage = (state) => state.logout.successMessage;

export const { resetLogoutStatus } = logoutSlice.actions;

export default logoutSlice.reducer;
