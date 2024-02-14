import { Form, Formik } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";
import authService from "../../../services/authService/authService";
import { passwordValidator } from "../../../utils/customValidations";
import FormikInput from "../../FormikInput/FormikInput";

function Password() {
  const validationSchema = Yup.object({
    lastPassword: Yup.string().required("Doldurulmasi zorunlu alan*"),
    newPassword: Yup.string()
      .min(6, "Sifreniz 6 karakterden uzun olmalidir")
      .required("Doldurulmasi zorunlu alan*")
      .test(
        "buyuk-kucuk-sayi",
        "En Az 1 Büyük Harf, 1 Küçük Harf ve 1 Sayı Giriniz!",
        passwordValidator
      )
      .notOneOf(
        [Yup.ref("lastPassword")],
        "Yeni sifreniz eskisiyle ayni olamaz"
      ),
    checkNewPassword: Yup.string().oneOf(
      [Yup.ref("newPassword")],
      "Sifreler eslesmiyor"
    ),
  });

  const changePassword = async (data: any) => {
    await authService.changePassword(data);
    toast.success("Sifreniz basariyla degistirildi. Lutfen tekrar giris yapiniz");
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
              <label>Eski Sifre*</label>
              <FormikInput
                name="lastPassword"
                type="password"
                placeholder="Eski Sifre"
              />
            </div>
            <div className="profile-input col-12 col-md-4 mb-4">
              <label>Yeni Sifre*</label>
              <FormikInput
                name="newPassword"
                type="password"
                placeholder="Yeni Sifre"
              />
            </div>
            <div className="profile-input col-12 col-md-4 mb-4">
              <label>Yeni Sifre Tekrar*</label>
              <FormikInput
                name="checkNewPassword"
                type="password"
                placeholder="Yeni Sifre Tekrar"
              />
            </div>
          </div>
          <div className="d-flex justify-content-center gap-4">
            <button
              type="submit"
              className="save-button"
              style={{ width: "300px" }}
            >
              Sifre Degistir
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default Password;
