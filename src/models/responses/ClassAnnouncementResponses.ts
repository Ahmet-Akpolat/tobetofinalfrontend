import { GUID } from "../abstracts/GuidModel";
import { CreatedResponseModel, GetAllModel, SingleResponseModel, UpdatedResponseModel } from "../abstracts/ResponseAbstracts";


export interface ClassAnnouncementResponse extends SingleResponseModel{
    id: GUID | string;
    announcementName: string;
    announcementDescription: string;
    studentClassName: string;
    announcementCreatedDate: string;
}

export interface GetListClassAnnouncementResponse extends GetAllModel<ClassAnnouncementResponse>{}

export interface CreatedClassAnnouncementResponse extends CreatedResponseModel{
    id: GUID | string;
    announcementId: GUID | string;
    studentClassId: GUID | string;
}

export interface UpdatedClassAnnouncementResponse extends UpdatedResponseModel{
    id: GUID | string;
    announcementId: GUID | string;
    studentClassId: GUID | string;
}
