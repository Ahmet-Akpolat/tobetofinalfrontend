import { Route, Routes } from "react-router-dom";
import Login from "./pages/Auth/Login/Login";
import Signup from "./pages/Auth/Signup/Signup";
import AuthLayout from "./pages/Auth/AuthLayout";
import MainLayout from "./pages/Main/MainLayout";
import Home from "./pages/Main/Home/Home";
import LectureDetail from "./pages/LectureDetail/LectureDetail";
import { OverlayLoader } from "./components/OverlayLoader/OverlayLoader";
import Profile from "./pages/Profile/Profile";
import { ToastContainer } from "react-toastify";
import LecturesExpandDisplay from "./components/ExpandDisplay/LecturesExpandDisplay/LecturesExpandDisplay";
import AnnouncementExpandDisplay from "./components/ExpandDisplay/AnnouncementsExpandDisplay/AnnouncementsExpandDisplay";
import ProfileDetail from "./pages/ProfileDetail/ProfileDetail";
import SurveysExpandDisplay from "./components/ExpandDisplay/SurveysExpandDisplay/SurveysExpandDisplay";

function App() {
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
        autoClose={3000} // Mesajların 3 saniye sonra otomatik olarak kapanması
        closeOnClick={true} // Mesajlara tıkladığınızda kapatılması
        pauseOnFocusLoss={false} // Odak kaybolduğunda mesajların kapatılmaması
      />
    </div>
  );
}

export default App;
