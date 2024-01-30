import { useState } from "react";
import "./AuthNav.css";

const AuthNav = () => {
  const [selectedItemId, setSelectedItemId] = useState(null);
  const handleItemClick = (itemId: any) => {
    setSelectedItemId(itemId);
  };

  return (
    <div className="authnav-main">
      <div className="authnav-istkodluyor">
        <div className="istkodluyor-banner">
          <span className="ik-logo">
            <img
              className="authnav-istkodluyor-img"
              src="https://istanbulkodluyor.com/_next/static/media/ik-logo-light-sm.8412685f.svg"
            />
          </span>
          <span className="ik-authnav-text">
            Aradığın
            <span className="quot1"> "</span>
            İş
            <span className="quot2">" </span>
            Burada!
          </span>
          <button className="appeal-button">Başvur</button>
        </div>
      </div>
      <div className="authnav-tobeto">
        <div className="authnav-tobeto-banner">
          <span>
            <img
              className="authnav-tobeto-logo"
              src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTebeto-logo-yatay-beyaz.8c2d6927.png&w=256&q=75"
            ></img>
          </span>
          <ul className="authnav-section">
            <li
              className={`auth-nav-item ${
                selectedItemId === "whoweare" ? "selected" : ""
              }`}
              onClick={() => handleItemClick("whoweare")}
            >
              <a className="auth-nav-link">Biz Kimiz?</a>
            </li>
            <li
              className={`auth-nav-item ${
                selectedItemId === "whatwedo" ? "selected" : ""
              }`}
              onClick={() => handleItemClick("whatwedo")}
            >
              <a className="auth-nav-link">Neler Sunuyoruz?</a>
            </li>
            <li
              className={`auth-nav-item ${
                selectedItemId === "catalog" ? "selected" : ""
              }`}
              onClick={() => handleItemClick("catalog")}
            >
              <a className="auth-nav-link">Katalog</a>
            </li>
            <li
              className={`auth-nav-item ${
                selectedItemId === "codecademy" ? "selected" : ""
              }`}
              onClick={() => handleItemClick("codecademy")}
            >
              <a className="auth-nav-link">Codecademy</a>
            </li>
            <li
              className={`auth-nav-item ${
                selectedItemId === "tobeto" ? "selected" : ""
              }`}
              onClick={() => handleItemClick("tobeto")}
            >
              <a className="auth-nav-link">Tobeto'da Bu Ay</a>
            </li>
          </ul>
          <span className="authnav-buttons">
            <button className="authnav-login">Giriş Yap</button>
            <button className="authnav-signup">Ücretsiz Üye Ol</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AuthNav;
