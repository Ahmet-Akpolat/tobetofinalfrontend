import { CreateRequestModel, UpdateRequestModel } from "../abstracts/ResponseAbstracts";
import { GUID } from "../abstracts/GuidModel";

export interface CreateClassAnnouncementRequest extends CreateRequestModel{
    classId:GUID|string;
    announcementId:GUID|string;
}
export interface UpdateClassAnnouncementRequest extends UpdateRequestModel{
    classId:GUID|string;
    announcementId:GUID|string;
}