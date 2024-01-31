import { useEffect, useState } from "react";
import "./LectureContentHeader.css";
import { useDispatch, useSelector } from "react-redux";
import { selectLectureDetail } from "../../../store/slices/lectureDetailSlice";
import { setContent } from "../../../store/slices/contentSlice";
import lectureService from "../../../services/lectureService";

function LectureContentHeader({ index, contentsViews }: any) {
  const dispatch = useDispatch()
  const [expand, setExpand] = useState(false);
  const lecture = useSelector(selectLectureDetail);

  const lectureContents = lecture.courses;

  useEffect(() => {
    dispatch(setContent(lectureContents[0].contents[0]))
  }, [])

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
            {lectureContents[index].name}
          </strong>
        </div>
      </div>
      {expand === true && (
        <div>
          {lectureContents[index].contents.map((content: any, index: any) => (
            <div className="lecture-video-header row" onClick={() => dispatch(setContent(content))}>
              <div className="mb-1">
                <text>{content.name}</text>
              </div>
              <sub>{`Video ${content.duration} dk`}</sub>
              {
                contentsViews.includes(content.id) && (
                  <div className="is-finish"></div>
                ) 
              }
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default LectureContentHeader;
