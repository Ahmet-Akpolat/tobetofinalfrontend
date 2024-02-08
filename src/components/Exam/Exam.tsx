import React, { useState } from "react";
import "./Exam.css";
import { useSelector } from "react-redux";
import { selectExams } from "../../store/slices/examSlice";
import ExamModal from "./ExamModal/ExamModal";

const Exam = ({ exam, joinedExams }: any) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="col-md-6 col-12 mb-4">
      <div className="d-flex exam-card py-3" onClick={() => setModalShow(true)}>
        <div className="exam-content">
          <span className="exam-name">{exam.examName}</span>
          <span className="lesson-name">{exam.studentClassName}</span>
        </div>
      </div>
      <ExamModal
        exam={exam}
        joinedExams={joinedExams}
        show={modalShow}
        onHide={() => setModalShow(false)}
      ></ExamModal>
    </div>
  );
};

export default Exam;
