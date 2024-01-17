import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  appeal: {
    appealEndTime: null,
    appealId: null,
    id: null,
    appealStartTime: null,
    appealName: null,
    stages: null,
    studentId: null,
  }
};

export const appealSlice = createSlice({
  name: 'appeal',
  initialState,
  reducers: {
    setAppeal: (state, action) => {
      state.appeal = action.payload;
    },
    clearAppeal: (state) => {
      state.appeal = initialState.appeal;
    },
  },
});

// Reducer'ları ve action'ları export et
export const { setAppeal, clearAppeal } = appealSlice.actions;
export default appealSlice.reducer;
export const selectAppeal = (state:any) => state.appeal.appeal;