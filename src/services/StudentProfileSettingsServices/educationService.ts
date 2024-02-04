import {
  CreateStudentEducationRequest,
  UpdateStudentEducationRequest,
} from "../../models/requests/StudentEducationRequest";
import {
  CreatedStudentEducationResponse,
  GetListStudentEducationResponse,
  StudentEducationResponse,
  UpdatedStudentEducationResponse,
} from "../../models/responses/StudentEducationResponse";
import axiosInstance from "../../utils/axiosInterceptors";
import { BaseService } from "../baseService";

class EducationService extends BaseService<
  GetListStudentEducationResponse,
  StudentEducationResponse,
  CreatedStudentEducationResponse,
  CreateStudentEducationRequest,
  UpdatedStudentEducationResponse,
  UpdateStudentEducationRequest
> {
  constructor() {
    super();
    this.apiUrl = "StudentEducations";
  }

  async getForLoggedStudent() {
    return await axiosInstance.get(
      `StudentEducations/getListForLoggedStudent?PageIndex=0&PageSize=999`
    );
  }
}

export default new EducationService();
