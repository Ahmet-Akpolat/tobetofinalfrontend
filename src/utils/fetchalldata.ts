import { Dispatch } from 'redux';
import studentService from '../services/studentService';
import authService from '../services/authService/authService';
import { setToken } from '../store/slices/authSlice';
import { setStudent } from '../store/slices/studentSlice';
import appealService from '../services/appealService';
import { setAppeal } from '../store/slices/appealSlice';
import announcementService from '../services/announcementService';
import { setAnnouncement } from '../store/slices/announcementSlice';
import lectureService from '../services/lectureService';
import { setLecture } from '../store/slices/lectureSlice';
import { toast } from 'react-toastify';
import examService from '../services/examService';
import { setExams } from '../store/slices/examSlice';


const fetchAllData = async (dispatch: Dispatch, token: any) => {
  try {
    // Appeal
    const appeal = await appealService.getAll(token)
    dispatch(setAppeal(appeal));

    // Lecture
    const lecture = await lectureService.getAll(token)
    dispatch(setLecture(lecture))

    const exams = await examService.getAll(token)
    dispatch(setExams(exams))

    // Announcement
    const announcement = await announcementService.getAll(token)
    dispatch(setAnnouncement(announcement))
    
    // Student
    const student = await studentService.getByToken(token);
    dispatch(setStudent(student));

  } catch (error) {
    toast.error("Bir Sorun Oluştu...");
  }
};

export default fetchAllData;