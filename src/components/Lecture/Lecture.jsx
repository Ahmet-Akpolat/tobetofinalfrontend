import { useDispatch, useSelector } from "react-redux";
import "./Lecture.css";
import { Link, useNavigate } from "react-router-dom";
import { selectLecture } from "../../store/slices/lectureSlice";
import { formatDate } from "../../utils/formatDate";
import LectureService from "../../services/lectureService";
import { ToastContainer, toast } from "react-toastify";
import { clearAuth, selectToken } from "../../store/slices/authSlice";
import { setLectureDetail } from "../../store/slices/lectureDetailSlice";
import { activeLoading, clearLoading } from "../../store/slices/loadingSlice";

const Lecture = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const lectures = useSelector(selectLecture);

  const handleClick = async () => {
    try {
      dispatch(activeLoading());
      const response = await LectureService.getWithDetails(lectures[props.index].lectureId,token);
      dispatch(setLectureDetail(response));
      navigate("ders-detay");
    } catch (error) {
      dispatch(clearAuth())
      toast("Oturumunuzun süresi doldu lütfen tekrar giriş yapın..");
    }
    dispatch(clearLoading());
  };

  return (
    <div className="d-flex align-items-center justify-content-center">
      <div className="edu-card">
        <img
          className="card-imgg"
          src="https://miro.medium.com/v2/resize:fit:1400/1*XXI-kg18liPn4XcfZmoqQQ.jpeg"
        />
        <div className="card-content">
          <div className="d-flex flex-column">
            <span>{lectures[props.index].lectureName}</span>
            <span className="platform-course-date">
              {formatDate(lectures[props.index].startDate)}
            </span>
          </div>
          <a className="apply-btn" onClick={handleClick}>
            Eğitime Git
          </a>
        </div>
      </div>
      <ToastContainer position="bottom-right" theme="light" />
    </div>
  );
};
export default Lecture;
