import {
  CreateStudentExperienceRequest,
  UpdateStudentExperienceRequest,
} from "../models/requests/StudentExperienceRequests";
import {
  CreatedStudentExperienceResponse,
  GetListStudentExperienceResponse,
  StudentExperienceResponse,
  UpdatedStudentExperienceResponse,
} from "../models/responses/StudentExperienceResponses";
import axiosInstance from "../utils/axiosInterceptors";
import { BaseService } from "./baseService";

class ExperienceService extends BaseService<
  GetListStudentExperienceResponse,
  StudentExperienceResponse,
  CreatedStudentExperienceResponse,
  CreateStudentExperienceRequest,
  UpdatedStudentExperienceResponse,
  UpdateStudentExperienceRequest
> {
  constructor() {
    super();
    this.apiUrl = "StudentExperiences";
  }

  async getForLoggedStudent() {
    return await axiosInstance.get(
      `StudentExperiences/getListForLoggedStudent?PageIndex=0&PageSize=999`
    );
  }
}

export default new ExperienceService();
