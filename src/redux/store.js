import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import cartReducer from "./cart/cartSlice";
const rootReduser = combineReducers({
  auth: authReducer,
  cart: cartReducer,
});
const store = configureStore({
  reducer: rootReduser,
});

export default store;
