import { useEffect, useState } from "react";
import "./Skills.css";
import skillService from "../../../services/StudentProfileSettingsServices/skillService";
import { Field, Formik, Form } from "formik";
import studentService from "../../../services/studentService";
import { CreateStudentSkillRequest } from "../../../models/requests/StudentSkillRequests";

import { SkillResponse } from "../../../models/responses/SkillResponses";
import { useDispatch, useSelector } from "react-redux";
import { selectStudent, setStudent } from "../../../store/slices/studentSlice";

function Skills() {
  const dispatch = useDispatch();
  const [skillOptions, setSkillOptions] = useState<SkillResponse[]>([]);
  const [skills, setSkills] = useState(useSelector(selectStudent).skills);

  const initialValues = {
    skillId: null,
  };

  const getSkills = async () => {
    const data = await skillService.getAll();
    setSkillOptions(data);
  };

  const addStudentSkills = async (data: CreateStudentSkillRequest) => {
    await studentService.addStudentSkills(data);
    const newStudent = await studentService.getByToken();
    setSkills(newStudent.skills);
    dispatch(setStudent(newStudent));
  };

  const deleteStudentSkills = async (id: any) => {
    await skillService.deleteStudentSkill(id);
    const newStudent = await studentService.getByToken();
    setSkills(newStudent.skills);
    dispatch(setStudent(newStudent));
  };

  useEffect(() => {
    getSkills();
  }, []);

  const filteredSkillOptions = skillOptions.filter(
    (option) => !skills.some((skill: any) => skill.skillId === option.id)
  );

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(initialValues: any) => {
          addStudentSkills(initialValues);
        }}
      >
        <Form>
          <div>
            <div className="row">
              <div className="profile-input col-12 mb-4">
                <label>Yetkinlik</label>
                <Field as="select" name={"skillId"}>
                  <option>Seciniz</option>
                  {filteredSkillOptions.map((skill: any) => (
                    <option value={skill.id}>{skill.name}</option>
                  ))}
                </Field>
              </div>
            </div>
            <button className="save-button" type="submit">
              Kaydet
            </button>
            {skills !== null && (
              <div className="anim-fadein col-12 mt-5">
                {[...skills].reverse().map((skill: any) => (
                  <div className="skill-card">
                    <strong>{skill.skillName}</strong>
                    <div
                      className="skill-delete-button"
                      onClick={() => deleteStudentSkills(skill.id)}
                    ></div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default Skills;
