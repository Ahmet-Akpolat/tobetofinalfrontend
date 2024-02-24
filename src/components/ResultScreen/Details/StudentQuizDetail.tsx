import { useEffect, useState } from "react";
import quizervice from "../../../services/quizService";
import "./StudentQuizDetail.css";
import { ClipLoader } from "react-spinners";
import { number } from "yup";

type Props = {
  quizId: number | undefined;
};

const ExamModal = (props: Props) => {
  const [quiz, setquiz] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [questionCount,setQuestionCount]=useState(number);

  const getquiz = async () => {
    setLoading(true);
    if (props.quizId != undefined) {
      await quizervice.getByQuizDetailWithByQuizId(props.quizId).then((r) => {
        setquiz(r);
        
      });
    }
    setLoading(false);
  };

  useEffect(() => {
    getquiz();
  }, []);

  return (
    <div>
      <div>
        {loading ? (
          <ClipLoader
            className="quiz-screen-loading"
            color="#9933ff"
            size={50}
          />
        ) : (
          <div className="xx">
            <div className="question2">
              <div className="text-center" style={{ fontSize: "xx-large" }}>
                {quiz?.name}
              </div>
            </div>
            <div className="question2">
              <div className="progress-bar"></div>
              {quiz?.questions.map((question: any) => (
                <div className="main ">
                   
                  <div className="title text-center">
                  {quiz.studentOptions.some(
                            (d: any) =>
                              d.questionId == question.id &&
                              d.optionId == question.correctOptionId
                          ) && (<div className="btnx successsbtn text-center"><a >Doğru</a></div>)}
                    {quiz.studentOptions.some(
                            (d: any) =>
                              d.questionId == question.id &&
                              d.optionId != question.correctOptionId
                          ) && (<div className="text-center btnx wrongButton"><a >Yanlış</a></div>)}
                    {!quiz.studentOptions.some(
                            (d: any) =>
                              question.id==d.questionId
                          ) && (<div className="text-center btnx emptyButton"><a >İşaretlenmedi</a></div>)}
                    <p>
                   
                      <span>{question.sentence}</span>
                    </p>
                  
                      {question.imageUrl != null && (  <p>
                        <img
                          className="image_resized"
                          style={{ width: "78.26%" }}
                          src={question.imageUrl}
                          alt="44.png"
                          sizes="100vw"
                        /></p>
                      )}
                    
                  </div>
                  <div className="options d-flex justify-content-center">
                    {question.questionOptions.map((option: any) => (
                      <div
                        className={`option2 text-center w-75 ${
                          option.option.id === question.correctOptionId
                            ? "active"
                            : ""
                        } ${
                          quiz.studentOptions.some(
                            (d: any) =>
                              d.questionId == question.id &&
                              d.optionId == option.option.id
                          ) && "wrong"
                        }`}
                      >
                        <p>
                          {option.option.text}
                          {quiz.studentOptions.some(
                            (d: any) =>
                              d.questionId == question.id &&
                              d.optionId == option.option.id
                          ) && " (Seçiminiz)"}
                        </p>
                      </div>
                      
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExamModal;
