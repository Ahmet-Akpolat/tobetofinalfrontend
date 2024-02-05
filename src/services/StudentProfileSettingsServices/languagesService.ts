import {
  CreateLanguageRequest,
  UpdateLanguageRequest,
} from "../../models/requests/LanguageRequests";
import {
  CreatedLanguageResponse,
  GetListLanguageResponse,
  LanguageResponse,
  UpdatedLanguageResponse,
} from "../../models/responses/LanguageResponses";
import axiosInstance from "../../utils/axiosInterceptors";
import { BaseService } from "../baseService";

class LanguageService extends BaseService<
  GetListLanguageResponse,
  LanguageResponse,
  CreatedLanguageResponse,
  CreateLanguageRequest,
  UpdatedLanguageResponse,
  UpdateLanguageRequest
> {
  constructor() {
    super();
    this.apiUrl = "Languages";
  }

  async getForLoggedStudent() {
    return await axiosInstance.get(
      `StudentLanguageLevels/getListForLoggedStudent?PageIndex=0&PageSize=999`
    );
  }
}

export default new LanguageService();
