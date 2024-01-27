import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { selectContent } from "../../store/slices/contentSlice";

function VideoPlayer() {
  const content = useSelector(selectContent)

  return (
    <ReactPlayer
      url={content.videUrl}
      width="100%"
      height="auto"
      controls={true}
    />
  );
}

export default VideoPlayer;
