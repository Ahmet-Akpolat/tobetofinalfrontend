import { useState } from "react";
import "./Exam.css";
import ExamModal from "./ExamModal/ExamModal";

const Exam = ({ exam, joinedExams }: any) => {
  const [modalShow, setModalShow] = useState(false);

  const isJoined = joinedExams?.some(
    (joinedExam: any) => joinedExam.quizId === exam.id
  );

  return (
    <div className="col-md-6 col-12 mb-4">
      <div
        className={`d-flex exam-card py-3 ${isJoined ? "is-joined" : ""}`}
        onClick={() => setModalShow(true)}
      >
        <div className="exam-content">
          <span className="exam-name">{exam.name}</span>
          <span className="lesson-name">{exam.studentClassName}</span>
          <span className="exam-time">{exam.duration + " Dakika"}</span>
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
