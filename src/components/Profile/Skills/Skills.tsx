import "./Skills.css";

function Skills() {
  return (
    <div className="skills">
      <div className="row">
        <div className="profile-input col-12 mb-4">
          <label>Yetkinlik</label>
          <select>
            <option>Frontend</option>
            <option>Backend</option>
            <option>JavaScript</option>
            <option>.NET Core</option>
            <option>ReactJs</option>
            <option>C#</option>
            <option>C</option>
            <option>C++</option>
            <option>SQL</option>
            <option>Algoritmalar</option>
          </select>
        </div>
      </div>
      <button className="save-button">Kaydet</button>
      <div className="col-12 mt-5">
        <div className="skill-card">
          <strong>Javascript</strong>
          <div className="skill-delete-button"></div>
        </div>
        <div className="skill-card">
          <strong>Algoritmalar</strong>
          <div className="skill-delete-button"></div>
        </div>
        <div className="skill-card">
          <strong>Frontend</strong>
          <div className="skill-delete-button"></div>
        </div>
        <div className="skill-card">
          <strong>Backend</strong>
          <div className="skill-delete-button"></div>
        </div>
        <div className="skill-card">
          <strong>.NET Core</strong>
          <div className="skill-delete-button"></div>
        </div>
        <div className="skill-card">
          <strong>ReactJs</strong>
          <div className="skill-delete-button"></div>
        </div>

      </div>
    </div>
  );
}

export default Skills;
