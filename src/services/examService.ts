import { BaseService } from "./baseService";
import {
  CreatedExamResponse,
  ExamResponse,
  GetListExamResponse,
  UpdatedExamResponse,
} from "../models/responses/ExamResponses";
import {
  CreateExamRequest,
  UpdateExamRequest,
} from "../models/requests/ExamRequests";
import axiosInstance from "../utils/axiosInterceptors";

class ExamService extends BaseService<
  GetListExamResponse,
  ExamResponse,
  CreateExamRequest,
  CreatedExamResponse,
  UpdateExamRequest,
  UpdatedExamResponse
> {
  constructor() {
    super();
    this.apiUrl = "ClassExams";
  }

  async joinTheExam(examId: string) {
    await axiosInstance.post("StudentExams", {
      examId: examId,
    });
  }

  async getJoinedExams() {
    return await axiosInstance.get(
      "StudentExams/GetForLoggedStudent?PageIndex=0&PageSize=999"
    );
  }
}

export default new ExamService();
