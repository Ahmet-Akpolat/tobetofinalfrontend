import { GUID } from "../abstracts/GuidModel";
import { CreatedResponseModel, GetAllModel, SingleResponseModel, UpdatedResponseModel } from "../abstracts/ResponseAbstracts";


 export interface CityResponse extends SingleResponseModel{
   id: GUID | string;
   name:string
}

 export interface GetListCityResponse extends GetAllModel<CityResponse>{
}

 export interface CreatedCityResponse extends CreatedResponseModel{
   id: GUID | string;
    name:string;
}

 export interface UpdatedCityResponse extends UpdatedResponseModel{
   id: GUID | string;
   name:string;
}

