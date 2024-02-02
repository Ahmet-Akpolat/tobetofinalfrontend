import { useState } from "react";
import experienceService from "../../../../services/experienceService";
import "./ExperiencesCard.css";
import ExperienceModal from "../ExperienceDetailModal/ExperienceModal";
import { StudentExperienceResponse } from "../../../../models/responses/StudentExperienceResponses";

function ExperiencesCard({ experience }: any) {
  const [modalShow, setModalShow] = useState(false);


  async function deleteExperience(id: any): Promise<void>  {
    await experienceService.delete(id).then(()=>window.location.reload());
  }

  return (
    <>
        <div className="experiences-card mb-4">
      <div className="experiences-card-header d-flex justify-content-between">
        <div className="date">
          {experience.endDate === null ? (
            <span>{`${experience.startDate.substring(0, 4)}  -  Devam Ediyor`}</span>
          ) : (<span>{`${experience.startDate.substring(0, 10)}  -  ${experience.endDate.substring(0, 10)}`}</span>)}
        </div>
      </div>
      <div className="experiences-card-detail d-flex col-11 justify-content-between">
        <div className="experiences-card-detail-col">
          <span className="experiences-card-detail-header">Kurum Adı</span>
          <span className="experiences-card-detail-content">{experience.companyName}</span>
        </div>
        <div className="experiences-card-detail-col">
          <span className="experiences-card-detail-header">Pozisyon</span>
          <span className="experiences-card-detail-content">
            {experience.position}
          </span>
        </div>
        <div className="experiences-card-detail-col">
          <span className="experiences-card-detail-header">Sektor</span>
          <span className="experiences-card-detail-content">{experience.sector}</span>
        </div>
        <div className="experiences-card-detail-col">
          <span className="experiences-card-detail-header">Sehir</span>
          <span className="experiences-card-detail-content">{experience.cityName}</span>
        </div>
      </div>
      <div className="experiences-card-info-button" onClick={()=>setModalShow(true)}></div>
      <div className="experiences-card-delete-button" onClick={()=> deleteExperience(experience.id)}></div>
    </div>
    <ExperienceModal studentExperience={experience} show={modalShow} onHide={() => setModalShow(false)}></ExperienceModal>
    </>
  );
}

export default ExperiencesCard;
