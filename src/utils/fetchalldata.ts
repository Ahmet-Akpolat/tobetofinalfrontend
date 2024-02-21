import { Dispatch } from "redux";
import announcementService from "../services/announcementService";
import appealService from "../services/appealService";
import lectureService from "../services/lectureService";
import quizService from "../services/quizService";
import studentService from "../services/studentService";
import surveyService from "../services/surveyService";
import { setAnnouncement } from "../store/slices/announcementSlice";
import { setAppeal } from "../store/slices/appealSlice";
import { setExams } from "../store/slices/examSlice";
import { setLecture } from "../store/slices/lectureSlice";
import { setStudent } from "../store/slices/studentSlice";
import { setSurvey } from "../store/slices/surveySlice";

const fetchAllData = async (dispatch: Dispatch) => {
  const allData = (await studentService.getStudentAllData()).data as any;
  dispatch(setLecture(allData.classLectures));
  dispatch(setSurvey(allData.classSurveys));
  dispatch(setExams(allData.classQuizs));

  const announcements = await announcementService.getAll(0, 12);
  dispatch(
    setAnnouncement([
      ...announcements,
      { unreadedAnnouncement: allData.readingAnnouncement },
    ])
  );

  const appeal = await appealService.getAll(0, 12);
  dispatch(setAppeal(appeal));

  const student = await studentService.getByToken();
  dispatch(setStudent(student));
};

export const fetchAppeals = async (dispatch: Dispatch) => {
  const appeals = await appealService.getAll(0, 12);
  dispatch(setAppeal(appeals));
};

export const fetchLectures = async (dispatch: Dispatch) => {
  const lectures = await lectureService.getAll(0, 12);
  dispatch(setLecture(lectures));
};


export const fetchSurveys = async (dispatch: Dispatch) => {
  const surveys = await surveyService.getAll(0, 12);
  dispatch(setSurvey(surveys));
};

export const fetchExams = async (dispatch: Dispatch) => {
  const exams = await quizService.GetForClassStudent();
  dispatch(setExams(exams));
};

export const fetchAnnouncements = async (
  dispatch: Dispatch,
  oldAnnouncements: any
) => {
  const announcements = await announcementService.getAll(0, 12);
  dispatch(
    setAnnouncement([
      ...announcements,
      {
        unreadedAnnouncement:
          oldAnnouncements[oldAnnouncements.length - 1].unreadedAnnouncement,
      },
    ])
  );
};

export default fetchAllData;
