import { BaseService } from './baseService';
import { AppealResponses, CreatedAppealResponse, GetListAppealResponse, UpdatedAppealResponse } from "../models/responses/AppealResponses"
import { CreateAppealRequest, UpdateAppealRequest } from '../models/requests/AppealRequests';

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
    this.apiUrl = "StudentAppeals"
  }
}

export default new AppealService();
