import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const registerUser = createAsyncThunk('auth/registerUser',
    async (userData) => {
      try {
        const response = await axios.post('http://localhost:3000/register', userData, { withCredentials: true });
        return response.data;
      } catch (error) {
        throw Error(error.message);
      }
    }
)

export const verifyemail = createAsyncThunk(
  'auth/verifyemail',
  async (email) => {
    try {
      const response = await axios.post('http://localhost:3000/verifyemail', {email: email});
      return response.data;
    } catch (error) {
      throw Error(error.message);
    }
  }
);


const registrationSlice = createSlice({
  name: 'registration',
  initialState :{
    userData: {},
    userRegistered: false,
    registerUserLoading: false,
    registerUserHasError: false,
  },
  reducers: {
    // remove setUserData from here
    setUserData:(state,action)=>{
      state.userData = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
        .addCase(registerUser.pending, (state, action) => {
        // update state with user data
            state.registerUserLoading = true;
            state.registerUserHasError = false;
            state.userRegistered = action.payload;
        })
        .addCase(registerUser.fulfilled, (state, action) => {
        // update state with user data 
            state.registerUserLoading = false;
            state.registerUserHasError = false;
            state.userRegistered = action.payload;
            
        })
        .addCase(registerUser.rejected, (state, action) => {
        // handle error
            state.registerUserHasError = true;
            state.registerUserLoading = false;
            state.userRegistered = action.payload;
        
        });
  },
});
export const  {setUserData} = registrationSlice.actions;

export const selectUserData = (state)=> state.register.userData;
export const selectUserRegistered = (state) => state.register.userRegistered;
export default registrationSlice.reducer;
