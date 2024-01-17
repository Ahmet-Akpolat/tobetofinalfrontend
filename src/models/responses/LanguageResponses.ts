import { GUID } from "../abstracts/GuidModel";
import { CreatedResponseModel, GetAllModel, SingleResponseModel, UpdatedResponseModel } from "../abstracts/ResponseAbstracts";


 export interface LanguageResponse extends SingleResponseModel{
   id: GUID | string;
   name:string
}

 export interface GetListLanguageResponse extends GetAllModel<LanguageResponse>{
}

 export interface CreatedLanguageResponse extends CreatedResponseModel{
    id: GUID | string;
    name:string;
}

 export interface UpdatedLanguageResponse extends UpdatedResponseModel{
   id: GUID | string;
   name:string;
}
