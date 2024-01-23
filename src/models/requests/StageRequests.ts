import { CreateRequestModel, UpdateRequestModel } from "../abstracts/ResponseAbstracts";

export interface CreateStageRequest extends CreateRequestModel{
    description:string; 
}

export interface UpdateStageRequest extends UpdateRequestModel{
    description:string;
}


