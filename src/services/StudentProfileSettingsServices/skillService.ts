import {
  CreateSkillRequest,
  UpdateSkillRequest,
} from "../../models/requests/SkillRequests";
import {
  CreatedSkillResponse,
  GetListSkillResponse,
  SkillResponse,
  UpdatedSkillResponse,
} from "../../models/responses/SkillResponses";
import axiosInstance from "../../utils/axiosInterceptors";
import { BaseService } from "../baseService";

class SkillService extends BaseService<
  GetListSkillResponse,
  SkillResponse,
  CreatedSkillResponse,
  CreateSkillRequest,
  UpdatedSkillResponse,
  UpdateSkillRequest
> {
  constructor() {
    super();
    this.apiUrl = "Skills";
  }

  async getForLoggedStudent() {
    return await axiosInstance.get(
      `StudentSkills/getListForLoggedStudent?PageIndex=0&PageSize=999`
    );
  }

  async deleteStudentSkill(id: any) {
    await axiosInstance.delete(`StudentSkills/${id}`)
  }
}

export default new SkillService();
