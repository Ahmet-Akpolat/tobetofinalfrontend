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
            <p>
              <a
                href={survey.surveyUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ankete Git
              </a>
              <br /> <br />
              {survey.surveyDescription}
            </p>
          </Modal.Body>
        </div>
      </div>
    </Modal>
  );
}

export default SurveyModal;
