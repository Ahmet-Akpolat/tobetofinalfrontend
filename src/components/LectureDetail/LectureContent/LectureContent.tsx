import "./LectureContent.css";
import LectureContentHeader from "../LectureContentHeader/LectureContentHeader";
import { Scrollbar } from "react-scrollbars-custom";
import LectureVideo from "../LectureVideo/LectureVideo";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLectureDetail } from "../../../store/slices/lectureDetailSlice";
import NoContent from "../../NoContent/NoContent";
import { setContent } from "../../../store/slices/contentSlice";
import lectureService from "../../../services/lectureService";

interface Props {
  setShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
}

function LectureContent({ setShowDetail }: Props) {
  const lecture = useSelector(selectLectureDetail);
  const [contentsViews, setContentsViews] = useState([] as any);

  async function getContentsIsWatched() {
    try {
      const contentViews = await lectureService.getContentsIsWatched(
        lecture.id
      );
      setContentsViews([]);
      contentViews.data.forEach((content: any) => {
        contentsViews.push(content.contentId);
      });
    } catch (error) {
      console.log(error);
    }
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
            <Scrollbar style={{ minHeight: "500px" }}>
              {lecture.courses.map((_: any, index: any) => (
                <LectureContentHeader
                  key={index}
                  index={index}
                  contentsViews={contentsViews}
                />
              ))}
            </Scrollbar>
          </div>
          <div className="col-lg-7 col-sm-12 col-xs-12">
            <LectureVideo
              setShowDetail={setShowDetail}
              setContentsViews={setContentsViews}
              lectureId={lecture.id}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default LectureContent;
