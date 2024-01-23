import { CreateRequestModel, UpdateRequestModel } from "../abstracts/ResponseAbstracts";
import { GUID } from "../abstracts/GuidModel";

export interface CreateStudentExamRequest extends CreateRequestModel{
    examId: GUID | string;
    studentId: GUID | string;
}

export interface UpdateStudentExamRequest extends UpdateRequestModel{
    examId: GUID | string;
    studentId: GUID | string;
}