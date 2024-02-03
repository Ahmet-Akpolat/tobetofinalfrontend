import { Form, Formik } from "formik";
import { AuthLoginRequest } from "../../../models/requests/auth/AuthLoginRequest";
import FormikInput from "../../../components/FormikInput/FormikInput";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";
import { useState } from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import fetchAllData from "../../../utils/fetchalldata";
import authService from "../../../services/authService/authService";
import { setToken } from "../../../store/slices/authSlice";
import {
  activeLoading,
  clearLoading,
} from "../../../store/slices/loadingSlice";

const Login = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Doldurulması zorunlu alan*"),
    password: Yup.string().required("Doldurulması zorunlu alan*"),
  });

  const handleLogin = async (values: AuthLoginRequest) => {
    try {
      dispatch(activeLoading());
      const login = await authService.login(values);
      dispatch(setToken(login?.token));
      if (login?.token) {
        await fetchAllData(dispatch);
      }
    } finally {
      dispatch(clearLoading());
    }
  };

  return (
    <div className="login-base">
      <div className="login-section col-12">
        <div className="login col-12 col-md-6">
          <div className="login-content">
            <span className="login-img-span">
              <img
                className="login-img"
                src="https://tobeto.com/_next/static/media/tobeto-logo.29b55e1c.svg"
              />
            </span>
            <div className="login-form">
              <Formik
                initialValues={initialValues}
                onSubmit={(values: AuthLoginRequest) => {
                  handleLogin(values);
                }}
                validationSchema={validationSchema}
              >
                <Form>
                  <div className="login-events">
                    <FormikInput
                      name="email"
                      className="login-input"
                      placeholder="E-Mail"
                    />
                    <FormikInput
                      name="password"
                      type="password"
                      className="login-input"
                      placeholder="Şifre"
                    />
                    <button className="login-btn" type="submit">
                      Giriş Yap
                    </button>
                  </div>
                  <div className="d-flex align-items-center justify-content-center mt-2">
                    <p className="refresh-password">Şifremi Unuttum</p>
                  </div>
                </Form>
              </Formik>
            </div>
            <div>
              <small className="login-signup-button">
                Henüz üye değil misin?{" "}
                <Link className="signup-link" to="/signup">
                  Kayıt ol
                </Link>
              </small>{" "}
            </div>
          </div>
        </div>
        <div className="istkodluyor col-12 col-md-6">
          <div className="istkodluyor-content">
            <span className="dot-image-span">
              <img className="dot-image" src="/icons/signup-dot-image.svg" />
            </span>
            <div>
              <span className="ik-logo-span">
                <img className="ik-logo" src="/icons/ik-logo-dark.svg" />
              </span>
              <span className="greenline-span">
                <img className="greenline" src="/images/greenline.png" />
              </span>
              <span className="ik-text">
                Aradığın
                <span className="quot1"> "</span>
                İş
                <span className="quot2">" </span>
                Burada!
              </span>
              <span className="button">
                <button className="login-ik-appeal">Başvur</button>
              </span>
            </div>
            <span className="dot-image-span2">
              <img className="dot-image2" src="/icons/signup-dot-image.svg" />
            </span>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default Login;
