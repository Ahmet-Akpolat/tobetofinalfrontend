import React, { useState } from "react";
import "./SurveyExpandDisplay.css";
import { useEffect } from "react";
import surveyService from "../../../services/surveyService";
import Survey from "../../Survey/Survey";

function SurveysExpandDisplay() {
  const [pageSize, setPageSize] = useState(0);
  const [isSelected, setIsSelected] = useState(0);
  const [clicked, setClicked] = useState(0);
  const [surveys, setSurveys] = useState([] as any);

  const getSurveys = async (pageNumber: any) => {
    const data = await surveyService.getAllWithData(pageNumber, 12);
    setSurveys(data.items);
    setPageSize(data.pages);
  };

  const getReadedSurveys = async (pageNumber: any) => {
    const data = await surveyService.getJoinedSurveys(pageNumber, 12);
    setSurveys(data.data.items);
    setPageSize(data.data.pages);
  };

  useEffect(() => {
    getSurveys(0);
  }, []);

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
        <div className="container">
          {surveys !== null && (
            <div className="row list">
              {surveys.map((survey: any) => {
                return <Survey survey={survey} />;
              })}
            </div>
          )}

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
                    //else if (clicked === 1) getReadedAnnouncements(page);
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
        </div>
      </div>
    </main>
  );
}

export default SurveysExpandDisplay;
