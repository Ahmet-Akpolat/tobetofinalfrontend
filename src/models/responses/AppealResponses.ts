import { GUID } from "../abstracts/GuidModel";
import { CreatedResponseModel, GetAllModel, SingleResponseModel, UpdatedResponseModel } from "../abstracts/ResponseAbstracts";

export interface AppealResponses extends SingleResponseModel{
    id: GUID | string;
    name: string;
    startTime: Date;
    endTime: Date;
}

export interface GetListClassTagResponse extends GetAllModel<AppealResponses>{
}

export interface CreatedTagLectureResponse extends CreatedResponseModel{
    id: GUID | string;
    name: string;
    startTime: Date;
    endTime: Date;
}

export interface UpdatedClassTagResponse extends UpdatedResponseModel{
    id: GUID | string;
    name: string;
    startTime: Date;
    endTime: Date;
}
