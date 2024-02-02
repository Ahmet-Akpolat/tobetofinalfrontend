import "./LanguageCard.css";

function LanguageCard() {
  return (
    <div className="language-card d-flex gap-2 align-items-center">
      <div className="language-card-content d-flex flex-column ">
        <span className="language-name">Ingilizce</span>
        <span className="language-degree">Orta Seviye</span>
      </div>
    </div>
  );
}

export default LanguageCard;
