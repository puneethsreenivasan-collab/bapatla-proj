import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartItems: [] };

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // key   :  value
    addtocart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removefromcart: (state, action) => {
      state.cartItems = state.cartItems.filter((x) => {
        x.id !== action.payload.id;
      });
    },
  },
});

export const { addtocart, removefromcart } = CartSlice.actions;
export default CartSlice.reducer;
