import { toast } from "react-toastify";
import educationService from "../../../../services/StudentProfileSettingsServices/educationService";
import "./EducationCard.css";
import exceptionService from "../../../../utils/exceptionService";

function EducationCard({ education, setEducations }: any) {
  async function deleteStudentEducation(id: any) {
    await educationService.delete(id);
    setEducations((arr: any) => {
      return arr.filter((edu: any) => edu.id !== id);
    });
  }

  return (
    <div className="education-card mb-4">
      <div className="education-card-header d-flex justify-content-between">
        <div className="date">
          {education.graduationDate === "0001-01-01T00:00:00" ? (
            <span>{`${education.startDate.substring(
              0,
              4
            )}  -  Devam Ediyor`}</span>
          ) : (
            <span>{`${education.startDate.substring(
              0,
              10
            )}  -  ${education.graduationDate.substring(0, 10)}`}</span>
          )}
        </div>
        <span>{education.educationStatus}</span>
      </div>
      <div className="education-card-detail d-flex justify-content-between col-11 col-lg-7">
        <div className="education-card-detail-col">
          <span className="education-card-detail-header">Universite</span>
          <span className="education-card-detail-content">
            {education.schoolName}
          </span>
        </div>
        <div className="education-card-detail-col">
          <span className="education-card-detail-header">Bolum</span>
          <span className="education-card-detail-content">
            {education.branch}
          </span>
        </div>
      </div>
      <div
        className="education-card-delete-button"
        onClick={() => deleteStudentEducation(education.id)}
      ></div>
    </div>
  );
}

export default EducationCard;
