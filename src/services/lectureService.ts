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
    const response = await axios.get<LectureResponse>(`${baseURL}Lectures/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  }
}

export default new LectureService();
