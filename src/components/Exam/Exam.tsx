import React from "react";
import "./Exam.css";
import { useSelector } from "react-redux";
import { selectExams } from "../../store/slices/examSlice";

const Exam = ({ index }: any) => {
  const exams = useSelector(selectExams);

  return (
    <div className="col-md-6 col-12 mb-4">
      <div className="d-flex exam-card">
        <div className="exam-content">
          <span className="exam-name">{exams[index].examName}</span>
          <span className="lesson-name">{exams[index].studentClassName}</span>
          <span className="exam-time">45 Dakika</span>
        </div>
      </div>
    </div>
  );
};

export default Exam;
