import { BaseService } from "./baseService";
import { baseURL } from "../environment/environment";
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
import { LectureLikeResponse } from "../models/responses/LectureLikeResponses";
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
    this.apiUrl = baseURL + "ClassLectures";
  }

  async getWithDetails(id: string) {
    const response = await axiosInstance.get<LectureResponse>(
      `${baseURL}Lectures/${id}`
    );
    return response.data;
  }

  async getLectureLiked(lectureId: string) {
    const response = await axiosInstance.get<LectureLikeResponse>(
      `${baseURL}LectureLikes/getByLectureId${lectureId}`
    );
    return response.data;
  }

  async setLectureLiked(id: string, lectureId: string) {
    await axios.post(
      `${baseURL}LectureLikes`,
      {
        isLiked: true,
        studentId: id,
        lectureId: lectureId,
      }
    );
  }
}

export default new LectureService();
