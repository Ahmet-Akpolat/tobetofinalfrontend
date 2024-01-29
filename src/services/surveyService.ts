import { BaseService } from './baseService';
import { CreatedSurveyResponse, GetListSurveyResponse, SurveyResponse, UpdatedSurveyResponse } from '../models/responses/SurveyResponses';
import { CreateSurveyRequest, UpdateSurveyRequest } from '../models/requests/SurveyRequests';

class SurveyService extends BaseService<
  GetListSurveyResponse,
	SurveyResponse,
	CreateSurveyRequest,
	CreatedSurveyResponse,
	UpdateSurveyRequest,
	UpdatedSurveyResponse
> {
  constructor() {
    super()
    this.apiUrl =  "ClassSurveys"
  }
}

export default new SurveyService();
