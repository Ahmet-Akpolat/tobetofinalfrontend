import { CreateRequestModel, UpdateRequestModel } from "../abstracts/ResponseAbstracts";
import { GUID } from "../abstracts/GuidModel";

export interface CreateStudentStageRequest extends CreateRequestModel{
    stageId: GUID | string;
    studentId: GUID | string;
}

export interface UpdateStudentStageRequest extends UpdateRequestModel{
    stageId: GUID | string;
    studentId: GUID | string;
}