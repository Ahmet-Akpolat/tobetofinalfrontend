import ReactPlayer from "react-player";

function VideoPlayer() {
  return (
    <ReactPlayer
      url="https://enocta-mn360.mncdn.com/p/132/sp/13200/playManifest/entryId/0_tz585tol/format/applehttp/protocol/https/a.m3u8?st=6cn4Q-eZPuf6fxDHqE-W2A&e=1704865332"
      width="100%"
      height="auto"
      controls={true}
    />
  );
}

export default VideoPlayer;
