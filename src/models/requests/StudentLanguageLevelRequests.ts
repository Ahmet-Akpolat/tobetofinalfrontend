import { CreateRequestModel, UpdateRequestModel } from "../abstracts/ResponseAbstracts";
import { GUID } from "../abstracts/GuidModel";

export interface CreateStudentLanguageLevelRequest extends CreateRequestModel {
    studentId: GUID | string;
    languageLevelId: GUID | string;
}

export interface UpdateStudentLanguageLevelRequest extends UpdateRequestModel {
    studentId: GUID | string;
    languageLevelId: GUID | string;
}