import "./LectureContent.css";
import LectureContentHeader from "../LectureContentHeader/LectureContentHeader";
import { Scrollbar } from "react-scrollbars-custom";
import LectureVideo from "../LectureVideo/LectureVideo";
import React from "react";

interface Props {
    setShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
}

const LectureContent: React.FC<Props> = ({ setShowDetail }) => {
  return (
    <div className="lecture-contents row">
      <div className="col-lg-5 col-sm-12 col-xs-12">
        <Scrollbar style={{ minHeight: "500px" }}>
          <LectureContentHeader />
          <LectureContentHeader />
          <LectureContentHeader />
          <LectureContentHeader />
          <LectureContentHeader />
          <LectureContentHeader />
          <LectureContentHeader />
          <LectureContentHeader />
          <LectureContentHeader />
          <LectureContentHeader />
          <LectureContentHeader />
          <LectureContentHeader />
          <LectureContentHeader />
          <LectureContentHeader />
        </Scrollbar>
      </div>
      <div className="col-lg-7 col-sm-12 col-xs-12">
        <LectureVideo setShowDetail={setShowDetail} />
      </div>
    </div>
  );
}

export default LectureContent;
