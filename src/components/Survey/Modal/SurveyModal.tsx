import Modal from "react-bootstrap/Modal";
import { selectSurvey } from "../../../store/slices/surveySlice";
import { useSelector } from "react-redux";

function SurveyModal(props: any) {
  const surveys = useSelector(selectSurvey);

  return (
    <Modal
      {...props}
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
                  <b>{surveys[props.index].surveyName}</b>
                </span>
              </div>
            </div>
          </Modal.Header>
          <Modal.Body>
            <p>
              <a
                href={surveys[props.index].surveyUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ankete Git
              </a>
              <br /> <br />
              {surveys[props.index].surveyDescription}
            </p>
          </Modal.Body>
        </div>
      </div>
    </Modal>
  );
}

export default SurveyModal;
