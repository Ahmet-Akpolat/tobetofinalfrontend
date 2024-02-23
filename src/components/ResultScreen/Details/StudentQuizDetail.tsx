import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import './StudentQuizDetail.css'
import quizervice from "../../../services/quizService";

type Props = {
    quizId: number | undefined;
};

const ExamModal = (props: Props) => {
    const [quiz, setquiz] = useState<any>();
    const [choosenOption, setChoosenOption] = useState();
    const [quizCount,setquizCount]=useState(0);
    const [examModalControl, setExamModalControl] = useState<boolean>();
    const [minuteControl, setMinuteControl] = useState(true);
    const [show, setModalShow] = useState(false);

    const getquiz = async () => {
        if (props.quizId != undefined) {
            await quizervice.getByQuizDetailWithByQuizId(props.quizId).then((r) => {
                setquiz(r);
                console.log(r);
                
                console.log(r.studentOptions);
                
            });
        }
    };
    useEffect(() => {
        getquiz();

    }, []);

    return (
        <>

            {(
                <>
                    <div className="question">
                        <div className="text-center" style={{fontSize:'xx-large'}}>
                            {quiz?.name}
                        </div>
                    </div>
                    <div className="question">
                        <div className="progress-bar"></div>
                        {quiz?.questions.map((question:any)=>(
                             <div className="main ">
                             <div className="title text-center">
                                 <p>
                                     <span>
                                         {
                                             question.sentence
                                         }
                                         
                                     </span>
                                 </p>
                                 <p>
                                     {question.imageUrl!=null && (
                                             <img
                                                 className="image_resized"
                                                 style={{ width: "78.26%" }}
                                                 src={
                                                    question.imageUrl
                                                 }
                                                 alt="44.png"
                                                 sizes="100vw"
                                             />
                                         )}
                                 </p>
                             </div>
                             <div className="options">
                                 {question.questionOptions.map((option: any) => (
                                    
                                     <div
                                     className={`option text-center ${
                                        option.option.id === question.correctOptionId
                                          ? "active"
                                          : ""
                                      } ${quiz.studentOptions.some((d:any)=>d.questionId==question.id&&d.optionId==option.option.id)&&"wrong"}`}
                                         
                                     >
                                         <p>{option.option.text}{quiz.studentOptions.some((d:any)=>d.questionId==question.id&&d.optionId==option.option.id)&&" (Bu Seçeneği Seçtiniz)"}</p>
                                         
                                     </div>
                                 ))}
                             </div>
                         </div>
                        ))}
                       
                        {/* <button onClick={() => setShowDetails(true)} className="btn btn-primary mt-8 ms-auto me-auto" style={{ width: "max-content" }}>
                            Detayları Görüntüle
                        </button> */}
                    </div>
                </>
            )}



        </>
    );
};

export default ExamModal;
