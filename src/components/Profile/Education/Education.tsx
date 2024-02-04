import { Field, Form, Formik } from "formik";
import EducationCard from "./EducationCard/EducationCard";
import FormikInput from "../../FormikInput/FormikInput";
import { useEffect, useState } from "react";
import educationService from "../../../services/StudentProfileSettingsServices/educationService";
import studentService from "../../../services/studentService";
import { CreateStudentEducationRequest } from "../../../models/requests/StudentEducationRequest";
import * as Yup from "yup";

function Education() {
  const [educations, setEducations] = useState([]);
  const [endDateControl, setEndDateControl] = useState<boolean>(true);

  const initialValues = {
    educationStatus: null,
    schoolName: null,
    branch: null,
    isContinued: null,
    startDate: null,
    graduationDate: null,
  };

  const getStudentEducations = async () => {
    try {
      const data = (await educationService.getForLoggedStudent()).data.items;
      setEducations(data);
    } catch (error) {
      console.log(error);
    }
  };

  const addStudentEducations = async (data: CreateStudentEducationRequest) => {
    try {
      await studentService.addStudentEducations(data);
      getStudentEducations();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStudentEducations();
  }, []);

  const validationSchema = Yup.object({
    educationStatus: Yup.string().required("Doldurulması zorunlu alan*"),
    schoolName: Yup.string()
      .required("Doldurulması zorunlu alan*")
      .min(2, "En az 5 karakter olmalı"),
    branch: Yup.string()
      .required("Doldurulması zorunlu alan*")
      .min(5, "En az 5 karakter olmalı")
      .max(50, "En fazla 50 karakter olmalı"),
    startDate: Yup.string().required("Doldurulması zorunlu alan*"),
  });

  return (
    <div className="education-info">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(initialValues: any) => {
          if (endDateControl === false && initialValues.graduationDate !== null) {
            initialValues.graduationDate = null;
          }
          addStudentEducations(initialValues);
          initialValues = null;
        }}
      >
        <Form>
          <div className="row">
            <div className="profile-input col-12 col-md-6 mb-4">
              <label>Egitim Durumu</label>
              <Field as="select" name={"educationStatus"}>
                <option>Seviye Seciniz</option>
                <option>Lisans</option>
                <option>On Lisans</option>
                <option>Yuksek Lisans</option>
                <option>Doktora</option>
              </Field>
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
            {endDateControl && (
              <div className="profile-input col-12 col-md-6 mb-4">
                <label>Mezunuyet Yili*</label>
                <FormikInput name="graduationDate" type="date" />
              </div>
            )}
            <div className="d-flex gap-2 mb-4">
              <div onClick={() => setEndDateControl(!endDateControl)}>
                <FormikInput type="checkbox" name="isContinued"></FormikInput>
              </div>
              <small>Okumaya Devam Ediyorum</small>
            </div>
          </div>
          <button className="save-button" type="submit">
            Kaydet
          </button>
          <div className="col-12 mt-5">
            {educations != null &&
              educations.map((education) => (
                <EducationCard
                  education={education}
                  setEducations={setEducations}
                />
              ))}
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default Education;
