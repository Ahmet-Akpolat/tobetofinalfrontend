import { BaseService } from "./baseService";
import axiosInstance from "../utils/axiosInterceptors";
import { GetByIdQuizResponse, GetListQuizListItemDto } from "../models/responses/QuizResponses";
import { AxiosResponse } from "axios";
import { CreateStudentQuizOptionRequest } from "../models/requests/StudentQuizOptionRequest";
import { CreateStudentQuizResultRequest } from "../models/requests/StudentQuizResultRequests";

class QuizService  {

  async GetForAllStudent() {
    const response =await axiosInstance.get("GeneralQuizs"+"?PageIndex="+0+"&PageSize="+5);
    return response.data;
  }  
  async GetForClassStudent() {
    const response =await axiosInstance.get("ClassQuizs"+"?PageIndex="+0+"&PageSize="+100);
    return response.data;
  }  
  async getById(id: number) {
    const response = await axiosInstance.get<GetByIdQuizResponse>(
      `Quizs/${id}`
    );
    return response; 
  }
  async getQuizSessionById(id: number) {
    const response = await axiosInstance.get<any>(
      `Quizs/quizSession/${id}`
    );
    return response; 
  }
  async addQuizOption(request: CreateStudentQuizOptionRequest) {
    return axiosInstance.post("StudentQuizOptions", request);
  }
  async addQuizResultTable(request: CreateStudentQuizResultRequest) {
    return axiosInstance.post("StudentQuizResults", request);
  }
  async getByQuizId(quizId: number) {
    const response = await axiosInstance.get(
      `StudentQuizResults/${quizId}`
    );
    return response.data; // Directly returning the data part of the response
  }

  
}

export default new QuizService();