import { SingleResponseModel, GetAllModel, CreatedResponseModel, UpdatedResponseModel } from '../abstracts/ResponseAbstracts';
import { GUID } from '../abstracts/GuidModel';
import { StageResponse } from './StageResponses';

export interface StudentAppealResponse extends SingleResponseModel {
    id: GUID | string;
    studentId: GUID | string;
    appealId: GUID | string;
    appealName: string;
    appealStartTime: string;
    appealEndTime: string;
    stages: StageResponse[];
}

export interface GetListStudentAppealResponse extends GetAllModel<StudentAppealResponse> {}

export interface CreatedStudentAppealResponse extends CreatedResponseModel {
    id: GUID | string;
    studentId: GUID | string;
    appealId: GUID | string;
}

export interface UpdatedStudentAppealResponse extends UpdatedResponseModel {
    id: GUID | string;
    studentId: GUID | string;
    appealId: GUID | string;
}