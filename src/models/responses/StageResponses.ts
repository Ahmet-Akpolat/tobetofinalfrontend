import { GUID } from "../abstracts/GuidModel";
import { CreatedResponseModel, GetAllModel, SingleResponseModel, UpdatedResponseModel } from "../abstracts/ResponseAbstracts";

export interface StageResponse extends SingleResponseModel{
    id: GUID | string;
   description:string
}

export interface GetListStageResponse extends GetAllModel<StageResponse>{
  
}

export interface CreatedStageResponse extends CreatedResponseModel{
    id: GUID | string;
    description:string

}

export interface UpdatedStageResponse extends UpdatedResponseModel{
    id: GUID | string;
    description:string

}


