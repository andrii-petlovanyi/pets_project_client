import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    register(state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    logIn: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    logOut: state => {
      state.user = {};
      state.token = null;
      state.isLoggedIn = false;
    },
    refresh: (state, { payload }) => {
      state.user = payload.user;
      state.isLoggedIn = true;
    },
  },
});
export const { register, logIn, logOut, refresh } = authSlice.actions;
export default authSlice.reducer;
