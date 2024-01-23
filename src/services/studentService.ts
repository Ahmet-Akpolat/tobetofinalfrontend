import { baseURL } from "../environment/environment";
import { CreateStudentRequest, UpdateStudentRequest } from "../models/requests/StudentRequests";
import { CreatedStudentResponse, GetListStudentResponse, StudentResponse, UpdatedStudentResponse } from "./../models/responses/StudentResponses";
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
    super()
    this.apiUrl = baseURL + "Students"
  }
}

export default new StudentService();
