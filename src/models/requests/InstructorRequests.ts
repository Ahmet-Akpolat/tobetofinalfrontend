import { CreateRequestModel, UpdateRequestModel } from "../abstracts/ResponseAbstracts";

export interface CreateInstructorRequest extends CreateRequestModel{
    firstName:string;
    lastName:string;
}

 export interface UpdateInstructorRequest extends UpdateRequestModel{
    firstName:string;
    lastName:string;
}
