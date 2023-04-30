import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const exist = state.find((product) => product._id === action.payload._id);
      if (exist) {
        return state.map((product) =>
          product._id === action.payload._id
            ? { ...product, qty: product.qty + 1 }
            : product
        );
      } else {
        return [...state, { ...action.payload, qty: 1 }];
      }
    },

    deleteToCart: (state, action) => {
      const exist1 = state.find(
        (product) => product._id === action.payload._id
      );
      if (exist1.qty === 1) {
        return state.filter((product) => product._id !== exist1._id);
      } else {
        return state.map((product) =>
          product._id === action.payload._id
            ? { ...product, qty: product.qty - 1 }
            : product
        );
      }
    },
  },
});

export const { addToCart, deleteToCart } = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;