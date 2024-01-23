import { GUID } from "../abstracts/GuidModel";
import {  CreatedResponseModel,GetAllModel,SingleResponseModel,UpdatedResponseModel } from "../abstracts/ResponseAbstracts";

export interface CourseContentResponse extends SingleResponseModel {
  id: GUID | string;
  courseId: GUID | string;
  contentId: GUID | string;
}

export interface GetListCourseContentResponse extends GetAllModel<CourseContentResponse> {}

export interface CreatedCourseContentResponse extends CreatedResponseModel {
  id: GUID | string;
  courseId: GUID | string;
  contentId: GUID | string;
}

export interface UpdatedCourseContentResponse extends UpdatedResponseModel {
  id: GUID | string;
  courseId: GUID | string;
  contentId: GUID | string;
}
