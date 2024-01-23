import { CreateRequestModel, UpdateRequestModel } from "../abstracts/ResponseAbstracts";
import { GUID } from "../abstracts/GuidModel";

export interface CreateStudentSurveyRequest extends CreateRequestModel  {
    surveyId: GUID | string;
    studentId: GUID | string;
}

export interface UpdateStudentSurveyRequest extends UpdateRequestModel  {
    surveyId: GUID | string;
    studentId: GUID | string;
}