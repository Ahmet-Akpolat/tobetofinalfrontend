import { useState } from "react";
import "./ProfileSidebarElement.css";

function ProfileSidebarElement({ element, setState, svg, header }: any) {
  return (
    <div className="profile-side-bar-element" onClick={() => setState(element)}>
      <a className="btn mb-2 text-start">
        <img src={svg}></img>
        <span className="sidemenu-text"> {header}</span>
      </a>
    </div>
  );
}

export default ProfileSidebarElement;
