import { useState } from "react";
import "./Exam.css";
import ExamModal from "./ExamModal/ExamModal";

const Exam = ({ exam, joinedExams }: any) => {
  const [modalShow, setModalShow] = useState(false);
  const isJoined = joinedExams.some(
    (joinedExam: any) => joinedExam.examId === exam.examId
  );

  return (
    <div className="col-md-6 col-12 mb-4">
      <div
        className={`d-flex exam-card py-3 ${isJoined ? "is-joined" : ""}`}
        onClick={() => setModalShow(true)}
      >
        <div className="exam-content">
          <span className="exam-name">{exam.examName}</span>
          <span className="lesson-name">{exam.studentClassName}</span>
        </div>
      </div>
      <ExamModal
        exam={exam}
        isJoined={isJoined}
        show={modalShow}
        onHide={() => setModalShow(false)}
      ></ExamModal>
    </div>
  );
};

export default Exam;
