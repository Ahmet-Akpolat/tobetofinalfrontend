import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PulseLoader } from "react-spinners";
import { toast } from "react-toastify";
import * as Yup from "yup";
import "yup-phone-lite";
import cityService from "../../../services/StudentProfileSettingsServices/cityService";
import studentService from "../../../services/studentService";
import { selectStudent, setStudent } from "../../../store/slices/studentSlice";
import FormikInput from "../../FormikInput/FormikInput";
import "./PersonalInformations.css";

function PersonalInformations() {
  const dispatch = useDispatch();
  const student = useSelector(selectStudent);
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cityId, setCityId] = useState(student.cityId);
  
  const initialValues = {
    cityId: student.cityId || null,
    districtId: student.districtId || null,
    firstName: student.firstName || null,
    lastName: student.lastName || null,
    phone: student.phone || null,
    birthDate: student.birthDate?.substring(0, 10) || null,
    nationalIdentity: student.nationalIdentity || null,
    email: student.email || null,
    country: student.country || null,
    addressDetail: student.addressDetail || null,
    description: student.description || null,
    profilePhotoPath: student.profilePhotoPath || null,
    profilePhotoPathTemp: null,
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Doldurulması zorunlu alan*"),
    lastName: Yup.string().required("Doldurulması zorunlu alan*"),
    birthDate: Yup.string().required("Doldurulması zorunlu alan*"),
    country: Yup.string().required("Doldurulması zorunlu alan*"),
    email: Yup.string()
      .email("Lutfen Gecerli Bir E-Posta Adresi Giriniz")
      .required("Doldurulması zorunlu alan*"),
    phone: Yup.string()
      .phone("TR", "Lutfen Gecerli Bir Telefon Numarasi Giriniz")
      .min(11, "Lutfen Gecerli Bir Telefon Numarasi Giriniz")
      .required("Doldurulması zorunlu alan*"),
    nationalIdentity: Yup.string()
      .required("Aboneliklerde fatura için doldurulması zorunlu alan*")
      .typeError("Aboneliklerde fatura için doldurulması zorunlu alan*")
      .matches(/^[0-9]{11}$/, "Lütfen Geçerli Bir TC Kimlik Numarası Giriniz"),
  });

  const getCities = async () => {
    const response = await cityService.getAll();
    setCities(response);
  };

  const getDistricts = async () => {
    const response = await cityService.getAllDistricts();
    setDistricts(response);
  };

  const fileDelete = async () => {
    const updatedValues: any = {
      ...initialValues,
      profilePhotoPath: null,
    };
    await studentService.update(updatedValues);
    const newStudent = await studentService.getByToken();
    dispatch(setStudent(newStudent));
    toast.success("Değişiklikler Kaydedildi!");
  };

  const fileUpload = async (file: any) => {
    setLoading(true);
    const updatedValues: any = {
      ...initialValues,
      profilePhotoPathTemp: file.target.files[0],
    };
    updatedValues.profilePhotoPath = "unused";
    await studentService.update(updatedValues).finally(() => setLoading(false));
    const newStudent = await studentService.getByToken();
    dispatch(setStudent(newStudent));
    toast.success("Değişiklikler Kaydedildi!");
  };

  const updateStudent = async (updatedValues: any) => {
    updatedValues.profilePhotoPath = initialValues.profilePhotoPath;
    updatedValues.cityId = cityId;
    await studentService.update(updatedValues);
    const newStudent = await studentService.getByToken();
    dispatch(setStudent(newStudent));
    toast.success("Değişiklikler Kaydedildi!");
  };

  useEffect(() => {
    getCities();
    getDistricts();
  }, []);

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(updatedValues) => {
          updateStudent(updatedValues);
        }}
      >
        <Form>
          <div className="anim-fadein personal-informations row">
            <div className="col-12 mb-5 text-center">
              <div className="profile-photo">
                <img
                  src={
                    student.profilePhotoPath
                      ? student.profilePhotoPath
                      : "https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png"
                  }
                ></img>
                <div
                  className="profile-photo-remove"
                  onClick={fileDelete}
                ></div>
                {loading === true ? (
                  <label>
                    <PulseLoader
                      className="profile-photo-edit-loading"
                      color="#9933ff"
                      size={6}
                    />
                  </label>
                ) : (
                  <label id="file-upload" className="profile-photo-edit">
                    <input
                      id="file-upload"
                      type="file"
                      accept="image/png, image/gif, image/jpeg, image/jpg"
                      style={{ display: "none" }}
                      onChange={fileUpload}
                    />
                  </label>
                )}
              </div>
            </div>
            <div className="profile-input col-12 col-md-6 mb-4">
              <label>Adınız*</label>
              <FormikInput name="firstName" label="Adiniz*" />
            </div>
            <div className="profile-input col-12 col-md-6 mb-4">
              <label>Soyadınız*</label>
              <FormikInput name="lastName" />
            </div>
            <div className="profile-input col-12 col-md-6 mb-4">
              <label>Telefon Numaranız*</label>
              <FormikInput name="phone" />
            </div>
            <div className="profile-input col-12 col-md-6 mb-4">
              <label>Doğum Tarihiniz*</label>
              <FormikInput name="birthDate" type="date" />
            </div>
            <div className="profile-input col-12 col-md-6 mb-4">
              <label>TC Kimlik No*</label>
              <FormikInput name="nationalIdentity" />
            </div>
            <div className="profile-input col-12 col-md-6 mb-4">
              <label>E-Posta*</label>
              <FormikInput name="email" />
            </div>
            <div className="profile-input col-12 mb-4">
              <label>Ülke*</label>
              <FormikInput name="country" />
            </div>
            <div className="profile-input col-12 col-md-6 mb-4">
              <label>İl</label>
              <Field
                as="select"
                name="cityId"
                onChange={(e: any) => {
                  setCityId(e.target.value);
                }}
                value={cityId}
              >
                <option>Seçiniz</option>
                {cities.map((city: any) => (
                  <option value={city.id}>{city.name}</option>
                ))}
              </Field>
            </div>
            <div className="profile-input col-12 col-md-6 mb-4">
              <label>İlçe</label>
              <Field as="select" name={"districtId"}>
                <option>Seçiniz</option>
                {districts.map((district: any) => {
                  if (district.cityId == cityId)
                    return <option value={district.id}>{district.name}</option>;
                })}
              </Field>
            </div>
            <div className="big-profile-input col-12 mb-4">
              <label>Mahalle / Sokak</label>
              <FormikInput name="addressDetail" as="textarea" rows={4} />
            </div>
            <div className="big-profile-input col-12 mb-4">
              <label>Hakkkımda</label>
              <FormikInput name="description" as="textarea" rows={4} />
            </div>
          </div>
          <button className="save-button" type="submit">
            Kaydet
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default PersonalInformations;
