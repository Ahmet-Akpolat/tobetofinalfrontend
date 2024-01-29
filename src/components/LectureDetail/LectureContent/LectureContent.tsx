import "./LectureContent.css";
import LectureContentHeader from "../LectureContentHeader/LectureContentHeader";
import { Scrollbar } from "react-scrollbars-custom";
import LectureVideo from "../LectureVideo/LectureVideo";
import React from "react";
import { useSelector } from "react-redux";
import { selectLectureDetail } from "../../../store/slices/lectureDetailSlice";
import NoContent from "../../NoContent/NoContent";

interface Props {
  setShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
}

function LectureContent({ setShowDetail }: Props) {
  const lecture = useSelector(selectLectureDetail);

  return (
    <>
      {lecture.courses.length === 0 ? (
        <div style={{ height: "540px" }}>
          <NoContent content="içerik" />
        </div>
      ) : (
        <div className="row">
          <div className="col-lg-5 col-sm-12 col-xs-12">
            <Scrollbar style={{ minHeight: "500px" }}>
              {lecture.courses.map((_: any, index: any) => (
                <LectureContentHeader key={index} index={index} />
              ))}
            </Scrollbar>
          </div>
          <div className="col-lg-7 col-sm-12 col-xs-12">
            <LectureVideo setShowDetail={setShowDetail} />
          </div>
        </div>
      )}
    </>
  );
}

export default LectureContent;
