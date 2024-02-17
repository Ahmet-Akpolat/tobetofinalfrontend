import { BaseService } from "./baseService";
import axiosInstance from "../utils/axiosInterceptors";
import { GetByIdQuizResponse, GetListQuizListItemDto } from "../models/responses/QuizResponses";
import { AxiosResponse } from "axios";

class QuizService  {

  async GetForAllStudent() {
    const response =await axiosInstance.get<GetListQuizListItemDto>("Quizs/GetListForAllStudent");
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



  
}

export default new QuizService();