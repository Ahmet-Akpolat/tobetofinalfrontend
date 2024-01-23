import { CreateRequestModel, UpdateRequestModel } from "../abstracts/ResponseAbstracts";
import { GUID } from "../abstracts/GuidModel";

export interface CreateStudentSocialMediaRequest extends CreateRequestModel {
    studentId: GUID | string;
    socialMediaId: GUID | string;
    mediaAccountUrl: string;
}

export interface UpdateStudentSocialMediaRequest extends UpdateRequestModel {
    studentId: GUID | string;
    socialMediaId: GUID | string;
    mediaAccountUrl: string;
}