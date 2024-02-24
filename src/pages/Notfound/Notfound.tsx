import { useNavigate } from "react-router-dom";
import "./Notfound.css";

function Notfound() {
  const navigate = useNavigate()

  const handleBackButton = () => {
    navigate(-1)
  }

  return (
    <div className="notfound-page">
      <div
        className="d-flex flex-column align-items-center justify-content-center gap-3 "
        style={{ minHeight: "40vh", maxWidth: "80%" }}
      >
          <div className="col-12 col-md-6">
        <div>
        <div className="notfound-back-button" onClick={handleBackButton}></div>
            <h1>{"404"}</h1>
          </div>
        </div>
        <div className="col-15 col-md-6">
          <h2>{"Sayfa Bulunamadı."}</h2>
        </div>
      </div>
    </div>
  );
}

export default Notfound;
