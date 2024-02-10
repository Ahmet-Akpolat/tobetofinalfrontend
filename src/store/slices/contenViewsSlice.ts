import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contentId: null,
};

export const contentViewsSlice = createSlice({
  name: "contentViews",
  initialState,
  reducers: {
    setContentViews: (state, action) => {
      state.contentId = action.payload;
    },
    clearContentViews: (state) => {
      state.contentId = initialState.contentId;
    },
  },
});

export const { setContentViews, clearContentViews } = contentViewsSlice.actions;
export default contentViewsSlice.reducer;
export const selectContentViews = (state: any) => state.contentViews.contentId;
