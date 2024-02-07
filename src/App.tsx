import { Route, Routes } from "react-router-dom";
import Login from "./pages/Auth/Login/Login";
import Signup from "./pages/Auth/Signup/Signup";
import AuthLayout from "./pages/Auth/AuthLayout";
import { selectIsAuthenticated } from "./store/slices/authSlice";
import { useSelector } from "react-redux";
import MainLayout from "./pages/Main/MainLayout";
import Home from "./pages/Main/Home/Home";
import Footer from "./components/Footer/Footer";
import LectureDetail from "./pages/LectureDetail/LectureDetail";
import { OverlayLoader } from "./components/OverlayLoader/OverlayLoader";
import Profile from "./pages/Profile/Profile";
import { ToastContainer } from "react-toastify";
import LecturesExpandDisplay from "./components/LecturesExpandDisplay/LecturesExpandDisplay";

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

        <Route element={<MainLayout showLayout={false} />}>
          <Route path="/ders-detay" element={<LectureDetail />} />
        </Route>

        <Route element={<MainLayout />}>
          <Route path="/egitimlerim" element={<LecturesExpandDisplay />} />
        </Route>

        <Route element={<MainLayout />}>
          <Route path="profilim" element={<Profile />} />
        </Route>
      </Routes>
      <OverlayLoader />
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default App;
