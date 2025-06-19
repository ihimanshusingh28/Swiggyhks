import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice( {
  name: "cart",
  initialState: {
    items: []
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0
    },
  },
});

// it will do like this
//{
//   actions:
//       additems,
//       removeitems
//   reducer
// }
export const {addItem,removeItem,clearCart} = cartSlice.actions;

export default cartSlice.reducer; 
