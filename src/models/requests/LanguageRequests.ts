import { CreateRequestModel, UpdateRequestModel } from "../abstracts/ResponseAbstracts";

export interface CreateLanguageRequest extends CreateRequestModel{
    name:string
}

 export interface UpdateLanguageRequest extends UpdateRequestModel{
    name:string;
}
