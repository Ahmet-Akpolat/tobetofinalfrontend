import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MainSection.css";
import Appeal from "../../../../components/Appeal/Appeal";
import { useSelector } from "react-redux";
import { selectAppeal } from "../../../../store/slices/appealSlice";
import Announcement from "../../../../components/Announcement/Announcement";
import { selectAnnouncement } from "../../../../store/slices/announcementSlice";
import { selectLecture } from "../../../../store/slices/lectureSlice";
import Lecture from "../../../../components/Lecture/Lecture";

const MainSection = () => {
  const [section, setSection] = useState(0);
  const navigate = useNavigate();
  const appeals = useSelector(selectAppeal);
  const announcements = useSelector(selectAnnouncement);
  const lectures = useSelector(selectLecture);

  return (
    <section>
      <div className="main-section d-flex align-items-center justify-content-center">
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
                    {appeals.map((_: any, index: any) => (
                      <Appeal key={index} index={index} />
                    ))}
                  </div>
                  <a
                    className="showMoreBtn"
                    onClick={() => {
                      navigate("/basvurularim");
                    }}
                  >
                    {/* ... rest of your code for the anchor tag ... */}
                  </a>
                </div>
              )}
              {section == 1 && (
                <div className="tab-pane fade show active">
                  <div className="grid-container">
                    {lectures.map((_: any, index: any) => (
                      <Lecture key={index} index={index} />
                    ))}
                  </div>
                  <a
                    className="showMoreBtn"
                    onClick={() => {
                      navigate("/egitimlerim");
                    }}
                  >
                    Daha Fazla Göster
                  </a>
                </div>
              )}
              {section == 2 && (
                <div className="tab-pane fade show active">
                  <div className="row">
                    {announcements.map((_: any, index: any) => (
                      <Announcement key={index} index={index} />
                    ))}
                  </div>
                  <a
                    className="showMoreBtn"
                    onClick={() => {
                      navigate("/duyurularim");
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
                      navigate("/anketlerim");
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
                      navigate("/sinavlarim");
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
};

export default MainSection;
