import React, { useEffect, useState } from "react";
import "./ProfileDetail.css";
import { useSelector } from "react-redux";
import { selectStudent } from "../../store/slices/studentSlice";
import languagesService from "../../services/StudentProfileSettingsServices/languagesService";
import { toast } from "react-toastify";
import exceptionService from "../../utils/exceptionService";
import HeatMap from "@uiw/react-heat-map";
import lectureService from "../../services/lectureService";
import Tooltip from "@uiw/react-tooltip";
import { Link } from "react-router-dom";

const ProfileDetail = () => {
  const activityDates = [] as any;
  const student = useSelector(selectStudent);
  const [languages, setLanguages] = useState([] as any);
  const [test, setTest] = useState([] as any);

  const getStudentActivites = async () => {
    const data = (await lectureService.getAllLectureViews()).data.items;
    data.forEach((element: any) => {
      const date = element.lectureViewCreatedDate.substring(0, 10);
      if (activityDates.some((obj: any) => obj.date == date)) {
        activityDates[activityDates.findIndex((obj: any) => obj.date === date)]
          .count++;
      } else {
        activityDates.push({ date: date, count: 1 });
      }
    });
    setTest(activityDates);
  };

  const getStudentLanguages = async () => {
    const data = (await languagesService.getForLoggedStudent()).data.items;
    setLanguages(data);
  };

  useEffect(() => {
    getStudentLanguages();
    getStudentActivites();
  }, []);

  return (
    <main>
      <div className="container profil-detail">
        <div className="row">
          <div className="col-md-4 col-12">
            <div className="row">
              <div className="col-12">
                <div className="cv-box">
                  <div className="cv-pp">
                    <div className="area">
                      <img
                        src={student.profilePhotoPath}
                        className="cv-pp-img rounded-circle"
                      />
                    </div>
                  </div>
                  <div className="cv-info cv-padding">
                    <div className="info-box">
                      <div className="info-icon name"></div>
                      <div className="info-text">
                        <span className="header">Ad Soyad</span>
                        <span className="text">{`${student.firstName} ${student.lastName}`}</span>
                      </div>
                    </div>
                    <div className="info-box">
                      <div className="info-icon date"></div>
                      <div className="info-text">
                        <span className="header">Doğum Tarihi</span>
                        <span className="text">
                          {student.birthDate.substring(0, 10)}
                        </span>
                      </div>
                    </div>
                    <div className="info-box">
                      <div className="info-icon mail"></div>
                      <div className="info-text">
                        <span className="header">E-Posta Adresi</span>
                        <span className="text">{student.email}</span>
                      </div>
                    </div>
                    <div className="info-box">
                      <div className="info-icon phone"></div>
                      <div className="info-text">
                        <span className="header">Telefon Numarası</span>
                        <span className="text">{student.phone}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="cv-box cv-padding">
                  <div className="cv-box-header">
                    <span>Hakkımda</span>
                    <hr />
                  </div>
                  <div>{student.description}</div>
                </div>
              </div>
              <div className="col-12">
                <div className="cv-box cv-padding">
                  <div className="cv-box-header">
                    <div className="d-flex justify-content-between">
                      <span>Yetkinliklerim</span>
                    </div>
                    <hr />
                  </div>
                  <div>
                    <div className="skills w-100">
                      {student.skills.map((skill: any) => (
                        <span className="skill">{skill.name}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="cv-box cv-padding">
                  <div className="cv-box-header">
                    <div className="d-flex justify-content-between">
                      <span>Yabancı Dillerim</span>
                    </div>
                    <hr />
                  </div>
                  <div className="my-langs">
                    {languages.map((language: any) => (
                      <div className="lang w-100">
                        <div className="lang-info">
                          <div className="lang-title ">
                            <div className="d-flex flex-column">
                              <span className="lang-name">
                                {language.languageName}
                              </span>
                              <span className="lang-degree">
                                {language.languageLevelName}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="cv-box cv-padding">
                  <div className="cv-box-header">
                    <span>Sertifikalarım</span>
                    <hr />
                  </div>
                  <div className="row">
                    <div className="skills">
                      {student.studentPrivateCertificates.map(
                        (certificate: any) => (
                          <span
                            id="certificate_name"
                            className="skill d-flex justify-content-between"
                          >
                            <Link
                              className="link-span-area"
                              to={certificate.certificateUrl}
                            >
                              {certificate.certificateName}
                            </Link>
                            <span className="me-0 png_icon text - center"></span>
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="cv-box cv-padding">
                  <div className="cv-box-header">
                    <span>Medya Hesaplarım</span>
                    <hr />
                  </div>
                  <div className="cv-social-media">
                    {student.socialMedias.map((socialMedia: any) => (
                      <a
                        className={`cv-${socialMedia.name.replace(" ", "")}`}
                        target="_blank"
                        href="https://www.linkedin.com/in/metin-koyuncu-718281260/"
                      ></a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 col-12">
            <div className="row">
              <div className="col-12">
                <div className="cv-box cv-padding">
                  <div className="cv-box-header">
                    <div className="d-flex justify-content-between">
                      <span>Tobeto Seviye Testlerim</span>
                      <span className="cv-see-icon"></span>
                    </div>
                    <hr />
                  </div>
                  <div className="row g-4">
                    <div className="envantoryList">
                      <div className=" envantory-result">
                        <div className="d-flex justify-content-between w-100">
                          <span className="examName">Full Stack</span>
                          <span className="examTime">03-09-2023</span>
                        </div>
                        <span className="examResult">48.00</span>
                      </div>
                      <div className=" envantory-result">
                        <div className="d-flex justify-content-between w-100">
                          <span className="examName">Microsoft SQL Server</span>
                          <span className="examTime">03-09-2023</span>
                        </div>
                        <span className="examResult">48.00</span>
                      </div>
                      <div className=" envantory-result">
                        <div className="d-flex justify-content-between w-100">
                          <span className="examName">
                            Herkes için Kodlama 1D Değerlendirme Sınavı
                          </span>
                          <span className="examTime">11-10-2023</span>
                        </div>
                        <span className="examResult">100.00</span>
                      </div>
                      <div className=" envantory-result">
                        <div className="d-flex justify-content-between w-100">
                          <span className="examName">Back End</span>
                          <span className="examTime">03-09-2023</span>
                        </div>
                        <span className="examResult">48.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="cv-box cv-padding">
                  <div className="cv-box-header">
                    <div className="d-flex justify-content-between">
                      <span>Yetkinlik Rozetlerim</span>
                    </div>
                    <hr />
                  </div>
                  <div>
                    <div className="row d-flex justify-content-start badge-container">
                      <div className="badge-card">
                        <img
                          className="img-fluid"
                          src="https://tobeto.s3.cloud.ngn.com.tr/45_23798aabf0.jpg"
                          alt=""
                        />
                      </div>
                      <div className="badge-card">
                        <img
                          className="img-fluid"
                          src="https://tobeto.s3.cloud.ngn.com.tr/47_7fc3123c74.jpg"
                          alt=""
                        />
                      </div>
                      <div className="badge-card">
                        <img
                          className="img-fluid"
                          src="https://tobeto.s3.cloud.ngn.com.tr/49_31ca0e6d26.jpg"
                          alt=""
                        />
                      </div>
                      <div className="badge-card">
                        <img
                          className="img-fluid"
                          src="https://tobeto.s3.cloud.ngn.com.tr/52_50dc83ca9c.jpg"
                          alt=""
                        />
                      </div>
                      <div className="badge-card">
                        <img
                          className="img-fluid"
                          src="https://tobeto.s3.cloud.ngn.com.tr/53_21d7233b37.jpg"
                          alt=""
                        />
                      </div>
                      <div className="badge-card">
                        <img
                          className="img-fluid"
                          src="https://tobeto.s3.cloud.ngn.com.tr/54_0cc26693aa.jpg"
                          alt=""
                        />
                      </div>
                      <div className="badge-card">
                        <img
                          className="img-fluid"
                          src="https://tobeto.s3.cloud.ngn.com.tr/55_039e2cd2b7.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="cv-box cv-padding">
                  <div className="cv-box-header">
                    <div className="d-flex justify-content-between">
                      <span>Eğitim Hayatım ve Deneyimlerim</span>
                    </div>
                    <hr />
                  </div>
                  <div className="timeline">
                    <div className="line">
                      <div className="circle">
                        <div className=" before">
                          <div className="content">
                            <ul>
                              <li>2020/2022</li>
                              <li className="text-truncate">
                                Sakarya Üniversitesi
                              </li>
                              <li className="text-truncate">
                                İnternet ve Ağ Teknolojileri
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="circle2 ">
                        <div className=" after">
                          <div className="content">
                            <ul>
                              <li>2020/2023</li>
                              <li className="text-truncate">Sinaps Akademi</li>
                              <li className="text-truncate">
                                Matematik Asistanı
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="circle2 ">
                        <div className=" after">
                          <div className="content">
                            <ul>
                              <li>2020/2023</li>
                              <li className="text-truncate">Sinaps Akademi</li>
                              <li className="text-truncate">
                                Matematik Asistanı
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="circle">
                        <div className=" before">
                          <div className="content">
                            <ul>
                              <li>2020/2022</li>
                              <li className="text-truncate">
                                Sakarya Üniversitesi
                              </li>
                              <li className="text-truncate">
                                İnternet ve Ağ Teknolojileri
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="cv-box cv-padding">
                  <div className="cv-box-header">
                    <span>Aktivite Haritam </span>
                  </div>
                  <hr />
                  <HeatMap
                    value={test}
                    style={{ width: "100%" }}
                    startDate={new Date("2024/01/01")}
                    panelColors={{
                      0: "#EBEDF0",
                      8: "#93f",
                      4: "#b6f",
                      12: "#5c1f99",
                      32: "##361259",
                    }}
                    legendRender={(props: any) => (
                      <rect {...props} y={props.y + 10} rx={5} />
                    )}
                    rectProps={{
                      rx: 5,
                    }}
                    rectRender={(props, data) => {
                      return (
                        <Tooltip
                          placement="top"
                          content={
                            <>
                              <div>
                                İzlenen içerik sayısı: {data.count || 0}
                              </div>
                              <div>{data.date}</div>
                            </>
                          }
                        >
                          <rect {...props} />
                        </Tooltip>
                      );
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfileDetail;
