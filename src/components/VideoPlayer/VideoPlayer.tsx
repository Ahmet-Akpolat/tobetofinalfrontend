import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import { selectContent } from "../../store/slices/contentSlice";
import { useEffect, useState } from "react";
import lectureService from "../../services/lectureService";
import { selectLectureDetail } from "../../store/slices/lectureDetailSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import exceptionService from "../../utils/exceptionService";
import {
  selectContentViews,
  setContentViews,
} from "../../store/slices/contenViewsSlice";

function VideoPlayer() {
  const dispatch = useDispatch();
  const contentViews = useSelector(selectContentViews);
  const content = useSelector(selectContent);
  const lecture = useSelector(selectLectureDetail);

  const videoViewed = async () => {
    await lectureService.setContentIsWatched(lecture.id, content.id);
    dispatch(setContentViews([...contentViews, content.id]));
  };

  return (
    <ReactPlayer
      url={content.videoUrl}
      width="100%"
      height="390px"
      controls={true}
      onEnded={() => {
        videoViewed();
      }}
    />
  );
}

export default VideoPlayer;
