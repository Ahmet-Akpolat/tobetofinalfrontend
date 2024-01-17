import { GUID } from "../abstracts/GuidModel"
import { CreateRequestModel, UpdateRequestModel } from "../abstracts/ResponseAbstracts";

 export interface CreateContentRequest extends CreateRequestModel{
    name:string;
    videoUrl:string;
    description:string;
    duration:number;
    contentCategoryId:GUID |string;
    languageId:GUID |string;
    subTypeId:GUID |string;
    manufacturerId:GUID |string;
}

 export interface UpdateContentRequest extends UpdateRequestModel{
    name:string;
    videoUrl:string;
    description:string;
    duration:number;
    contentCategoryId:GUID |string;
    languageId:GUID |string;
    subTypeId:GUID |string;
    manufacturerId:GUID |string;
}