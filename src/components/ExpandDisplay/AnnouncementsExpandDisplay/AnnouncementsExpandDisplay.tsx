import { useState } from "react";
import "./AnnouncementsExpandDisplay.css";
import Announcement from "../../Announcement/Announcement";
import announcementService from "../../../services/announcementService";
import NoContent from "../../NoContent/NoContent";
import { useDispatch, useSelector } from "react-redux";
import { selectAnnouncement } from "../../../store/slices/announcementSlice";
import { fetchAnnouncements } from "../../../utils/fetchalldata";

function AnnouncementExpandDisplay() {
  const dispatch = useDispatch();
  const [pageSize, setPageSize] = useState(0);
  const [isSelected, setIsSelected] = useState(0);
  const [clicked, setClicked] = useState(0);
  const [announcements, setAnnouncements] = useState(
    useSelector(selectAnnouncement)
  );

  const getAnnouncements = async (pageNumber: any) => {
    const data = await announcementService.getAllWithData(pageNumber, 12);
    setAnnouncements(data.items);
    setPageSize(data.pages);
  };

  const getReadedAnnouncements = async (pageNumber: any) => {
    const data = await announcementService.getReadedAnnouncement(
      pageNumber,
      12
    );
    setAnnouncements(data.data.items);
    setPageSize(data.data.pages);
  };

  window.onload = async () => {
    await fetchAnnouncements(dispatch);
  };

  return (
    <main>
      <div className="announcements-expand">
        <div className="container-fluid">
          <div className="page-banner-card">
            <div className="container">
              <div className="row">
                <strong>Duyurularim</strong>
              </div>
            </div>
          </div>
        </div>
        {!announcements.length ? (
          <div className="container-fluid">
            <NoContent content="ders" />
          </div>
        ) : (
          <div className="container-fluid">
            <div className="container filters">
              <ul
                className="nav nav-tabs mainTablist d-flex justify-content-around"
                role="tablist"
              >
                <div className="d-flex justify-content-center">
                  <li className={`nav-item ${clicked === 0 && "is-selectedd"}`}>
                    <button
                      className="filters-link"
                      onClick={() => {
                        setIsSelected(0);
                        setClicked(0);
                        getAnnouncements(0);
                      }}
                    >
                      Tüm Duyurular
                    </button>
                  </li>
                  <li className={`nav-item ${clicked === 1 && "is-selectedd"}`}>
                    <button
                      className="filters-link"
                      onClick={() => {
                        setIsSelected(0);
                        setClicked(1);
                        getReadedAnnouncements(0);
                      }}
                    >
                      Okuduklarim
                    </button>
                  </li>
                </div>
              </ul>
            </div>
            <div className="container mt-4">
              {announcements !== null && (
                <div className="row list">
                  {announcements.map((announcement: any) => {
                    return <Announcement announcement={announcement} />;
                  })}
                </div>
              )}

              <div className="pages-control">
                <ul
                  className="pagination justify-content-center gap-2"
                  role="navigation"
                  aria-label="Pagination"
                >
                  {Array.from(Array(pageSize).keys()).map((page) => (
                    <li
                      className={
                        isSelected == page
                          ? "li-selected page-item selected-hover"
                          : "page-item item-hover"
                      }
                      onClick={() => {
                        setIsSelected(page);
                        if (clicked === 0) getAnnouncements(page);
                        //else if (clicked === 1) getReadedAnnouncements(page);
                      }}
                    >
                      <a
                        rel="canonical"
                        role="button"
                        className="page-link"
                        aria-current="page"
                      >
                        {page + 1}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default AnnouncementExpandDisplay;
