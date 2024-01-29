import "./Survey.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { formatDate } from "../../utils/formatDate";
import SurveyModal from "./Modal/SurveyModal";
import { selectSurvey } from "../../store/slices/surveySlice";

function Survey({ index }: any) {
  const [modalShow, setModalShow] = useState(false);
  const surveys = useSelector(selectSurvey);

  return (
    <div className="col-md-4 col-12 my-4">
      <div className="notfy-card notify survey">
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-between mb-4">
            <span className="type">Anket</span>
            <span className="corp-names type">İstanbul Kodluyor</span>
          </div>
          <span className="header ">{surveys[index].surveyName}</span>
        </div>
        <div className="d-flex justify-content-between">
          <span className="date">
            {formatDate(surveys[index].surveyStartDate)}
          </span>
          <span className="read-more" onClick={() => setModalShow(true)}>
            Devamını oku
          </span>
        </div>
      </div>
      <SurveyModal
        index={index}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default Survey;
