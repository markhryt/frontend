import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const registerUser = createAsyncThunk('auth/registernUser',
    async (userData) => {
      try {
        const response = await axios.post('http://localhost:3000/register', userData, { withCredentials: true });
        return response.data;
      } catch (error) {
        throw Error(error.message);
      }
    }
)

const registrationSlice = createSlice({
  name: 'registration',
  initialState :{
    userRegistered: false,
    registerUserLoading: false,
    registerUserHasError: false,
  },
  extraReducers: (builder) => {
    builder
        .addCase(registerUser.pending, (state) => {
        // update state with user data
            state.registerUserLoading = true;
            state.registerUserHasError = false;
            state.userRegistered = false;
        })
        .addCase(registerUser.fulfilled, (state) => {
        // update state with user data 
            state.registerUserLoading = false;
            state.registerUserHasError = false;
            state.userRegistered = true;
            
        })
        .addCase(registerUser.rejected, (state) => {
        // handle error
            state.registerUserHasError = true;
            state.registerUserLoading = false;
            state.userRegistered = false;
        
        });
  },
});



export default registrationSlice.reducer;
