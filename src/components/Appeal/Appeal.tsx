import React, { useEffect } from "react";
import "./Appeal.css";
import DoneIcon from "@mui/icons-material/Done";
import { Check } from "@mui/icons-material";
import { green } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { selectStudentId } from "../../store/slices/authSlice";
import AppealService from "../../services/AppealService";
import { selectAppeal, setAppeal } from "../../store/slices/appealSlice";

const Appeal = ({ index }: any) => {
  const studentId = useSelector(selectStudentId);
  const dispatch = useDispatch();
  const appeals = useSelector(selectAppeal);

  useEffect(() => {
    const fetchAppeals = async () => {
      const service = new AppealService();
      try {
        const appeals = await service.getAppeal(studentId);
        console.log(appeals);
        dispatch(setAppeal(appeals)); // çözümlenen veriyi dispatch ile state'e kaydet
      } catch (error) {
        console.error("AppealService.getAppeal çağrısı sırasında hata:", error);
      }
    };

    fetchAppeals();
  }, [studentId]);

  return (
    <div className="col-12 col-md-5 mb-4 d-flex appeal-card">
      <div>
        <div className="appeal-name">{appeals[index].appealName}</div>
        <span className="appeal-name"></span>
        <div className="appeal-stages">
          {appeals.stages &&
            appeals.stages.map((stage: any, stageIndex: any) => (
              <div key={stageIndex} className="d-flex align-items-center">
                <Check sx={{ color: green[900] }} />
                <span>{stage.description}</span>{" "}
                {/* stage'in açıklamasını veya uygun alanını göster */}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default Appeal;
