import { clearAuth } from "../store/slices/authSlice";
import { clearStudent } from "../store/slices/studentSlice";
import { clearAppeal } from "../store/slices/appealSlice";
import { clearAnnouncement } from "../store/slices/announcementSlice";
import { clearLecture } from "../store/slices/lectureSlice";
import { clearSurvey } from "../store/slices/surveySlice";
import { clearExams } from "../store/slices/examSlice";

export const Logout = (dispatch: any) => {
  dispatch(clearAuth());
  dispatch(clearStudent());
  dispatch(clearAppeal());
  dispatch(clearAnnouncement());
  dispatch(clearLecture());
  dispatch(clearSurvey());
  dispatch(clearExams());
};
