import { BaseService } from './baseService';
import { AppealResponses, CreatedAppealResponse, GetListAppealResponse, UpdatedAppealResponse } from "../models/responses/AppealResponses"
import { CreateAppealRequest, UpdateAppealRequest } from '../models/requests/AppealRequests';
import axios from 'axios';
import axiosInstance from '../utils/axiosInterceptors';
import { CreatedStudentAnnouncementRequest } from '../models/requests/StudentAnnouncementRequests';

class AppealService extends BaseService<
  GetListAppealResponse,
	AppealResponses,
	CreateAppealRequest,
	CreatedAppealResponse,
	UpdateAppealRequest,
	UpdatedAppealResponse
> {
  constructor() {
    super()
    this.apiUrl = "ClassAnnouncements"
  }
  async readTheAnnouncement(announcementId:string){
    await axiosInstance.post("StudentAnnouncements",{announcementId:announcementId});
  }


}

export default new AppealService();
