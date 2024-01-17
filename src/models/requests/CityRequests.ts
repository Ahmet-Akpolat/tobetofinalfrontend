import { CreateRequestModel, UpdateRequestModel } from "../abstracts/ResponseAbstracts";

 export interface CreateCityRequest extends CreateRequestModel{
    name:string
}

 export interface UpdateCityRequest extends UpdateRequestModel{
    name:string;
}