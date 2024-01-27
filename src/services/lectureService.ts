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

  async getWithDetails(id: string, token: any) {
    const response = await axios.get<LectureResponse>(
      `${baseURL}Lectures/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  }

  async getLectureLiked(lectureId: string, token: any) {
    const response = await axios.get<LectureLikeResponse>(
      `${baseURL}LectureLikes/getByLectureId${lectureId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  }

  async setLectureLiked(id: string, lectureId: string, token: any) {
    await axios.post(
      `${baseURL}LectureLikes`,
      {
        isLiked: true,
        studentId: id,
        lectureId: lectureId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }
}

export default new LectureService();
