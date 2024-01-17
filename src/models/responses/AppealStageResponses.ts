import { GUID } from "../abstracts/GuidModel";
import { CreatedResponseModel, GetAllModel, SingleResponseModel, UpdatedResponseModel } from "../abstracts/ResponseAbstracts";

export interface AppealStageResponse extends SingleResponseModel {
    id: GUID | string;
    appealId: GUID | string;
    stageId: GUID | string;
}
export interface GetListAppealStageResponse extends GetAllModel<AppealStageResponse>{}

export interface CreatedAppealStageResponse  extends CreatedResponseModel {
    id: GUID | string;
    appealId: GUID | string;
    stageId: GUID | string;
}

export interface UpdatedAppealStageResponse extends UpdatedResponseModel {
    id: GUID | string;
    appealId: GUID | string;
    stageId: GUID | string;
}