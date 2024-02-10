import { BaseService } from './baseService';
import { CreatedSurveyResponse, GetListSurveyResponse, SurveyResponse, UpdatedSurveyResponse } from '../models/responses/SurveyResponses';
import { CreateSurveyRequest, UpdateSurveyRequest } from '../models/requests/SurveyRequests';
import axiosInstance from '../utils/axiosInterceptors';

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
    this.apiUrl = "ClassSurveys"
  }

  async joinTheSurvey(surveyId: string) {
    await axiosInstance.post("StudentSurveys", {
      surveyId: surveyId,
    });
  }

  async getJoinedSurveys(pageIndex: number, pageSize: number) {
    return await axiosInstance.get(
      `StudentSurveys/ForLoggedStudent?PageIndex=${pageIndex}&PageSize=${pageSize}`
    );
  }

}

export default new SurveyService();
