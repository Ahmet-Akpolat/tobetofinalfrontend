import { BaseService } from "./baseService";
import {
  CreatedLectureResponse,
  GetListLectureResponse,
  LectureResponse,
  UpdatedLectureResponse,
} from "../models/responses/LectureResponses";
import axios from "axios";
import {
  CreateLectureRequest,
  UpdateLectureRequest,
} from "../models/requests/LectureRequests";
import {
  GetLectureLikeCountResponse,
  LectureLikeResponse,
} from "../models/responses/LectureLikeResponses";
import axiosInstance from "../utils/axiosInterceptors";

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
}

export default new LectureService();
