import React, { useEffect, useState } from 'react'
import "./ExamSession.css"
import { Modal } from 'react-bootstrap'
import { GetByIdQuizResponse } from '../../models/responses/QuizResponses'
import quizService from '../../services/quizService'
import ExamModal from '../../components/ExamModal/ExamModal'
import { CreateStudentQuizResultRequest } from '../../models/requests/StudentQuizResultRequests'
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
  
  const joinExam = async ()=>{
    if (props.quizId!=undefined) {
      let quizResult:CreateStudentQuizResultRequest={
        quizId:props.quizId,
      };
    await quizService.addQuizResultTable(quizResult).then(()=>setModalShow(true))
    
  }
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
                      <span>Önceki Soruya Dönemeyeceksiniz Ona Göre Emin Olmadan Sonraki Soruya Geçmeyiniz</span>
                    </div>
                  <div className="row ">
                    <button className="btn btn-primary mt-8 ms-auto me-auto" style={{width:'max-content'}} onClick={()=>{joinExam()}}>
                      Sınava Başla
                      </button>
                      </div>
                      </div>
                      </div>
          </Modal.Body>
        </div>
      </div>
    </Modal>
    {modalShow && <ExamModal  show={modalShow} quizId={props.quizId} onHide={() => setModalShow(false)} expiryTimeStamp={quizDetail?.duration} />}
    </>
  )
}

export default ExamSession