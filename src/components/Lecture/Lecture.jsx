import { useSelector } from "react-redux";
import "./Lecture.css";
import { Link, useNavigate } from "react-router-dom";
import { selectLecture } from "../../store/slices/lectureSlice";
import { formatDate } from "../../environment/environment";

 const Lecture = (props) => {
  const lectures = useSelector(selectLecture)
  const navigate = useNavigate();
  return (
    <div className="d-flex align-items-center justify-content-center">
      <div className="edu-card">
        <img className="card-imgg" src="https://miro.medium.com/v2/resize:fit:1400/1*XXI-kg18liPn4XcfZmoqQQ.jpeg"></img>
        <div className="card-content">
          <div className="d-flex flex-column">
            <span>{lectures[props.index].lectureName}</span>
            <span className="platform-course-date">{formatDate(lectures[props.index].startDate)}</span>
          </div>

          <a className="apply-btn" onClick={() => navigate("ders-detay/" + 123)}>
            Eğitime Git
          </a>
        </div>
      </div>
    </div>
  );
};
export default Lecture;