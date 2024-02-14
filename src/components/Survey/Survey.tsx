import { useState } from "react";
import { formatDate } from "../../utils/formatDate";
import SurveyModal from "./Modal/SurveyModal";
import "./Survey.css";

function Survey({ survey }: any) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="col-md-4 col-12 my-4">
      <div className="notfy-card notify survey">
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-between mb-4">
            <span className="type">Anket</span>
            <span className="corp-names type">İstanbul Kodluyor</span>
          </div>
          <span className="header ">{survey.surveyName}</span>
        </div>
        <div className="d-flex justify-content-between">
          <span className="date">
            {formatDate(survey.surveyStartDate)}
          </span>
          <span className="read-more" onClick={() => setModalShow(true)}>
            Devamını oku
          </span>
        </div>
      </div>
      <SurveyModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        survey={survey}
      />
    </div>
  );
}

export default Survey;
