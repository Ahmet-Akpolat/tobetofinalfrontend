import { GUID } from "../abstracts/GuidModel";
import { CreatedResponseModel, GetAllModel, SingleResponseModel, UpdatedResponseModel } from "../abstracts/ResponseAbstracts";

export interface AppealResponses extends SingleResponseModel{
    id: GUID | string;
    name: string;
    startTime: Date;
    endTime: Date;
}

export interface GetListAppealResponse extends GetAllModel<AppealResponses>{
}

export interface CreatedAppealResponse extends CreatedResponseModel{
    id: GUID | string;
    name: string;
    startTime: Date;
    endTime: Date;
}

export interface UpdatedAppealResponse extends UpdatedResponseModel{
    id: GUID | string;
    name: string;
    startTime: Date;
    endTime: Date;
}
