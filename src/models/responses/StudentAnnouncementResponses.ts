import { SingleResponseModel, GetAllModel, CreatedResponseModel, UpdatedResponseModel } from '../abstracts/ResponseAbstracts';
import { GUID } from '../abstracts/GuidModel';

export interface StudentAnnouncementResponse extends SingleResponseModel {
    id : GUID | string;
    announcementId: GUID | string;
    studentId: GUID | string;
}

export interface GetListStudentAnnouncementResponse extends GetAllModel<StudentAnnouncementResponse> {}

export interface CreatedStudentAnnouncementResponse extends CreatedResponseModel {
    id : GUID | string;
    announcementId: GUID | string;
    studentId: GUID | string;
}

export interface UpdatedStudentAnnouncementResponse extends UpdatedResponseModel {
    id : GUID | string;
    announcementId: GUID | string;
    studentId: GUID | string;
}