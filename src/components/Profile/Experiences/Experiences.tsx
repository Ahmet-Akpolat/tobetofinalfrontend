import ExperiencesCard from "./ExperiencesCard/ExperiencesCard";
import { Field, Form, Formik } from "formik";
import FormikInput from "../../FormikInput/FormikInput";
import { useSelector } from "react-redux";
import { selectStudent } from "../../../store/slices/studentSlice";
import * as Yup from "yup";
import studentService from "../../../services/studentService";
import { CreateStudentExperienceRequest } from "../../../models/requests/StudentExperienceRequests";
import { useEffect, useState } from "react";
import cityService from "../../../services/StudentProfileSettingsServices/cityService";
import experienceService from "../../../services/StudentProfileSettingsServices/experienceService";

function Experiences() {
  const [experiences, setExperiences] = useState<
    CreateStudentExperienceRequest[]
  >([]);
  const [cities, setCities] = useState([]);
  const [endDateControl, setEndDateControl] = useState<boolean>(true);

  const initialValues = {
    companyName: null,
    sector: null,
    position: null,
    startDate: null,
    endDate: null,
    description: null,
    cityId: null,
  };

  const getCities = async () => {
    try {
      const response = await cityService.getAll();
      setCities(response);
    } catch (error) {
      console.log(error);
    }
  };

  const getStudentExperiences = async () => {
    try {
      const data = (await experienceService.getForLoggedStudent()).data.items;
      setExperiences(data);
    } catch (error) {
      console.log(error);
    }
  };

  const addStudentExperiences = async (data: any) => {
    try {
      if (!endDateControl) data.endDate = null;
      console.log(data);
      await studentService.addStudentExperiences(data);
      getStudentExperiences();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStudentExperiences();
    getCities();
  }, []);

  const validationSchema = Yup.object({
    companyName: Yup.string()
      .required("Doldurulması zorunlu alan*")
      .min(5, "En az 5 karakter olmalı")
      .max(50, "En fazla 50 karakter olmalı"),
    position: Yup.string()
      .required("Doldurulması zorunlu alan*")
      .min(5, "En az 5 karakter olmalı")
      .max(50, "En fazla 50 karakter olmalı"),
    sector: Yup.string().required("Doldurulması zorunlu alan*"),
    startDate: Yup.string().required("Doldurulması zorunlu alan*"),
    //endDate and continue rules
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(initialValues: any) => {
        addStudentExperiences(initialValues);
      }}
    >
      <Form>
        <div className="row">
          <div className="profile-input col-12 col-md-6 mb-4">
            <label>Kurum Adı*</label>
            <FormikInput name="companyName" />
          </div>
          <div className="profile-input col-12 col-md-6 mb-4">
            <label>Pozisyon*</label>
            <FormikInput name="position" />
          </div>
          <div className="profile-input col-12 col-md-6 mb-4">
            <label>Sektör*</label>
            <FormikInput name="sector" />
          </div>
          <div className="profile-input col-12 col-md-6 mb-4">
            <label>İl*</label>
            <Field as="select" name={"cityId"}>
              <option>Seciniz</option>
              {cities.map((city: any) => (
                <option value={city.id}>{city.name}</option>
              ))}
            </Field>
          </div>
          <div className="profile-input col-12 col-md-6 mb-4">
            <label>İş Baslangıç Tarihi</label>
            <FormikInput name="startDate" type="date" />
          </div>
          {endDateControl && (
            <div className="profile-input col-12 col-md-6 mb-4">
              <label>İş Bitişi</label>
              <FormikInput name="endDate" type="date" />
            </div>
          )}
          <div className="d-flex gap-2 mb-4">
            <div
              onClick={() => {
                setEndDateControl(!endDateControl);
                initialValues.endDate = null;
              }}
            >
              <FormikInput type="checkbox" name="isContinued"></FormikInput>
            </div>
            <small>Calışmaya Devam Ediyorum</small>
          </div>
        </div>
        <div className="big-profile-input col-12 mb-4">
          <label>İş Açıklaması</label>
          <FormikInput name="description" as="textarea" rows={4} />
        </div>
        <button className="save-button" type="submit">
          Kaydet
        </button>
        <div className="col-12 mt-5">
          {experiences != null &&
            experiences.map((experience: any) => (
              <ExperiencesCard
                experience={experience}
                setExperiences={setExperiences}
              />
            ))}
        </div>
      </Form>
    </Formik>
  );
}

export default Experiences;
