import { createSlice } from '@reduxjs/toolkit';


export const navbarSlice = createSlice({
  name: 'navbar',
  initialState: {
    navlink: "/",
  },
  reducers: {
    setNavlink: (state, action) => {
      state.navlink = action.payload;
    },
    clearNavlink: (state) => {
    state.navlink = "/";
    },
  },
});
export const selectNavlink = (state:any) => state.navbar.navlink;
export const { setNavlink, clearNavlink } = navbarSlice.actions;
export default navbarSlice.reducer;
