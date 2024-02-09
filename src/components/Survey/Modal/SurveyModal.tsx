import Modal from "react-bootstrap/Modal";
import { selectSurvey } from "../../../store/slices/surveySlice";
import { useSelector } from "react-redux";

function SurveyModal({ survey, show, onHide }: any) {
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
            <p>{survey.surveyDescription}</p>
            <button
              className="save-button"
              onClick={() =>
                window.open(survey.surveyUrl, "_blank", "noreferrer")
              }
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
