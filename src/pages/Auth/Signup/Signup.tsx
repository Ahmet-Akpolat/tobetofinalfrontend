import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { object, ref, string } from "yup";
import FormikInput from "../../../components/FormikInput/FormikInput";
import { CreateStudentRequest } from "../../../models/requests/StudentRequests";
import AuthService from "../../../services/authService/authService";
import {
  activeLoading,
  clearLoading,
} from "../../../store/slices/loadingSlice";
import { passwordValidator } from "../../../utils/customValidations";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    retypePassword: "",
  };

  const validationSchema = object({
    firstName: string().required("Doldurulması zorunlu alan*"),
    lastName: string().required("Doldurulması zorunlu alan*"),
    email: string()
      .email("Geçersiz e-posta adresi*")
      .required("Doldurulması zorunlu alan*"),
    password: string()
      .required("Doldurulması zorunlu alan*")
      .min(6, "Şifreniz 6 karakterden uzun olmalıdır")
      .test(
        "büyük-küçük-sayı",
        "En Az 1 Büyük Harf, 1 Küçük Harf ve 1 Sayı Giriniz!",
        passwordValidator
      ),
    retypePassword: string()
      .required("Doldurulması zorunlu alan*")
      .oneOf([ref("password")], "Şifreler Eşleşmiyor"),
  });

  const submit = async (values: CreateStudentRequest) => {
    dispatch(activeLoading());
    await AuthService.register(values).finally(() => dispatch(clearLoading()));
    toast.success("Kayıt Başarılı.");
    navigate("/login");
  };

  return (
    <div className="container register-base d-flex justify-content-center">
      <div className="register col-12 col-md-7">
        <Formik
          initialValues={initialValues}
          onSubmit={(initialValues) => {
            const { retypePassword, ...submitValues } = initialValues;
            submit(submitValues);
          }}
          validationSchema={validationSchema}
        >
          <Form className="form">
            <div className="d-flex align-items-center justify-content-center">
              <img
                className="register-img"
                src="https://tobeto.com/_next/static/media/tobeto-logo.29b55e1c.svg"
              />
            </div>
            <div className="register-events">
              <div>
                <h1>Hemen Kayıt Ol</h1>
              </div>
              <div className="w-80">
                <FormikInput
                  name="firstName"
                  className="register-input"
                  placeholder="Ad"
                />
              </div>
              <div className="w-80">
                <FormikInput
                  name="lastName"
                  className="register-input"
                  placeholder="Soyad"
                />
              </div>
              <div className="w-80">
                <FormikInput
                  name="email"
                  className="register-input"
                  placeholder="E-Mail"
                />
              </div>
              <div className="w-80">
                <FormikInput
                  name="password"
                  type="password"
                  className="register-input"
                  placeholder="Şifre"
                />
              </div>
              <div className="w-80">
                <FormikInput
                  name="retypePassword"
                  type="password"
                  className="register-input"
                  placeholder="Şifre Tekrar"
                />
              </div>
              <button className="register-btn" type="submit">
                Kayıt Ol
              </button>
            </div>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <small className="small-text">Zaten bir hesabın var mı?</small>
              <Link className="signup-link" to="/login">
                Giriş Yap
              </Link>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Signup;
