import { CreateRequestModel, UpdateRequestModel } from "../abstracts/ResponseAbstracts";

export interface CreateExamRequest extends CreateRequestModel{
    name:string; 
    isActive:boolean;
    examUrl:string;
}

export interface UpdateExamRequest extends UpdateRequestModel{
    name:string; 
    isActive:boolean;
    examUrl:string;
}

