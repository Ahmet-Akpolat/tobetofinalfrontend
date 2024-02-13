import React, { useEffect } from "react";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { selectStudent } from "../../../store/slices/studentSlice";
import MainSection from "./MainSection/MainSection";
import InfoCard from "../../../components/InfoCard/InfoCard";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const student = useSelector(selectStudent);

  return (
    <div className="home">
      <div className="welcome-message container text-center mt-5">
        <h3 className="spans-elements">
          <span className="tobeto-text-secondary">TOBETO</span>
          <span className="tobeto-text-welcome">
            'ya hoş geldin <br />
          </span>
          <span className="sub-text-name">{student.firstName}</span>
        </h3>
        <div className="mt-5 mb-5">
          <h4>
            <p className="alt-text">
              Yeni nesil öğrenme deneyimi ile Tobeto kariyer yolculuğunda senin
              yanında!
            </p>
          </h4>
        </div>
      </div>
      <img className="dot-img" src="/icons/dot-purple.home.svg" />
      <MainSection />
      <section>
        <div className="container d-flex align-items-center justify-content-center">
          <div className="info-card-list col-12 row d-flex align-items-center justify-content-center mt-5 mb-5">
            <InfoCard
              background="background-1"
              header="Profilini oluştur"
              onClick={() => navigate("/profilim")}
            />
            <InfoCard
              background="background-2"
              header="Kendini değerlendir"
              onClick={() => navigate("/profil-detay")}
            />
            <InfoCard
              background="background-3"
              header="Öğrenmeye başla"
              onClick={() => navigate("/egitimlerim")}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
