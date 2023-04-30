import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/ApiSlice";
import cartReducer from "../features/api/cartSlice";



export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart: cartReducer,
    
  
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});