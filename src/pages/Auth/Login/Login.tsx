import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import FormikInput from "../../../components/FormikInput/FormikInput";
import { AuthLoginRequest } from "../../../models/requests/auth/AuthLoginRequest";
import authService from "../../../services/authService/authService";
import { setToken } from "../../../store/slices/authSlice";
import {
  activeLoading,
  clearLoading,
} from "../../../store/slices/loadingSlice";
import fetchAllData from "../../../utils/fetchalldata";
import "./Login.css";
import { toast } from "react-toastify";
import exceptionService from "../../../utils/exceptionService";

const Login = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Doldurulması zorunlu alan*"),
    password: Yup.string()
      .required("Doldurulması zorunlu alan*")
      .min(6, "Sifreniz 6 karakterden fazla olmalidir"),
  });

  const handleLogin = async (values: AuthLoginRequest) => {
    dispatch(activeLoading());
    const login = await authService.login(values);
    dispatch(setToken(login?.token));
    if (login?.token) {
      await fetchAllData(dispatch);
    }
    dispatch(clearLoading())
  };

  return (
    <div className="container login-base d-flex justify-content-center align-items-center">
      <div className="login col-12 col-md-7">
        <Formik
          initialValues={initialValues}
          onSubmit={(values: AuthLoginRequest) => {
            handleLogin(values);
          }}
          validationSchema={validationSchema}
        >
          <Form className="form">
            <div className="d-flex align-items-center justify-content-center">
              <img
                className="login-img"
                src="https://tobeto.com/_next/static/media/tobeto-logo.29b55e1c.svg"
              />
            </div>
            <div className="login-events d-flex flex-column align-items-center justify-content-center">
              <div className="w-80">
                <FormikInput
                  name="email"
                  className="login-input"
                  placeholder="E-Mail"
                />
              </div>
              <div className="w-80">
                <FormikInput
                  name="password"
                  type="password"
                  className="login-input"
                  placeholder="Şifre"
                />
              </div>
              <button className="login-btn" type="submit">
                Giriş Yap
              </button>
            </div>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <small className="small-text">Henüz üye değil misin?</small>
              <Link className="signup-link" to="/signup">
                Kayıt ol!
              </Link>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;
