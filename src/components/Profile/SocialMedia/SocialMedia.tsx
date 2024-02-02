import { Form, Formik } from "formik";
import FormikInput from "../../FormikInput/FormikInput";
import SocialMediaCard from "./SocialMediaCard/SocialMediaCard";

function SocialMedia() {
  return (
    <div className="social-media">
      <Formik
        initialValues={{}}
        onSubmit={(initialValues) => {
          console.log(initialValues);
        }}
      >
        <Form>
          <div className="row">
            <div className="profile-input col-6">
              <select>
                <option>Seciniz*</option>
                <option>Instagram</option>
                <option>Linkedin</option>
                <option>Twitter</option>
                <option>Github</option>
                <option>Behance</option>
                <option>Dribble</option>
              </select>
            </div>
            <div className="profile-input col-12 col-md-6 mb-4">
              <FormikInput name="link" placeholder="https://" />
            </div>
          </div>
          <button className="save-button">Kaydet</button>
          <div className="col-12 mt-5">
            <SocialMediaCard />
            <SocialMediaCard />
            <SocialMediaCard />
            <SocialMediaCard />
            <SocialMediaCard />
            <SocialMediaCard />
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default SocialMedia;
