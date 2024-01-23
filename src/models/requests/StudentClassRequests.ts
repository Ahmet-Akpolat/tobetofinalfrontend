import { CreateRequestModel, UpdateRequestModel } from "../abstracts/ResponseAbstracts";

export interface CreateStudentClassRequest extends CreateRequestModel{
    name:string
}
export interface UpdateStudentClassRequest extends UpdateRequestModel{
    name:string
}