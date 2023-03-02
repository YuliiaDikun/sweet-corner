import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlise";

const rootReduser = combineReducers({
  auth: authReducer,
});
const store = configureStore({
  reducer: rootReduser,
});

export default store;
