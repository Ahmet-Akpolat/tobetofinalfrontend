import { GUID } from "../abstracts/GuidModel";
import { CreatedResponseModel, GetAllModel, SingleResponseModel, UpdatedResponseModel } from "../abstracts/ResponseAbstracts";

export interface SocialMediaResponse extends SingleResponseModel{
    id: GUID | string;
   name:string;
   logoUrl:string;
}

export interface GetListSocialMediaResponse extends GetAllModel<SocialMediaResponse>{
  
}

export interface CreatedSocialMediaResponse extends CreatedResponseModel{
    id: GUID | string;
    name:string;
    logoUrl:string;

}

export interface UpdatedSocialMediaResponse extends UpdatedResponseModel{
    id: GUID | string;
    name:string
    logoUrl:string;
}

