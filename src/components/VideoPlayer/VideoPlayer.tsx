import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { selectContent } from "../../store/slices/contentSlice";
import { useEffect, useState } from "react";
import lectureService from "../../services/lectureService";
import { selectLectureDetail } from "../../store/slices/lectureDetailSlice";

function VideoPlayer({ setContentsViews }: any) {
  const [videoProgress, setVideoProgress] = useState(0)
  const content = useSelector(selectContent);
  const lecture = useSelector(selectLectureDetail);

  const videoViewed = async () => {
    if (videoProgress == content.duration) {
      setContentsViews((arr: []) => [...arr, content.id])
      try {
        await lectureService.setContentIsWatched(lecture.id, content.id)
      }
      catch (error) {
        console.log(error)
      }
    }
  }

  useEffect(() => {
    videoViewed()
  }, [videoProgress])

  return (
    <ReactPlayer
      url={content.videoUrl}
      width="100%"
      height="390px"
      controls={true}
      onProgress={(progress) => {
        setVideoProgress(progress.played)
      }}
    />
  );
}

export default VideoPlayer;
