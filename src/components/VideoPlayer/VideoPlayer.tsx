import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { selectContent } from "../../store/slices/contentSlice";
import { useEffect, useState } from "react";
import lectureService from "../../services/lectureService";
import { selectLectureDetail } from "../../store/slices/lectureDetailSlice";
import { useNavigate } from "react-router-dom";

function VideoPlayer({ setContentsViews }: any) {
  const navigate = useNavigate();
  const content = useSelector(selectContent);
  const lecture = useSelector(selectLectureDetail);

  const videoViewed = async () => {
    try {
      await lectureService.setContentIsWatched(lecture.id, content.id);
      window.location.reload();
    } catch (error) {
      console.log(error);
      navigate("/login");
    }
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
