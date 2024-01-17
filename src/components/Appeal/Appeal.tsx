import React from "react";
import "./Appeal.css";
import DoneIcon from "@mui/icons-material/Done";
import { Check } from "@mui/icons-material";
import { green } from "@mui/material/colors";
import { useSelector } from "react-redux";
import { selectStudent } from "../../store/slices/studentSlice";

const Appeal = () => {
  const student = useSelector(selectStudent);
  const appeals = student.appeals;

  return (
    <div className="col-12 col-md-5 mb-4 d-flex appeal-card">
      <div>
        <div className="appeal-name">Istanbul Kodluyor</div>
        <span className="appeal-name">Bilgilendirme</span>
        <div className=" appeal-stages">
          <div className="d-flex align-items-center ">
            <Check sx={{ color: green[900] }} />
            <span>İstanbul Kodluyor Başvuru Formu onaylandı.</span>
          </div>
          <div className="d-flex align-items-center ">
            <Check sx={{ color: green[900] }} />
            <span>İstanbul Kodluyor Başvuru Formu onaylandı.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Appeal;
