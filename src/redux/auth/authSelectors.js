export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectUsername = (state) => state.auth.user.userName;

export const selectEmail = (state) => state.auth.email;

export const selectUserId = (state) => state.auth.userId;

export const selectAuthErrorStatus = (state) => state.auth.error;
