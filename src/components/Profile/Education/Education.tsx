import { Field, Form, Formik } from "formik";
import EducationCard from "./EducationCard/EducationCard";
import FormikInput from "../../FormikInput/FormikInput";
import { useEffect, useState } from "react";
import educationService from "../../../services/StudentProfileSettingsServices/educationService";
import studentService from "../../../services/studentService";
import { CreateStudentEducationRequest } from "../../../models/requests/StudentEducationRequest";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import exceptionService from "../../../utils/exceptionService";

function Education() {
  const [educations, setEducations] = useState([]);
  const [endDateControl, setEndDateControl] = useState<boolean>(true);

  interface FormValues {
    educationStatus: null | string;
    schoolName: null | string;
    branch: null | string;
    isContinued: null | string;
    startDate: null | string;
    graduationDate: null | string;
  }

  const initialValues: FormValues = {
    educationStatus: null,
    schoolName: null,
    branch: null,
    isContinued: null,
    startDate: null,
    graduationDate: null,
  };

  const resetValues = {
    educationStatus: "",
    schoolName: "",
    branch: "",
    isContinued: "",
    startDate: "",
    graduationDate: "",
  };

  const getStudentEducations = async () => {
    try {
      const data = (await educationService.getForLoggedStudent()).data.items;
      setEducations(data);
    } catch (error: any) {
      console.log(error);
      toast.error(
        exceptionService.errorSelector(JSON.stringify(error.response.data))
      );
    }
  };

  const addStudentEducations = async (data: CreateStudentEducationRequest) => {
    try {
      await studentService.addStudentEducations(data);
      getStudentEducations();
    } catch (error: any) {
      console.log(error);
      toast.error(
        exceptionService.errorSelector(JSON.stringify(error.response.data))
      );
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
    graduationDate: Yup.string()
      .required("Doldurulması zorunlu alan*")
      .test(
        "start-before-end",
        "Mezuniyet tarihi, başlangıç tarihinden sonra olmalıdır.",
        function (graduationDate) {
          const { startDate } = this.parent;
          return new Date(graduationDate) > new Date(startDate);
        }
      ),
  });

  return (
    <div className="education-info">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(initialValues: any, actions) => {
          if (
            endDateControl === false &&
            initialValues.graduationDate !== null
          ) {
            initialValues.graduationDate = null;
          }
          addStudentEducations(initialValues).then(() => {
            actions.resetForm({
              values: resetValues,
            });
          });
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
          <div className="anim-fadein col-12 mt-5">
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
