import React, { useEffect } from "react";
import "./Home.css"
import { useDispatch, useSelector } from "react-redux";
import { selectStudent } from "../../../store/slices/studentSlice";
import MainSection from "./MainSection/MainSection";

const Home = () => {
  const student = useSelector(selectStudent);

  return (
    <div>
      <div className="welcome-message container text-center mt-5">
        <h3 className="spans-elements">
          <span className="tobeto-text-secondary">TOBETO</span>
          <span className="sub-text-name">
            'ya hoş geldin <br /> {student.firstName}
          </span>
        </h3>
        <div className="mt-5">
          <h4>
            <p>
              Yeni nesil öğrenme deneyimi ile Tobeto kariyer yolculuğunda senin
              yanında!
            </p>
          </h4>
        </div>
      </div>
      <MainSection />
    </div>
  );
};

export default Home;
