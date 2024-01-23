import { CreatedResponseModel, GetAllModel, SingleResponseModel, UpdatedResponseModel } from "../abstracts/ResponseAbstracts";
import { GUID } from "../abstracts/GuidModel"

 export interface LanguageLevelResponse extends SingleResponseModel{
   id: GUID | string;
   name:string;
   languageName:string;
   languageId:GUID;
}

 export interface GetListLanguageLevelResponse extends GetAllModel<LanguageLevelResponse>{
}

 export interface CreatedLanguageLevelResponse extends CreatedResponseModel{
    id: GUID | string;
    name:string;
    languageId:GUID;
}

 export interface UpdatedLanguageLevelResponse extends UpdatedResponseModel{
   id:GUID|string;
   name:string;
   languageId:GUID;
}
