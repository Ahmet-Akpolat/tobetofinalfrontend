import { useState } from "react";
import "./SurveyExpandDisplay.css";
import surveyService from "../../../services/surveyService";
import Survey from "../../Survey/Survey";
import NoContent from "../../NoContent/NoContent";
import { useDispatch, useSelector } from "react-redux";
import { selectSurvey } from "../../../store/slices/surveySlice";
import { fetchSurveys } from "../../../utils/fetchalldata";
import { PulseLoader } from "react-spinners";

function SurveysExpandDisplay() {
  const dispatch = useDispatch();
  const [pageSize, setPageSize] = useState(0);
  const [isSelected, setIsSelected] = useState(0);
  const [clicked, setClicked] = useState(0);
  const [surveys, setSurveys] = useState(useSelector(selectSurvey));
  const [loading, setLoading] = useState(false);

  const getSurveys = async (pageNumber: any) => {
    setLoading(true);
    const data = await surveyService.getAllWithData(pageNumber, 12);
    setLoading(false);
    setSurveys(data.items);
    setPageSize(data.pages);
  };

  const getReadedSurveys = async (pageNumber: any) => {
    setLoading(true);
    const data = await surveyService.getJoinedSurveys(pageNumber, 12);
    setLoading(false);
    setSurveys(data.data.items);
    setPageSize(data.data.pages);
  };

  window.onload = async () => {
    await fetchSurveys(dispatch);
  };

  return (
    <main>
      <div className="surveys-expand">
        <div className="container-fluid">
          <div className="page-banner-card">
            <div className="container">
              <div className="row">
                <strong>Anketlerim</strong>
              </div>
            </div>
          </div>
        </div>
        {!surveys.length ? (
          <div className="container-fluid">
            <NoContent content="basvurunuz" />
          </div>
        ) : (
          <div className="container-fluid">
            <div className="container filters">
              <ul
                className="nav nav-tabs mainTablist d-flex justify-content-around"
                role="tablist"
              >
                <div className="d-flex justify-content-center">
                  <li className={`nav-item ${clicked === 0 && "is-selectedd"}`}>
                    <button
                      className="filters-link"
                      onClick={() => {
                        setIsSelected(0);
                        setClicked(0);
                        getSurveys(0);
                      }}
                    >
                      Tüm Anketler
                    </button>
                  </li>
                  <li className={`nav-item ${clicked === 1 && "is-selectedd"}`}>
                    <button
                      className="filters-link"
                      onClick={() => {
                        setIsSelected(0);
                        setClicked(1);
                        getReadedSurveys(0);
                      }}
                    >
                      Katildiklarim
                    </button>
                  </li>
                </div>
              </ul>
            </div>
            <div className="list container mt-4">
              {loading ? (
                <label>
                  <PulseLoader
                    className="list-loading"
                    color="#9933ff"
                    size={16}
                  />
                </label>
              ) : (
                <>
                  <div className="row list">
                    {surveys.map((survey: any) => {
                      return <Survey survey={survey} />;
                    })}
                  </div>
                  <div className="pages-control">
                    <ul
                      className="pagination justify-content-center gap-2"
                      role="navigation"
                      aria-label="Pagination"
                    >
                      {Array.from(Array(pageSize).keys()).map((page) => (
                        <li
                          className={
                            isSelected == page
                              ? "li-selected page-item selected-hover"
                              : "page-item item-hover"
                          }
                          onClick={() => {
                            setIsSelected(page);
                            if (clicked === 0) getSurveys(page);
                            else if (clicked === 1) getReadedSurveys(page);
                          }}
                        >
                          <a
                            rel="canonical"
                            role="button"
                            className="page-link"
                            aria-current="page"
                          >
                            {page + 1}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default SurveysExpandDisplay;
