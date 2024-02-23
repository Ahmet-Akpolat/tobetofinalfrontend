import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { CreateStudentLanguageLevelRequest } from "../../../models/requests/StudentLanguageLevelRequests";
import languagesService from "../../../services/StudentProfileSettingsServices/languagesService";
import studentService from "../../../services/studentService";
import LanguageCard from "./LanguageCard/LanguageCard";
import "./Languages.css";
import { useDispatch, useSelector } from "react-redux";
import { selectStudent, setStudent } from "../../../store/slices/studentSlice";

function Languages() {
  const dispatch = useDispatch();
  const [languages, setLanguages] = useState(
    useSelector(selectStudent).languageLevels
  );
  const [selectLanguage, setSelectLanguage] = useState([] as any);
  const [languageOptions, setLanguageOptions] = useState([] as any);
  const [languageLevels, setLanguageLevels] = useState([] as any);

  const validationSchema = Yup.object({
    languageLevelId: Yup.string().required("Lütfen seçim yapınız."),
  });

  const getLanguageOptions = async () => {
    const data = await languagesService.getAll();
    setLanguageOptions(data);
  };

  const getLanguagesLevels = async () => {
    const data = (await languagesService.getLanguagesLevels()).data?.items;
    setLanguageLevels(data);
  };

  const addStudentLanguage = async (
    data: CreateStudentLanguageLevelRequest
  ) => {
    await studentService.addStudentLanguages(data);
    const newStudent = (await studentService.getByToken()) as any;
    setLanguages(newStudent.languageLevels);
    dispatch(setStudent(newStudent));
  };

  useEffect(() => {
    getLanguageOptions();
    getLanguagesLevels();
  }, []);

  return (
    <div>
      <Formik
        initialValues={{
          languageLevelId: null,
        }}
        validationSchema={validationSchema}
        onSubmit={(updatedValues: any) => {
          addStudentLanguage(updatedValues);
        }}
      >
        <Form>
          <div className="student-languages">
            <div className="row mb-4">
              <div className="profile-input col-6">
                <select
                  onChange={(e: any) => setSelectLanguage(e.target.value)}
                >
                  <option>Seçiniz</option>
                  {languageOptions.map((lang: any) => (
                    <option value={lang.id}>{lang.name}</option>
                  ))}
                </select>
              </div>
              <div className="profile-input col-6">
                <Field as="select" name="languageLevelId">
                  <option>Seçiniz</option>
                  {languageLevels.map(
                    (langlevel: any) =>
                      langlevel.languageId == selectLanguage && (
                        <option value={langlevel.id}>{langlevel.name}</option>
                      )
                  )}
                </Field>
              </div>
            </div>
            <button className="save-button mb-5" type="submit">
              Kaydet
            </button>
            {languages !== null && (
              <div className="anim-fadein languages-list row gap-3">
                {[...languages].reverse().map((language: any) => {
                  return (
                    <LanguageCard
                      language={language}
                      setLanguages={setLanguages}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default Languages;
