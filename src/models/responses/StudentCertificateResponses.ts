import { SingleResponseModel, GetAllModel, CreatedResponseModel, UpdatedResponseModel } from '../abstracts/ResponseAbstracts';
import { GUID } from '../abstracts/GuidModel';

export interface StudentCertificateResponse extends SingleResponseModel {
    id: GUID | string;
    studentId: GUID | string;
    certificateId: GUID | string;
    certificateImageUrl: string;
}

export interface GetListStudentCertificateResponse extends GetAllModel<StudentCertificateResponse> {}

export interface CreatedStudentCertificateResponse extends CreatedResponseModel {
    id: GUID | string;
    studentId: GUID | string;
    certificateId: GUID | string;
}

export interface UpdatedStudentCertificateResponse extends UpdatedResponseModel {
    id: GUID | string;
    studentId: GUID | string;
    certificateId: GUID | string;
}