import "./ExperiencesCard.css";

function ExperiencesCard({ experience }: any) {
  console.log(experience);
  return (
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
      <div className="experiences-card-info-button"></div>
      <div className="experiences-card-delete-button"></div>
    </div>
  );
}

export default ExperiencesCard;
