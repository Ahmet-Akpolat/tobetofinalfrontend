import { toast } from "react-toastify";
import certificateService from "../../../../services/StudentProfileSettingsServices/certificateService";
import "./CertificateCard.css";
import exceptionService from "../../../../utils/exceptionService";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import studentService from "../../../../services/studentService";
import { setStudent } from "../../../../store/slices/studentSlice";

function CertificateCard({ certificate, setCertificates }: any) {
  const dispatch = useDispatch();

  const deleteCertificates = async () => {
    await certificateService.deleteStudentCertificate(certificate.id);
    const data = (await certificateService.getForLoggedStudent()).data?.items;
    setCertificates(data);
    const newStudent = await studentService.getByToken();
    dispatch(setStudent(newStudent));
  };

  return (
    <div className="certificate-card col-12 d-flex flex-column mt-3">
      <div className="certificate-header p-2 d-flex justify-content-between">
        <span>Sertifika Ismi</span>
        <div className="wid-40 gap-3 d-flex justify-content-between">
          <span>Dosya Turu</span>
          <span>Tarih</span>
          <span>Islem</span>
        </div>
      </div>
      <div className="contents p-3 d-flex justify-content-between">
        <Link className="certificate-link" to={certificate.certificateUrl}>
          {certificate.certificateName}
        </Link>

        <div className="wid-35 gap-3 d-flex justify-content-between">
          <img className="pdf-png" src="https://tobeto.com/pdf.png"></img>
          <span>09.02.2024</span>
          <div
            className="certificate-delete-button"
            onClick={deleteCertificates}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default CertificateCard;
