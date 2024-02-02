import "./Languages.css";
import LanguageCard from "./LanguageCard/LanguageCard";

function Languages() {
  return (
    <div className="student-languages">
      <div className="row mb-4">
        <div className="profile-input col-6">
          <select>
            <option>Seciniz*</option>
            <option>Turkce</option>
            <option>Ingilizce</option>
            <option>Arapca</option>
            <option>Almanca</option>
            <option>Fransizca</option>
            <option>Ispanyolca</option>
          </select>
        </div>
        <div className="profile-input col-6">
          <select>
            <option>Seviye Seciniz*</option>
            <option>Temel Seviye</option>
            <option>Orta Seviye</option>
            <option>Ileri Seviye</option>
            <option>Anadil</option>
          </select>
        </div>
      </div>
      <button className="save-button mb-5">Kaydet</button>
      <div className="languages-list row gap-3">
        <LanguageCard />
        <LanguageCard />
        <LanguageCard />
        <LanguageCard />
        <LanguageCard />
        <LanguageCard />
        <LanguageCard />
        <LanguageCard />
        <LanguageCard />
      </div>
    </div>
  );
}

export default Languages;
