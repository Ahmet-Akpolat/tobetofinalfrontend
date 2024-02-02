import { Form, Formik } from "formik";
import EducationCard from "./EducationCard/EducationCard";
import FormikInput from "../../FormikInput/FormikInput";

function Education() {
  return (
    <div className="education-info">
      <Formik
        initialValues={{}}
        onSubmit={(initialValues) => {
          console.log(initialValues);
        }}
      >
        <Form>
          <div className="row">
            <div className="profile-input col-12 col-md-6 mb-4">
              <label>Egitim Durumu</label>
              <select className="profile-input">
                <option>Seviye Seciniz</option>
                <option>Lisans</option>
                <option>On Lisans</option>
                <option>Yuksek Lisans</option>
                <option>Doktora</option>
              </select>
            </div>

            <div className="profile-input col-12 col-md-6 mb-4">
              <label>Universite*</label>
              <FormikInput name="schoolName" />
            </div>
            <div className="profile-input col-12 col-md-6 mb-4">
              <label>Bolum*</label>
              <FormikInput name="branch" />
            </div>
            <div className="profile-input col-12 col-md-6 mb-4">
              <label>Baslangic Yili*</label>
              <FormikInput name="startDate" type="date" />
            </div>
            <div className="profile-input col-12 col-md-6 mb-4">
              <label>Mezunuyet Yili*</label>
              <FormikInput name="graduationDate" />
              <div className="d-flex gap-2 mt-4">
                <FormikInput name="continue" type="checkbox" />
                <small>Devam Ediyorum</small>
              </div>
            </div>
          </div>
          <button className="save-button">Kaydet</button>
          <div className="col-12 mt-5">
            <EducationCard />
            <EducationCard />
            <EducationCard />
            <EducationCard />
            <EducationCard />
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default Education;
