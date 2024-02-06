import { Form, Formik } from "formik";
import FormikInput from "../../FormikInput/FormikInput";
import * as Yup from "yup";
import authService from "../../../services/authService/authService";
import { ToastContainer, toast } from "react-toastify";

function Password() {
  const validationSchema = Yup.object({
    lastPassword: Yup.string().required("Doldurulmasi zorunlu alan*"),
    newPassword: Yup.string()
      .min(6, "Sifreniz 6 karakterden uzun olmalidir")
      .required("Doldurulmasi zorunlu alan*")
      .matches(/[0-9]/, "Sifreniz rakam icermelidir")
      .matches(/[a-z]/, "Sifreniz kucuk karakter icermelidir")
      .matches(/[A-Z]/, "Sifreniz buyuk karakter icermelidir")
      .matches(/[^\w]/, "Sifreniz ozel karakter icermelidir")
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
    try {
      await authService.changePassword(data);
      toast.success("Sifreniz basariyla degistirildi");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="password-settings gap-4">
      <Formik
        initialValues={{}}
        validationSchema={validationSchema}
        onSubmit={(updatedValues) => {
          console.log(updatedValues);
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
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default Password;
