import { SingleResponseModel, GetAllModel, CreatedResponseModel, UpdatedResponseModel } from '../abstracts/ResponseAbstracts';
import { GUID } from '../abstracts/GuidModel';

export interface StudentSurveyResponse extends SingleResponseModel {
    id: GUID | string;
    surveyId: GUID | string;
    studentId: GUID | string;
}

export interface GetListStudentSurveyResponse extends GetAllModel<StudentSurveyResponse> {}

export interface CreatedStudentSurveyResponse extends CreatedResponseModel {
    id: GUID | string;
    surveyId: GUID | string;
    studentId: GUID | string;
}

export interface UpdatedStudentSurveyResponse extends UpdatedResponseModel {
    id: GUID | string;
    surveyId: GUID | string;
    studentId: GUID | string;
}