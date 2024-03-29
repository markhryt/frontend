import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios' ;
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const login = createAsyncThunk('auth/login', async (userData) => {
  try {
    await axios.post(BASE_URL+'/login',
    {email: userData.email, password: userData.password}, {withCredentials: true});
    return 'login';
  } catch (error) {
    throw Error(error.message); 
  }
});

export const isUserLoggedIn = createAsyncThunk('auth/isLoggedIn', async () => {
  try {
    let response = await axios.get(BASE_URL+'/isLoggedIn',
    {withCredentials:true});
    return response.data;
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
    isLoggedInLoading: false,
    isLoggedInHasError: false,
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
      .addCase(login.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      })
      .addCase(isUserLoggedIn.pending, (state)=>{
        state.isLoggedInLoading= true;
        state.isLoggedInHasError = false;
      })
      .addCase(isUserLoggedIn.rejected, (state)=>{
        state.isLoggedInLoading = false;
        state.isLoggedInHasError = true;
      })
      .addCase(isUserLoggedIn.fulfilled, (state, action)=>{
        state.isLoggedIn = action.payload.logged;
        state.isLoggedInLoading = false;
        state.isLoggedInHasError = false;
      })
  },
});

export const {setUserData} = authSlice.actions;



export const selectIsLoggedIn = (state) => state.login.isLoggedIn;
export const selectIsLoading = (state) => state.login.isLoading;
export const selectError = (state) => state.auth.error;


export default authSlice.reducer;
