import { SingleResponseModel, GetAllModel, CreatedResponseModel, UpdatedResponseModel } from '../abstracts/ResponseAbstracts';
import { GUID } from '../abstracts/GuidModel';

export interface StudentLanguageLevelResponse extends SingleResponseModel {
    id: GUID | string;
    languageId: GUID | string;
    languageLevelId: GUID | string;
    studentId: GUID | string;
    languageLevelName: string;
    languageName: string;
}

export interface GetListStudentLanguageLevelResponse extends GetAllModel<StudentLanguageLevelResponse> {}

export interface CreatedStudentLanguageLevelResponse extends CreatedResponseModel {
    id : GUID | string;
    languageLevelId: GUID | string;
    studentId: GUID | string;
}

export interface UpdatedStudentLanguageLevelResponse extends UpdatedResponseModel {
    id : GUID | string;
    languageLevelId: GUID | string;
    studentId: GUID | string;
}