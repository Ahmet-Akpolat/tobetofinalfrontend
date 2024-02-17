import React, { useState } from 'react'
import './QuizCard.css'
import { GetByIdQuizResponse } from '../../models/responses/QuizResponses'
import ExamSession from '../../pages/ExamSession/ExamSession'
type Props = {
    quizs:GetByIdQuizResponse[]|undefined
}


const QuizCard = (props: Props) => {
  const [modalShow, setModalShow] = useState(false);
  const[selectedQuiz,setSelectedQuiz]=useState<GetByIdQuizResponse>();

  const openExamModal = (quiz:GetByIdQuizResponse)=>{
    setSelectedQuiz(quiz);
    setModalShow(true)
  }

return (
    <>
    {props.quizs?.map((quiz:GetByIdQuizResponse)=>(
      <div className="dashboard-card-slim">
        <div className="d-flex align-items-center" style={{gap:"14px"}}>
          <div className="platformIcon"></div>
          <span>{quiz.name}</span>
          
      </div>
      <button className="btn btn-light" onClick={()=>openExamModal(quiz)}>Başla</button>
     </div>
      )
  )}
    { modalShow &&(<ExamSession show={modalShow}  onHide={() => setModalShow(false)} quizId={selectedQuiz?.id}/>)} 
   
    </>
)
}

export default QuizCard;