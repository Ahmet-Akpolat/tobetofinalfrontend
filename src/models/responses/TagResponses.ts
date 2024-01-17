import { CreatedResponseModel, GetAllModel, SingleResponseModel, UpdatedResponseModel } from "../abstracts/ResponseAbstracts";
import { GUID } from "../abstracts/GuidModel"

export interface TagResponse extends SingleResponseModel{
   id:GUID;
   name:string
}

export interface GetListTagResponse extends GetAllModel<TagResponse>{
}

 export interface CreatedTagResponse extends CreatedResponseModel{
    id:GUID;
    name:string;
}

 export interface UpdatedTagResponse extends UpdatedResponseModel{
   id:GUID;
   name:string;
}
