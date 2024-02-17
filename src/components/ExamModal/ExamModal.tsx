import React, { useEffect, useState } from 'react'
import './ExamModal.css'
import { Modal } from 'react-bootstrap'
import quizService from '../../services/quizService'

type Props = {
    show:boolean
    quizId:number|undefined
    onHide:any
}

const ExamModal = (props: Props) => {
    const [quizQuestions,setQuizQuestions]=useState<any>();
    const [quizQuestionCount,setQuizQuestionCount]=useState(0);
    const [choosenOption,setChoosenOption]=useState();
    const getQuizQuestions = async () =>{
        if (props.quizId!=undefined) {
           await quizService.getQuizSessionById(props.quizId).then((r)=>{
            setQuizQuestions(r.data);
            console.log(r.data);
            
          });
        }
      }
    useEffect(()=>{
        getQuizQuestions();
    },[])
  return (
    <>
    <Modal
      show={props.show}
      onHide={props.onHide}
      size='xl'
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="">
        <div className="modal-content">
          <Modal.Header>{quizQuestions?.name}</Modal.Header>
          <Modal.Body>
          <div className="quiz-screen">
               <div className="question">
                    <div className="d-flex justify-content-between">
                        <div className="question-count">
                             <b>{quizQuestionCount+1}</b>/<b>{quizQuestions?.questions.length}</b>
                        </div>
                        <div className="question-count">
                            <b>25:</b><b>48</b>
                        </div>
                    </div>
               </div>
               <div className="question">
                    <div className="progress-bar"></div>
                    <div className="main">
                        <div className="title">
                            <p><span >{quizQuestions?.questions[quizQuestionCount].sentence}?</span></p>
                            <p>
                            {quizQuestions?.questions[quizQuestionCount].imageUrl && (<img className="image_resized" style={{width:'78.26%'}} src={quizQuestions?.questions[quizQuestionCount].imageUrl} alt="44.png" sizes="100vw"/>)}   </p>
                        </div>
                        <div className="options">
                        {quizQuestions?.questions[quizQuestionCount].questionOptions.map((option:any)=>(
                            <div
                            className={`option ${option.option.id === choosenOption ? 'active' : ''}`}
                            onClick={() => setChoosenOption(option.option.id)}
                        >
                            <p>{option.option.text}</p>
                        </div>
                        ))}
                        </div>
                    </div>
                    <div className="control">
                        {quizQuestionCount>0 &&<button className="btn btn-prev" onClick={()=>setQuizQuestionCount(quizQuestionCount-1)}>Önceki Soru</button>}
                         {quizQuestionCount<=0&&(<button style={{visibility:'hidden'}}></button>)} 
                         {quizQuestionCount+1!=quizQuestions?.questions.length&&<button className="btn btn-next" onClick={()=>setQuizQuestionCount(quizQuestionCount+1)}>Sonraki Soru</button>}
                         {quizQuestionCount+1==quizQuestions?.questions.length&&<button className="btn btn-finishExam">Sınavı Bitir</button>}
                    </div>
               </div>
            </div>
          </Modal.Body>
        </div>
      </div>
    </Modal>
    </>
  )
}

export default ExamModal