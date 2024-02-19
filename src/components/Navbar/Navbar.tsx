import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { selectStudent } from "../../store/slices/studentSlice";
import { Logout } from "../../utils/logout";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const student = useSelector(selectStudent);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [selectedItemId, setSelectedItemId] = useState("home");

  const handleLogout = () => {
    Logout(dispatch);
  };

  return (
    <nav className="navbar navbar-expand-xxl navbar-custom py-4 mb-4 bg-white">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <Link to="/" onClick={() => setSelectedItemId("home")}>
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
      <div
        className="collapse navbar-collapse justify-content-center"
        id="navbarNav"
      >
        <ul className="d-xxl-flex navbar-nav gap-4">
          <li
            className={`nav-item ${
              selectedItemId === "home" ? "selected" : ""
            }`}
            onClick={() => {
              navigate("/");
              setSelectedItemId("home");
            }}
          >
            <a className="nav-link">Ana Sayfa</a>
          </li>
          <li
            className={`nav-item ${
              selectedItemId === "profile" ? "selected" : ""
            }`}
            onClick={() => {
              navigate("/profil-detay");
              setSelectedItemId("profile");
            }}
          >
            <a className="nav-link">Profilim</a>
          </li>
          <li
            className={`nav-item ${
              selectedItemId === "review" ? "selected" : ""
            }`}
            onClick={() => {
              navigate("/degerlendirmeler");
              setSelectedItemId("review");
            }}
          >
            <a className="nav-link">Değerlendirmeler</a>
          </li>
          <li
            className={`nav-item ${
              selectedItemId === "educations" ? "selected" : ""
            }`}
            onClick={() => {
              navigate("/egitimlerim");
              setSelectedItemId("educations");
            }}
          >
            <a className="nav-link">Eğitimlerim</a>
          </li>
          <li
            className={`nav-item ${
              selectedItemId === "announcements" ? "selected" : ""
            }`}
            onClick={() => {
              navigate("/duyurularim");
              setSelectedItemId("announcements");
            }}
          >
            <a className="nav-link">Duyuru ve Haberler</a>
          </li>
          <li
            className={`nav-item ${
              selectedItemId === "surveys" ? "selected" : ""
            }`}
            onClick={() => {
              navigate("/anketlerim");
              setSelectedItemId("surveys");
            }}
          >
            <a className="nav-link">Anketler</a>
          </li>
        </ul>
      </div>
      <div className="navbar-sec">
        <div className="d-flex justify-space-center align-items-center">
          <div className="header-avatar ">
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
                <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                  <span className="studentName">
                    {student.firstName + " " + student.lastName}
                  </span>
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
                    onClick={handleLogout}
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
