import { CreateRequestModel, UpdateRequestModel } from "../abstracts/ResponseAbstracts";

 export interface CreateSubTypeRequest extends CreateRequestModel{
    name:string
}

 export interface UpdateSubTypeRequest extends UpdateRequestModel{
    name:string;
}
