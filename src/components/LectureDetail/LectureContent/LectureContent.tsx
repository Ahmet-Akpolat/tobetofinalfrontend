import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Scrollbar } from "react-scrollbars-custom";
import lectureService from "../../../services/lectureService";
import { setContentViews } from "../../../store/slices/contenViewsSlice";
import { selectLectureDetail } from "../../../store/slices/lectureDetailSlice";
import NoContent from "../../NoContent/NoContent";
import LectureContentHeader from "../LectureContentHeader/LectureContentHeader";
import LectureVideo from "../LectureVideo/LectureVideo";
import "./LectureContent.css";

interface Props {
  setShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
}

function LectureContent({ setShowDetail }: Props) {
  const dispatch = useDispatch();
  const lecture = useSelector(selectLectureDetail);

  async function getContentsIsWatched() {
    const lectureContentViews = await lectureService.getContentsIsWatched(
      lecture.id
    );
    const contentsViews = [] as any;
    lectureContentViews.data.forEach((content: any) => {
      contentsViews.push(content.contentId);
    });
    dispatch(setContentViews(contentsViews));
  }

  useEffect(() => {
    getContentsIsWatched();
  }, []);

  return (
    <>
      {lecture.courses.length === 0 ? (
        <div style={{ height: "540px" }}>
          <NoContent content="içerik" />
        </div>
      ) : (
        <div className="row">
          <div className="col-lg-5 col-sm-12 col-xs-12">
            <Scrollbar style={{ minHeight: "220px" }}>
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
