import { CreateRequestModel, UpdateRequestModel } from "../abstracts/ResponseAbstracts";
import { GUID } from "../abstracts/GuidModel";

export interface CreateContentLikeRequest extends CreateRequestModel{
    isLiked: boolean;
    studentId: GUID | string;
    contentId: GUID | string;
}

export interface UpdateContentLikeRequest extends UpdateRequestModel{
    isLiked: boolean;
    studentId: GUID | string;
    contentId: GUID | string;
}