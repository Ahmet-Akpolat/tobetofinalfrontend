import HeatMap from "@uiw/react-heat-map";
import Tooltip from "@uiw/react-tooltip";
import "chart.js/auto";
import { useEffect, useState } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import languagesService from "../../services/StudentProfileSettingsServices/languagesService";
import lectureService from "../../services/lectureService";
import { selectStudent } from "../../store/slices/studentSlice";
import "./ProfileDetail.css";

const ProfileDetail = () => {
  const activityDatesTemp = [] as any;
  const student = useSelector(selectStudent);
  const [languages, setLanguages] = useState([] as any);
  const [activityDates, setActivityDates] = useState([] as any);
  const [totalContents, setTotalContents] = useState(0);

  const getStudentActivites = async () => {
    const data = await lectureService.getAllLectureViews();
    setTotalContents(data?.data.totalContentCountForClass);
    data?.data.lectureViewCreatedDates.forEach((element: any) => {
      const date = element.substring(0, 10);
      if (activityDatesTemp.some((obj: any) => obj.date == date)) {
        activityDatesTemp[
          activityDatesTemp.findIndex((obj: any) => obj.date === date)
        ].count++;
      } else {
        activityDatesTemp.push({ date: date, count: 1 });
      }
    });
    const sortedActivityDatesTemp = activityDatesTemp.sort((a: any, b: any) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      if (dateA < dateB) {
        return -1;
      }
      if (dateA > dateB) {
        return 1;
      }
      return 0;
    });
    setActivityDates(sortedActivityDatesTemp);
  };

  const getStudentLanguages = async () => {
    const data = (await languagesService.getForLoggedStudent()).data?.items;
    setLanguages(data);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getStudentLanguages();
    getStudentActivites();
  }, []);

  const data = [
    {
      label: "Izlenilen Icerik Sayisi",
      value: activityDates.reduce(
        (accumulator: any, currentValue: any) =>
          accumulator + currentValue.count,
        0
      ),
    },
    { label: "Toplam Icerik Sayisi", value: totalContents },
  ];

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
                        src={`${
                          student.profilePhotoPath
                            ? student.profilePhotoPath
                            : "https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png"
                        }`}
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
                        <span className="skill">{skill.skillName}</span>
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
            </div>
          </div>
          <div className="col-md-8 col-12">
            <div className="row">
              <div className="col-12">
                <div className="cv-box cv-padding">
                  <div className="cv-box-header">
                    <div className="d-flex justify-content-between">
                      <span>Izlenilen Icerik Analizi</span>
                    </div>
                    <hr />
                  </div>
                  <div
                    className="row justify-content-center"
                    style={{ fontWeight: "900" }}
                  >
                    <div
                      className="col-12 col-md-5"
                      style={{ height: "240px" }}
                    >
                      <Doughnut
                        data={{
                          labels: data.map((data) => data.label),
                          datasets: [
                            {
                              data: data.map((data) => data.value),
                              backgroundColor: ["#9933ff", "#cccccc"],
                              borderColor: ["#9933ff", "#cccccc"],
                              borderRadius: 5,
                            },
                          ],
                        }}
                        options={{
                          plugins: {
                            legend: {
                              labels: {
                                font: {
                                  family: "Poppins, sans-serif",
                                  size: 12,
                                },
                                boxWidth: 12,
                                boxHeight: 12,
                                borderRadius: 5,
                              },
                            },
                          },
                        }}
                      />
                    </div>
                    <div
                      className="col-12 col-md-7"
                      style={{ height: "240px" }}
                    >
                      <Bar
                        data={{
                          labels: activityDates.map((data: any) => data.date),
                          datasets: [
                            {
                              label: "Tarihlere Gore Izlenen Icerik",
                              data: activityDates.map(
                                (data: any) => data.count
                              ),
                              backgroundColor: "#9933ff",
                              borderColor: "#9933ff",
                              barThickness: 50,
                            },
                          ],
                        }}
                        options={{
                          indexAxis: "x",
                          elements: {
                            bar: {
                              borderRadius: 10,
                            },
                          },
                          plugins: {
                            legend: {
                              labels: {
                                font: {
                                  family: "Poppins, sans-serif",
                                  size: 12,
                                },
                                boxWidth: 12,
                                boxHeight: 12,
                                borderRadius: 5,
                              },
                            },
                          },
                        }}
                      />
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
                    value={activityDates}
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
                  <div className="cv-social-media gap-3">
                    {student.socialMedias.map((socialMedia: any) => (
                      <Link target="_blank" to={socialMedia.mediaAccountUrl}>
                        <img
                          className="cv-social-media"
                          src={socialMedia.socialMediaLogoUrl}
                        ></img>
                      </Link>
                    ))}
                  </div>
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
