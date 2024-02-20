import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LectureContent from "../../components/LectureDetail/LectureContent/LectureContent";
import LectureDetailSidebar from "../../components/LectureDetail/LectureDetailSidebar/LectureDetailSidebar";
import LectureInfo from "../../components/LectureDetail/LectureInfo/LectureInfo";
import lectureService from "../../services/lectureService";
import { selectContentViews } from "../../store/slices/contenViewsSlice";
import { clearContent } from "../../store/slices/contentSlice";
import {
  selectLectureDetail,
  setLectureDetail,
} from "../../store/slices/lectureDetailSlice";
import { selectStudent } from "../../store/slices/studentSlice";
import { formatDate } from "../../utils/formatDate";
import "./LectureDetail.css";

let lastErrorTime = 0;
const errorInterval = 3000;

function LectureDetail() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [section, setSection] = useState(0);
  const lecture = useSelector(selectLectureDetail);
  const student = useSelector(selectStudent);
  const [liked, setLiked] = useState(lecture?.isLiked);
  const [numberOfLikes, setNumberOfLikes] = useState(lecture?.likeCount);
  const [showDetail, setShowDetail] = useState(false);
  const [lectureCompletionDetail, setLectureCompletionDetail] = useState({
    completionPercentage: lecture?.completionPercentage,
    totalContentCount: lecture?.totalContentCount,
    totalWatchedCount: lecture?.totalWatchedCount,
  });
  const contentViews = useSelector(selectContentViews);

  const getLectureDetails = async () => {
    const newLecture = (await lectureService.getWithDetails(lecture.id)) as any;
    setLectureCompletionDetail({
      completionPercentage: newLecture?.completionPercentage,
      totalContentCount: newLecture?.totalContentCount,
      totalWatchedCount: newLecture?.totalWatchedCount,
    });
  };

  const setLectureLiked = async () => {
    if (liked) {
      setLiked(false);
      setNumberOfLikes(numberOfLikes - 1);
    } else {
      setLiked(true);
      setNumberOfLikes(numberOfLikes + 1);
    }
    const currentTime = new Date().getTime();
    if (currentTime - lastErrorTime > errorInterval) {
      lastErrorTime = currentTime;
      await lectureService.setLectureLiked(student.id, lecture.id);
      const newLecture = await lectureService.getWithDetails(lecture.id);
      dispatch(setLectureDetail(newLecture));
    }
  };

  const handleBackButton = () => {
    dispatch(clearContent());
    navigate(-1);
  };

  useEffect(() => {
    getLectureDetails();
  }, [contentViews]);

  return (
    <div className="lecture">
      <div className={`lecture-detail  ${showDetail && "blur"}`}>
        <div className="back-button" onClick={handleBackButton}></div>
        <div className="lecture-activity">
          <div className="row">
            <div className="col-lg-2 col-sm-2 col-12 d-flex justify-content-center mb-2">
              <img className="lecture-img" src={lecture.imageUrl}></img>
            </div>
            <div className="col-lg-10  col-sm-10 col-xs-12 col-12">
              <div className="d-flex justify-content-between">
                <div>
                  <div className="lecture-info">
                    <h3>{lecture.name}</h3>
                  </div>
                  <div className="date-info text-dark-blue">
                    <span>{`${formatDate(
                      lecture.endDate
                    )} tarihine kadar bitirebilirsin`}</span>
                  </div>
                </div>
                <div className="actions d-flex align-items-center">
                  <div className="like-actions ">
                    <div className="like" onClick={setLectureLiked}>
                      <img
                        src={
                          liked === false
                            ? "icons/favorite_FILL0_wght100.svg"
                            : "icons/favorite_FILL1.svg"
                        }
                      ></img>
                    </div>
                  </div>
                  <span
                    className={`number-of-likes ${
                      liked != false && "text-red"
                    }`}
                  >
                    {numberOfLikes}
                  </span>
                </div>
              </div>
              <div className="lecture-status mt-2">
                <div className="d-flex gap-2">
                  {lectureCompletionDetail?.completionPercentage === 100 && (
                    <span className="completion-message">Tamamladın</span>
                  )}
                  <span
                    className={`${
                      lectureCompletionDetail?.completionPercentage === 100 &&
                      "completion-message"
                    }`}
                    style={{ color: "gray" }}
                  >{`${lectureCompletionDetail?.totalWatchedCount}/${lectureCompletionDetail?.totalContentCount}`}</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <div className="status-bar" id="status-bar">
                    <div
                      className="completion-bar"
                      style={{
                        width: `${lectureCompletionDetail?.completionPercentage}%`,
                      }}
                    ></div>
                  </div>
                  <span>{`%${lectureCompletionDetail?.completionPercentage}`}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lecture-content">
          <div className="col-12 mb-4">
            <ul className="nav nav-tabs mainTablist" role="tablist">
              <li className="nav-item">
                <button className="nav-link" onClick={() => setSection(0)}>
                  İçerik
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={() => setSection(1)}>
                  Hakkında
                </button>
              </li>
            </ul>
          </div>
        </div>
        {section === 0 && <LectureContent setShowDetail={setShowDetail} />}
        {section === 1 && (
          <LectureInfo lectureCompletionDetail={lectureCompletionDetail} />
        )}
      </div>
      {showDetail === true && (
        <LectureDetailSidebar
          setShowDetail={setShowDetail}
          lectureId={lecture.id}
        />
      )}
    </div>
  );
}

export default LectureDetail;
