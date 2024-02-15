import { useState } from "react";
import announcementService from "../../services/announcementService";
import { formatDate } from "../../utils/formatDate";
import "./Announcement.css";
import AnnouncementModal from "./Modal/AnnouncementModal";
import { useDispatch } from "react-redux";
import { setAnnouncement } from "../../store/slices/announcementSlice";

function Announcement({ announcement }: any) {
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);

  const readAnnouncement = async (announcementId: string) => {
    await announcementService.readTheAnnouncement(announcementId);
    const newAnnouncements = await announcementService.getAll(0, 12);
    dispatch(setAnnouncement(newAnnouncements));
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
