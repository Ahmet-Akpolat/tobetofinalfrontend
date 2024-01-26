import { useState } from "react";
import "./LectureContentHeader.css";

function LectureContentHeader() {
  const [expand, setExpand] = useState(false);

  return (
    <div className="content-header">
      <div className="d-flex" onClick={() => setExpand(!expand)}>
        <div>
          <img
            className={expand === true ? "expand" : "unexpand"}
            src="icons/chevron_FILL0.svg"
          ></img>
        </div>
        <div>
          <strong onClick={() => setExpand(!expand)}>
            Veri Tabanı ve Erişimi: Microsoft SQL Server Database Management
            Basic
          </strong>
        </div>
      </div>
      {expand === true && (
        <>
          <div className="lecture-video-header row">
            <div className="mb-1">
              <text>ASPNET Core ve ASPNET Tarihçesi</text>
            </div>
            <sub>Video - 4 dk</sub>
          </div>
          <div className="lecture-video-header row">
            <div className="mb-1">
              <text>ASPNET Core ve ASPNET Tarihçesi</text>
            </div>
            <sub>Video - 4 dk</sub>
          </div>
          <div className="lecture-video-header row">
            <div className="mb-1">
              <text>ASPNET Core ve ASPNET Tarihçesi</text>
            </div>
            <sub>Video - 4 dk</sub>
          </div>
        </>
      )}
    </div>
  );
}

export default LectureContentHeader;
