import { CreateRequestModel, UpdateRequestModel } from "../abstracts/ResponseAbstracts";

 export interface CreateSkillRequest extends CreateRequestModel{
    name:string
}

 export interface UpdateSkillRequest extends UpdateRequestModel{
    name:string;
}
