import React, { useEffect, useState } from "react";
import "./MainSection.css";
import { useNavigate } from "react-router-dom";
import Appeal from "../../../components/Appeal/Appeal";
import AppealService from "../../../services/AppealService";
import { useSelector } from "react-redux";
import { selectStudent } from "../../../store/slices/studentSlice";
import { AppealResponses } from "../../../models/responses/AppealResponses";
import { StudentAppealResponse } from "../../../models/responses/StudentAppealResponses";

function MainSection() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    exams: [],
    announcements: [],
    appeals: [],
    lectures: [],
    surveys: [],
  });

  const [section, setSection] = useState(0);
  const student = useSelector(selectStudent);

  const fetchData = async () => {
    const service = new AppealService();
    try {
      const appeals = await service.getAppeal(student.id); // appeal listesini bekleyin
      console.log(appeals.appealId);
    } catch (error) {
      console.error("AppealService.getAppeal çağrısı sırasında hata:", error);
    }
  };

  // Fonksiyonu çağır

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section>
      <div className="container d-flex align-items-center justify-content-center">
        <div className="row cv-box cv-padding display-flex mmt-n-4 main-section">
          <div className="col-12 ik-logo-platform">
            <div className="p-4">
              <span className="tobeto-main-logo">
                <img src="https://tobeto.com/_next/static/media/ik-logo-dark.7938c0de.svg" />
              </span>
            </div>
            <div className="mt-2 d-flex flex-column justify-content-center px-10 text-center">
              <span className="header-text-md mt-4 ">
                Ücretsiz eğitimlerle, geleceğin mesleklerinde sen de yerini al.
              </span>
              <span className="header-text mt-4 mb-4">
                Aradığın
                <span className="quot">&nbsp; “</span>
                İş
                <span className="quot">” &nbsp; </span>
                Burada!
              </span>
            </div>
          </div>
          <div className="col-12 mb-4">
            <ul className="nav nav-tabs mainTablist" role="tablist">
              <li className="nav-item">
                <button
                  className="nav-link"
                  onClick={() => {
                    setSection(0);
                  }}
                >
                  Başvurularım
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  onClick={() => {
                    setSection(1);
                  }}
                >
                  Eğitimlerim
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  onClick={() => {
                    setSection(2);
                  }}
                >
                  Duyuru ve Haberlerim
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link "
                  onClick={() => {
                    setSection(3);
                  }}
                >
                  Anketlerim
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link "
                  onClick={() => {
                    setSection(4);
                  }}
                >
                  Sınavlarım
                </button>
              </li>
            </ul>
          </div>
          <div className="col-12">
            <div className="tab-content">
              {section == 0 && (
                <div className="tab-pane fade show active">
                  <div className="row justify-content-center gap-5">
                    <Appeal />
                    <Appeal />
                    {data.appeals.map((appeal) => (
                      <Appeal />
                    ))}
                  </div>
                  <a
                    className="showMoreBtn"
                    onClick={() => {
                      navigate("/basvurularim", { state: data.appeals });
                    }}
                  >
                    Daha Fazla Göster
                  </a>
                </div>
              )}
              {section == 1 && (
                <div className="tab-pane fade show active">
                  <div className="grid-container">
                    {/* <Lecture></Lecture>
                    <Lecture></Lecture>
                    <Lecture></Lecture>
                    <Lecture></Lecture>
                    {data.lectures.map((lecture) => {
                      return <Lecture lecture={lecture} />;
                    })} */}
                  </div>
                  <a
                    className="showMoreBtn"
                    onClick={() => {
                      navigate("/egitimlerim", { state: data.lectures });
                    }}
                  >
                    Daha Fazla Göster
                  </a>
                </div>
              )}
              {section == 2 && (
                <div className="tab-pane fade show active">
                  <div className="row">
                    {/* <Announcement></Announcement>
                    <Announcement></Announcement>
                    <Announcement></Announcement>
                    {data.announcements.map((announcement) => (
                      <Announcement announcement={announcement} />
                    ))} */}
                  </div>
                  <a
                    className="showMoreBtn"
                    onClick={() => {
                      navigate("/duyurularim", { state: data.announcements });
                    }}
                  >
                    Daha Fazla Göster
                  </a>
                </div>
              )}
              {section == 3 && (
                <div className="tab-pane fade show active">
                  <div className="row justify-content-center gap-5"></div>
                  <a
                    className="showMoreBtn"
                    onClick={() => {
                      navigate("/anketlerim", { state: data.surveys });
                    }}
                  >
                    Daha Fazla Göster
                  </a>
                </div>
              )}
              {section == 4 && (
                <div className="tab-pane fade show active">
                  <div className="row justify-content-center gap-5">
                    {/* <Exam />
                    <Exam /> */}
                  </div>
                  <a
                    className="showMoreBtn"
                    onClick={() => {
                      navigate("/sinavlarim", { state: data.exams });
                    }}
                  >
                    Daha Fazla Göster
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainSection;
