import "./LectureDetail.css";
import { useEffect, useState } from "react";
import LectureDetailSidebar from "../../components/LectureDetail/LectureDetailSidebar/LectureDetailSidebar";
import LectureContent from "../../components/LectureDetail/LectureContent/LectureContent";
import LectureInfo from "../../components/LectureDetail/LectureInfo/LectureInfo";
import { useDispatch, useSelector } from "react-redux";
import { selectLectureDetail } from "../../store/slices/lectureDetailSlice";
import lectureService from "../../services/lectureService";
import { ToastContainer, toast } from "react-toastify";
import { selectStudent } from "../../store/slices/studentSlice";
import { useNavigate } from "react-router-dom";
import { clearContent } from "../../store/slices/contentSlice";
import { GetByLoggedStudentCompletionConditionResponse } from "../../models/responses/LectureCompletionDetailResponse";
import exceptionService from "../../utils/exceptionService";

function LectureDetail() {
  const [liked, setLiked] = useState(false);
  const [numberOfLikes, setNumberOfLikes] = useState(0);
  const [section, setSection] = useState(0);
  const lecture = useSelector(selectLectureDetail);
  const student = useSelector(selectStudent);
  const [showDetail, setShowDetail] = useState(false);
  const [lectureCompletionDetail, setLectureCompletionDetail] =
    useState<GetByLoggedStudentCompletionConditionResponse>();
  const [completionControl, setCompletionControl] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getLectureLikeInfo = async () => {
    try {
      const likedLecture = await lectureService.getLectureLiked(lecture.id);
      const lectureNumberOfLikes = await lectureService.getLectureNumberOfLikes(
        lecture.id
      );
      if (likedLecture.isLiked == true) setLiked(likedLecture.isLiked);
      setNumberOfLikes(lectureNumberOfLikes.count);
    } catch (error: any) {
      console.log(error);
      toast.error(
        exceptionService.errorSelector(JSON.stringify(error.response.data))
      );
    }
  };

  const getLectureCompletionDetails = async () => {
    try {
      const completionDetail = (
        await lectureService.getLectureCompletionDetails(lecture.id)
      ).data;
      setLectureCompletionDetail(completionDetail);
      setCompletionControl(true);
    } catch (error: any) {
      console.log(error);
      toast.error(
        exceptionService.errorSelector(JSON.stringify(error.response.data))
      );
    }
  };

  const setLectureLiked = async () => {
    try {
      await lectureService.setLectureLiked(student.id, lecture.id);
      getLectureLikeInfo();
      setLiked(!liked);
    } catch (error: any) {
      console.log(error);
      toast.error(
        exceptionService.errorSelector(JSON.stringify(error.response.data))
      );
    }
  };

  const handleBackButton = () => {
    dispatch(clearContent());
    navigate("/");
  };

  useEffect(() => {
    getLectureLikeInfo();
    getLectureCompletionDetails();
  }, []);

  return (
    <div className="lecture">
      <div className={`lecture-detail  ${showDetail && "blur"}`}>
        <div className="back-button" onClick={handleBackButton}></div>
        <div className="lecture-activity">
          <div className="d-flex">
            <div className="col-lg-2 col-sm-2 col-12">
              <img className="lecture-img" src={lecture.imageUrl}></img>
            </div>
            <div className="col-lg-10 col-md-11 col-sm-10 col-xs-12">
              <div className="d-flex justify-content-between">
                <div>
                  <div className="lecture-info">
                    <h3>{lecture.name}</h3>
                  </div>
                  <div className="date-info text-dark-blue">
                    <span>{`${lecture.endDate.replace(
                      "T",
                      " "
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
                  <span className="number-of-likes">{numberOfLikes}</span>
                </div>
              </div>
              <div className="lecture-status mt-2">
                <span
                  style={{ color: "gray" }}
                >{`${lectureCompletionDetail?.totalWatchedCount}/${lectureCompletionDetail?.totalContentCount}`}</span>
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
