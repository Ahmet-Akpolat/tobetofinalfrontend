import "./Languages.css";
import LanguageCard from "./LanguageCard/LanguageCard";
import { useEffect, useState } from "react";
import languagesService from "../../../services/StudentProfileSettingsServices/languagesService";
import { ToastContainer } from "react-toastify";
import { Field, Form, Formik } from "formik";
import studentService from "../../../services/studentService";
import { CreateStudentLanguageLevelRequest } from "../../../models/requests/StudentLanguageLevelRequests";

function Languages() {
  const [languages, setLanguages] = useState([] as any);
  const [selectLanguage, setSelectLanguage] = useState([] as any);
  const [languageOptions, setLanguageOptions] = useState([] as any);
  const [languageLevels, setLanguageLevels] = useState([] as any);

  const getLanguages = async () => {
    try {
      const data = await languagesService.getAll();
      setLanguageOptions(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getLanguagesLevels = async () => {
    try {
      const data = (await languagesService.getLanguagesLevels()).data.items;
      setLanguageLevels(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getStudentLanguages = async () => {
    try {
      const data = (await languagesService.getForLoggedStudent()).data.items;
      console.log(data);
      setLanguages(data);
    } catch (error) {
      console.log(error);
    }
  };

  const addStudentLanguage = async (
    data: CreateStudentLanguageLevelRequest
  ) => {
    try {
      await studentService.addStudentLanguages(data);
      const newData = (await languagesService.getForLoggedStudent()).data.items;
      setLanguages(newData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStudentLanguages();
    getLanguages();
    getLanguagesLevels();
  }, []);

  return (
    <Formik
      initialValues={{
        languageLevelId: null,
      }}
      onSubmit={(updatedValues: any) => {
        console.log(updatedValues);
        addStudentLanguage(updatedValues);
      }}
    >
      <Form>
        <div className="student-languages">
          <div className="row mb-4">
            <div className="profile-input col-6">
              <select onChange={(e) => setSelectLanguage(e.target.value)}>
                <option>Seciniz</option>
                {languageOptions.map((lang: any) => (
                  <option value={lang.id}>{lang.name}</option>
                ))}
              </select>
            </div>
            <div className="profile-input col-6">
              <Field as="select" name="languageLevelId">
                <option>Seciniz</option>
                {languageLevels.map(
                  (langlevel: any) =>
                    langlevel.languageId == selectLanguage && (
                      <option value={langlevel.id}>{langlevel.name}</option>
                    )
                )}
              </Field>
            </div>
          </div>
          <button className="save-button mb-5">Kaydet</button>
          <div className="languages-list row gap-3">
            {languages.map((language: any) => (
              <LanguageCard language={language} setLanguages={setLanguages} />
            ))}
          </div>
          <ToastContainer position="bottom-right" />
        </div>
      </Form>
    </Formik>
  );
}

export default Languages;
