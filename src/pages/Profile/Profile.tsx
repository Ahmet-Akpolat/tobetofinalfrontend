import "./Profile.css";
import { useState } from "react";
import ProfileSidebarElement from "../../components/ProfileSidebarElement/ProfileSidebarElement";
import PersonalInformations from "../../components/Profile/PersonalInformations/PersonalInformations";
import Experiences from "../../components/Profile/Experiences/Experiences";
import Education from "../../components/Profile/Education/Education";
import Skills from "../../components/Profile/Skills/Skills";
import Certificates from "../../components/Profile/Certificates/Certificates";
import SocialMedia from "../../components/Profile/SocialMedia/SocialMedia";
import Languages from "../../components/Profile/Languages/Languages";
import Password from "../../components/Profile/Password/Password";

function Profile() {
  const [section, setSection] = useState(1);
  const [isSelected, setIsSelected] = useState(1);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-lg-3 mb-8 mb-lg-0">
          <div className="side-menu">
            <div
              className={isSelected == 1 ? "is-selected" : ""}
              onClick={() => setIsSelected(1)}
            >
              <ProfileSidebarElement
                element={1}
                setState={setSection}
                svg="icons/person_FILL0.svg"
                header="Kişisel Bilgilerim"
              />
            </div>
            <div
              className={isSelected == 2 ? "is-selected" : ""}
              onClick={() => setIsSelected(2)}
            >
              <ProfileSidebarElement
                element={2}
                setState={setSection}
                svg="icons/work_FILL0_wght300.svg"
                header="Deneyimlerim"
              />
            </div>
            <div
              className={isSelected == 3 ? "is-selected" : ""}
              onClick={() => setIsSelected(3)}
            >
              <ProfileSidebarElement
                element={3}
                setState={setSection}
                svg="icons/school_FILL0.svg"
                header="Eğitim Hayatım"
              />
            </div>
            <div
              className={isSelected == 4 ? "is-selected" : ""}
              onClick={() => setIsSelected(4)}
            >
              <ProfileSidebarElement
                element={4}
                setState={setSection}
                svg="icons/editor_choice_FILL0.svg"
                header="Yetkinliklerim"
              />
            </div>
            <div
              className={isSelected == 5 ? "is-selected" : ""}
              onClick={() => setIsSelected(5)}
            >
              <ProfileSidebarElement
                element={5}
                setState={setSection}
                svg="icons/card_membership_FILL0.svg"
                header="Sertifikalarım"
              />
            </div>
            <div
              className={isSelected == 6 ? "is-selected" : ""}
              onClick={() => setIsSelected(6)}
            >
              <ProfileSidebarElement
                element={6}
                setState={setSection}
                svg="icons/public_FILL0_wght300.svg"
                header="Medya Hesaplarım"
              />
            </div>
            <div
              className={isSelected == 7 ? "is-selected" : ""}
              onClick={() => setIsSelected(7)}
            >
              <ProfileSidebarElement
                element={7}
                setState={setSection}
                svg="icons/translate_FILL0.svg"
                header="Yabancı Dillerim"
              />
            </div>
            <div
              className={isSelected == 8 ? "is-selected" : ""}
              onClick={() => setIsSelected(8)}
            >
              <ProfileSidebarElement
                element={8}
                setState={setSection}
                svg="icons/settings_FILL0.svg"
                header="Ayarlar"
              />
            </div>
          </div>
        </div>
        <div className="col-11 col-lg-8" style={{ minHeight: "72.2vh" }}>
          {section === 1 && <PersonalInformations />}
          {section === 2 && <Experiences />}
          {section === 3 && <Education />}
          {section === 4 && <Skills />}
          {section === 5 && <Certificates />}
          {section === 6 && <SocialMedia />}
          {section === 7 && <Languages />}
          {section === 8 && <Password />}
        </div>
      </div>
    </div>
  );
}

export default Profile;
