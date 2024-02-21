import { useState } from "react";
import { useSelector } from "react-redux";
import { GetByIdQuizResponse } from "../../models/responses/QuizResponses";
import ExamSession from "../../pages/ExamSession/ExamSession";
import { selectStudent } from "../../store/slices/studentSlice";
import ResultScreen from "../ResultScreen/ResultScreen";
import "./QuizCard.css";
type Props = {
  quizs: any;
};

const QuizCard = (props: Props) => {
  const [modalShow, setModalShow] = useState(false);
  const [selectedQuiz, setSelectedQuiz] = useState<GetByIdQuizResponse>();
  const [resultShow, setResultShow] = useState<boolean>(false);
  const [quizs, setQuizs] = useState(
    useSelector(selectStudent).studentQuizResults
  );

  const openExamModal = (quiz: any) => {
    setSelectedQuiz(quiz);
    setModalShow(true);
  };
  const openResultModal = (quiz: any) => {
    setSelectedQuiz(quiz);
    setResultShow(true);
  };

  return (
    <>
      {props.quizs?.map((quiz: any) => (
        <div className="dashboard-card-slim w-100">
          <div className="d-flex align-items-center" style={{ gap: "14px" }}>
            <div className="platformIcon"></div>
            <span className="quiz-header">
              {quiz.quiz.name}
              <br></br>
              {quiz.quiz.duration + " Dakika"}
            </span>
          </div>
          {quizs.some((joined: any) => quiz.quiz.id === joined.quizId) ? (
            <button
              className="quiz-btn btnnn btn-light"
              onClick={() => openResultModal(quiz.quiz)}
            >
              Raporu Görüntüle
            </button>
          ) : (
            <button
              className="quiz-btn btnnn btn-light"
              onClick={() => openExamModal(quiz.quiz)}
            >
              Başla
            </button>
          )}
        </div>
      ))}
      {modalShow && (
        <ExamSession
          show={modalShow}
          onHide={() => setModalShow(false)}
          quizId={selectedQuiz?.id}
        />
      )}
      {resultShow && (
        <ResultScreen
          show={resultShow}
          quizId={selectedQuiz?.id}
          onHide={() => setResultShow(false)}
        ></ResultScreen>
      )}
    </>
  );
};

export default QuizCard;
