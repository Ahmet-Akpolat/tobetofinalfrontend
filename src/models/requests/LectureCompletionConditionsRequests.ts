import { CreateRequestModel, UpdateRequestModel } from "../abstracts/ResponseAbstracts";
import { GUID } from "../abstracts/GuidModel";
export interface CreateLectureCompletionConditionRequest extends CreateRequestModel{
    studentId: GUID | string;
    lectureId: GUID | string;
    completionPercentage: number;
}

export interface UpdateLectureCompletionConditionRequest extends UpdateRequestModel{
    studentId: GUID | string;
    lectureId: GUID | string;
    completionPercentage: number;
}