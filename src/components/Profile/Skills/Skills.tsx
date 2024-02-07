import { useEffect, useState } from "react";
import "./Skills.css";
import skillService from "../../../services/StudentProfileSettingsServices/skillService";
import { Field, Formik, Form } from "formik";
import studentService from "../../../services/studentService";
import { CreateStudentSkillRequest } from "../../../models/requests/StudentSkillRequests";
import { ToastContainer, toast } from "react-toastify";
import exceptionService from "../../../utils/exceptionService";

function Skills() {
  const [skills, setSkills] = useState([]);
  const [skillOptions, setSkillOptions] = useState([]);

  const initialValues = {
    skillId: null,
  };

  const getSkills = async () => {
    try {
      const data = await skillService.getAll();
      setSkillOptions(data);
    } catch (error: any) {
      toast.error(
        exceptionService.errorSelector(JSON.stringify(error.response.data))
      );
    }
  };

  const getStudentSkills = async () => {
    try {
      const data = (await skillService.getForLoggedStudent()).data.items;
      setSkills(data);
    } catch (error: any) {
      toast.error(
        exceptionService.errorSelector(JSON.stringify(error.response.data))
      );
    }
  };

  const addStudentSkills = async (data: CreateStudentSkillRequest) => {
    try {
      console.log(data);
      await studentService.addStudentSkills(data);
      getStudentSkills();
    } catch (error: any) {
      toast.error(
        exceptionService.errorSelector(JSON.stringify(error.response.data))
      );
    }
  };

  const deleteStudentSkills = async (id: any) => {
    try {
      await skillService.deleteStudentSkill(id);
      setSkills((arr: any) => {
        return arr.filter((skill: any) => skill.id !== id);
      });
    } catch (error: any) {
      toast.error(
        exceptionService.errorSelector(JSON.stringify(error.response.data))
      );
    }
  };

  useEffect(() => {
    getStudentSkills();
    getSkills();
  }, []);

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(initialValues: any) => {
          addStudentSkills(initialValues);
        }}
      >
        <Form>
          <div className="skills">
            <div className="row">
              <div className="profile-input col-12 mb-4">
                <label>Yetkinlik</label>
                <Field as="select" name={"skillId"}>
                  <option>Seciniz</option>
                  {skillOptions.map((skill: any) => (
                    <option value={skill.id}>{skill.name}</option>
                  ))}
                </Field>
              </div>
            </div>
            <button className="save-button" type="submit">
              Kaydet
            </button>
            <div className="col-12 mt-5">
              {skills !== null &&
                skills.map((skill: any) => (
                  <div className="skill-card">
                    <strong>{skill.skillName}</strong>
                    <div
                      className="skill-delete-button"
                      onClick={() => deleteStudentSkills(skill.id)}
                    ></div>
                  </div>
                ))}
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default Skills;
