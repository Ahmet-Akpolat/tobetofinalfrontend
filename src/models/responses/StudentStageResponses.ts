import { SingleResponseModel, GetAllModel, CreatedResponseModel, UpdatedResponseModel } from '../abstracts/ResponseAbstracts';
import { GUID } from '../abstracts/GuidModel';

export interface StudentStageResponse extends SingleResponseModel {
    id: GUID | string;
    stageId: GUID | string;
    studentId: GUID | string;
    stageDescription: string;
}

export interface GetListStudentStageResponse extends GetAllModel<StudentStageResponse> {}

export interface CreatedStudentStageResponse extends CreatedResponseModel {
    id: GUID | string;
    stageId: GUID | string;
    studentId: GUID | string;
}

export interface UpdatedStudentStageResponse extends UpdatedResponseModel {
    id: GUID | string;
    stageId: GUID | string;
    studentId: GUID | string;
}