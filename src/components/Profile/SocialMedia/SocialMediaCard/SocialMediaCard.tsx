import "./SocialMediaCard.css";

function SocialMediaCard() {
  return (
    <div className="social-media-card">
      <label>LinkedIn</label>
      <div className="social-media-card-content mb-4">
        <div className="d-flex align-items-center gap-2">
          <img src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffavicon.8d36733b.ico&w=32&q=75"></img>
          <text>https://github.com/yugurlu</text>
        </div>
      </div>
    </div>
  );
}

export default SocialMediaCard;
