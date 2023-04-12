import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios' ;
export const login = createAsyncThunk('auth/login', async (userData) => {
  try {
    const {response} = await axios.post('http://localhost:3000/login',
    {email: userData.email, password: userData.password}, {withCredentials: true});
    console.log(response);
    console.log(response);
    
  } catch (error) {
    throw Error(error.message);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    isLoading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
  },
});

export const {setUserData} = authSlice.actions;



export const selectIsLoggedIn = (state) => state.login.isLoggedIn;
export const selectIsLoading = (state) => state.login.isLoading;
export const selectError = (state) => state.auth.error;


export default authSlice.reducer;
