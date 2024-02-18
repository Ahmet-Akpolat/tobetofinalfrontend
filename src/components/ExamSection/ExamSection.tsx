import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import examService from "../../services/examService";
import { selectExams } from "../../store/slices/examSlice";
import Exam from "../Exam/Exam";
import NoContent from "../NoContent/NoContent";
import quizService from "../../services/quizService";
import QuizCard from "../ReviewQuizCard/QuizCard";

function ExamSection() {
  const exams = useSelector(selectExams);

  useEffect(() => {
   console.log(exams);
   
  }, []);

  return (
    <div className="container main-section d-flex align-items-center justify-content-center">
      <div className="exam cv-box cv-padding display-flex mmt-n-4 main-section">
        <span className="exam-header">Sınavlarım</span>
        <div className="col-12 mt-3 mb-3">
          <div className="tab-pane fade show active">
            <div className="row p-2">
              {exams.length === 0 ? (
                <NoContent content="sınavınız" />
              ) : <>
                  <QuizCard quizs={exams}/>
                  </>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExamSection;
