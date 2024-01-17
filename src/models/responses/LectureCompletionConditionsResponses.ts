import { SingleResponseModel, GetAllModel, CreatedResponseModel, UpdatedResponseModel } from '../abstracts/ResponseAbstracts';
import { GUID } from '../abstracts/GuidModel';

export interface LectureCompletionConditionResponse extends SingleResponseModel {
    id : GUID | string;
    studentId: GUID | string;
    lectureId: GUID | string;
    completionPercentage: number;
}

export interface GetListLectureCompletionConditionResponse extends GetAllModel<LectureCompletionConditionResponse> {}

export interface CreatedLectureCompletionConditionResponse extends CreatedResponseModel {
    id : GUID | string;
    studentId: GUID | string;
    lectureId: GUID | string;
    completionPercentage: number;
}

export interface UpdatedLectureCompletionConditionResponse extends UpdatedResponseModel {
    id : GUID | string;
    studentId: GUID | string;
    lectureId: GUID | string;
    completionPercentage: number;
}