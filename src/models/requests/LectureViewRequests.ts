import { GUID } from "../abstracts/GuidModel";
import { CreateRequestModel, UpdateRequestModel } from "../abstracts/ResponseAbstracts";

export interface CreateLectureViewRequest extends CreateRequestModel {
    studentId: GUID | string;
    lectureId: GUID | string;
    contentId: GUID | string;
}

export interface UpdateLectureViewRequest extends UpdateRequestModel {
    studentId: GUID | string;
    lectureId: GUID | string;
    contentId: GUID | string;
}