import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../../store/slices/authSlice";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const MainLayout = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <div>
      <>
        {isAuthenticated ? (
          <section>
            <Navbar />
            <Outlet />
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
