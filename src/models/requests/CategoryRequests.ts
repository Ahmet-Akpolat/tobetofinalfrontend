import { CreateRequestModel, UpdateRequestModel } from "../abstracts/ResponseAbstracts";

 export interface CreateCategoryRequest extends CreateRequestModel{
    name:string
}

 export interface UpdateCategoryRequest extends UpdateRequestModel{
    name:string;
}