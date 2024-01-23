import { CreateRequestModel, UpdateRequestModel } from "../abstracts/ResponseAbstracts";
import { GUID } from "../abstracts/GuidModel";

export interface CreateAppealStageRequest extends CreateRequestModel{
    appealId: GUID | string;
    stageId: GUID | string;
}

export interface UpdateAppealStageRequest extends UpdateRequestModel{
    appealId: GUID | string;
    stageId: GUID | string;
}