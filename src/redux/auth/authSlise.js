import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  email: null,
  userName: null,
  userId: null,
  error: null,
};

const authSlise = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const { setActiveUser } = authSlise.actions;

export default authSlise.reducer;
