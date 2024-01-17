import "./App.css";
import { Route, Routes } from "react-router-dom";
import AuthLayout from "./pages/Auth/AuthLayout";
import { Login } from "./pages/Auth/Login/Login";
import { Signup } from "./pages/Auth/Signup/Signup";
import Home from "./pages/Home/Home";
import PrivateRoute from "./utilities/PrivateRoute";
import { Navbar } from "./layouts/Navbar/Navbar";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "./store/slices/authSlice";

function App() {
  const isAuth = useSelector(selectIsAuthenticated);

  return (
    <div>
      {isAuth && <Navbar />}
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
