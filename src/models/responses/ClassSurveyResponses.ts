import { GUID } from "../abstracts/GuidModel";
import { CreatedResponseModel, GetAllModel, SingleResponseModel, UpdatedResponseModel } from "../abstracts/ResponseAbstracts";


export interface ClassSurveyResponse extends SingleResponseModel{
    id: GUID | string;
    studentClassId: string;
    surveyId: string;
    surveyStartDate: string;
    surveyEndDate: string;
    surveyName: string;
    surveyUrl: string;
    surveyDescription: string;
}

export interface GetListClassSurveyResponse extends GetAllModel<ClassSurveyResponse>{}

export interface CreatedClassSurveyResponse extends CreatedResponseModel{
    id: GUID | string;
    studentClassId: string;
    surveyId: string;
}

export interface UpdatedClassSurveyResponse extends UpdatedResponseModel{
    id: GUID | string;
    studentClassId: string;
    surveyId: string;
}