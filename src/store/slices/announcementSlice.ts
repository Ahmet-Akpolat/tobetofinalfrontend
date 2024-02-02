import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  announcement: {
    id: null,
    name: null,
    description: null,
    announcementId: null,
    studentId: null,
  },
};

export const announcementSlice = createSlice({
  name: "announcement",
  initialState: initialState,
  reducers: {
    setAnnouncement: (state, action) => {
      state.announcement = action.payload;
    },
    clearAnnouncement: (state) => {
      state.announcement = initialState.announcement;
    },
  },
});

export const { setAnnouncement, clearAnnouncement } = announcementSlice.actions;
export default announcementSlice.reducer;
export const selectAnnouncement = (state: any) => state.announcement.announcement;
