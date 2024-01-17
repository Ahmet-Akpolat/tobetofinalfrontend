import { CreateRequestModel, UpdateRequestModel } from "../abstracts/ResponseAbstracts";
import { GUID } from "../abstracts/GuidModel";

export interface CreateContentTagRequest extends CreateRequestModel{
    contentId:GUID|string;
    tagId:GUID|string
}

 export interface UpdateContentTagRequest extends UpdateRequestModel{
    contentId:GUID|string;
    tagId:GUID|string
}