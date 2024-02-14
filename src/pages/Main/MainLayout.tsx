import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { selectIsAuthenticated } from "../../store/slices/authSlice";

const MainLayout = ({ showLayout = true }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <div>
      <>
        {isAuthenticated ? (
          <section>
            {showLayout && <Navbar />}
            <Outlet />
            {showLayout && <Footer />}
          </section>
        ) : (
          <>
            <Navigate to="/login" />
          </>
        )}
      </>
    </div>
  );
};

export default MainLayout;
