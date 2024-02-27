import React, { useEffect, useState } from "react";
import "./Comment.css";
import { formatDate } from "../../../../utils/formatDate";
import FormikInput from "../../../FormikInput/FormikInput";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import lectureService from "../../../../services/lectureService";

const Comment = ({
  comment,
  isSubComment,
  setLectureComments,
  setLectureSubComments,
  id,
}: any) => {
  const [showSubComments, setShowSubComments] = useState(false);
  const [subComments, setSubComments] = useState(comment.commentSubComments);
  const [showFullComment, setShowFullComment] = useState(false);

  const initialValues = {
    subComment: null,
    studentLectureCommentId: comment.id,
  };

  const resetValues = {
    subComment: "",
    studentLectureCommentId: comment.id,
  };

  const validationSchema = Yup.object({
    subComment: Yup.string().required("Lütfen bir yorum yazınız."),
  });

  const setSubComment = async (data: any) => {
    await lectureService.setLectureSubComments(data);
    const newSubComments = await lectureService.getLectureCommentById(
      comment.id
    );
    console.log(newSubComments);
    setSubComments(newSubComments.data.commentSubComments);
  };

  const deleteComment = async (id: any) => {
    setLectureComments((prevComments: any) => {
      const updatedComments = [...prevComments];

      const indexToDelete = updatedComments.findIndex(
        (comment: any) => comment.id === id
      );

      if (indexToDelete !== -1) {
        updatedComments.splice(indexToDelete, 1);
      }
      return updatedComments;
    });
    await lectureService.deleteLectureComment(id);
  };

  const deleteSubComment = async (id: any) => {
    setLectureSubComments((prevSubComments: any) => {
      const updatedComments = [...prevSubComments];

      const indexToDelete = updatedComments.findIndex(
        (comment: any) => comment.id === id
      );

      if (indexToDelete !== -1) {
        updatedComments.splice(indexToDelete, 1);
      }
      return updatedComments;
    });
    await lectureService.deleteLectureSubComment(id);
  };

  return (
    <div className="comment-card d-flex flex-column gap-2">
      <div className="d-flex align-items-center justify-content-between">
        <div className="user-infos d-flex gap-2">
          <div className="comment-profile-photo">
            <img src={comment.profilePhotoPath}></img>
          </div>
          <div className="d-flex flex-column">
            <strong>{comment.firstName + " " + comment.lastName}</strong>
            <span>{formatDate(comment.createdDate)}</span>
          </div>
        </div>
        <div className="actions d-flex gap-2 align-items-center">
          {comment.isDeletable && (
            <div
              className="comment-delete-button"
              onClick={() =>
                !isSubComment
                  ? deleteComment(comment.id)
                  : deleteSubComment(comment.id)
              }
            >
              Sil
            </div>
          )}
          {!isSubComment && (
            <div
              className="comment-subcomment-button"
              onClick={() => setShowSubComments(!showSubComments)}
            >
              Yanıtları Gör
            </div>
          )}
        </div>
      </div>
      <div>
        {comment.comment.length > 400 ? (
          !showFullComment ? (
            <>
              <p>{comment.comment.substring(0, 400)}...</p>
              <button
                className="more-button"
                onClick={() => setShowFullComment(true)}
              >
                Devamını oku
              </button>
            </>
          ) : (
            <>
              <p>{comment.comment}</p>
              <button
                className="less-button"
                onClick={() => setShowFullComment(false)}
              >
                Daha az göster
              </button>
            </>
          )
        ) : (
          <p>{comment.comment}</p>
        )}
      </div>
      {showSubComments && !isSubComment && (
        <div className="anim-fadein">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(updatedValues: any, { resetForm }) => {
              setSubComment(updatedValues);
              resetForm({
                values: resetValues,
              });
            }}
          >
            <Form>
              <div className="comment-area col-12 mb-4">
                <FormikInput name="subComment" placeholder="Bir yanıt yazın" />
                <button className="send-button" type="submit"></button>
              </div>
            </Form>
          </Formik>
          <div className="d-flex flex-column gap-2">
            {subComments?.length != 0 &&
              [...subComments].reverse().map((subComment: any) => {
                return (
                  <Comment
                    comment={subComment}
                    isSubComment={true}
                    setLectureSubComments={setSubComments}
                    id={comment.id}
                  />
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Comment;
