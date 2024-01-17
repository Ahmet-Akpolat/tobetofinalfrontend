import { CreateRequestModel, UpdateRequestModel } from "../abstracts/ResponseAbstracts";

export interface CreateManufacturerRequest extends CreateRequestModel{
    name:string;
}

export interface UpdateManufacturerRequest extends CreateRequestModel{
    name:string;
}