import React, { useEffect, useState } from 'react'
import "./ExamSession.css"
import { Modal } from 'react-bootstrap'
import { GetByIdQuizResponse } from '../../models/responses/QuizResponses'
import quizService from '../../services/quizService'
import ExamModal from '../../components/ExamModal/ExamModal'
type Props = {
  show:boolean
  quizId:number|undefined
  onHide:any
}

const ExamSession = (props: Props) => {
  const [quizDetail,setQuizDetail]=useState<GetByIdQuizResponse>();
  const [reloadFlag,setReloadFlag]=useState<false>();
  const [modalShow, setModalShow] = useState(false);

  const getQuizDetail = async () =>{
    if (props.quizId!=undefined) {
       await quizService.getById(props.quizId).then((r)=>{
        setQuizDetail(r.data);
      });
    }
  }

  const getQuizModal = async ()=>{
    
  }
  useEffect(() => {
    getQuizDetail()
  }, [reloadFlag])
  
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
          <Modal.Header closeButton><span className="quiz-details-header">{quizDetail?.name}</span></Modal.Header>
          <Modal.Body>
          <div className="quiz-screen">
              
                  <div className="join-screen">
                    <p><p>Bu sınav {quizDetail?.quizQuestionCount} sorudan oluşmakta olup sınav süresi {quizDetail?.duration} dakikadır. Sınav çoktan seçmeli test şeklinde olup sınavı yarıda bıraktığınız taktırde çözdüğünüz kısım kadarıyla değerlendirileceksiniz.</p></p>
                    <div>
                      <span>Sınav Süresi :  {quizDetail?.duration} Dakika</span>
                      <span>Soru Sayısı : {quizDetail?.quizQuestionCount} </span>
                      <span>Soru Tipi : Çoktan Seçmeli</span>
                    </div>
                  <div className="row ">
                    <button className="btn btn-primary mt-8 ms-auto me-auto" style={{width:'max-content'}} onClick={()=>setModalShow(true)}>
                      Sınava Başla
                      </button>
                      </div>
                      </div>
                      </div>
          </Modal.Body>
        </div>
      </div>
    </Modal>
    {modalShow && <ExamModal show={modalShow} quizId={props.quizId} onHide={() => setModalShow(false)} />}
    {/* { <div role="dialog" aria-modal="true" className="fade modal show" tabIndex={1} aria-labelledby="contained-modal-title-vcenter" style={{display:'block'}}>
      <div className="modal-dialog modal-xl modal-dialog-centered modal-fullscreen-sm-down">
        <div className="modal-content">
          <div className="modal-body">
            <div className="quiz-screen">
              <div className="d-flex justify-content-between mb-8">
                <span className="quiz-details-header">Full Stack</span>
                <button type="button" className="btn-close" aria-label="Close">
                  </button></div>
                  <div className="join-screen">
                    <p><p>Bu sınav 25 sorudan oluşmakta olup sınav süresi 30 dakikadır. Sınav çoktan seçmeli test şeklinde olup sınavı yarıda bıraktığınız taktırde çözdüğünüz kısım kadarıyla değerlendirileceksiniz.</p></p>
                    <div>
                      <span>Sınav Süresi : 30 Dakika</span>
                      <span>Soru Sayısı : 25</span>
                      <span>Soru Tipi : Çoktan Seçmeli</span>
                    </div>
                  <div className="row ">
                    <button className="btn btn-primary mt-8 ms-auto me-auto" style={{width:'max-content'}}>
                      Sınava Başla
                      </button>
                      </div>
                      </div>
                      </div>
                      </div></div></div></div> } */}
    </>
  )
}

export default ExamSession