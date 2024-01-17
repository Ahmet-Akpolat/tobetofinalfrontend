import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../../store/slices/authSlice";
import { Navigate, Outlet } from "react-router-dom";
import { selectIsStudentSet } from "../../store/slices/studentSlice";

const AuthLayout = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const isStudentSet = useSelector(selectIsStudentSet);

  return (
    <div>
      {" "}
      <>
        {isAuthenticated && isStudentSet ? (
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
