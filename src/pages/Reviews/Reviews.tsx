import { useEffect, useState } from "react";
import QuizCard from "../../components/QuizCard/QuizCard";
import { GetByIdQuizResponse } from "../../models/responses/QuizResponses";
import quizService from "../../services/quizService";
import "./Reviews.css";

const Reviews = () => {
  const [quizs, setQuizs] = useState<GetByIdQuizResponse[]>();

  const getQuizs = async () => {
    const response = await quizService.GetForAllStudent();
    setQuizs(response.items);
  };

  useEffect(() => {
    getQuizs();
  }, []);

  return (
    <div className="reviews-page">
      <main>
        <section className="py-5">
          <div className="position-relative mt-12">
            <div className="container text-center">
              <div className="mw-5xl mx-auto">
                <h3>
                  <span className="fw-normal text-info"> Yetkinlik</span>
                  <span className="text-secondary">lerini</span>
                  <span className="text-secondary"> ücretsiz ölç,</span>
                  <span className="fw-normal text-info"> bilgi</span>
                  <span className="text-secondary">lerini</span>
                  <span className="text-secondary"> test et.</span>
                </h3>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-8">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 mb-8">
                <div className="dashboard-card1 equal-box">
                  <br />
                  <span>Yazılımda Başarı Testi</span>
                  <p>
                    Çoktan seçmeli sorular ile teknik bilgini <b>test et.</b>
                  </p>
                  <br />
                  <label className="text-white">&gt;&gt;&gt;</label>
                </div>
              </div>
              <div className="col-12 col-md-6 mb-8 anim-fadein">
                <div
                  className="d-flex flex-column equal-box"
                  style={{ gap: "14px" }}
                >
                  <QuizCard quizs={quizs} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-2 mb-20">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 mb-8">
                <div className="dashboard-card4 equal-box">
                  <span>Kazanım Odaklı Testler</span>
                  <p>
                    Dijital gelişim kategorisindeki eğitimlere başlamadan
                    önce konuyla ilgili bilgin ölçülür ve seviyene göre
                    yönlendirilirsin.
                  </p>
                  <p></p>
                </div>
              </div>
              <div className="col-12 col-md-6 mb-8">
                <div className="dashboard-card4 equal-box">
                  <span>
                    Huawei Talent Interview <br /> Teknik Bilgi Sınavı*
                  </span>
                  <p className="mt-4">
                    <b>
                      <i>Sertifika alabilmen için,</i>
                    </b>
                    eğitim yolculuğunun sonunda teknik yetkinliklerin ve kod
                    bilgin ölçülür.
                    <br />
                    <br />
                    4400+ soru | 30+ programlama dili
                    <br />4 zorluk seviyesi
                  </p>
                  <small className="text-white">
                    *Türkiye Ar-Ge Merkezi tarafından tasarlanmıştır.
                  </small>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Reviews;
