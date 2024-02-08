import Modal from "react-bootstrap/Modal";
import { selectAnnouncement } from "../../../store/slices/announcementSlice";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import ExceptionService from "../../../utils/exceptionService";
import examService from "../../../services/examService";

function ExamModal({ exam, joinedExams, show, onHide }: any) {
  console.log(joinedExams);

  const joinTheExam = async () => {
    try {
      await examService.joinTheExam(exam.examId);
      window.open(exam.examExamUrl, "_blank", "noreferrer");
    } catch (error: any) {
      toast.error(
        ExceptionService.errorSelector(JSON.stringify(error.response.data))
      );
    }
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
                  <b>
                    {exam.examName} | {exam.studentClassName}
                  </b>
                </span>
              </div>
            </div>
          </Modal.Header>
          <Modal.Body>
            {exam.examIsActive === true ? (
              <button className="save-button" onClick={joinTheExam}>
                Sinava Basla
              </button>
            ) : (
              <p>Sinav Artik Aktif Degil</p>
            )}
          </Modal.Body>
        </div>
      </div>
    </Modal>
  );
}

export default ExamModal;
