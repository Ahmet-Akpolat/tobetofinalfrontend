import { Route, Routes } from "react-router-dom";
import Login from "./pages/Auth/Login/Login";
import Signup from "./pages/Auth/Signup/Signup";
import AuthLayout from "./pages/Auth/AuthLayout";
import { selectIsAuthenticated } from "./store/slices/authSlice";
import { useSelector } from "react-redux";
import MainLayout from "./pages/Main/MainLayout";
import Home from "./pages/Main/Home/Home";

function App() {
  const isAuth = useSelector(selectIsAuthenticated);

  return (
    <div>
      <Routes>
        {/*Giriş Yapma Sayfaları */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        {/*Giriş Yaptıktan Sonra Erişilebilen Sayfalar*/}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
