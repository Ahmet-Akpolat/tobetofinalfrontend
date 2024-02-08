import { clearAuth, selectIsAuthenticated } from "../../store/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { clearStudent, selectStudent } from "../../store/slices/studentSlice";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { useState } from "react";
import "./Navbar.css";
import { clearAppeal } from "../../store/slices/appealSlice";
import { clearAnnouncement } from "../../store/slices/announcementSlice";
import { clearLecture } from "../../store/slices/lectureSlice";
import { clearSurvey } from "../../store/slices/surveySlice";
import { clearExams } from "../../store/slices/examSlice";
import { Logout } from "../../utils/logout";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const student = useSelector(selectStudent);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [selectedItemId, setSelectedItemId] = useState("home");
  const handleItemClick = (itemId: any) => {
    setSelectedItemId(itemId);
  };

  const handleLogOut = () => {
    Logout(navigate, dispatch);
  };

  return (
    <nav className="navbar navbar-expand-xxl navbar-custom py-4 mb-4 bg-white justify-content-between">
      <Link to="/">
        <span className="tobetoImage">
          <span>
            <img src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg'%20version='1.1'%20width='170'%20height='35'/>" />
          </span>
          <img
            className="logo"
            src="images/tobeto-logo.png"
            alt="tobeto-logo"
          />
        </span>
      </Link>
      <ul className="d-none d-xxl-flex navbar-nav gap-3">
        <li
          className={`nav-item ${selectedItemId === "home" ? "selected" : ""}`}
          onClick={() => handleItemClick("home")}
        >
          <a className="nav-link">Ana Sayfa</a>
        </li>
        <li
          className={`nav-item ${
            selectedItemId === "profile" ? "selected" : ""
          }`}
          onClick={() => handleItemClick("profile")}
        >
          <a className="nav-link">Profilim</a>
        </li>
        <li
          className={`nav-item ${
            selectedItemId === "reviews" ? "selected" : ""
          }`}
          onClick={() => handleItemClick("reviews")}
        >
          <a className="nav-link">Değerlendirmeler</a>
        </li>
        <li
          className={`nav-item ${
            selectedItemId === "catalog" ? "selected" : ""
          }`}
          onClick={() => handleItemClick("catalog")}
        >
          <a className="nav-link">Katalog</a>
        </li>
        <li
          className={`nav-item ${
            selectedItemId === "calendar" ? "selected" : ""
          }`}
          onClick={() => handleItemClick("calendar")}
        >
          <a className="nav-link">Takvim</a>
        </li>
        <li
          className={`nav-item ${
            selectedItemId === "kodluyor" ? "selected" : ""
          }`}
          onClick={() => handleItemClick("kodluyor")}
        >
          <a className="nav-link">İstanbul Kodluyor</a>
        </li>
      </ul>
      <div className="navbar-sec">
        <div className="d-flex justify-space-between align-items-center">
          <div className="mx-3 align-items-center d-flex align-items-center">
            <span className="tbt-gradient" onClick={() => navigate("/")}>
              <img
                className="navbar-tobeto-icon"
                src="/icons/tbtlogo-mainlogo.svg"
                alt="navbar-tobeto-logo"
              />
            </span>
          </div>
          <div className="header-avatar">
            <div className="me-2 d-flex align-items-center justify-content-center">
              <span>
                <img
                  className="navbar-profile-photo"
                  src={
                    student.profilePhotoPath
                      ? student.profilePhotoPath
                      : "https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png"
                  }
                />
              </span>
            </div>
            <span className="d-flex justify-space-between align-items-center">
              <Dropdown
                show={dropdownOpen}
                onToggle={(isOpen) => setDropdownOpen(isOpen)}
              >
                <Dropdown.Toggle
                  variant="Secondary"
                  id="dropdown-basic"
                  className="studentName"
                >
                  {student.firstName + " " + student.lastName}
                </Dropdown.Toggle>
                <Dropdown.Menu className="student-menu">
                  <Dropdown.Item
                    className="dropdown-item"
                    onClick={() => navigate("/profilim")}
                  >
                    Profil Bilgileri
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="dropdown-item"
                    onClick={handleLogOut}
                  >
                    Oturumu Kapat
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
