import { useState } from "react";
import "./Announcement.css";
import AnnouncementModal from "./Modal/AnnouncementModal";
import { useSelector } from "react-redux";
import { selectAnnouncement } from "../../store/slices/announcementSlice";
import { formatDate } from "../../utils/formatDate";

function Announcement({index}) {
  const [modalShow, setModalShow] = useState(false);
  const announcements = useSelector(selectAnnouncement)

  return (
    <div className="col-md-4 col-12 my-4">
      <div className="notfy-card notify">
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-between mb-4">
            <span className="type">Duyuru</span>
            <span className="corp-names type">
              İstanbul Kodluyor
            </span>
          </div>
          <span className="header ">
          {announcements[index].announcementName}
          </span>
        </div>
        <div className="d-flex justify-content-between">
          <span className="date">{formatDate(announcements[index].announcementCreatedDate)}</span>
          <span className="read-more" onClick={() => setModalShow(true)}>
            Devamını oku
          </span>
        </div>
      </div>
      <AnnouncementModal index={index} show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}

export default Announcement;
