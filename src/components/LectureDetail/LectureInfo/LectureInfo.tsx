import { useSelector } from "react-redux";
import "./LectureInfo.css";
import { selectLectureDetail } from "../../../store/slices/lectureDetailSlice";

function LectureInfo({ lectureCompletionDetail }: any) {
  const lecture = useSelector(selectLectureDetail);

  return (
    <div className="lecture-info">
      <div className="info-section">
        <div className="d-flex justify-content-between">
          <div>
            <img src="icons/event_note_FILL0.svg"></img>
            <strong> Başlangıç</strong>
          </div>
          <text>{lecture.startDate.replace("T", " ")}</text>
        </div>
        <div
          className="d-flex justify-content-between"
          style={{ marginLeft: "28px" }}
        >
          <div>
            <strong> Bitiş</strong>
          </div>
          <text>{lecture.endDate.replace("T", " ")}</text>
        </div>
      </div>
      <div className="info-section">
        <div className="d-flex justify-content-between">
          <div>
            <img src="icons/sell_FILL0.svg"></img>
            <strong> Kategori</strong>
          </div>
          <text>{lecture.categoryName}</text>
        </div>
      </div>
      <div className="info-section">
        <div className="d-flex justify-content-between">
          <div>
            <img src="icons/timer_FILL0_wght100.svg"></img>
            <strong> İzlenilen İçerik Sayısı</strong>
          </div>
          <text>{lectureCompletionDetail.totalWatchedCount}</text>
        </div>
      </div>
      <div className="info-section">
        <div className="d-flex justify-content-between">
          <div>
            <img src="icons/description_FILL0.svg"></img>
            <strong> İçerik</strong>
          </div>
          <text>{lectureCompletionDetail.totalContentCount}</text>
        </div>
      </div>
      <div className="info-section">
        <div className="d-flex justify-content-between">
          <div>
            <img src="icons/work_FILL0_wght100.svg"></img>
            <strong> Üretici Firma</strong>
          </div>
          <text>{lecture.manufacturerName}</text>
        </div>
      </div>
    </div>
  );
}

export default LectureInfo;
