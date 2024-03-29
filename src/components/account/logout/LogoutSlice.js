import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const logoutUser = createAsyncThunk(
  'logout/logoutUser',
  async () => {
    try {
      await axios.post(BASE_URL+'/logout',
      {message: "Log out"}, {withCredentials: true});
      document.cookie = `sessionId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
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
