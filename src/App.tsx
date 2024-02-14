import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AnnouncementExpandDisplay from "./components/ExpandDisplay/AnnouncementsExpandDisplay/AnnouncementsExpandDisplay";
import LecturesExpandDisplay from "./components/ExpandDisplay/LecturesExpandDisplay/LecturesExpandDisplay";
import SurveysExpandDisplay from "./components/ExpandDisplay/SurveysExpandDisplay/SurveysExpandDisplay";
import { OverlayLoader } from "./components/OverlayLoader/OverlayLoader";
import AuthLayout from "./pages/Auth/AuthLayout";
import Login from "./pages/Auth/Login/Login";
import Signup from "./pages/Auth/Signup/Signup";
import LectureDetail from "./pages/LectureDetail/LectureDetail";
import Home from "./pages/Main/Home/Home";
import MainLayout from "./pages/Main/MainLayout";
import Profile from "./pages/Profile/Profile";
import ProfileDetail from "./pages/ProfileDetail/ProfileDetail";
import authService from "./services/authService/authService";

function App() {
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (location.pathname !== "/login" && location.pathname !== "/signup") {
        authService.refreshToken();
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [location]);

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
          <Route path="/duyurularim" element={<AnnouncementExpandDisplay />} />
        </Route>

        <Route element={<MainLayout />}>
          <Route path="/anketlerim" element={<SurveysExpandDisplay />} />
        </Route>

        <Route element={<MainLayout />}>
          <Route path="/profil-detay" element={<ProfileDetail />} />
        </Route>

        <Route element={<MainLayout />}>
          <Route path="/profilim" element={<Profile />} />
        </Route>
      </Routes>
      <OverlayLoader />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        closeOnClick={true}
        pauseOnFocusLoss={true}
      />
    </div>
  );
}

export default App;
