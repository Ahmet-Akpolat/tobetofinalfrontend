import { GUID } from "../abstracts/GuidModel";
import { CreateRequestModel, UpdateRequestModel } from "../abstracts/ResponseAbstracts";

export interface CreateCourseRequest extends CreateRequestModel{
    name:string
}

 export interface UpdateCourseRequest extends UpdateRequestModel{
    name:string
}