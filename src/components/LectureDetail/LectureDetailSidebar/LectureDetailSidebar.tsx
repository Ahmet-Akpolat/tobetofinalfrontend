import "./LectureDetailSidebar.css";
import { useState } from "react";

interface Props {
  setShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
}

const LectureDetailSidebar: React.FC<Props> = ({ setShowDetail }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="lecture-detail-sidebar">
      <div className="container">
        <div className="row mt-4">
          <div className="d-flex justify-content-between gap-5">
            <div className="content-img col-lg-1 col-md-2 col-sm-2">
              <img src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOFNO7nf8wuXoA%3d%3d"></img>
            </div>
            <div className="col-sm-10 col-xs-12">
              <div className="d-flex justify-content-between">
                <div className="lecture-info">
                  <h3>.NET & React Fullstack | Öğrenme Yolculuğu</h3>
                  <div className="d-flex align-items-center gap-3">
                    <div className="content-type">
                      <span>VIDEO</span>
                    </div>
                    <div className="content-time d-flex align-items-center">
                      <img
                        className="time-img"
                        src="icons/timer_FILL0_wght100.svg"
                      ></img>
                      <strong>7 dk</strong>
                    </div>
                    <div className="content-views">
                      <img
                        className="views-img"
                        src="icons/visibility_FILL0.svg"
                      ></img>
                      <strong>16</strong>
                    </div>
                  </div>
                  <div>
                    <img
                      className="content-like"
                      src={
                        liked === false
                          ? "icons/favorite_FILL0_wght100.svg"
                          : "icons/favorite_FILL1.svg"
                      }
                      onClick={() => setLiked(!liked)}
                    ></img>
                  </div>
                </div>
                <div className="row gap-4">
                  <div className="d-flex gap-2 align-items-center">
                    <div>
                      <button
                        className="content-detail-button"
                        onClick={() => console.log("asd")}
                      >
                        <strong>EGITIME GIT</strong>
                      </button>
                    </div>
                    <div className="more-button">
                      <img src="icons/more_horiz_FILL1.svg"></img>
                    </div>
                  </div>
                  <div className="d-flex gap-5">
                    <div>
                      <text>Devam Ediyor</text>
                    </div>
                    <div>
                      <strong>0.9 Puan</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-info"></div>
          <div className="content-info-section">
            <div className="d-flex gap-5">
              <div>
                <img src="icons/sell_FILL0.svg"></img>
                <strong> Kategori</strong>
              </div>
              <strong>İş'te Mükemmellik / Programlama</strong>
            </div>
          </div>
          <div className="content-info-section">
            <div className="d-flex gap-5">
              <div>
                <img src="icons/public_FILL0.svg"></img>
                <strong> Dili</strong>
              </div>
              <strong>Türkçe</strong>
            </div>
          </div>
          <div className="content-info-section">
            <div className="d-flex gap-5">
              <div>
                <img src="icons/crossword_FILL0.svg"></img>
                <strong> Alt Tip</strong>
              </div>
              <strong>Konu Uzman Videosu</strong>
            </div>
          </div>
          <div className="content-info-section">
            <div className="d-flex gap-5">
              <div>
                <img src="icons/work_FILL0_wght100.svg"></img>
                <strong> Uretici Firma</strong>
              </div>
              <strong>Enocta</strong>
            </div>
          </div>
          <div>
            <div>
              <strong>Icerik</strong>
            </div>
            <text>Bu Bölümde Axios ile Veri Çekme İşlemini Öğreneceğiz.</text>
          </div>
        </div>
      </div>
      <button className="close-button" onClick={() => setShowDetail(false)}>
        X
      </button>
    </div>
  );
};

export default LectureDetailSidebar;
