import {
  CreateCertificateRequest,
  UpdateCertificateRequest,
} from "../../models/requests/CertificateRequests";

import {
  CertificateResponse,
  CreatedCertificateResponse,
  GetListCertificateResponse,
  UpdatedCertificateResponse,
} from "../../models/responses/CertificateResponses";

import axiosInstance from "../../utils/axiosInterceptors";
import { BaseService } from "../baseService";

class CertificateService extends BaseService<
  GetListCertificateResponse,
  CertificateResponse,
  CreatedCertificateResponse,
  CreateCertificateRequest,
  UpdatedCertificateResponse,
  UpdateCertificateRequest
> {
  constructor() {
    super();
    this.apiUrl = "StudentPrivateCertificates";
  }

  async getForLoggedStudent() {
    return await axiosInstance.get(
      `StudentPrivateCertificates/GetForLoggedStudent?PageIndex=0&PageSize=999`
    );
  }

  async deleteStudentCertificate(id: any) {
    await axiosInstance.delete(`StudentPrivateCertificates/${id}`);
  }
}

export default new CertificateService();
