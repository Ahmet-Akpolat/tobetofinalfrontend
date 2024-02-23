import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import quizService from "../../services/quizService";
import "./ResultScreen.css";
import StudentQuizDetail from "./Details/StudentQuizDetail";

type Props = {
  show: boolean;
  quizId: number | undefined;
  onHide: any;
};

const ResultScreen = (props: Props) => {
  const [results, setResults] = useState<any>();
  const [showDetail, setShowDetails] = useState<boolean>(false);
  const getResult = async () => {
    if (props.quizId != undefined) {
      await quizService.getByQuizId(props.quizId).then((response) => {
        setResults(response);
      });
    }
  };

  useEffect(() => {
    getResult();
  }, []);

  return (
    <>
      <Modal
        show={props.show}
        onHide={props.onHide}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="">
          <div className="modal-content">
            <Modal.Body>
              {!showDetail && true ? (
                <div className="quiz-screen">
                  <div className="result-screen ">
                    <span className="result-title">Test Sonucu</span>
                    <div className="result-items col-15">
                      <span className="d-flex flex-column col-md-2 h-50">
                        {results?.correctAnswerCount}
                        <a> Doğru</a>
                      </span>
                      <span className="d-flex flex-column col-md-2">
                        {results?.wrongAnswerCount}
                        <a>Yanlış</a>
                      </span>
                      <span className="d-flex flex-column col-md-2">
                        {results?.emptyAnswerCount}
                        <a>Boş</a>
                      </span>
                      <span className="d-flex flex-column col-md-2">
                        {results?.point} <a>Puan</a>
                      </span>
                    </div>
                    <div className="row">
                      <button
                        onClick={() => setShowDetails(true)}
                        className="quiz-btn btn btn-primary mt-8 ms-auto me-auto"
                        style={{
                          width: "max-content",
                          borderRadius: "50px",
                          background: "#9933ff",
                          color: "white",
                          transition: "0.5s",
                          border: "none",
                        }}
                      >
                        Detayları Görüntüle
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="quiz-screen" style={{ minHeight: "800px" }}>
                  <StudentQuizDetail quizId={props.quizId} />
                </div>
              )}
            </Modal.Body>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ResultScreen;
