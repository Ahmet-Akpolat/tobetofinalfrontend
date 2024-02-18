import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import './ResultScreen.css'
import quizService from '../../services/quizService'
type Props = {
    show:boolean
    quizId:number|undefined
    onHide:any
}

const ResultScreen = (props: Props) => {
  const [results,setResults]=useState<any>();

  const getResult = async()=>{
    if (props.quizId!=undefined) {
      await quizService.getByQuizId(props.quizId).then((response)=>{
        console.log(response);
        
        setResults(response)
      })
    }
    console.log(props.quizId);
    
  }

  useEffect(()=>{
    getResult();
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
          <Modal.Body>
            <div className="quiz-screen">
                <div className="result-screen">
                    <span className="result-title">Test Sonucu</span>
                    <div className="result-items">
                        <span className="d-flex flex-column">{results?.correctAnswerCount}<a> Doğru</a> </span>
                        <span className="d-flex flex-column">{results?.wrongAnswerCount}<a>Yanlış</a></span>
                        <span className="d-flex flex-column">{results?.emptyAnswerCount}<a>Boş</a></span>
                        <span className="d-flex flex-column">{results?.point} <a>Puan</a></span>
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

export default ResultScreen