import { SingleResponseModel, GetAllModel, CreatedResponseModel, UpdatedResponseModel } from '../abstracts/ResponseAbstracts';
import { GUID } from '../abstracts/GuidModel';

export interface LectureFavouriteResponse extends SingleResponseModel {
  id : GUID | string;
  isFavourited: boolean;
  studentId: GUID | string;
  lectureId: GUID | string;
}

export interface GetListLectureFavouriteResponse extends GetAllModel<LectureFavouriteResponse> {}

export interface CreatedLectureFavouriteResponse extends CreatedResponseModel {
  id : GUID | string;
  isFavourited: boolean;
  studentId: GUID | string;
  lectureId: GUID | string;
}

export interface UpdatedLectureFavouriteResponse extends UpdatedResponseModel {
  id : GUID | string;
  isFavourited: boolean;
  studentId: GUID | string;
  lectureId: GUID | string;
}
