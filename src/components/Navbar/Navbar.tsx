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

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const student = useSelector(selectStudent);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogOut = async () => {
    dispatch(clearAuth());
    dispatch(clearStudent());
    dispatch(clearAppeal());
    dispatch(clearAnnouncement());
    dispatch(clearLecture());
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-xxl py-4 mb-4 bg-white">
      <div className="container-fluid">
        <Link to="/">
          <span className="tobetoImage">
            <span>
              <img src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg'%20version='1.1'%20width='170'%20height='35'/>" />
            </span>
            <img className="logo" src="images/tobeto-logo.png" alt="tobeto-logo" />
          </span>
        </Link>
        <ul className="d-none d-xxl-flex navbar-nav gap-3">
          <li className="nav-item">
            <a className="nav-link nav-active">Ana Sayfa</a>
          </li>
          <li className="nav-item">
            <a className="nav-link c-gray-3">Profilim</a>
          </li>
          <li className="nav-item">
            <a className="nav-link c-gray-3">Değerlendirmeler</a>
          </li>
          <li className="nav-item">
            <a className="nav-link c-gray-3">Katalog</a>
          </li>
          <li className="nav-item">
            <a className="nav-link c-gray-3">Takvim</a>
          </li>
          <li className="nav-item">
            <a className="nav-link c-gray-3">İstanbul Kodluyor</a>
          </li>
        </ul>
        <div className=" d-xll-block">
          <div className="d-flex justify-space-between align-items-center">
            <div className="mx-3 align-items-center d-flex align-items-center">
              <span className="tbt-gradient"></span>
            </div>
            <div className="header-avatar ">
              <div className="me-2 d-flex align-items-center justify-content-center">
                <span>
                  <img
                    src="https://pbs.twimg.com/profile_images/1697250796906348546/JAYDV2ix_400x400.jpg"
                    className="cv-pp-img rounded-circle"
                  />
                </span>
              </div>
              <span>
                <Dropdown
                  show={dropdownOpen}
                  onToggle={(isOpen) => setDropdownOpen(isOpen)}
                >
                  <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                    {student.firstName + " " + student.lastName}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => navigate("/profilim")}>
                      Profil Bilgileri
                    </Dropdown.Item>
                    <Dropdown.Item onClick={handleLogOut}>
                      Oturumu Kapat
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
