import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LectureService from "../../services/lectureService";
import { selectToken } from "../../store/slices/authSlice";
import { setLectureDetail } from "../../store/slices/lectureDetailSlice";
import { activeLoading, clearLoading } from "../../store/slices/loadingSlice";
import { formatDate } from "../../utils/formatDate";
import "./Lecture.css";

const Lecture = ({ lecture }: any) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  const handleClick = async () => {
    dispatch(activeLoading());
    const response = await LectureService.getWithDetails(lecture.lectureId);
    dispatch(setLectureDetail(response));
    navigate("/ders-detay");
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
              {formatDate(lecture?.lectureStartDate)}
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
