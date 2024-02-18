import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  exams: {
    quizId: null,
    id: null,
    quiz: null,
  },
};

export const examSlice = createSlice({
  name: "exams",
  initialState,
  reducers: {
    setExams: (state, action) => {
      state.exams = action.payload;
    },
    clearExams: (state) => {
      state.exams = initialState.exams;
    },
  },
});

export const { setExams, clearExams } = examSlice.actions;
export default examSlice.reducer;
export const selectExams = (state: any) => state.exams.exams;
