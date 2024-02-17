import { useSelector } from "react-redux";
import { selectContent } from "../../../store/slices/contentSlice";
import VideoPlayer from "../../VideoPlayer/VideoPlayer";
import "./LectureVideo.css";

function LectureVideo({ setShowDetail }: any) {
  const content = useSelector(selectContent);

  return (
    <div className="lecture-video d-flex flex-column align-content-center">
      <div className="video-player">
        <VideoPlayer />
      </div>
      <div className="lecture-video-detail d-flex flex-wrap col-12 gap-2">
        <div className="col-12 col-md-8">
          <div className="video-title">
            <strong>{content.name}</strong>
          </div>
          <div className="d-flex justify-content-between">
            <text style={{ color: "grey" }}>Video - {content.duration} dk</text>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <button className="detail-button" onClick={() => setShowDetail(true)}>
            <strong>DETAY</strong>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LectureVideo;
