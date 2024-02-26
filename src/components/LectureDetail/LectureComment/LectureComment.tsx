import React, { useEffect } from "react";
import lectureService from "../../../services/lectureService";
import { useSelector } from "react-redux";
import LectureDetail from "../../../pages/LectureDetail/LectureDetail";
import { selectLectureDetail } from "../../../store/slices/lectureDetailSlice";

const LectureComment = () => {
  const lecture = useSelector(selectLectureDetail);

  const fetchComments = async () => {
    const comments = await lectureService.getLectureComments(lecture.id, 0, 12);
    return comments;
  };

  useEffect(() => {
    const getComments = async () => {
      const comments = await fetchComments();
      console.log(comments);
    };
    getComments();
  });

  return <div></div>;
};

export default LectureComment;
