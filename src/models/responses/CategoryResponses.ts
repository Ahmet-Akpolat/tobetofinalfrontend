import { GUID } from "../abstracts/GuidModel";
import { CreatedResponseModel, GetAllModel, SingleResponseModel, UpdatedResponseModel } from "../abstracts/ResponseAbstracts";


 export interface CategoryResponse extends SingleResponseModel{
   id: GUID | string;
   name:string
}

 export interface GetListCategoryResponse extends GetAllModel<CategoryResponse>{}

 export interface CreatedCategoryResponse extends CreatedResponseModel{
   id: GUID | string;
    name:string;
}

 export interface UpdatedCategoryResponse extends UpdatedResponseModel{
   id: GUID | string;
   name:string;
}

