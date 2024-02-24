import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AuthNav.css";
import { toast } from "react-toastify";
import { setNavlink } from "../../store/slices/navbarSlice";
import { useDispatch } from "react-redux";

const AuthNav = () => {
  const navigate = useNavigate();
  const [selectedItemId, setSelectedItemId] = useState("home");
  const dispatch = useDispatch();

  return (
    <nav className="auth-navbar navbar navbar-expand-xxl navbar-custom py-4 mb-4 navbar-dark bg-dark">
      <div className="d-flex justify-content-end align-items-center w-100">
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
        <div className="d-flex media-width justify-content-around align-items-center w-100">
          <Link
            to="/"
            onClick={() => {
              setSelectedItemId("home");
              dispatch(setNavlink("/"));
            }}
          >
            <span className="tobetoImagee">
              <span>
                <img src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg'%20version='1.1'%20width='170'%20height='35'/>" />
              </span>
              <img
                className="logo-auth"
                src="images/Tobeto-logo-yatay-beyaz.png"
                alt="tobeto-logo"
              />
            </span>
          </Link>
          <div
            className="collapse navbar-collapse justify-content-around align-items-start"
            id="navbarNav"
          >
            <div></div>
            <ul className="d-flex navbar-nav gap-4">
              <li
                className={`nav-item ${
                  selectedItemId === "home" ? "selected" : ""
                }`}
                onClick={() => {
                  toast.info("Bu içeriği görebilmek için giriş yapmalısınız!");
                  setSelectedItemId("home");
                  dispatch(setNavlink("/"));
                }}
              >
                <a className="nav-link">Ana Sayfa</a>
              </li>
              <li
                className={`nav-item ${
                  selectedItemId === "profile" ? "selected" : ""
                }`}
                onClick={() => {
                  toast.info("Bu içeriği görebilmek için giriş yapmalısınız!");
                  setSelectedItemId("profile");
                  dispatch(setNavlink("/profil-detay"));
                }}
              >
                <a className="nav-link">Profilim</a>
              </li>
              <li
                className={`nav-item ${
                  selectedItemId === "degerlendirmeler" ? "selected" : ""
                }`}
                onClick={() => {
                  toast.info("Bu içeriği görebilmek için giriş yapmalısınız!");
                  setSelectedItemId("degerlendirmeler");
                  dispatch(setNavlink("/degerlendirmeler"));
                }}
              >
                <a className="nav-link">Değerlendirmeler</a>
              </li>
              <li
                className={`nav-item ${
                  selectedItemId === "educations" ? "selected" : ""
                }`}
                onClick={() => {
                  toast.info("Bu içeriği görebilmek için giriş yapmalısınız!");
                  setSelectedItemId("educations");
                  dispatch(setNavlink("/egitimlerim"));
                }}
              >
                <a className="nav-link">Eğitimlerim</a>
              </li>
              <li
                className={`nav-item ${
                  selectedItemId === "announcements" ? "selected" : ""
                }`}
                onClick={() => {
                  toast.info("Bu içeriği görebilmek için giriş yapmalısınız!");
                  setSelectedItemId("announcements");
                  dispatch(setNavlink("/duyurularim"));
                }}
              >
                <a className="nav-link">Duyuru ve Haberler</a>
              </li>
              <li
                className={`nav-item ${
                  selectedItemId === "surveys" ? "selected" : ""
                }`}
                onClick={() => {
                  toast.info("Bu içeriği görebilmek için giriş yapmalısınız!");
                  setSelectedItemId("surveys");
                  dispatch(setNavlink("/anketlerim"));
                }}
              >
                <a className="nav-link">Anketler</a>
              </li>
            </ul>
            <div className="d-flex justify-space-center align-items-center gap-2">
              <span
                className="authnav-login"
                onClick={() => navigate("/login")}
              >
                Giriş Yap
              </span>
              <span
                className="authnav-signup btn-rainbow"
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Ücretsiz Üye Ol
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AuthNav;
