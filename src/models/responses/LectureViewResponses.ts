import { SingleResponseModel, GetAllModel, CreatedResponseModel, UpdatedResponseModel } from '../abstracts/ResponseAbstracts';
import { GUID } from '../abstracts/GuidModel';

export interface LectureViewResponse extends SingleResponseModel {
    id : GUID | string;
    studentId: GUID | string;
    lectureId: GUID | string;
    contentId: GUID | string;
}

export interface GetListLectureViewResponse extends GetAllModel<LectureViewResponse> {}

export interface CreatedLectureViewResponse extends CreatedResponseModel {
    id : GUID | string;
    studentId: GUID | string;
    lectureId: GUID | string;
    contentId: GUID | string;
}

export interface UpdatedLectureViewResponse extends UpdatedResponseModel {
    id : GUID | string;
    studentId: GUID | string;
    lectureId: GUID | string;
    contentId: GUID | string;
}