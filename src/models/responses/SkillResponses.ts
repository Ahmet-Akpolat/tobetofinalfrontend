import { GUID } from "../abstracts/GuidModel";
import { CreatedResponseModel, GetAllModel, SingleResponseModel, UpdatedResponseModel } from "../abstracts/ResponseAbstracts";


 export interface SkillResponse extends SingleResponseModel{
   id: GUID | string;
   name:string
}

 export interface GetListSkillResponse extends GetAllModel<SkillResponse>{
}

 export interface CreatedSkillResponse extends CreatedResponseModel{
   id: GUID | string;
    name:string;
}

 export interface UpdatedSkillResponse extends UpdatedResponseModel{
   id: GUID | string;
   name:string;
}
