import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lecture: {
    id: null,
    name: null,
    courses: null,
    studentClassId: null,
    studentClassName: null,
    categoryName: null,
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:1400/1*XXI-kg18liPn4XcfZmoqQQ.jpeg",
    estimatedVideoDuration: null,
    manufacturerName: null,
    startDate: null,
    endDate: null,
    likeCount: null,
  },
};

export const lectureDetailSlice = createSlice({
  name: "lectureDetail",
  initialState,
  reducers: {
    setLectureDetail: (state, action) => {
      state.lecture = action.payload;
    },
    clearLectureDetail: (state) => {
      state.lecture = initialState.lecture;
    },
  },
});

export const { setLectureDetail, clearLectureDetail } =
  lectureDetailSlice.actions;
export default lectureDetailSlice.reducer;
export const selectLectureDetail = (state: any) => state.lectureDetail.lecture;
