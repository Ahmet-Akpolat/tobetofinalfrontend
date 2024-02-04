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
import { CreateStudentEducationRequest } from "../models/requests/StudentEducationRequest";
import { CreateStudentSkillRequest } from "../models/requests/StudentSkillRequests";
import { CreateStudentSocialMediaRequest } from "../models/requests/StudentSocialMediaRequests";

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
    await axiosInstance.post("StudentExperiences", data);
  }

  async addStudentEducations(data: CreateStudentEducationRequest) {
    await axiosInstance.post("StudentEducations", data);
  }

  async addStudentSkills(data: CreateStudentSkillRequest) {
    await axiosInstance.post("StudentSkills", data);
  }

  async addStudentSocialMedias(data: CreateStudentSocialMediaRequest) {
    await axiosInstance.post("StudentSocialMedias", data)
  }
}

export default new StudentService();
