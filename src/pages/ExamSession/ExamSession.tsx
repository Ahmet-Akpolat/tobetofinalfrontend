import React, { useEffect, useState } from 'react'
import "./ExamSession.css"
import { Modal } from 'react-bootstrap'
import { GetByIdQuizResponse } from '../../models/responses/QuizResponses'
import quizService from '../../services/quizService'
import ExamModal from '../../components/ExamModal/ExamModal'
import { CreateStudentQuizResultRequest } from '../../models/requests/StudentQuizResultRequests'
import studentService from '../../services/studentService'
import { useDispatch, useSelector } from 'react-redux'
import { selectStudent, setStudent } from '../../store/slices/studentSlice'
type Props = {
  show:boolean
  quizId:number|undefined
  onHide:any
}

const ExamSession = (props: Props) => {
  
  
  const [quizDetail,setQuizDetail]=useState<GetByIdQuizResponse>();
  const [reloadFlag,setReloadFlag]=useState<false>();
  const [modalShow, setModalShow] = useState(false);
  const [modalControl,setModalControl]=useState<boolean>(true)

  const dispatch = useDispatch();
  const [studentQuizResults, setStudentQuizResults] = useState(
    useSelector(selectStudent).studentQuizResults
  );
  
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
    await quizService.addQuizResultTable(quizResult).then(()=>{
      setStudentRedux().then(()=>{
        setModalShow(true);
        setModalControl(false);
      })
      
    })
    
  }
  }

  const setStudentRedux = async()=>{
    const newStudent = await studentService.getByToken();
    setStudentQuizResults(newStudent.studentQuizResults);
    dispatch(setStudent(newStudent));
  }

  useEffect(() => {
    getQuizDetail()
    setModalControl(props.show);
  }, [reloadFlag])
  
  return (
    <>
    <Modal
      show={modalControl}
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