import { CreateRequestModel, UpdateRequestModel } from "../abstracts/ResponseAbstracts";

 export interface CreateContentCategoryRequest extends CreateRequestModel{
    name:string
}

 export interface UpdateContentCategoryRequest extends UpdateRequestModel{
    name:string;
}