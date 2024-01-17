import { CreateRequestModel, UpdateRequestModel } from "../abstracts/ResponseAbstracts";
import { GUID } from "../abstracts/GuidModel";

export interface CreateStudentCertificateRequest extends CreateRequestModel{
    studentId: GUID | string;
    certificateId: GUID | string;
}

export interface UpdateStudentCertificateRequest extends UpdateRequestModel{
    studentId: GUID | string;
    certificateId: GUID | string;
}