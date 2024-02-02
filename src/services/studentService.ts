import {
  CreateStudentRequest,
  UpdateStudentRequest,
} from "../models/requests/StudentRequests";
import {
  CreatedStudentResponse,
  GetListStudentResponse,
  StudentResponse,
  UpdatedStudentResponse,
} from "./../models/responses/StudentResponses";
import { BaseService } from "./baseService";
import { CreateStudentExperienceRequest } from "../models/requests/StudentExperienceRequests";
import axiosInstance from "../utils/axiosInterceptors";

class StudentService extends BaseService<
  GetListStudentResponse,
  StudentResponse,
  CreateStudentRequest,
  CreatedStudentResponse,
  UpdateStudentRequest,
  UpdatedStudentResponse
> {
  constructor() {
    super();
    this.apiUrl = "Students";
  }

  async addStudentExperiences(data: CreateStudentExperienceRequest) {
    console.log(data);
    await axiosInstance.post("StudentExperiences", data);
  }
}

export default new StudentService();
