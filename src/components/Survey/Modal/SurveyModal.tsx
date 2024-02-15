import Modal from "react-bootstrap/Modal";
import surveyService from "../../../services/surveyService";

function SurveyModal({ survey, show, onHide }: any) {
  const readSurvey = async () => {
    await surveyService.joinTheSurvey(survey.surveyId);
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="">
        <div className="modal-content">
          <Modal.Header closeButton>
            <div className="modal-hea">
              <div className="d-flex flex-column modal-header-text">
                <span className="text-dark">
                  <b>{survey.surveyName}</b>
                </span>
              </div>
            </div>
          </Modal.Header>
          <Modal.Body>
            <p>
              <div
                dangerouslySetInnerHTML={{
                  __html: survey.surveyDescription,
                }}
              />
            </p>
            <button
              className="save-button"
              onClick={() => {
                window.open(survey.surveyUrl, "_blank", "noreferrer");
                readSurvey();
              }}
            >
              Ankete Git
            </button>
          </Modal.Body>
        </div>
      </div>
    </Modal>
  );
}

export default SurveyModal;
