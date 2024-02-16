import { useDispatch } from "react-redux";
import educationService from "../../../../services/StudentProfileSettingsServices/educationService";
import "./EducationCard.css";
import studentService from "../../../../services/studentService";
import { setStudent } from "../../../../store/slices/studentSlice";

function EducationCard({ education, setEducations }: any) {
  const dispatch = useDispatch();

  async function deleteStudentEducation(id: any) {
    await educationService.delete(id);
    const newStudent = await studentService.getByToken();
    setEducations(newStudent.studentEducations);
    dispatch(setStudent(newStudent));
  }

  return (
    <div className="education-card mb-4">
      <div className="education-card-header d-flex justify-content-between">
        <div className="date">
          {education.graduationDate === "0001-01-01T00:00:00" ? (
            <span>{`${education.startDate.substring(
              0,
              4
            )} / Devam Ediyor`}</span>
          ) : (
            <span>{`${education.startDate.substring(
              0,
              10
            )} / ${education.graduationDate.substring(0, 10)}`}</span>
          )}
        </div>
        <span>{education.educationStatus}</span>
      </div>
      <div className="education-card-detail d-flex justify-content-between col-11 col-lg-7">
        <div className="education-card-detail-col">
          <span className="education-card-detail-header">Üniversite</span>
          <span className="education-card-detail-content">
            {education.schoolName}
          </span>
        </div>
        <div className="education-card-detail-col">
          <span className="education-card-detail-header">Bölüm</span>
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
