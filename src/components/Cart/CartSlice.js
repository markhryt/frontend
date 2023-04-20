import { createSlice } from '@reduxjs/toolkit';

function handleCartState(){
  if(JSON.parse(sessionStorage.getItem('cart'))){
    return JSON.parse(sessionStorage.getItem('cart')).items 
  }else{
    return [];
  }
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: handleCartState(),
  },
  reducers: {
    addItem: (state, action) => {
      state.cartItems.push(action.payload);
    },
  },
});

export const { addItem, setCartItemsFromSessionStorage } = cartSlice.actions;

export default cartSlice.reducer;

export const selectCart = (state)=>state.cart.cartItems;