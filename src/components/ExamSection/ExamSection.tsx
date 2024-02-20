import { useSelector } from "react-redux";
import { selectExams } from "../../store/slices/examSlice";
import NoContent from "../NoContent/NoContent";
import QuizCard from "../QuizCard/QuizCard";

function ExamSection() {
  const quizs = useSelector(selectExams);

  return (
    <div className="container main-section d-flex align-items-center justify-content-center">
      <div className="exam cv-box cv-padding display-flex mmt-n-4 main-section">
        <span className="exam-header">Sınavlarım</span>
        <div className="col-12 mt-3 mb-3">
          <div className="tab-pane fade show active">
            <div className="exam-list d-flex gap-2">
              {quizs.length === 0 ? (
                <NoContent content="sınavınız" />
              ) : (
                <QuizCard quizs={quizs} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExamSection;
