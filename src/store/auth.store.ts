import {createSlice} from '@reduxjs/toolkit';

const login = createSlice({
  name: 'login',
  initialState: {
    token: <string | null>null,
  },
  reducers: {
    loginUser: () => ({token: 'token'}),

    logout: () => ({token: null}),
  },
});

export const {loginUser, logout} = login.actions;

export default login.reducer;
