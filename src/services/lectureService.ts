import { BaseService } from './baseService';
import { AppealResponses, CreatedAppealResponse, GetListAppealResponse, UpdatedAppealResponse } from "../models/responses/AppealResponses"
import { CreateAppealRequest, UpdateAppealRequest } from '../models/requests/AppealRequests';
import { baseURL } from '../environment/environment';

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
    this.apiUrl = baseURL + "ClassLectures"
  }
}

export default new AppealService();
