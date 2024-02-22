import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectContentViews } from "../../../store/slices/contenViewsSlice";
import { setContent } from "../../../store/slices/contentSlice";
import { selectLectureDetail } from "../../../store/slices/lectureDetailSlice";
import "./LectureContentHeader.css";

function LectureContentHeader({ index }: any) {
  const dispatch = useDispatch();
  const [expand, setExpand] = useState(false);
  const lecture = useSelector(selectLectureDetail);
  const contentViews = useSelector(selectContentViews);

  const lectureContents = lecture.courses;

  useEffect(() => {
    outerLoop: for (var i = 0; lectureContents[i]; i++) {
      for (var j = 0; lectureContents[i].contents[j]; j++) {
        if (
          !contentViews.some(
            (contentView: any) =>
              contentView === lectureContents[i].contents[j].id
          )
        ) {
          dispatch(setContent(lectureContents[i].contents[j]));
          break outerLoop;
        }
      }
    }
  }, []);

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
            <div
              className="lecture-video-header row"
              onClick={() => dispatch(setContent(content))}
            >
              <div className="mb-1">
                <text>{content.name}</text>
              </div>
              <sub>{`Video ${content.duration} dk`}</sub>
              {contentViews.includes(content.id) && (
                <div className="is-finish"></div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default LectureContentHeader;
