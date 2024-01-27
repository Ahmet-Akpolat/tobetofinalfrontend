import { createSlice } from "@reduxjs/toolkit";


export const loadingSlice = createSlice({
  name: "loading",
  initialState: { isLoading: false },
  reducers: {
    activeLoading: (state) => {
      state.isLoading = true;
    },
    clearLoading: (state) => {
      state.isLoading = false
    },
  },
});

export const { activeLoading, clearLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
export const selectLoading = (state: any) => state.loading.isLoading;
