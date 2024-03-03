import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
import productsReducer from "./slices/products";
export const store = configureStore({
  reducer: { auth: authReducer, products: productsReducer },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
