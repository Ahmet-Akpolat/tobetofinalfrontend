import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectExams } from "../../store/slices/examSlice";
import NoContent from "../NoContent/NoContent";
import Exam from "../Exam/Exam";
import examService from "../../services/examService";
import { toast } from "react-toastify";
import exceptionService from "../../utils/exceptionService";

function ExamSection() {
  const exams = useSelector(selectExams);
  const [joinedExams, setJoinedExams] = useState([] as any);

  const getJoinedExams = async () => {
    const data = (await examService.getJoinedExams()).data?.items;
    setJoinedExams(data);
  };

  useEffect(() => {
    getJoinedExams();
  }, []);

  return (
    <div className="container d-flex align-items-center justify-content-center">
      <div className="exam cv-box cv-padding display-flex mmt-n-4 main-section">
        <span className="exam-header">Sınavlarım</span>
        <div className="col-12 mt-3 mb-3">
          <div className="tab-pane fade show active">
            <div className="row p-2">
              {exams.length === 0 ? (
                <NoContent content="sınavınız" />
              ) : (
                exams.map((exam: any) => (
                  <Exam exam={exam} joinedExams={joinedExams} />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExamSection;
