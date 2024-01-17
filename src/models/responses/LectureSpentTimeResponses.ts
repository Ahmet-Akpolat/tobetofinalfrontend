import { SingleResponseModel, GetAllModel, CreatedResponseModel, UpdatedResponseModel } from '../abstracts/ResponseAbstracts';
import { GUID } from '../abstracts/GuidModel';

export interface LectureSpentTimeResponse extends SingleResponseModel {
    id : GUID | string;
    studentId: GUID | string;
    lectureId: GUID | string;
    spentedTime: number;
}

export interface GetListLectureSpentTimeResponse extends GetAllModel<LectureSpentTimeResponse> {}

export interface CreatedLectureSpentTimeResponse extends CreatedResponseModel {
    id : GUID | string;
    studentId: GUID | string;
    lectureId: GUID | string;
    spentedTime: number;
}

export interface UpdatedLectureSpentTimeResponse extends UpdatedResponseModel {
    id : GUID | string;
    studentId: GUID | string;
    lectureId: GUID | string;
    spentedTime: number;
}