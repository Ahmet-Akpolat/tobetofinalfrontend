import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { object, string } from "yup";
import { AuthLoginRequest } from "../../../models/requests/auth/AuthLoginRequest";
import FormikInput from "../../../components/FormikInput/FormikInput";
import { useDispatch } from "react-redux";
import { setStudentId, setToken } from "../../../store/slices/authSlice";
import AuthService from "../../../services/authServices/AuthService";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = object({
    email: string().required("Doldurulması zorunlu alan*"),
    password: string().required("Doldurulması zorunlu alan*"),
  });

  const submit = async (values: AuthLoginRequest) => {
    try {
      setLoading(true);
      let loginService = new AuthService();
      const response = await loginService.login(values);
      if (response?.accessToken?.token != null) {
        dispatch(setToken(response.accessToken.token));
        const id = dispatch(setStudentId(response?.studentId));
        console.log(id);
      } else {
        toast.error("Yanlış E-mail veya Şifre Lütfen Tekrar Deneyiniz!");
      }
    } catch (error) {
      // Hata durumunda çalışacak kod
      toast.error("Bir hata oluştu. Lütfen tekrar deneyiniz!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-base">
      <div className="login">
        <Formik
          initialValues={initialValues}
          onSubmit={(values: AuthLoginRequest) => {
            submit(values);
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
              <button className="login-btn" type="submit" disabled={loading}>
                {loading ? "Yükleniyor..." : "Giriş Yap"}
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
