import { createSlice } from '@reduxjs/toolkit';

    const  initialState = {
    lecture: {
        id: null,
        lectureId: null,
        studentClassId: null,
        studentClassName: null,
        lectureName: null,
        lectureCategoryName: null,
        lectureImageUrl: "https://miro.medium.com/v2/resize:fit:1400/1*XXI-kg18liPn4XcfZmoqQQ.jpeg",
        estimatedVideoDuration: null,
        lectureManufacturerName: null,
        startDate: null,
        endDate: null
      }
  }


export const lectureSlice = createSlice({
  name: 'lecture',
  initialState,
  reducers: {
    setLecture: (state, action) => {
      state.lecture = action.payload;
    },
    clearLecture: (state) => {
        state.lecture = initialState.lecture;
    },
  },
});


export const { setLecture, clearLecture} = lectureSlice.actions;
export default lectureSlice.reducer;
export const selectLecture = (state:any) => state.lecture.lecture;
