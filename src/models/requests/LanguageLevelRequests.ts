import { GUID } from "../abstracts/GuidModel";
import { CreateRequestModel, UpdateRequestModel } from "../abstracts/ResponseAbstracts";

 export interface CreateLanguageLevelRequest extends CreateRequestModel{
    name:string;
    languageId:GUID |string;
}

 export interface UpdateLanguageLevelRequest extends UpdateRequestModel{
    name:string;
    languageId:GUID|string;
}