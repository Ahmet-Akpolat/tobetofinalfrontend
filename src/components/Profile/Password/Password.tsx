import { Form, Formik } from "formik";
import FormikInput from "../../FormikInput/FormikInput";

function Password() {
  return (
    <div className="password-settings gap-4">
      <Formik
        initialValues={{}}
        onSubmit={(initialValues) => {
          console.log(initialValues);
        }}
      >
        <Form>
          <div className="row">
            <div className="profile-input col-12 col-md-4 mb-4">
              <label>Eski Sifre*</label>
              <FormikInput
                name="oldPassword"
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
                name="newPasswordControl"
                type="password"
                placeholder="Yeni Sifre Tekrar"
              />
            </div>
          </div>
          <div className="d-flex gap-4">
            <button
              type="submit"
              className="save-button"
              style={{ width: "450px" }}
            >
              Sifre Degistir
            </button>
            <button
              type="button"
              className="delete-button"
              style={{ width: "450px" }}
              onClick={() => console.log("asd")}
            >
              Uyeligi Sonlandir
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default Password;
