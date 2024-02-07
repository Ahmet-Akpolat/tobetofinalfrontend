import { CreateRequestModel, UpdateRequestModel } from "../abstracts/ResponseAbstracts";
import { GUID } from "../abstracts/GuidModel";

export interface CreatedStudentAnnouncementRequest extends CreateRequestModel{
    announcementId: GUID | string;
}

export interface UpdatedStudentAnnouncementRequest extends UpdateRequestModel{
    announcementId: GUID | string;
    studentId: GUID | string;
}