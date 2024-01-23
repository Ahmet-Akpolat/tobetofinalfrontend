import { CreateRequestModel, UpdateRequestModel } from "../abstracts/ResponseAbstracts";

export interface CreateCertificateRequest extends CreateRequestModel{
    imageUrl: string;
}

export interface UpdateCertificateRequest extends UpdateRequestModel{
    imageUrl: string;
}