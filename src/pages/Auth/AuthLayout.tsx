import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectIsAuthenticated } from "../../store/slices/authSlice";
import { selectIsStudentSet } from "../../store/slices/studentSlice";
import AuthNav from "../../components/AuthNav/AuthNav";
import Footer from "../../components/Footer/Footer";
import { selectNavlink } from "../../store/slices/navbarSlice";

const AuthLayout = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const isSetStudent = useSelector(selectIsStudentSet);
  const navbarlink = useSelector(selectNavlink);

  return (
    <div>
      <>
        {isAuthenticated && isSetStudent ? (
          <Navigate to={navbarlink} />
        ) : (
          <>
            <section>
              <AuthNav />
              <Outlet />
              <Footer backgroundColor="black" />
            </section>
          </>
        )}
      </>
    </div>
  );
};

export default AuthLayout;
