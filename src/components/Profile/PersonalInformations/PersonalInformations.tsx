import FormikInput from "../../FormikInput/FormikInput";
import "./PersonalInformations.css";
import * as Yup from "yup";
import "yup-phone-lite";
import { Form, Formik } from "formik";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { selectStudent } from "../../../store/slices/studentSlice";

function PersonalInformations() {
  const student = useSelector(selectStudent);

  const initialValues = {
    name: "",
    surname: "",
    phone: "",
    birthDate: "",
    nationalIdentity: "",
    email: "",
    country: "",
    city: "",
    district: "",
    addressDetail: "",
    description: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Doldurulması zorunlu alan*"),
    surname: Yup.string().required("Doldurulması zorunlu alan*"),
    birthDate: Yup.string().required("Doldurulması zorunlu alan*"),
    country: Yup.string().required("Doldurulması zorunlu alan*"),
    city: Yup.string().required("Doldurulması zorunlu alan*"),
    district: Yup.string().required("Doldurulması zorunlu alan*"),
    email: Yup.string()
      .email("Lutfen Gecerli Bir E-Posta Adresi Giriniz")
      .required("Doldurulması zorunlu alan*"),
    phone: Yup.string()
      .phone("TR", "Lutfen Gecerli Bir Telefon Numarasi Giriniz")
      .required("Doldurulması zorunlu alan*"),
    nationalIdentity: Yup.string()
      .required("*Aboneliklerde fatura için doldurulması zorunlu alan")
      .typeError("*Aboneliklerde fatura için doldurulması zorunlu alan")
      .matches(/^[0-9]{11}$/, "Lütfen Geçerli Bir TC Kimlik Numarası Giriniz"),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(initialValues) => {
          console.log(initialValues);
        }}
      >
        <Form>
          <div className="personal-informations row">
            <div className="col-12 mb-5 text-center">
              <div className="profile-photo">
                <img
                  src={
                    student.profilePhotoPath
                      ? student.profilePhotoPath
                      : "https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png"
                  }
                ></img>
                <div className="profile-photo-remove"></div>
                <div className="profile-photo-edit">
                  <input
                    type="file"
                    accept="image/png, image/gif, image/jpeg"
                    style={{ display: "none" }}
                  />
                </div>
              </div>
            </div>
            <div className="profile-input col-12 col-md-6 mb-4">
              <label>Adınız*</label>
              <FormikInput name="name" label="Adiniz*" />
            </div>
            <div className="profile-input col-12 col-md-6 mb-4">
              <label>Soyadınız*</label>
              <FormikInput name="surname" />
            </div>
            <div className="profile-input col-12 col-md-6 mb-4">
              <label>Telefon Numaranız*</label>
              <FormikInput name="phone" />
            </div>
            <div className="profile-input col-12 col-md-6 mb-4">
              <label>Doğum Tarihiniz*</label>
              <FormikInput name="birthDate" type="date" />
            </div>
            <div className="profile-input col-12 col-md-6 mb-4">
              <label>TC Kimlik No*</label>
              <FormikInput name="nationalIdentity" />
            </div>
            <div className="profile-input col-12 col-md-6 mb-4">
              <label>E-Posta*</label>
              <FormikInput name="email" />
            </div>
            <div className="profile-input col-12 mb-4">
              <label>Ülke*</label>
              <FormikInput name="country" />
            </div>
            <div className="profile-input col-12 col-md-6 mb-4">
              <label>İl*</label>
              <FormikInput name="city" />
            </div>
            <div className="profile-input col-12 col-md-6 mb-4">
              <label>İlçe*</label>
              <FormikInput name="district" />
            </div>
            <div className="big-profile-input col-12 mb-4">
              <label>Mahalle / Sokak</label>
              <FormikInput name="addressDetail" as="textarea" rows={4} />
            </div>
            <div className="big-profile-input col-12 mb-4">
              <label>Hakkkımda</label>
              <FormikInput name="description" as="textarea" rows={4} />
            </div>
          </div>
          <button className="save-button">Kaydet</button>
        </Form>
      </Formik>
    </div>
  );
}

export default PersonalInformations;
