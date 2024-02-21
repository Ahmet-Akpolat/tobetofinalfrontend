import Modal from "react-bootstrap/Modal";
import examService from "../../../services/examService";

function ExamModal({ exam, isJoined, show, onHide }: any) {
  const joinTheExam = async () => {
    await examService.joinTheExam(exam.examId);
    window.open(exam.examExamUrl, "_blank", "noreferrer");
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div>
        <div className="modal-content">
          <Modal.Header closeButton>
            <div className="modal-hea">
              <div className="d-flex flex-column modal-header-text">
                <span className="text-dark">
                  <b>
                    {exam.name} | {exam.studentClassName}
                  </b>
                </span>
              </div>
            </div>
          </Modal.Header>
          <Modal.Body>
            {exam.description}
            {exam.examIsActive === true && isJoined === false ? (
              <button className="save-button" onClick={joinTheExam}>
                Sınava başla
              </button>
            ) : (
              <p>Bu Sınav artık aktif değil.</p>
            )}
          </Modal.Body>
        </div>
      </div>
    </Modal>
  );
}

export default ExamModal;
