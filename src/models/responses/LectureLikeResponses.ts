import {
  SingleResponseModel,
  GetAllModel,
  CreatedResponseModel,
  UpdatedResponseModel,
} from "../abstracts/ResponseAbstracts";
import { GUID } from "../abstracts/GuidModel";

export interface LectureLikeResponse extends SingleResponseModel {
  id: GUID | string;
  isLiked: boolean;
  studentId: GUID | string;
  lectureId: GUID | string;
}

export interface GetLectureLikeCountResponse extends SingleResponseModel {
  count: number;
}

export interface GetListLectureLikeResponse
  extends GetAllModel<LectureLikeResponse> {}

export interface CreatedLectureLikeResponse extends CreatedResponseModel {
  id: GUID | string;
  isLiked: boolean;
  studentId: GUID | string;
  lectureId: GUID | string;
}

export interface UpdatedLectureLikeResponse extends UpdatedResponseModel {
  id: GUID | string;
  isLiked: boolean;
  studentId: GUID | string;
  lectureId: GUID | string;
}
