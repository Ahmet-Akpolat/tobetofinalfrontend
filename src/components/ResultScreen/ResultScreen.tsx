import React from 'react'
import { Modal } from 'react-bootstrap'
import './ResultScreen.css'
type Props = {
    show:boolean
    quizId:number|undefined
    onHide:any
}

const ResultScreen = (props: Props) => {
  return (
    <>
    <Modal
      show={props.show}
      size='xl'
      aria-labelledby="contained-modal-title-vcenter"
      className='modal-dialog modal-xl modal-dialog-centered modal-fullscreen-sm-down'
      centered
    >
      
      <div className="">
        <div className="modal-content">
          <Modal.Body>
            <div className="quiz-screen">
                <div className="result-screen">
                    <span className="result-title">Test Sonucu</span>
                    <div className="result-items">
                        <span className="d-flex flex-column">19 <a> Doğru</a> </span>
                        <span className="d-flex flex-column">6<a>Yanlış</a></span>
                        <span className="d-flex flex-column">0<a>Boş</a></span>
                        <span className="d-flex flex-column">76 <a>Puan</a></span>
                    </div>
                    <button className="btn btn-primary mt-8 ms-auto me-auto" style={{width:'max-content'}}>Kapat</button>
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