import { Dispatch } from 'redux';
import studentService from '../services/studentService';
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


const fetchAllData = async (dispatch: Dispatch) => {
  try {
    // Appeal
    const appeal = await appealService.getAll()
    dispatch(setAppeal(appeal));

    // Lecture
    const lecture = await lectureService.getAll()
    dispatch(setLecture(lecture))

    const exams = await examService.getAll()
    dispatch(setExams(exams))

    // Announcement
    const announcement = await announcementService.getAll()
    dispatch(setAnnouncement(announcement))
    
    // Student
    const student = await studentService.getByToken();
    dispatch(setStudent(student));

  } catch (error) {
    toast.error("Bir Sorun Oluştu...");
  }
};

export default fetchAllData;