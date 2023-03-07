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
    setActiveUser: (state, { payload }) => {
      state.isLoggedIn = true;
      state.email = payload.email;
      state.userName = payload.userName;
      state.userId = payload.userId;
    },
    setLogoutUser: (state, action) => {
      state.isLoggedIn = false;
      state.email = null;
      state.userName = null;
      state.userId = null;
    },
  },
});

export const { setActiveUser, setLogoutUser } = authSlise.actions;

export default authSlise.reducer;
