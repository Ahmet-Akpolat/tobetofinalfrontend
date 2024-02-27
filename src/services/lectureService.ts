import { AxiosResponse } from "axios";
import {
  CreateLectureRequest,
  UpdateLectureRequest,
} from "../models/requests/LectureRequests";
import { GetContentLikeCountResponse } from "../models/responses/ContentLikeCountRespose";
import { GetByContentIdContentLikeResponse } from "../models/responses/ContentLikeResponse";
import { GetByLoggedStudentCompletionConditionResponse } from "../models/responses/LectureCompletionDetailResponse";
import { LectureLikeResponse } from "../models/responses/LectureLikeResponses";
import {
  CreatedLectureResponse,
  GetListLectureResponse,
  LectureResponse,
  UpdatedLectureResponse,
} from "../models/responses/LectureResponses";
import axiosInstance from "../utils/axiosInterceptors";
import { BaseService } from "./baseService";

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
  async getListForSearch(
    searchedValue: string,
    pageIndex: number,
    pageSize: number
  ) {
    const response = await axiosInstance.get(
      `ClassLectures/GetListForSearch${searchedValue}?PageIndex=${pageIndex}&PageSize=${pageSize}`
    );
    return response.data;
  }

  async getLectureNumberOfLikes(lectureId: string) {
    const response = await axiosInstance.get(
      `LectureLikes/GetCount${lectureId}`
    );
    return response.data;
  }

  async getLectureCompletionDetails(
    lectureId: string
  ): Promise<
    AxiosResponse<GetByLoggedStudentCompletionConditionResponse, any>
  > {
    return await axiosInstance.get<GetByLoggedStudentCompletionConditionResponse>(
      `LectureCompletionConditions/getByLectureId${lectureId}`
    );
  }

  async getAllLectureCompletion(pageIndex: number, pageSize: number) {
    return await axiosInstance.get(
      `LectureCompletionConditions/getListForCompleted?PageIndex=${pageIndex}&PageSize=${pageSize}`
    );
  }

  async getAllLectureContinued(pageIndex: number, pageSize: number) {
    return await axiosInstance.get(
      `LectureCompletionConditions/getListForContinued?PageIndex=${pageIndex}&PageSize=${pageSize}`
    );
  }

  async getContentLikeCount(
    contentId: string
  ): Promise<AxiosResponse<GetContentLikeCountResponse, any>> {
    return await axiosInstance.get<GetContentLikeCountResponse>(
      `ContentLikes/GetCount${contentId}`
    );
  }

  async setContentLiked(contentId: string) {
    await axiosInstance.post(`ContentLikes`, {
      contentId: contentId,
    });
  }

  async getContentLiked(
    contentId: string
  ): Promise<AxiosResponse<GetByContentIdContentLikeResponse, any>> {
    return await axiosInstance.get<GetByContentIdContentLikeResponse>(
      `ContentLikes/getByContentId${contentId}`
    );
  }

  async getAllLectureViews() {
    return await axiosInstance.get(`LectureViews/getAllForLoggedStudent`);
  }

  async getLectureViewCount(lectureId: string, contentId: string) {
    return await axiosInstance.get(
      `LectureViews/getCountWithLectureAndContentId?lectureId=${lectureId}&contentId=${contentId}`
    );
  }

  async getContentsIsWatched(lectureId: string) {
    return await axiosInstance.get(
      `LectureViews/getForLoggedStudent${lectureId}`
    );
  }

  async setContentIsWatched(lectureId: string, contentId: string) {
    await axiosInstance.post(`LectureViews`, {
      lectureId: lectureId,
      contentId: contentId,
    });
  }

  async getLectureComments(
    lectureId: string,
    pageIndex: number,
    pageSize: number
  ) {
    return await axiosInstance.get(
      `StudentLectureComments/GetListByLectureId/${lectureId}?PageIndex=${pageIndex}&PageSize=${pageSize}`
    );
  }

  async getLectureCommentById(lectureId: string) {
    return await axiosInstance.get(
      `StudentLectureComments/${lectureId}`
    );
  }

  async setLectureComments(values: any) {
    await axiosInstance.post(`StudentLectureComments`, values);
  }

  async deleteLectureComment(id: any) {
    await axiosInstance.delete(`StudentLectureComments/${id}`);
  }

  async setLectureSubComments(values: any) {
    await axiosInstance.post(`CommentSubComments`, values);
  }

  async deleteLectureSubComment(id: any) {
    await axiosInstance.delete(`CommentSubComments/${id}`);
  }
}

export default new LectureService();
