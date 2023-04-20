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
    removeItem: (state, action) => {
      const idToRemove = action.payload.idToRemove;
      const index = state.cartItems.findIndex(item => item.id === Number(idToRemove));
      if (index !== -1) {
        state.cartItems.splice(index, 1);
      } else {
        state.cartItems = [];
      }
      
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;

export const selectCart = (state)=>state.cart.cartItems;