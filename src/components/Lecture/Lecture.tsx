import { useDispatch, useSelector } from "react-redux";
import "./Lecture.css";
import { Link, useNavigate } from "react-router-dom";
import { selectLecture } from "../../store/slices/lectureSlice";
import { formatDate } from "../../utils/formatDate";
import LectureService from "../../services/lectureService";
import { clearAuth, selectToken } from "../../store/slices/authSlice";
import { setLectureDetail } from "../../store/slices/lectureDetailSlice";
import { activeLoading, clearLoading } from "../../store/slices/loadingSlice";
import { toast } from "react-toastify";

const Lecture = ({ lecture }: any) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  const handleClick = async () => {
    try {
      dispatch(activeLoading());
      const response = await LectureService.getWithDetails(lecture.lectureId);
      dispatch(setLectureDetail(response));
      navigate("/ders-detay");
    } catch (error) {
      dispatch(clearAuth());
      toast.error("Oturumunuzun süresi doldu lütfen tekrar giriş yapın..");
    }
    dispatch(clearLoading());
  };

  return (
    <div className="d-flex align-items-center justify-content-center col-sm-6 col-md-5 col-xl-3 col-12 my-4">
      <div className="edu-card">
        <img className="card-imgg" src={lecture?.lectureImageUrl} />
        <div className="card-content">
          <div className="d-flex flex-column">
            <span>{lecture?.lectureName}</span>
            <span className="platform-course-date">
              {formatDate(lecture?.startDate)}
            </span>
          </div>
          <a className="apply-btn" onClick={handleClick}>
            Eğitime Git
          </a>
        </div>
      </div>
    </div>
  );
};
export default Lecture;
