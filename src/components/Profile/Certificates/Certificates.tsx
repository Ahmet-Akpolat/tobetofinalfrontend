import { useEffect, useState } from "react";
import "./Certificates.css";
import { toast } from "react-toastify";
import exceptionService from "../../../utils/exceptionService";
import certificateService from "../../../services/StudentProfileSettingsServices/certificateService";
import { Form } from "react-router-dom";
import CertificateCard from "./CertificateCard/CertificateCard";

function Certificates() {
  const [certificates, setCertificates] = useState([] as any);

  const updatedValues = {
    certificateUrl: null,
    certificateUrlTemp: null,
  } as any;

  const getCertificates = async () => {
    const data = (await certificateService.getForLoggedStudent()).data.items;
    setCertificates(data);
  };

  const addCertificates = async (file: any) => {
    updatedValues.certificateUrlTemp = file.target.files[0];
    await certificateService.add(updatedValues);
    getCertificates();
  };

  useEffect(() => {
    getCertificates();
  }, []);

  return (
    <div className="d-flex flex-column">
      <div className="certificates">
        <div className="row">
          <div className="col-12 mb-6">
            <h5>Sertifikalarim</h5>
            <div className="upload-area d-flex  flex-column align-items-center justify-content-center gap-3">
              <label id="file-upload" className="upload-img">
                <img src="icons/cloud_upload_FILL0.svg"></img>
                <input
                  id="file-upload"
                  type="file"
                  accept=".pdf"
                  style={{ display: "none" }}
                  onChange={addCertificates}
                />
              </label>
              <span>Dosya Yukle</span>
            </div>
          </div>
        </div>
      </div>
      {certificates !== null && (
        <div className="anim-fadein col-12 mt-5 pb-3">
          {certificates.map((certificate: any) => {
            return (
              <CertificateCard
                certificate={certificate}
                setCertificates={setCertificates}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Certificates;
