import {
  CreateSocialMediaRequest,
  UpdateSocialMediaRequest,
} from "../../models/requests/SocialMediaRequests";
import {
  CreatedSocialMediaResponse,
  GetListSocialMediaResponse,
  SocialMediaResponse,
  UpdatedSocialMediaResponse,
} from "../../models/responses/SocialMediaResponses";
import axiosInstance from "../../utils/axiosInterceptors";
import { BaseService } from "../baseService";
  
  class SocialMediaService extends BaseService<
    GetListSocialMediaResponse,
    SocialMediaResponse,
    CreatedSocialMediaResponse,
    CreateSocialMediaRequest,
    UpdatedSocialMediaResponse,
    UpdateSocialMediaRequest
  > {
    constructor() {
      super();
      this.apiUrl = "SocialMedias";
    }

    async getForLoggedStudent() {
      return await axiosInstance.get(
        `StudentSocialMedias/getListForLoggedStudent?PageIndex=0&PageSize=3`
      );
    }

    async deleteStudentSocialMedias(id: any) {
      await axiosInstance.delete(`StudentSocialMedias/${id}`)
    }
  }
  
  export default new SocialMediaService();
  