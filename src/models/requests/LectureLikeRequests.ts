import { CreateRequestModel, UpdateRequestModel } from "../abstracts/ResponseAbstracts";
import { GUID } from "../abstracts/GuidModel";

export interface CreateLectureLikeRequest extends CreateRequestModel{
    isLiked: boolean;
    studentId: GUID | string;
    lectureId: GUID | string;
}

export interface UpdateLectureLikeRequest extends UpdateRequestModel{
    isLiked: boolean;
    studentId: GUID | string;
    lectureId: GUID | string;
}