import "./InfoCard.css";

function InfoCard({ background, header, onClick }: any) {
  return (
    <div className={`info-card ${background} col-12 col-md-4`}>
      <div>
        <h1 className="mt-5">{header}</h1>
        <button className="link-button w-100" onClick={onClick}>
          <strong>Başla</strong>
        </button>
      </div>
    </div>
  );
}

export default InfoCard;
