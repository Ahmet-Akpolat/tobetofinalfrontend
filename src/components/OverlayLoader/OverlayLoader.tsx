import { useSelector } from "react-redux";
import { selectLoading } from "../../store/slices/loadingSlice";
import "./OverlayLoader.css";

export const OverlayLoader = () => {
  const isLoading = useSelector(selectLoading);
  return (
    <>
      {isLoading === true && (
        <div className="overlay">
          <div className="overlay__inner">
            <div className="overlay__content">
              <img
                className="spinner"
                src="/images/Tobeto-logo-yatay-beyaz.png"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
