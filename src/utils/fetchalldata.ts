import { Dispatch } from "redux";
import announcementService from "../services/announcementService";
import appealService from "../services/appealService";
import examService from "../services/examService";
import lectureService from "../services/lectureService";
import studentService from "../services/studentService";
import surveyService from "../services/surveyService";
import { setAnnouncement } from "../store/slices/announcementSlice";
import { setAppeal } from "../store/slices/appealSlice";
import { setExams } from "../store/slices/examSlice";
import { setLecture } from "../store/slices/lectureSlice";
import { setStudent } from "../store/slices/studentSlice";
import { setSurvey } from "../store/slices/surveySlice";

const fetchAllData = async (dispatch: Dispatch) => {
  // Appeal
  const appeal = await appealService.getAll(0, 12);
  dispatch(setAppeal(appeal));

  // Lecture
  const lecture = await lectureService.getAll(0, 12);
  dispatch(setLecture(lecture));

  // Announcement
  const announcement = await announcementService.getAll(0, 12);
  dispatch(setAnnouncement(announcement));

  // Survey
  const survey = await surveyService.getAll(0, 12);
  dispatch(setSurvey(survey));

  const exams = await examService.getAll();
  dispatch(setExams(exams));

  // Student
  const student = await studentService.getByToken();
  dispatch(setStudent(student));
};


export const fetchAppeals = async (dispatch: Dispatch) => {
  const appeals = await appealService.getAll(0, 12);
  dispatch(setAppeal(appeals));
}

export const fetchLectures = async (dispatch: Dispatch) => {
  const lectures = await lectureService.getAll(0, 12);
  dispatch(setLecture(lectures));
}

export const fetchAnnouncements = async (dispatch: Dispatch) => {
  const announcements = await announcementService.getAll(0, 12);
  dispatch(setAnnouncement(announcements));
}

export const fetchSurveys = async (dispatch: Dispatch) => {
  const surveys = await surveyService.getAll(0, 12);
  dispatch(setSurvey(surveys));
}

export const fetchExams = async (dispatch: Dispatch) => {
  const exams = await examService.getAll(0, 12);
  dispatch(setExams(exams));
}

export default fetchAllData;
