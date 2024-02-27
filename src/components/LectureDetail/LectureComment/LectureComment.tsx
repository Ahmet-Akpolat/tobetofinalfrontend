import React, { useEffect, useState } from "react";
import lectureService from "../../../services/lectureService";
import { useSelector } from "react-redux";
import LectureDetail from "../../../pages/LectureDetail/LectureDetail";
import { selectLectureDetail } from "../../../store/slices/lectureDetailSlice";
import NoContent from "../../NoContent/NoContent";
import { ClipLoader } from "react-spinners";
import Comment from "./Comment/Comment";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikInput from "../../FormikInput/FormikInput";

const LectureComment = () => {
  const lecture = useSelector(selectLectureDetail);
  const [pageSize, setPageSize] = useState(0);
  const [lectureComments, setLectureComments] = useState([]) as any;
  const [loading, setLoading] = useState(false);
  const [isSelected, setIsSelected] = useState(0);

  const initialValues = {
    comment: null,
    lectureId: lecture.id,
  };

  const resetValues = {
    comment: "",
    lectureId: lecture.id,
  };

  const validationSchema = Yup.object({
    comment: Yup.string().required("Lütfen bir yorum yazınız."),
  });

  const setComment = async (data: any) => {
    await lectureService.setLectureComments(data);
    getComments(0);
  };

  const getComments = async (pageNumber: any) => {
    setLoading(true);
    const data = await lectureService.getLectureComments(
      lecture.id,
      pageNumber,
      4
    );
    setLectureComments(data.data.items);
    setPageSize(data.data.pages);
    setLoading(false);
  };

  useEffect(() => {
    getComments(0);
  }, []);

  return (
    <div className="lecture-comments-area">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(updatedValues: any, { resetForm }) => {
          setComment(updatedValues);
          resetForm({
            values: resetValues,
          });
        }}
      >
        <Form>
          <div className="comment-area col-12 mb-4">
            <FormikInput name="comment" placeholder="Bir yorum yazın" />
            <button className="send-button" type="submit"></button>
          </div>
        </Form>
      </Formik>
      <div className="d-flex flex-column">
        <div className="list container mt-4">
          {loading ? (
            <label>
              <ClipLoader className="list-loading" color="#9933ff" size={50} />
            </label>
          ) : (
            <div>
              <div className="row list gap-4">
                {lectureComments.map((comment: any) => (
                  <Comment comment={comment} isSubComment={false} setLectureComments={setLectureComments} />
                ))}
              </div>
              <div className="pages-control anim-fadein">
                <ul
                  className="pagination justify-content-center gap-2"
                  role="navigation"
                  aria-label="Pagination"
                >
                  {Array.from(Array(pageSize).keys()).map((page) => (
                    <li
                      className={
                        isSelected == page
                          ? "li-selected page-item selected-hover"
                          : "page-item item-hover"
                      }
                      onClick={() => {
                        setIsSelected(page);
                        getComments(page);
                      }}
                    >
                      <a
                        rel="canonical"
                        role="button"
                        className="page-link"
                        aria-current="page"
                      >
                        {page + 1}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LectureComment;
