import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectIsAuthenticated } from "../../store/slices/authSlice";
import { selectIsStudentSet } from "../../store/slices/studentSlice";
import Footer from "../../components/Footer/Footer";

const AuthLayout = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const isSetStudent = useSelector(selectIsStudentSet);

  return (
    <div>
      <>
        {isAuthenticated && isSetStudent ? (
          <Navigate to="/" />
          ) : (
            <>
            <section>
              <Outlet />
            </section>
          </>
        )}
      </>
    </div>
  );
};

export default AuthLayout;
