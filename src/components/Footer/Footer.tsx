import React from "react";
import "./Footer.css";

function Footer({ backgroundColor }: any) {
  return (
    <section className={`bg-secondaryy py-55 ${backgroundColor}`}>
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-6 col-lg-4 mb-lg-0 my-4">
            <a className="d-block mobile-text-center navbar-brand" href="#">
              <span className="footer-image">
                <span>
                  <img src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg'%20version='1.1'%20width='100'%20height='21'/>" />
                </span>
                <img
                  src="images/Tobeto-logo-yatay-beyaz.png"
                  className="footer-logo"
                />
              </span>
            </a>
          </div>
          <div className="col-6 col-lg-8 my-4">
            <ul className="list-unstyled mb-0 d-flex flex-wrap  justify-content-end justify-content-lg-end">
              <li className="mb-lg-0">
                <a className="btnn btn-light-light">Bize Ulaşın</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
