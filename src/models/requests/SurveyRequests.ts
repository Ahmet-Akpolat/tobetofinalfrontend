import { CreateRequestModel, UpdateRequestModel } from "../abstracts/ResponseAbstracts";

export interface CreateSurveyRequest extends CreateRequestModel {
    name: string;
    startDate: Date;
    endDate: Date;
    surveyUrl: string;
    description: string;
}

export interface UpdateSurveyRequest extends UpdateRequestModel {
    name: string;
    startDate: Date;
    endDate: Date;
    surveyUrl: string;
    description: string;
}

