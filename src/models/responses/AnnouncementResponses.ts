import { CreatedResponseModel, GetAllModel, SingleResponseModel, UpdatedResponseModel } from "../abstracts/ResponseAbstracts";
import { GUID } from "../abstracts/GuidModel"

export interface AnnouncementResponse extends SingleResponseModel{
   id: GUID | string;
   name:string;
   description:string;
}

export interface GetListAnnouncementResponse extends GetAllModel<AnnouncementResponse>{}

export interface CreatedAnnouncementResponse extends CreatedResponseModel{
    id: GUID | string;
    name:string;
    description:string;
}

export interface UpdatedAnnouncementResponse extends UpdatedResponseModel{
    id: GUID | string;
    name:string;
    description:string;
}