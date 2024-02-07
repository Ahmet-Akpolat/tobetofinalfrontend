import React, { useState } from "react";
import "./LecturesExpandDisplay.css";
import { useLocation } from "react-router-dom";
import { Announcement } from "@mui/icons-material";
import { useEffect } from "react";
import { toast } from "react-toastify";
import exceptionService from "../../utils/exceptionService";
import lectureService from "../../services/lectureService";
import Lecture from "../../components/Lecture/Lecture";
import { LectureResponse } from "../../models/responses/LectureResponses";
import removeTurkishChars from "../../utils/removeTurkishChars";

function LecturesExpandDisplay() {
  const [pageSize, setPageSize] = useState(0);
  const [isSelected, setIsSelected] = useState(0);
  const [clicked, setClicked] = useState(0);
  const [lectures, setLectures] = useState([] as any);
  const [allData, setAllData] = useState<any>();

  const handleInputChange = (event: any) => {
    getForSearchedValue(event.target.value);
  };

  const getContinuedLectures = async (pageNumber: number) => {
    try {
      const data = await lectureService.getAllLectureContinued(pageNumber, 12);
      setLectures(data.data.items);
      setPageSize(data.data.pages);
    } catch (error: any) {
      toast.error(
        exceptionService.errorSelector(JSON.stringify(error.response.data))
      );
    }
  };

  const getComplatedLectures = async (pageNumber: number) => {
    try {
      const data = await lectureService.getAllLectureCompletion(pageNumber, 12);
      setLectures(data.data.items);
      setPageSize(data.data.pages);
    } catch (error: any) {
      toast.error(
        exceptionService.errorSelector(JSON.stringify(error.response.data))
      );
    }
  };

  const getLectures = async (pageNumber: number) => {
    try {
      const data = await lectureService.getAllWithData(pageNumber, 12);
      setLectures(data.items);
      setPageSize(data.pages);
      await getAllDatas(data.count);
    } catch (error: any) {
      toast.error(
        exceptionService.errorSelector(JSON.stringify(error.response.data))
      );
    }
  };
  const getAllDatas = async (allDataCount: number) => {
    await lectureService.getAll(0, allDataCount).then((r) => setAllData(r));
    console.log(allData);

  }
  const getForSearchedValue = async (value: string) => {


    const lectures = allData.filter((lecture: any) =>
      removeTurkishChars(lecture.lectureName.toLowerCase()).includes(removeTurkishChars(value.toLowerCase()))
    );
    setLectures(lectures);
    console.log(lectures);

  }

  useEffect(() => {
    getLectures(0);
  }, []);

  return (
    <main>
      <div className="container-fluid">
        <div className="page-banner-card">
          <div className="container">
            <div className="row">
              <strong>Eğitimlerim</strong>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 d-flex justify-content-center filters">
        <ul className="nav nav-tabs mainTablist" role="tablist">
          <li className={`nav-item `}>
            <input type="text"
              onChange={handleInputChange} />

          </li>
          <li className={`nav-item ${clicked === 0 && "is-selectedd"}`}>
            <button
              className="filters-link"
              onClick={() => {
                setIsSelected(0);
                setClicked(0);
                getLectures(0);
              }}
            >
              Tüm Eğitimlerim
            </button>
          </li>
          <li className={`nav-item ${clicked === 1 && "is-selectedd"}`}>
            <button
              className="filters-link"
              onClick={() => {
                setIsSelected(0);
                setClicked(1);
                getContinuedLectures(0);
              }}
            >
              Devam Ettiklerim
            </button>
          </li>
          <li className={`nav-item ${clicked === 2 && "is-selectedd"}`}>
            <button
              className="filters-link"
              onClick={() => {
                setIsSelected(0);
                setClicked(2);
                getComplatedLectures(0);
              }}
            >
              Tamamladıklarım
            </button>
          </li>
        </ul>
      </div>
      <div className="container">
        {lectures !== null && (
          <div className="row list">
            {lectures.map((lecture: any) => {
              return <Lecture lecture={lecture} />;
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
                  if (clicked === 0) getLectures(page);
                  else if (clicked === 1) getContinuedLectures(page);
                  else getComplatedLectures(page);
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
    </main>
  );
}

export default LecturesExpandDisplay;
