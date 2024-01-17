import { CreatedResponseModel, GetAllModel, SingleResponseModel, UpdatedResponseModel } from "../abstracts/ResponseAbstracts";
import { GUID } from "../abstracts/GuidModel"

 export interface DistrictResponse extends SingleResponseModel{
   id: GUID | string;
   name:string;
   cityName:string;
   cityId:GUID;
}

 export interface GetListDistrictResponse extends GetAllModel<DistrictResponse>{
}

 export interface CreatedDistrictResponse extends CreatedResponseModel{
    id: GUID | string;
    name:string;
    cityId:GUID;
}

 export interface UpdatedDistrictResponse extends UpdatedResponseModel{
   id: GUID | string;
   name:string;
   cityId:GUID;
}
