import { CreateRequestModel, UpdateRequestModel } from "../abstracts/ResponseAbstracts";
import { GUID } from "../abstracts/GuidModel";

export interface CreateStudentLanguageLevelRequest extends CreateRequestModel {
    lectureId : GUID | string;
    studentId: GUID | string;
    comment: string;
}

export interface UpdateStudentLanguageLevelRequest extends UpdateRequestModel {
    lectureId : GUID | string;
    studentId: GUID | string;
    comment: string;
}