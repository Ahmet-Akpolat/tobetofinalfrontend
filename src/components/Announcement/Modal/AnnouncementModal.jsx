import Modal from "react-bootstrap/Modal";
import { selectAnnouncement } from "../../../store/slices/announcementSlice";
import { useSelector } from "react-redux";

function AnnouncementModal(props) {

  const announcements = useSelector(selectAnnouncement)

  return (
    <Modal
    {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="">
        <div className="modal-content">
          <Modal.Header closeButton>
            <div className="modal-hea">
              <div className="d-flex flex-column modal-header-text">
                <span className="text-dark">
                  <b>{announcements[props.index].announcementName}</b>
                </span>
              </div>
            </div>
          </Modal.Header>
          <Modal.Body>
            <p>
              Merhabalar,
              <br /> <br />
              {announcements[props.index].announcementDescription}
            </p>
          </Modal.Body>
        </div>
      </div>
    </Modal>
  );
}

export default AnnouncementModal;
