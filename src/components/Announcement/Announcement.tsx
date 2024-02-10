import { useState } from "react";
import "./Announcement.css";
import AnnouncementModal from "./Modal/AnnouncementModal";
import { useSelector } from "react-redux";
import { selectAnnouncement } from "../../store/slices/announcementSlice";
import { formatDate } from "../../utils/formatDate";
import announcementService from "../../services/announcementService";
import { CreatedStudentAnnouncementRequest } from "../../models/requests/StudentAnnouncementRequests";
import { toast } from "react-toastify";
import exceptionService from "../../utils/exceptionService";

function Announcement({ announcement }: any) {
  const [modalShow, setModalShow] = useState(false);

  const readAnnouncement = async (announcementId: string) => {
    try {
      await announcementService.readTheAnnouncement(announcementId);
    } catch (error: any) {
      toast.error(
        exceptionService.errorSelector(JSON.stringify(error.response.data))
      );
    }
  };

  return (
    <div className="col-md-4 col-12 my-4">
      <div className="notfy-card notify">
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-between mb-4">
            <span className="type">Duyuru</span>
            <span className="corp-names type">İstanbul Kodluyor</span>
          </div>
          <span className="header ">{announcement.announcementName}</span>
        </div>
        <div className="d-flex justify-content-between">
          <span className="date">
            {formatDate(announcement.announcementCreatedDate)}
          </span>
          <span
            className="read-more"
            onClick={() => {
              readAnnouncement(announcement.announcementId);
              setModalShow(true);
            }}
          >
            Devamını oku
          </span>
        </div>
      </div>
      <AnnouncementModal
        announcement={announcement}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default Announcement;
