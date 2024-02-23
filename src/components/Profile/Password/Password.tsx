import { Form, Formik } from "formik";
import * as Yup from "yup";
import authService from "../../../services/authService/authService";
import { passwordValidator } from "../../../utils/customValidations";
import FormikInput from "../../FormikInput/FormikInput";

function Password() {
  const validationSchema = Yup.object({
    lastPassword: Yup.string().required("Doldurulması zorunlu alan*"),
    newPassword: Yup.string()
      .min(6, "Şifreniz 6 karakterden uzun olmalıdır!")
      .required("Doldurulmasi zorunlu alan*")
      .test(
        "buyuk-kucuk-sayi",
        "En Az 1 Büyük Harf, 1 Küçük Harf ve 1 Sayı Giriniz!",
        passwordValidator
      )
      .notOneOf(
        [Yup.ref("lastPassword")],
        "Yeni şifreniz eskisiyle aynı olamaz!"
      ),
    checkNewPassword: Yup.string()
      .required("Doldurulması zorunlu alan*")
      .oneOf([Yup.ref("newPassword")], "Şifreler eşleşmiyor!"),
  });

  const changePassword = async (data: any) => {
    await authService.changePassword(data);
  };

  return (
    <div className="password-settings gap-4">
      <Formik
        initialValues={{}}
        validationSchema={validationSchema}
        onSubmit={(updatedValues) => {
          changePassword(updatedValues);
        }}
      >
        <Form>
          <div className="row">
            <div className="profile-input col-12 col-md-4 mb-4">
              <label>Eski Şifre*</label>
              <FormikInput
                name="lastPassword"
                type="password"
                placeholder="Eski Şifre"
              />
            </div>
            <div className="profile-input col-12 col-md-4 mb-4">
              <label>Yeni Şifre*</label>
              <FormikInput
                name="newPassword"
                type="password"
                placeholder="Yeni Şifre"
              />
            </div>
            <div className="profile-input col-12 col-md-4 mb-4">
              <label>Yeni Şifre Tekrar*</label>
              <FormikInput
                name="checkNewPassword"
                type="password"
                placeholder="Yeni Şifre Tekrar"
              />
            </div>
          </div>
          <div className="d-flex justify-content-center gap-4">
            <button
              type="submit"
              className="save-button"
              style={{ width: "300px" }}
            >
              Şifre Değiştir
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default Password;
