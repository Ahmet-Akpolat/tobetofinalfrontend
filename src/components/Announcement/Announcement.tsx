import { useState } from "react";
import "./Announcement.css";
import AnnouncementModal from "./Modal/AnnouncementModal";
import { formatDate } from "../../utils/formatDate";
import announcementService from "../../services/announcementService";

function Announcement({ announcement }: any) {
  const [modalShow, setModalShow] = useState(false);

  const readAnnouncement = async (announcementId: string) => {
    await announcementService.readTheAnnouncement(announcementId);
  };

  return (
    <div className="col-md-4 col-12 my-4">
      <div className="notfy-card notify">
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-between mb-4">
            <div className="d-flex justify-content-between c">
              {announcement.isRead === false && (
                <div className="unreaded-notify"></div>
              )}
              <span className="type">Duyuru</span>
            </div>
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
