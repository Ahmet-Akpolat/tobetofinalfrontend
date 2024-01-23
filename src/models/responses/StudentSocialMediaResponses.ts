import { SingleResponseModel, GetAllModel, CreatedResponseModel, UpdatedResponseModel } from '../abstracts/ResponseAbstracts';
import { GUID } from '../abstracts/GuidModel';

export interface StudentSocialMediaResponse extends SingleResponseModel {
    id: GUID | string;
    studentId: GUID | string;
    socialMediaId: GUID | string;
    socialMediaName: string;
    mediaAccountUrl: string;
}

export interface GetListStudentSocialMediaResponse extends GetAllModel<StudentSocialMediaResponse> {}

export interface CreatedStudentSocialMediaResponse extends CreatedResponseModel {
    id: GUID | string;
    studentId: GUID | string;
    socialMediaId: GUID | string;
    mediaAccountUrl: string;
}

export interface UpdatedStudentSocialMediaResponse extends UpdatedResponseModel {
    id: GUID | string;
    studentId: GUID | string;
    socialMediaId: GUID | string;
    mediaAccountUrl: string;
}