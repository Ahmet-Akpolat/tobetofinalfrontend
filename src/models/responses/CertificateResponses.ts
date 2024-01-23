import { SingleResponseModel, GetAllModel, CreatedResponseModel, UpdatedResponseModel } from '../abstracts/ResponseAbstracts';
import { GUID } from '../abstracts/GuidModel';

export interface CertificateResponse extends SingleResponseModel {
  id : GUID | string;
  imageUrl: string;
}

export interface GetListCertificateResponse extends GetAllModel<CertificateResponse> {}

export interface CreatedCertificateResponse extends CreatedResponseModel {
  id : GUID | string;
  imageUrl: string;
}

export interface UpdatedCertificateResponse extends UpdatedResponseModel {
  id : GUID | string;
  imageUrl: string;
}