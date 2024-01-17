import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    studentId: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setStudentId: (state, action) => {
      state.studentId = action.payload
    },
    clearAuth: (state) => {
    state.token = null;
    state.studentId = null
    localStorage.clear();
    },
  },
});

export const selectIsAuthenticated = (state:any) => state.auth.token !== null;
export const selectStudentId = (state:any) => state.auth.studentId;

export const { setToken, clearAuth, setStudentId } = authSlice.actions;
export default authSlice.reducer;
