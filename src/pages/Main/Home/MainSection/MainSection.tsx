import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Announcement from "../../../../components/Announcement/Announcement";
import Appeal from "../../../../components/Appeal/Appeal";
import Lecture from "../../../../components/Lecture/Lecture";
import NoContent from "../../../../components/NoContent/NoContent";
import Survey from "../../../../components/Survey/Survey";
import { selectAnnouncement } from "../../../../store/slices/announcementSlice";
import { selectAppeal } from "../../../../store/slices/appealSlice";
import { selectLecture } from "../../../../store/slices/lectureSlice";
import { selectSurvey } from "../../../../store/slices/surveySlice";
import "./MainSection.css";

const MainSection = () => {
  const [section, setSection] = useState(0);
  const navigate = useNavigate();
  const appeals = useSelector(selectAppeal);
  const announcements = useSelector(selectAnnouncement);
  const lectures = useSelector(selectLecture);
  const surveys = useSelector(selectSurvey);

  const readAnnouncementsCount = announcements.filter(
    (announcement: any) => !announcement.isRead
  ).length;

  const [activeNavLink, setActiveNavLink] = useState("appeals");
  const handleNavLinkClick = (navLinkId: any) => {
    setActiveNavLink(navLinkId);
  };

  const MAX_ITEMS_DISPLAY = {
    appeals: 2,
    lectures: 4,
    announcements: 3,
    surveys: 3,
    exams: 2,
  };

  return (
    <section>
      <div className="container main-section d-flex align-items-center justify-content-center">
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
          <div className="col-12">
            <ul
              className="nav nav-tabs mainTablist d-flex flex-wrap justify-content-center"
              role="tablist"
            >
              <li className="nav-item">
                <button
                  id="appeals-nav-link"
                  className={`nav-link ${
                    activeNavLink === "appeals" ? "active" : ""
                  }`}
                  onClick={() => (setSection(0), handleNavLinkClick("appeals"))}
                >
                  Başvurularım
                </button>
              </li>
              <li className="nav-item">
                <button
                  id="appeals-nav-link"
                  className={`nav-link ${
                    activeNavLink === "lectures" ? "active" : ""
                  }`}
                  onClick={() => (
                    setSection(1), handleNavLinkClick("lectures")
                  )}
                >
                  Eğitimlerim
                </button>
              </li>
              <li className="nav-item">
                <button
                  id="appeals-nav-link"
                  className={`nav-link ${
                    activeNavLink === "announcements" ? "active" : ""
                  }`}
                  onClick={() => (
                    setSection(2), handleNavLinkClick("announcements")
                  )}
                >
                  Duyuru ve Haberlerim
                </button>
                {readAnnouncementsCount && (
                  <div className="announcements-natification">
                    <span className="announcements-count">
                      {readAnnouncementsCount}
                    </span>
                  </div>
                )}
              </li>
              <li className="nav-item">
                <button
                  id="appeals-nav-link"
                  className={`nav-link ${
                    activeNavLink === "surveys" ? "active" : ""
                  }`}
                  onClick={() => (setSection(3), handleNavLinkClick("surveys"))}
                >
                  Anketlerim
                </button>
              </li>
            </ul>
          </div>
          <div className="col-12">
            <div className="tab-content">
              {section == 0 && (
                <div className="tab-pane fade show active">
                  <div className="row">
                    {appeals.length === 0 ? (
                      <NoContent content="başvurunuz" />
                    ) : (
                      appeals
                        .slice(0, MAX_ITEMS_DISPLAY.appeals)
                        .map((appeal: any) => <Appeal appeal={appeal} />)
                    )}
                  </div>
                  {appeals.length > MAX_ITEMS_DISPLAY.appeals && (
                    <a
                      className="showMoreBtn"
                      onClick={() => {
                        navigate("/basvurularim");
                      }}
                    >
                      Daha Fazla Göster
                    </a>
                  )}
                </div>
              )}

              {section == 1 && (
                <div className="tab-pane fade show active">
                  <div className="row">
                    {lectures.length === 0 ? (
                      <NoContent content="eğitiminiz" />
                    ) : (
                      lectures
                        .slice(0, MAX_ITEMS_DISPLAY.lectures)
                        .map((lecture: any) => <Lecture lecture={lecture} />)
                    )}
                  </div>
                  {lectures.length > MAX_ITEMS_DISPLAY.lectures && (
                    <a
                      className="showMoreBtn"
                      onClick={() => {
                        navigate("/egitimlerim");
                      }}
                    >
                      Daha Fazla Göster
                    </a>
                  )}
                </div>
              )}
              {section == 2 && (
                <div className="tab-pane fade show active">
                  <div className="row">
                    {announcements.length === 0 ? (
                      <NoContent content="duyurunuz" />
                    ) : (
                      announcements
                        .slice(0, MAX_ITEMS_DISPLAY.announcements)
                        .map((announcement: any) => (
                          <Announcement announcement={announcement} />
                        ))
                    )}
                  </div>
                  {announcements.length > MAX_ITEMS_DISPLAY.announcements && (
                    <a
                      className="showMoreBtn"
                      onClick={() => {
                        navigate("/duyurularim");
                      }}
                    >
                      Daha Fazla Göster
                    </a>
                  )}
                </div>
              )}
              {section == 3 && (
                <div className="tab-pane fade show active">
                  <div className="row">
                    {surveys.length === 0 ? (
                      <NoContent content="anketiniz" />
                    ) : (
                      surveys
                        .slice(0, MAX_ITEMS_DISPLAY.surveys)
                        .map((survey: any) => <Survey survey={survey} />)
                    )}
                  </div>
                  {surveys.length > MAX_ITEMS_DISPLAY.surveys && (
                    <a
                      className="showMoreBtn"
                      onClick={() => {
                        navigate("/anketlerim");
                      }}
                    >
                      Daha Fazla Göster
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
