import Modal from "react-bootstrap/Modal";

function AnnouncementModal({ announcement, show, onHide }: any) {
  return (
    <Modal
      show={show}
      onHide={onHide}
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
                  <b>{announcement.announcementName}</b>
                </span>
              </div>
            </div>
          </Modal.Header>
          <Modal.Body>
            <p>
              Merhabalar,
              <br /> <br />
              {announcement.announcementDescription}
            </p>
          </Modal.Body>
        </div>
      </div>
    </Modal>
  );
}

export default AnnouncementModal;
