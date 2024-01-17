import { GUID } from "../abstracts/GuidModel";
import { CreatedResponseModel, GetAllModel, SingleResponseModel, UpdatedResponseModel } from "../abstracts/ResponseAbstracts";


 export interface SubTypeResponse extends SingleResponseModel{
   id: GUID | string;
   name:string
}

 export interface GetListSubTypeResponse extends GetAllModel<SubTypeResponse>{
}

 export interface CreatedSubTypeResponse extends CreatedResponseModel{
   id: GUID | string;
    name:string;
}

 export interface UpdatedSubTypeResponse extends UpdatedResponseModel{
   id: GUID | string;
   name:string;
}



