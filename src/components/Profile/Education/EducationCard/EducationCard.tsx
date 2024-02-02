import "./EducationCard.css";

function EducationCard() {
  return (
    <div className="education-card mb-4">
      <div className="education-card-header d-flex justify-content-between">
        <div className="date">
          <span>2022 - Devam Ediyor</span>
        </div>
        <span>Lisans</span>
      </div>
      <div className="education-card-detail d-flex justify-content-between col-11 col-lg-7">
        <div className="education-card-detail-col">
          <span className="education-card-detail-header">Universite</span>
          <span className="education-card-detail-content">Istanbul</span>
        </div>
        <div className="education-card-detail-col">
          <span className="education-card-detail-header">Bolum</span>
          <span className="education-card-detail-content">
            Yazilim Muhendisligi
          </span>
        </div>
      </div>
      <div className="education-card-delete-button"></div>
    </div>
  );
}

export default EducationCard;
