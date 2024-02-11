import { Dispatch } from "redux";
import studentService from "../services/studentService";
import { setStudent } from "../store/slices/studentSlice";
import appealService from "../services/appealService";
import { setAppeal } from "../store/slices/appealSlice";
import announcementService from "../services/announcementService";
import { setAnnouncement } from "../store/slices/announcementSlice";
import lectureService from "../services/lectureService";
import { setLecture } from "../store/slices/lectureSlice";
import { toast } from "react-toastify";
import examService from "../services/examService";
import { setExams } from "../store/slices/examSlice";
import surveyService from "../services/surveyService";
import { setSurvey } from "../store/slices/surveySlice";
import exceptionService from "./exceptionService";

const fetchAllData = async (dispatch: Dispatch) => {
  // Appeal
  const appeal = await appealService.getAll(0, 3);
  dispatch(setAppeal(appeal));

  // Lecture
  const lecture = await lectureService.getAll(0, 5);
  dispatch(setLecture(lecture));

  const exams = await examService.getAll(0, 3);
  dispatch(setExams(exams));

  // Announcement
  const announcement = await announcementService.getAll(0, 4);
  dispatch(setAnnouncement(announcement));

  // Survey
  const survey = await surveyService.getAll(0, 4);
  dispatch(setSurvey(survey));

  // Student
  const student = await studentService.getByToken();
  dispatch(setStudent(student));
};

export default fetchAllData;
