import { Modal } from "react-bootstrap";
import { StudentExperienceResponse } from "../../../../models/responses/StudentExperienceResponses";

type Props = {
  studentExperience: StudentExperienceResponse;
  show: boolean;
  onHide: () => void;
};

const ExperienceModal = (props: Props) => {
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
                  <b>İş Açıklaması</b>
                </span>
              </div>
            </div>
          </Modal.Header>
          <Modal.Body>
            <p>{props.studentExperience?.description}</p>
          </Modal.Body>
        </div>
      </div>
    </Modal>
  );
};

export default ExperienceModal;
