import { createSlice } from '@reduxjs/toolkit';


export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    clearAuth: (state) => {
    state.token = null;
    },
  },
});

export const selectIsAuthenticated = (state:any) => state.auth.token !== null;
export const selectToken = (state:any) => state.auth.token;
export const { setToken, clearAuth } = authSlice.actions;
export default authSlice.reducer;
