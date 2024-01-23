import { SingleResponseModel, GetAllModel, CreatedResponseModel, UpdatedResponseModel } from '../abstracts/ResponseAbstracts';
import { GUID } from '../abstracts/GuidModel';

export interface ContentLikeResponse extends SingleResponseModel {
    id : GUID | string;
    isLiked: boolean;
    studentId: GUID | string;
    contentId: GUID | string;
}

export interface GetListContentLikeResponse extends GetAllModel<ContentLikeResponse> {}

export interface CreatedContentLikeResponse extends CreatedResponseModel {
    id : GUID | string;
    isLiked: boolean;
    studentId: GUID | string;
    contentId: GUID | string;
}

export interface UpdatedContentLikeResponse extends UpdatedResponseModel {
    id : GUID | string;
    isLiked: boolean;
    studentId: GUID | string;
    contentId: GUID | string;
}