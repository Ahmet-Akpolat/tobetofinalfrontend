import { toast } from "react-toastify";
import socialMediaService from "../../../../services/StudentProfileSettingsServices/socialMediaService";
import "./SocialMediaCard.css";
import exceptionService from "../../../../utils/exceptionService";

function SocialMediaCard({ socialMedia, setSocialMedias }: any) {
  
  const deleteSocialMedia = async (id: any) => {
    await socialMediaService.deleteStudentSocialMedias(id);
    setSocialMedias((arr: any) => {
      return arr.filter((sc: any) => sc.id !== id);
    });
  };

  return (
    <div className="social-media-card">
      <label>{socialMedia.socialMediaName}</label>
      <div className="social-media-card-content mb-4">
        <div className="d-flex align-items-center gap-2">
          <img src={socialMedia.socialMediaLogoUrl}></img>
          <text>{socialMedia.mediaAccountUrl}</text>
        </div>
      </div>
      <div
        className="social-media-delete-button"
        onClick={() => deleteSocialMedia(socialMedia.id)}
      ></div>
    </div>
  );
}

export default SocialMediaCard;
