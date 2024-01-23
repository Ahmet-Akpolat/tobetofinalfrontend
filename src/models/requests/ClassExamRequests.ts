import { CreateRequestModel, UpdateRequestModel } from "../abstracts/ResponseAbstracts";
import { GUID } from "../abstracts/GuidModel";

export interface CreateClassExamRequest extends CreateRequestModel{
    examId: GUID|string;
    studentClassId: GUID|string;
}

export interface UpdateClassExamRequest extends UpdateRequestModel{
    examId: GUID|string;
    studentClassId: GUID|string;
}