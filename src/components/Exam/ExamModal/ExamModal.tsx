import Modal from "react-bootstrap/Modal";
import { selectAnnouncement } from "../../../store/slices/announcementSlice";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import ExceptionService from "../../../utils/exceptionService";
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
                    {exam.examName} | {exam.studentClassName}
                  </b>
                </span>
              </div>
            </div>
          </Modal.Header>
          <Modal.Body>
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
