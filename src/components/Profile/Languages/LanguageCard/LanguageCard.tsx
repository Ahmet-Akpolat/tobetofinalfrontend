import { useDispatch } from "react-redux";
import languagesService from "../../../../services/StudentProfileSettingsServices/languagesService";
import studentService from "../../../../services/studentService";
import "./LanguageCard.css";
import { setStudent } from "../../../../store/slices/studentSlice";

function LanguageCard({ language, setLanguages }: any) {
  const dispatch = useDispatch();

  const deleteStudentLanguage = async (id: any) => {
    await languagesService.deleteStudentLanguage(id);
    const newStudent = await studentService.getByToken() as any;
    setLanguages(newStudent.languageLevels);
    dispatch(setStudent(newStudent));
  };

  return (
    <div className="language-card d-flex gap-2 align-items-center">
      <div className="language-card-content d-flex flex-column ">
        <span className="language-name">{language.languageName}</span>
        <span className="language-degree">{language.languageLevelName}</span>
      </div>
      <div
        className="language-card-delete"
        onClick={() => deleteStudentLanguage(language.id)}
      ></div>
    </div>
  );
}

export default LanguageCard;
