import "./Certificates.css";


function Certificates() {

  return (
    <div className="certificates">
      <div className="row">
        <div className="col-12 mb-6">
          <h5>Sertifikalarim</h5>
          <div
            className="upload-area d-flex  flex-column align-items-center justify-content-center gap-3"
          >
            <div className="upload-img">
              <img src="icons/cloud_upload_FILL0.svg"></img>
              <input
                type="file"
                accept="application/pdf"
                style={{ display: "none" }}
              />
            </div>
            <span>Dosya Yukle</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certificates;
