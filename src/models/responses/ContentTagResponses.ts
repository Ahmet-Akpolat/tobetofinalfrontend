import { GUID } from "../abstracts/GuidModel";
import { CreatedResponseModel, GetAllModel, SingleResponseModel, UpdatedResponseModel } from "../abstracts/ResponseAbstracts";

export interface ContentTagResponse extends SingleResponseModel{
    id: GUID | string;
    contentId:GUID|string;
    tagId:GUID|string
 }
 
  export interface GetListContentTagResponse extends GetAllModel<ContentTagResponse>{
 }
 
  export interface CreatedContentTagResponse extends CreatedResponseModel{
    id: GUID | string;
     contentId:GUID|string;
     tagId:GUID|string
 }
 
  export interface UpdatedContentTagResponse extends UpdatedResponseModel{
    id: GUID | string;
    contentId:GUID|string;
    tagId:GUID|string
 }