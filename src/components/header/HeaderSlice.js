import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const isLoged = createAsyncThunk(
  'header/isLoged',
  async () => {
    const response = await fetch('http://localhost:3000/username');
    const data = await response.json();
    return data.userName;
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
        state.username = action.payload;
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
