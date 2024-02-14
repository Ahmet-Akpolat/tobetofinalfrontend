import { Check } from "@mui/icons-material";
import { green } from "@mui/material/colors";
import "./Appeal.css";

const Appeal = ({ appeal }: any) => {
  return (
    <div className="col-md-6 col-12 my-4 mb-4">
      <div className="d-flex appeal-card">
        <div>
          <div className="appeal-name col-5 col-md-6">
            {appeal.appealName}
          </div>
          <div className="appeal-stages">
            {appeal.stages &&
              appeal.stages.map((stage: any, stageIndex: any) => (
                <div key={stageIndex} className="d-flex align-items-center">
                  <Check sx={{ color: green[900] }} />
                  <span>{stage.description}</span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Appeal;
