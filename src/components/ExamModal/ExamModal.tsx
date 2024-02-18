import React, { useEffect, useState } from 'react'
import './ExamModal.css'
import { Modal } from 'react-bootstrap'
import quizService from '../../services/quizService'
import { CreateStudentQuizOptionRequest } from '../../models/requests/StudentQuizOptionRequest'
import ReactLoading from 'react-loading'
import { toast } from 'react-toastify'
import Checkmark from './CheckMark/Checkmark'
import ResultScreen from '../ResultScreen/ResultScreen'

type Props = {
    show:boolean
    quizId:number|undefined
    onHide:any
    expiryTimeStamp:number|undefined
}

const ExamModal = (props: Props) => {
    const [quizQuestions,setQuizQuestions]=useState<any>();
    const [quizQuestionCount,setQuizQuestionCount]=useState(0);
    const [choosenOption,setChoosenOption]=useState();
    const [loadingControl,setLoadingControl]=useState(false);
    const[examModalControl,setExamModalControl]=useState<boolean>();
    const [minute,setMinute]=useState<number>(0);
    const [showMinute,setShowMinute]=useState(0);
    const [showSecond,setShowSecond]=useState(0);
    const [minuteControl,setMinuteControl]=useState(true);
    const [show,setModalShow]=useState(false);

    const getQuizQuestions = async () =>{
        if (props.quizId!=undefined) {
           await quizService.getQuizSessionById(props.quizId).then((r)=>{
            setQuizQuestions(r.data);
          });
        }
      }
    const nextQuestion = async () =>{
        
        if (props.quizId!=undefined) {
          if(choosenOption==undefined){
            toast.error("Bir Seçenek Seçmelisiniz")
          }
          else{
            setLoadingControl(true);
            let quizOption:CreateStudentQuizOptionRequest={
              questionId:quizQuestions.questions[quizQuestionCount].id,
              quizId:props.quizId,
              optionId:choosenOption
            };
             await quizService.addQuizOption(quizOption).then(()=>{
              setQuizQuestionCount(quizQuestionCount+1)
              setLoadingControl(false)
              setChoosenOption(undefined)
            });
          }
          }
          
        
      }

    const finishTheExam=async()=>{
      if (props.quizId!=undefined) {
        if(choosenOption==undefined){
          toast.error("Bir Seçenek Seçmelisiniz")
        }
        else{
          setLoadingControl(true);
          let quizOption:CreateStudentQuizOptionRequest={
            questionId:quizQuestions.questions[quizQuestionCount].id,
            quizId:props.quizId,
            optionId:choosenOption
          };
           await quizService.addQuizOption(quizOption).then(()=>{
            setLoadingControl(false)
            setChoosenOption(undefined)
            setModalShow(true);
            setMinute(0)
            setTimeout(() => {
              window.location.reload();
          }, 2000);
          });
        }
        }
    }
  
    useEffect(()=>{
        getQuizQuestions();
        setExamModalControl(props.show);
        if (props.expiryTimeStamp!=undefined) {
          setMinute(props.expiryTimeStamp*60)
        }
        const interval = setInterval(() => {
          setMinute(prevMinute => {
              const newMinute = prevMinute - 1;
              setShowMinute(Math.floor(newMinute / 60));
              setShowSecond(newMinute % 60);
              if(newMinute==300) {
                toast.error("5 Dakikan Kaldı Acele Et")
              }else if (newMinute==60){
                toast.error("1 Dakikan Kaldı Acele Et")
                setMinuteControl(false)
              }else if(newMinute==0){
                toast.error("Süreniz Bittiği İçin Sınav Kapanacak")
                clearInterval(interval);
                window.location.reload();
              }
              console.log(newMinute);
              
              return newMinute;
          });
      }, 1000);
      return () => clearInterval(interval);
  
    
    },[])
  return (
    <>

    <Modal
      show={examModalControl}
      size='xl'
      aria-labelledby="static"
      data-backdrop="static"
      centered
    >
      
      <div className="">
        <div className="modal-content">
          <Modal.Header>{quizQuestions?.name}</Modal.Header>
          <Modal.Body>
            <div className="quiz-screen">
              {loadingControl&&(<><ReactLoading type='spin' color='purple' width={"40%"} height={"10%"}></ReactLoading></>)  }
              {!loadingControl&&!show&&(
                <><div className="question">
                <div className="d-flex justify-content-between">
                    <div className="question-count">
                         <b>{quizQuestionCount+1}</b>/<b>{quizQuestions?.questions.length}</b>
                    </div>
                    <div className="question-count">
                       {minuteControl&&<b>{showMinute}:</b>}<b>{showSecond}</b>
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
                   
                     {(<button style={{visibility:'hidden'}}></button>)} 
                     {quizQuestionCount+1!=quizQuestions?.questions.length&&<button className="btn btn-next" onClick={()=>nextQuestion()}>Sonraki Soru</button>}
                     {quizQuestionCount+1==quizQuestions?.questions.length&&<button className="btn btn-finishExam" onClick={()=>finishTheExam()}>Sınavı Bitir</button>}
                </div>
           </div></>
                
              )}
               {show&&(<div className="column">
                    <div className="row">
                      <Checkmark  size={"40%"} color={'green'}  />
                      <span className='d-flex align-items-center justify-content-center text-success'>Testiniz Gönderildi 2 Saniye İçerisinde Sayfa Yenilendiğinde Görebileceksiniz.</span>
                  </div>
                </div>)}
                
            </div>
          </Modal.Body>
        </div>
      </div>
    </Modal>
    
  
    </>
  )
}

export default ExamModal