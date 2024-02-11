import { toast } from "react-toastify";
import languagesService from "../../../../services/StudentProfileSettingsServices/languagesService";
import "./LanguageCard.css";
import exceptionService from "../../../../utils/exceptionService";

function LanguageCard({ language, setLanguages }: any) {

  const deleteStudentSkills = async (id: any) => {
    await languagesService.deleteStudentLanguage(id);
    setLanguages((arr: any) => {
      return arr.filter((lang: any) => lang.id !== id);
    });
  };

  return (
    <div className="language-card d-flex gap-2 align-items-center">
      <div className="language-card-content d-flex flex-column ">
        <span className="language-name">{language.languageName}</span>
        <span className="language-degree">{language.languageLevelName}</span>
      </div>
      <div
        className="language-card-delete"
        onClick={() => deleteStudentSkills(language.id)}
      ></div>
    </div>
  );
}

export default LanguageCard;
