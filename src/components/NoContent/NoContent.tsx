import "./NoContent.css";

const NoContent = (props: any) => {
  return (
    <div className="no-content-main">
      <img className="no-content-img" src="/icons/notFound.svg" />
      <p className="no-content-message">
        Atanmış herhangi bir {props.content} bulunmamaktadır
      </p>
    </div>
  );
};

export default NoContent;
