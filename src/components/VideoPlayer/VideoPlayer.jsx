import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { selectContent } from "../../store/slices/contentSlice";

function VideoPlayer() {
  const content = useSelector(selectContent);
  return (
    <ReactPlayer
      url={content.videoUrl}
      width="100%"
      height="395px"
      controls={true}
    />
  );
}

export default VideoPlayer;
