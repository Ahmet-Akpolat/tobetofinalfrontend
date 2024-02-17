import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import certificateService from "../../../services/StudentProfileSettingsServices/certificateService";
import studentService from "../../../services/studentService";
import { selectStudent, setStudent } from "../../../store/slices/studentSlice";
import CertificateCard from "./CertificateCard/CertificateCard";
import "./Certificates.css";

function Certificates() {
  const dispatch = useDispatch();
  const [certificates, setCertificates] = useState(
    useSelector(selectStudent).studentPrivateCertificates
  );

  const updatedValues = {
    certificateUrl: null,
    certificateUrlTemp: null,
  } as any;

  const addCertificates = async (file: any) => {
    updatedValues.certificateUrlTemp = file.target.files[0];
    await certificateService.add(updatedValues);
    const newStudent = await studentService.getByToken();
    setCertificates(newStudent.studentPrivateCertificates);
    dispatch(setStudent(newStudent));
  };

  return (
    <div className="d-flex flex-column">
      <div className="certificates">
        <div className="row">
          <div className="col-12 mb-6">
            <h5>Sertifikalarım</h5>
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
              <span>Dosya YÜkle</span>
            </div>
          </div>
        </div>
      </div>
      {certificates !== null && (
        <div className="anim-fadein col-12 mt-5 pb-3">
          {[...certificates].reverse().map((certificate: any) => {
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
