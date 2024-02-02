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

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-lg-3 mb-8 mb-lg-0">
          <div className="side-menu">
            <ProfileSidebarElement
              element={1}
              setState={setSection}
              svg="icons/person_FILL0.svg"
              header="Kişisel Bilgilerim"
            />
            <ProfileSidebarElement
              element={2}
              setState={setSection}
              svg="icons/work_FILL0_wght300.svg"
              header="Deneyimlerim"
            />
            <ProfileSidebarElement
              element={3}
              setState={setSection}
              svg="icons/school_FILL0.svg"
              header="Eğitim Hayatım"
            />
            <ProfileSidebarElement
              element={4}
              setState={setSection}
              svg="icons/editor_choice_FILL0.svg"
              header="Yetkinliklerim"
            />
            <ProfileSidebarElement
              element={5}
              setState={setSection}
              svg="icons/card_membership_FILL0.svg"
              header="Sertifikalarım"
            />
            <ProfileSidebarElement
              element={6}
              setState={setSection}
              svg="icons/public_FILL0_wght300.svg"
              header="Medya Hesaplarım"
            />
            <ProfileSidebarElement
              element={7}
              setState={setSection}
              svg="icons/translate_FILL0.svg"
              header="Yabancı Dillerim"
            />
            <ProfileSidebarElement
              element={8}
              setState={setSection}
              svg="icons/settings_FILL0.svg"
              header="Ayarlar"
            />
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
