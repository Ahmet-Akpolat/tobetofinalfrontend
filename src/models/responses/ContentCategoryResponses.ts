import { GUID } from "../abstracts/GuidModel";
import { CreatedResponseModel, GetAllModel, SingleResponseModel, UpdatedResponseModel } from "../abstracts/ResponseAbstracts";


 export interface ContentCategoryResponse extends SingleResponseModel{
   id: GUID | string;
   name:string
}

 export interface GetListContentCategoryResponse extends GetAllModel<ContentCategoryResponse>{
}

 export interface CreatedContentCategoryResponse extends CreatedResponseModel{
   id: GUID | string;
    name:string;
}

 export interface UpdatedContentCategoryResponse extends UpdatedResponseModel{
   id: GUID | string;
   name:string;
}

