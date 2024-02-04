import { Field, Form, Formik } from "formik";
import FormikInput from "../../FormikInput/FormikInput";
import SocialMediaCard from "./SocialMediaCard/SocialMediaCard";
import { useEffect, useState } from "react";
import socialMediaService from "../../../services/StudentProfileSettingsServices/socialMediaService";
import studentService from "../../../services/studentService";
import { CreateStudentSocialMediaRequest } from "../../../models/requests/StudentSocialMediaRequests";
import ExceptionService from "../../../utils/exceptionService";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { error } from "console";

function SocialMedia() {
  const [socialMedias, setSocialMedias] = useState([]);
  const [socialMediaOptions, setSocialMediaOptions] = useState([]);

  const exceptionService:ExceptionService=new ExceptionService;

  const initialValues = {
    socialMediaId: null,
    mediaAccountUrl: null,
  };

  const addStudentSocialMedia = async (
    data: CreateStudentSocialMediaRequest
  ) => {

      await studentService.addStudentSocialMedias(data).then(()=>{
        getStudentSocialMedias();
      }).catch((error:any)=> {
        alert(exceptionService.errorSelector(JSON.stringify(error.response.data)))
        toast.error(exceptionService.errorSelector(JSON.stringify(error.response.data)));
      });
     
  
  };

  const getSocialMedias = async () => {
    try {
      const data = await socialMediaService.getAll();
      setSocialMediaOptions(data);
    } catch (error:any) {
      alert(exceptionService.errorSelector(JSON.stringify(error.response.data)))
      toast.error(exceptionService.errorSelector(JSON.stringify(error.response.data)));
    }
  };

  const getStudentSocialMedias = async () => {
    try {
      const data = (await socialMediaService.getForLoggedStudent()).data.items;
      setSocialMedias(data);
    } catch (error:any) {
      alert(exceptionService.errorSelector(JSON.stringify(error.response.data)))
      toast.error(exceptionService.errorSelector(JSON.stringify(error.response.data)));
    }
  };

  useEffect(() => {
    getSocialMedias();
    getStudentSocialMedias();
  }, []);

  return (
    <div className="social-media">
      <Formik
        initialValues={initialValues}
        onSubmit={(initialValues: any) => {
          console.log(initialValues);
          addStudentSocialMedia(initialValues);
        }}
      >
        <Form>
          <div className="row">
            <div className="profile-input col-6">
              <Field as="select" name={"socialMediaId"}>
                {socialMediaOptions.map((sc: any) => (
                  <option value={sc.id}>{sc.name}</option>
                ))}
              </Field>
            </div>
            <div className="profile-input col-12 col-md-6 mb-4">
              <FormikInput name="mediaAccountUrl" placeholder="https://" />
            </div>
          </div>
          <button className="save-button" type="submit">
            Kaydet
          </button>
          <div className="col-12 mt-5">
            {socialMedias !== null &&
              socialMedias.map((socialMedia) => (
                <SocialMediaCard
                  socialMedia={socialMedia}
                  setSocialMedias={setSocialMedias}
                />
              ))}
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default SocialMedia;
