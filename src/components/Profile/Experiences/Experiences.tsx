import ExperiencesCard from "./ExperiencesCard/ExperiencesCard";
import { Field, Form, Formik } from "formik";
import FormikInput from "../../FormikInput/FormikInput";
import * as Yup from "yup";
import studentService from "../../../services/studentService";
import { CreateStudentExperienceRequest } from "../../../models/requests/StudentExperienceRequests";
import { useEffect, useState } from "react";
import cityService from "../../../services/StudentProfileSettingsServices/cityService";
import experienceService from "../../../services/StudentProfileSettingsServices/experienceService";
import { useDispatch, useSelector } from "react-redux";
import { selectStudent, setStudent } from "../../../store/slices/studentSlice";

function Experiences() {
  const [experiences, setExperiences] = useState(
    useSelector(selectStudent).studentExperiences
  );
  const [cities, setCities] = useState([]);
  const [endDateControl, setEndDateControl] = useState<boolean>(true);
  const dispatch = useDispatch();

  const initialValues = {
    companyName: null,
    sector: null,
    position: null,
    startDate: null,
    endDate: null,
    description: null,
    cityId: null,
    isContinued: null,
  };

  const resetValues = {
    companyName: "",
    sector: "",
    position: "",
    startDate: "",
    endDate: "",
    description: "",
    cityId: "",
  };

  const getCities = async () => {
    const response = await cityService.getAll();
    setCities(response);
  };

  const addStudentExperiences = async (data: any) => {
    if (!endDateControl) data.endDate = null;
    await studentService.addStudentExperiences(data);
    const newStudent = (await studentService.getByToken()) as any;
    setExperiences(newStudent.studentExperiences);
    dispatch(setStudent(newStudent));
  };

  useEffect(() => {
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
    cityId: Yup.string().required("Doldurulması zorunlu alan*"),
    description: Yup.string().required("Doldurulması zorunlu alan*"),
    startDate: Yup.string().required("Doldurulması zorunlu alan*"),
    endDate: Yup.string().when("isContinued", ([isContinued], schema) => {
      return !isContinued
        ? schema
            .required("Doldurulması zorunlu alan*")
            .test(
              "start-before-end",
              "Mezuniyet tarihi, başlangıç tarihinden sonra olmalıdır.",
              function (endDate) {
                const { startDate } = this.parent;
                return new Date(endDate) > new Date(startDate);
              }
            )
        : schema.nullable();
    }),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(initialValues: any, { resetForm }) => {
          addStudentExperiences(initialValues).then(() =>
            resetForm({
              values: resetValues,
            })
          );
          setEndDateControl(true);
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
                <option>Seçiniz</option>
                {cities.map((city: any) => (
                  <option value={city.id}>{city.name}</option>
                ))}
              </Field>
            </div>
            <div className="profile-input col-12 col-md-6 mb-4">
              <label>İş Başlangıç Tarihi</label>
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
              <small>Çalışmaya Devam Ediyorum</small>
            </div>
            <div className="big-profile-input col-12 mb-4">
              <label>İş Açıklaması*</label>
              <FormikInput name="description" as="textarea" rows={4} />
            </div>
          </div>
          <button className="save-button" type="submit">
            Kaydet
          </button>
          {experiences != null && (
            <div className="anim-fadein col-12 mt-5">
              {[...experiences].reverse().map((experience: any) => {
                return (
                  <ExperiencesCard
                    experience={experience}
                    setExperiences={setExperiences}
                  />
                );
              })}
            </div>
          )}
        </Form>
      </Formik>
    </div>
  );
}

export default Experiences;
