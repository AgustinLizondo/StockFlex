import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isUserLogged: false,
};

const reducers = {
  logIn: () => undefined,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers,
});

export default authSlice.actions;

export const authReducer = authSlice.reducer;
