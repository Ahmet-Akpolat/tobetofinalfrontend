import { CreateRequestModel, UpdateRequestModel } from "../abstracts/ResponseAbstracts";
import { GUID } from "../abstracts/GuidModel";

export interface CreateStudentClassStudentRequest extends CreateRequestModel{
    studentId: GUID | string;
    studentClassId: GUID | string;
}

export interface UpdateStudentClassStudentRequest extends UpdateRequestModel{
    studentId: GUID | string;
    studentClassId: GUID | string;
}