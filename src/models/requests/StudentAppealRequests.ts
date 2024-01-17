import { CreateRequestModel, UpdateRequestModel } from "../abstracts/ResponseAbstracts";
import { GUID } from "../abstracts/GuidModel";

export interface CreateStudentAppealRequest extends CreateRequestModel{
    studentId:  GUID | string 
    appealId:  GUID | string 
}

export interface UpdateStudentAppealRequest extends UpdateRequestModel{
    studentId:  GUID | string 
    appealId:  GUID | string 
}
