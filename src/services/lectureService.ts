import { BaseService } from "./baseService";
import {
  CreatedLectureResponse,
  GetListLectureResponse,
  LectureResponse,
  UpdatedLectureResponse,
} from "../models/responses/LectureResponses";
import axios, { AxiosPromise, AxiosResponse } from "axios";
import {
  CreateLectureRequest,
  UpdateLectureRequest,
} from "../models/requests/LectureRequests";
import {
  GetLectureLikeCountResponse,
  LectureLikeResponse,
} from "../models/responses/LectureLikeResponses";
import axiosInstance from "../utils/axiosInterceptors";
import { GetByLoggedStudentCompletionConditionResponse } from "../models/responses/LectureCompletionDetailResponse";
import { GetContentLikeCountResponse } from "../models/responses/ContentLikeCountRespose";
import { GetByContentIdContentLikeResponse } from "../models/responses/ContentLikeResponse";

class LectureService extends BaseService<
  GetListLectureResponse,
  LectureResponse,
  CreateLectureRequest,
  CreatedLectureResponse,
  UpdateLectureRequest,
  UpdatedLectureResponse
> {
  constructor() {
    super();
    this.apiUrl = "ClassLectures";
  }

  async getWithDetails(id: string) {
    const response = await axiosInstance.get<LectureResponse>(`Lectures/${id}`);
    return response.data;
  }

  async getLectureLiked(lectureId: string) {
    const response = await axiosInstance.get<LectureLikeResponse>(
      `LectureLikes/getByLectureId${lectureId}`
    );
    return response.data;
  }

  async setLectureLiked(id: string, lectureId: string) {
    await axiosInstance.post(`LectureLikes`, {
      isLiked: true,
      studentId: id,
      lectureId: lectureId,
    });
  }

  async getLectureNumberOfLikes(lectureId: string) {
    const response = await axiosInstance.get(
      `LectureLikes/GetCount${lectureId}`
    );
    return response.data;
  }
  async getLectureCompletionDetails(lectureId:string):Promise<AxiosResponse<GetByLoggedStudentCompletionConditionResponse, any>>{
    return await axiosInstance.get<GetByLoggedStudentCompletionConditionResponse>(`LectureCompletionConditions/getByLectureId${lectureId}`);
  }
  async getContentLikeCount(contentId:string):Promise<AxiosResponse<GetContentLikeCountResponse, any>>{
    return await axiosInstance.get<GetContentLikeCountResponse>(`ContentLikes/GetCount${contentId}`);
  }
  async setContentLiked(contentId: string) {
    await axiosInstance.post(`ContentLikes`, {
      contentId: contentId
    });
  }
 
  async getContentLiked(contentId: string):Promise<AxiosResponse<GetByContentIdContentLikeResponse, any>> {
    return await axiosInstance.get<GetByContentIdContentLikeResponse>(
      `ContentLikes/getByContentId${contentId}`
    );
  }
  
  async getLectureViewCount(lectureId: string,contentId:string) {
    return await axiosInstance.get(
      `LectureViews/getCountWithLectureAndContentId?lectureId=${lectureId}&contentId=${contentId}`
    );
  }

  async getContentsIsWatched(lectureId: string) {
    return await axiosInstance.get(
      `/LectureViews/getForLoggedStudent${lectureId}`
    )
  }

  async setContentIsWatched(lectureId: string, contentId: string) {
    await axiosInstance.post(`/LectureViews`, {
      lectureId: lectureId,
      contentId: contentId,
    });
  }
}

export default new LectureService();
