import { CreateRequestModel, UpdateRequestModel } from "../abstracts/ResponseAbstracts";

export interface CreateSocialMediaRequest extends CreateRequestModel{
    name:string; 
    logoUrl:string; 
}

export interface UpdateSocialMediaRequest extends UpdateRequestModel{
    name:string;
    logoUrl:string
}
