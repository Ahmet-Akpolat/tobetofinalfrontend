import { useState } from "react";
import experienceService from "../../../../services/StudentProfileSettingsServices/experienceService";
import ExperienceModal from "../ExperienceDetailModal/ExperienceModal";
import "./ExperiencesCard.css";
import studentService from "../../../../services/studentService";
import { setStudent } from "../../../../store/slices/studentSlice";
import { useDispatch } from "react-redux";

function ExperiencesCard({ experience, setExperiences }: any) {
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);

  async function deleteStudentExperience(id: any): Promise<void> {
    await experienceService.delete(id);
    const newStudent = await studentService.getByToken();
    setExperiences(newStudent.studentExperiences)
    dispatch(setStudent(newStudent));
  }

  return (
    <div className="experiences-card mb-4">
      <div className="experiences-card-header d-flex justify-content-between">
        <div className="date">
          {experience.endDate === "0001-01-01T00:00:00" ? (
            <span>{`${experience.startDate.substring(
              0,
              4
            )}  -  Devam Ediyor`}</span>
          ) : (
            <span>{`${experience.startDate.substring(
              0,
              10
            )}  -  ${experience.endDate.substring(0, 10)}`}</span>
          )}
        </div>
      </div>
      <div className="experiences-card-detail d-flex col-11 justify-content-between">
        <div className="experiences-card-detail-col">
          <span className="experiences-card-detail-header">Kurum Adı</span>
          <span className="experiences-card-detail-content">
            {experience.companyName}
          </span>
        </div>
        <div className="experiences-card-detail-col">
          <span className="experiences-card-detail-header">Pozisyon</span>
          <span className="experiences-card-detail-content">
            {experience.position}
          </span>
        </div>
        <div className="experiences-card-detail-col">
          <span className="experiences-card-detail-header">Sektör</span>
          <span className="experiences-card-detail-content">
            {experience.sector}
          </span>
        </div>
        <div className="experiences-card-detail-col">
          <span className="experiences-card-detail-header">Şehir</span>
          <span className="experiences-card-detail-content">
            {experience.cityName}
          </span>
        </div>
      </div>
      <div
        className="experiences-card-info-button"
        onClick={() => setModalShow(true)}
      ></div>
      <div
        className="experiences-card-delete-button"
        onClick={() => deleteStudentExperience(experience.id)}
      ></div>
      <ExperienceModal
        studentExperience={experience}
        show={modalShow}
        onHide={() => setModalShow(false)}
      ></ExperienceModal>
    </div>
  );
}

export default ExperiencesCard;
