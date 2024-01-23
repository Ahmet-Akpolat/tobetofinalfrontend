import { CreateRequestModel, UpdateRequestModel } from "../abstracts/ResponseAbstracts";
import { GUID } from "../abstracts/GuidModel"

export interface CreateClassSurveyRequest extends CreateRequestModel{
    classId:GUID|string;
    surveyId:GUID|string;
}
export interface UpdateClassSurveyRequest extends UpdateRequestModel{
    classId:GUID|string;
    surveyId:GUID|string;
}