import { BaseService } from "./baseService";
import axiosInstance from "../utils/axiosInterceptors";
import {
  AnnouncementResponse,
  CreatedAnnouncementResponse,
  GetListAnnouncementResponse,
  UpdatedAnnouncementResponse,
} from "../models/responses/AnnouncementResponses";
import {
  CreateAnnouncementRequest,
  UpdateAnnouncementRequest,
} from "../models/requests/AnnouncementRequests";

class AnnouncementService extends BaseService<
  GetListAnnouncementResponse,
  AnnouncementResponse,
  CreateAnnouncementRequest,
  CreatedAnnouncementResponse,
  UpdateAnnouncementRequest,
  UpdatedAnnouncementResponse
> {
  constructor() {
    super();
    this.apiUrl = "ClassAnnouncements/getListForLoggedStudent";
  }

  async readTheAnnouncement(announcementId: string) {
    await axiosInstance.post("StudentAnnouncements", {
      announcementId: announcementId,
    });
  }

  async getReadedAnnouncement(pageIndex: number, pageSize: number) {
    return await axiosInstance.get(
      `StudentAnnouncements/getListForLoggedStudent?PageIndex=${pageIndex}&PageSize=${pageSize}`
    );
  }
}

export default new AnnouncementService();
