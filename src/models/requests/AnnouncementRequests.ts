import { CreateRequestModel, UpdateRequestModel } from "../abstracts/ResponseAbstracts";

 export interface CreateAnnouncementRequest extends CreateRequestModel{
    name:string;
    description:string;
}

 export interface UpdateAnnouncementRequest extends UpdateRequestModel{
    name:string;
    description:string;
}
