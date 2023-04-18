import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItemIndex = state.findIndex(item => item.id === id);
      if (existingItemIndex !== -1) {
        state[existingItemIndex].quantity += quantity;
      } else {
        state.push({ id, quantity });
      }
    },
    editQuantityById: (state, action) => {
      const { id, quantity } = action.payload;
      const itemIndex = state.findIndex(item => item.id === id);
      if (itemIndex !== -1) {
        state[itemIndex].quantity = quantity;
      }
    },
  },
});

export const { addItem, editQuantityById } = cartSlice.actions;

export default cartSlice.reducer;
