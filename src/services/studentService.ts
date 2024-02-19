import { CreateStudentEducationRequest } from "../models/requests/StudentEducationRequest";
import { CreateStudentExperienceRequest } from "../models/requests/StudentExperienceRequests";
import { CreateStudentLanguageLevelRequest } from "../models/requests/StudentLanguageLevelRequests";
import {
  CreateStudentRequest,
  UpdateStudentRequest,
} from "../models/requests/StudentRequests";
import { CreateStudentSkillRequest } from "../models/requests/StudentSkillRequests";
import { CreateStudentSocialMediaRequest } from "../models/requests/StudentSocialMediaRequests";
import axiosInstance from "../utils/axiosInterceptors";
import {
  CreatedStudentResponse,
  GetListStudentResponse,
  StudentResponse,
  UpdatedStudentResponse,
} from "./../models/responses/StudentResponses";
import { BaseService } from "./baseService";

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
    await axiosInstance.post("StudentSocialMedias", data);
  }

  async addStudentLanguages(data: CreateStudentLanguageLevelRequest) {
    await axiosInstance.post("StudentLanguageLevels", data);
  }

  async getStudentAllData() {
    return await axiosInstance.get("StudentClasses/GetListForLoggedStudent");
  }
}

export default new StudentService();
