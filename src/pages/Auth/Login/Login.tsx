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
      <div className="login col-12 col-md-5">
        <Formik
          initialValues={initialValues}
          onSubmit={(values: AuthLoginRequest) => {
            handleLogin(values);
          }}
          validationSchema={validationSchema}
        >
          <Form>
            <div className="d-flex align-items-center justify-content-center">
              <img
                className="login-img"
                src="https://tobeto.com/_next/static/media/tobeto-logo.29b55e1c.svg"
              />
            </div>
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
              <small>
                Henüz üye değil misin? <Link to="/signup">Kayıt ol!</Link>
              </small>
            </div>
          </Form>
        </Formik>
      </div>
      <ToastContainer position="bottom-right" theme="light" />
    </div>
  );
};

export default Login;
